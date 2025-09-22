import Rimac from "../../assets/icon/Rimac";
import GlTelephoneSolid from "../../assets/icon/GlTelephoneSolid";

const Header = () => {
  return (
    <header className="w-full py-[2px]">
      <div className="flex max-w-[1280px] mx-auto px-[120px] justify-between items-center max-md:px-6">
        <Rimac />
        <div className="flex py-5 items-center gap-4">
          <span className="text-[#03050F] text-right text-xs font-semibold leading-4 tracking-[0.2px] max-md:hidden">
            ¡Compra por este medio!
          </span>
          <GlTelephoneSolid />
          <p className="text-[#03050F] text-right text-lg font-bold leading-5 tracking-[0.4px]">
            (01) 411 6001
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
