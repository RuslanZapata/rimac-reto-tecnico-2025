import BackIcon from "../../assets/icon/BackIcon";
import PlanCard from "../../components/PlanCard";
import CustomerCard from "../../components/CustomerCard";
import { useCallback, useState } from "react";
// import { getPlansServiceApi } from "../../core/service/plans";
import { useNavigate } from "react-router";
import type { DataPlan } from "../../core/interfaces/plan.interface";
import { useFetchPlans } from "../../core/hook/usePlans";
import { useStore } from "../../core/store/store";
import CustomerCardSkeleton from "../../components/skeleton/CustomerCardSkeleton";
import PlanCardSkeleton from "../../components/skeleton/PlanCardSkeleton";

const PlanSelection = () => {
  const { addPlan } = useStore();
  const navigate = useNavigate();
  const [forWhom, setForWhom] = useState("");
  const { data, isLoading } = useFetchPlans();

  console.log("data", data);

  const userMy = [
    {
      title: "Para mi",
      description:
        "Realiza una cotización para uno de tus familiares o cualquier persona.",
      whoUser: "meUser",
    },
    {
      title: "Para alguien más",
      description:
        "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
      whoUser: "heUser",
    },
  ];

  const onChangeCustomerCard = useCallback(
    (whoUser: string) => {
      if (forWhom === whoUser) {
        setForWhom("");
      } else {
        setForWhom(whoUser);
      }
    },
    [forWhom, setForWhom]
  );

  const handlenClick = useCallback(() => {
    navigate("/resumen", { state: { back: "/" } });
  }, [navigate]);

  const onChangePlan = useCallback(
    (plan: DataPlan) => {
      addPlan({
        ...plan,
        user: forWhom === "meUser" ? "meUser" : "heUser",
        price:
          forWhom === "meUser" ? plan.price : (plan.price as number) * 0.95,
      });
      handlenClick();
    },
    [forWhom, addPlan, handlenClick]
  );

  return (
    <div className="w-full px-[216px] py-16 pb-28 flex-1 max-md:px-6 max-md:py-8 max-md:pb-5">
      <a
        className="flex mb-8 font-semibold text-lg tracking-[0.4px] leading-5 text-[#4F4FFF] cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <span className="mr-2">
          <BackIcon />
        </span>{" "}
        Volver
      </a>
      <div className="text-center w-full max-w-[544px] mx-auto mb-8">
        <h2 className="text-[40px] leading-12 tracking-[-0.6px] font-semibold mb-2 max-md:text-[32px]">
          Rocío ¿Para quién deseas cotizar?
        </h2>
        <p className="text-base leading-7 tracking-[0.1px] font-normal">
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
      </div>

      <div className="max-w-[544px] w-full flex justify-between mx-auto flex-wrap">
        {isLoading ? (
          // Mostrar skeletons mientras carga
          <>
            <CustomerCardSkeleton />
            <CustomerCardSkeleton />
          </>
        ) : (
          // Mostrar tarjetas reales cuando termina de cargar
          userMy.map((item, index) => (
            <CustomerCard
              onChange={onChangeCustomerCard}
              key={index}
              title={item.title}
              description={item.description}
              whoUser={item.whoUser}
              isChecked={forWhom === item.whoUser}
            />
          ))
        )}
      </div>
      {forWhom && (
        <div className="max-w-[928px] w-full flex justify-around mx-auto flex-wrap">
          {isLoading ? (
            // Skeleton para planes (si los datos de planes también están cargando)
            <>
              <PlanCardSkeleton />
              <PlanCardSkeleton />
              <PlanCardSkeleton />
            </>
          ) : (
            data?.map((plan, index) => (
              <PlanCard
                forWhom={forWhom}
                key={index}
                onChangePlan={onChangePlan}
                plan={plan}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default PlanSelection;
