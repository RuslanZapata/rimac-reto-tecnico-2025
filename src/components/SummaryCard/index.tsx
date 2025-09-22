import IcFamily from "../../assets/icon/IcFamily";
import { useFetchUsers } from "../../core/hook/useUsers";
import { useStore } from "../../core/store/store";
import SummaryCardSkeleton from "../skeleton/SummaryCardSkeleton";

const SummaryCard = () => {
  const { data: dataUser } = useFetchUsers();

  const { plan: dataPlan, user: dataCustomer } = useStore();

  console.log(dataCustomer);

  if (!dataUser)
    return (
      <SummaryCardSkeleton />
    );
  return (
    <div className="p-8 w-full rounded-3xl shadow-[0px_1px_24px_0px_#AEACF340]">
      <div className="mb-2 pb-2 border-b border-[#d7dbf5]">
        <p className="font-semibold text-[10px] leading-4 tracking-[0.8px] mb-2">
          PRECIOS CALCULADOS PARA:
        </p>
        <p className="h-7 leading-7 tracking-[-0.2px] text-xl font-semibold flex items-center">
          <span className="mr-2">
            <IcFamily />
          </span>{" "}
          {dataUser?.name} {dataUser?.lastName}
        </p>
      </div>

      <div className="mb-4">
        <p className="font-semibold text-base leading-6 tracking-[0.2px]">
          Responsable de pago
        </p>
        <p className="font-normal text-sm leading-6 tracking-[0.1px]">
          {dataCustomer?.typeDocument === "1" ? "DNI" : "Carne"}:{" "}
          {dataCustomer?.documentNumber}
        </p>
        <p className="font-normal text-sm leading-6 tracking-[0.1px]">
          Celular: {dataCustomer?.phone}
        </p>
      </div>
      <div>
        <p className="font-semibold text-base leading-6 tracking-[0.2px]">
          Plan elegido
        </p>
        <p className="font-normal text-sm leading-6 tracking-[0.1px]">
          {dataPlan?.name}
        </p>
        <p className="font-normal text-sm leading-6 tracking-[0.1px]">
          Costo del Plan: ${dataPlan?.price} al mes
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
