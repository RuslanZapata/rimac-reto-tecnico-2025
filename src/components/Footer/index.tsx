import Rimac from "../../assets/icon/Rimac";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-[#03050F]">
      <div className="flex max-w-[1280px] mx-auto px-[120px] justify-between items-center max-md:px-6">
        <Rimac />
        <p className="text-sm font-normal leading-4 text-[#F8F9FF]">
          © 2023 RIMAC Seguros y Reaseguros.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
