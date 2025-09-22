import IcAddUserLight from "../../assets/icon/IcAddUserLight";
import IcProtectionLight from "../../assets/icon/IcProtectionLight";
import type { CustomerCard } from "../../core/interfaces/customerCard.interface";

const CustomerCard: React.FC<CustomerCard> = (props) => {
  const { isChecked, onChange, title, description, whoUser } = props;
  return (
    <div className="p-4 pb-10 w-64 h-[212px] rounded-3xl shadow-[0px_1px_24px_0px_#AEACF340] mx-auto mb-8">
      <div className="text-right">
        <input
          onChange={() => onChange(whoUser)}
          type="checkbox"
          name="whoUser"
          checked={isChecked}
          className="w-6 h-6 rounded-full border border-black appearance-none accent-[#389E0D] checked:appearance-auto checked:clip-path-[circle(50%_at_50%_50%)]"
        />
      </div>
      <div className="mb-2">
        {whoUser === "meUser" ? <IcProtectionLight /> : <IcAddUserLight />}
      </div>
      <h4 className="text-xl leading-7 tracking-[-0.2px] font-semibold mb-2">
        {title}
      </h4>
      <p className="text-xs leading-5 tracking-[0.2px] font-normal">
        {description}
      </p>
    </div>
  );
};

export default CustomerCard;
