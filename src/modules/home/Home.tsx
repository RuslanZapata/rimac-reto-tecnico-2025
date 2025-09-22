import family from "../../assets/img/family.png";
import ContactForm from "../../components/ContactForm";

const Home = () => {
  return (
    <div className="w-full flex-1 pt-8">
      <div className="flex max-w-[1280px] mx-auto px-[120px] justify-center gap-20 items-start max-xl:px-16 max-lg:px-8 max-xl:gap-12 max-md:px-6 max-sm:px-4 max-md:flex-col max-md:gap-8 max-md:items-center">
        <div className="flex items-center justify-center h-[stretch] max-md:hidden">
          <img
            className="w-[480px] h-[590px] object-cover rounded-[50px] max-lg:w-[400px] max-lg:h-[490px]"
            src={family}
            alt=""
          />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
