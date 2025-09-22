import IcHomeLight from "../../assets/icon/IcHomeLight";
import IcHospitalLight from "../../assets/icon/IcHospitalLight";
import type { PlanCard } from "../../core/interfaces/planCard.interface";

const PlanCard: React.FC<PlanCard> = (props) => {
  const { plan, forWhom, onChangePlan } = props;
  return (
    <div className="h-[687px] w-72 p-10 pb-12 shadow-[0px_1px_24px_0px_#AEACF340] rounded-3xl mb-8">
      <p
        className={`${
          plan.name === "Plan en Casa y Clínica"
            ? "inline-block h-5 text-xs font-semibold leading-4 tracking-[0.4px] py-0.5 px-2 rounded-md bg-gradient-to-r from-[#00F4E2] to-[#00FF7F] mb-2"
            : "hidden"
        }`}
      >
        {plan.name === "Plan en Casa y Clínica" ? "Plan recomendado" : ""}
      </p>
      <div className="flex justify-between pb-6 mb-6 border-b border-[#D7DBF5]">
        <div className="w-38">
          <h4 className="text-2xl leading-8 tracking-[-0.2px] font-semibold mb-6 h-16">
            {plan.name}
          </h4>
          <p className="text-xs leading-4 tracking-[0.6px] font-semibold text-[#7981B2]">
            COSTO DEl PLAN.
          </p>
          <p className="text-xl leading-7 tracking-[-0.2px] font-semibold">
            ${forWhom === "meUser" ? plan.price : (plan.price as number) * 0.95}{" "}
            al mes
          </p>
        </div>
        {plan.name === "Plan en Casa y Clínica" ? (
          <IcHospitalLight />
        ) : (
          <IcHomeLight />
        )}
      </div>
      <ul className="h-[313px] mb-6 pl-6">
        {plan.description &&
          plan.description.map((description, index: number) => {
            return (
              <li
                key={index}
                className="text-base leading-7 tracking-[0.1px] font-normal mb-6 list-disc list-outside"
              >
                {description}
              </li>
            );
          })}
      </ul>
      <button
        onClick={() => onChangePlan(plan)}
        className="w-56 h-12 rounded-[32px] py-3.5 px-8 bg-[#FF1C44] font-semibold text-lg leading-5 tracking-[0.4px] text-center text-white"
      >
        Seleccionar Plan
      </button>
    </div>
  );
};

export default PlanCard;
