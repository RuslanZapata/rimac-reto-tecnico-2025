import BackIcon from "../../assets/icon/BackIcon";
import SummaryCard from "../../components/SummaryCard";
import { useNavigate } from "react-router";

const Summary = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex-1">
      <div className="bg-[#EDEFFC] h-14 flex items-center justify-center text-base gap-4 max-sm:hidden">
        <span className="text-[#7981B2] border border-[#7981B2] rounded-full py-1 px-3">
          1
        </span>
        <span className="text-[#7981B2]">Planes y coberturas</span>
        <span className="text-[#7981B2]">- - - - -</span>
        <span className="bg-[#4F4FFF] rounded-[50px] py-1 px-3 text-white font-normal flex items-center">
          2
        </span>
        <span className="font-semibold">Resumen</span>
      </div>
      <div className="w-full max-w-[1280px] mx-auto px-8 lg:px-20 xl:px-32 py-16 pb-28 max-md:px-6 max-md:py-8 max-md:pb-5">
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
    </div>
  );
};

export default Summary;
