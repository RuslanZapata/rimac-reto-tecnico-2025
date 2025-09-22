import BackIcon from "../../assets/icon/BackIcon";
import SummaryCard from "../../components/SummaryCard";
import { useNavigate } from "react-router";

const Summary = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-[216px] py-16 pb-28 h-[632px] flex-1 max-md:px-6 max-md:py-8 max-md:pb-5">
      <a
        className="flex mb-8 font-semibold text-lg tracking-[0.4px] leading-5 text-[#4F4FFF] cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <span className="mr-2">
          <BackIcon />
        </span>{" "}
        Volver
      </a>
      <h2 className="text-[40px] leading-12 tracking-[-0.6px] font-semibold mb-12 max-md:text-[32px]">
        Resumen del seguro
      </h2>
      <SummaryCard />
    </div>
  );
};

export default Summary;
