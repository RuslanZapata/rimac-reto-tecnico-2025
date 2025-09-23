import { useForm } from "react-hook-form";
import { Opciones } from "../../core/interfaces/typeDocument.interface";
import { useStore } from "../../core/store/store";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import family from "../../assets/img/family.png";

interface FormData {
  typeDocument: string;
  documentNumber: string;
  phone: string;
  PrivacyPolicy: boolean;
  CommercialCommunicationsPolicy: boolean;
}

const ContactForm = () => {
  const navigate = useNavigate();
  const { user, addUser } = useStore();
  console.log("user from store", user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      typeDocument: "1",
      documentNumber: "",
      phone: "",
      PrivacyPolicy: false,
      CommercialCommunicationsPolicy: false,
    },
  });

  const selectedDocumentType = watch("typeDocument");

  const getDocumentValidation = () => {
    const baseValidation = {
      required: "El número de documento es requerido",
      pattern: {
        value: /^[0-9]+$/,
        message: "Solo se permiten números",
      },
    };

    switch (selectedDocumentType) {
      case "1": // DNI
        return {
          ...baseValidation,
          minLength: {
            value: 8,
            message: "El DNI debe tener exactamente 8 dígitos",
          },
          maxLength: {
            value: 8,
            message: "El DNI debe tener exactamente 8 dígitos",
          },
        };
      case "2": // Carnet de Extranjería
        return {
          ...baseValidation,
          minLength: {
            value: 8,
            message:
              "El Carnet de Extranjería debe tener entre 8 y 16 caracteres",
          },
          maxLength: {
            value: 16,
            message:
              "El Carnet de Extranjería debe tener entre 8 y 16 caracteres",
          },
        };
      default:
        return {
          ...baseValidation,
          minLength: {
            value: 8,
            message: "El documento debe tener al menos 8 caracteres",
          },
          maxLength: {
            value: 16,
            message: "El documento no puede tener más de 16 caracteres",
          },
        };
    }
  };

  const getPlaceholder = () => {
    switch (selectedDocumentType) {
      case "1":
        return "Ingrese su DNI (8 dígitos)";
      case "2":
        return "Ingrese su Carnet de Extranjería";
      default:
        return "Ingrese su número de documento";
    }
  };
  const opciones: Opciones[] = [
    { label: "DNI", value: "1" },
    { label: "Carnet de Extranjería", value: "2" },
  ];

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    addUser(data);
    navigate("/seleccion-plan", { state: { back: "/" } });
  };

  useEffect(() => {
    if (user) {
      console.log("Prellenando formulario con:", user);

      setValue("typeDocument", user.typeDocument || "1");
      setValue("documentNumber", user.documentNumber || "");
      setValue("phone", user.phone || "");
      setValue("PrivacyPolicy", user.PrivacyPolicy || false);
      setValue(
        "CommercialCommunicationsPolicy",
        user.CommercialCommunicationsPolicy || false
      );
    }
  }, [user, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start gap-6 max-md:gap-4 w-[352px] h-full justify-start max-md:w-full max-md:max-w-[320px]"
    >
      <div className="flex gap-4 items-center max-md:flex-row">
        <div className="flex flex-col gap-4 flex-1">
          <p className="text-[#03050F] text-sm font-bold leading-4 tracking-[0.4px] py-1 px-2 items-center gap-1 rounded bg-gradient-to-r from-[#00F4E2] to-[#00FF7F] w-fit">
            Seguro Salud Flexible
          </p>
          <h3 className="text-[#03050F] text-[32px] font-bold leading-10 max-md:text-[28px]">
            Creado para ti y tu familia
          </h3>
        </div>
        <img
          className="w-[120px] h-[160px] object-cover rounded-[20px] hidden max-md:block flex-shrink-0"
          src={family}
          alt=""
        />
      </div>
      <p className="text-[#03050F] text-sm font-semibold leading-5 tracking-[0.2px]">
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>

      <div className="w-full flex">
        {/* Select Type */}
        <div className={`h-14 max-w-[400px] relative overflow-hidden w-1/2`}>
          <select
            className={`w-full h-14 bg-transparent pt-5 px-4 pb-1 outline-none text-base m-0 border border-[#c7c7c7] ${
              errors.typeDocument ? "border-red-500" : ""
            } rounded-tl-lg rounded-bl-lg`}
            id="typeDocument"
            {...register("typeDocument", {
              required: "Debe seleccionar un tipo de documento",
            })}
          >
            {opciones.map((item: Opciones) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <label className="w-full h-full absolute bottom-0 left-0 pointer-events-none pl-4 pt-1 text-xs">
            Tipo de documento
          </label>
          {errors.typeDocument && (
            <span className="text-[8px] p-1 text-red-500 block">
              {errors.typeDocument.message}
            </span>
          )}
        </div>
        {/* Document Number */}
        <div
          className={`min-h-14 max-w-[400px] relative overflow-hidden w-1/2`}
        >
          <input
            className={`w-full h-14 bg-transparent pt-5 px-4 pb-1 outline-none text-base m-0 border border-[#c7c7c7] ${
              errors.documentNumber ? "border-red-500" : ""
            } rounded-tr-lg rounded-br-lg`}
            placeholder={getPlaceholder()}
            id="documentNumber"
            {...register("documentNumber", getDocumentValidation())}
          />
          <label className="w-full h-full absolute bottom-0 left-0 pointer-events-none pl-4 pt-1 text-xs">
            Nro. de documento
          </label>
          {errors.documentNumber && (
            <span className="text-[10px] p-1 text-red-500 block">
              {errors.documentNumber.message}
            </span>
          )}
        </div>
      </div>
      {/* Document Phone */}
      <div className={`w-full min-h-14 max-w-[400px] relative overflow-hidden`}>
        <input
          className={`w-full h-14 bg-transparent pt-5 px-4 pb-1 outline-none text-base m-0 border border-[#c7c7c7] ${
            errors.phone ? "border-red-500" : ""
          } rounded-lg`}
          placeholder="Ingrese su número de celular"
          id="phone"
          {...register("phone", {
            required: "El número de celular es requerido",
            pattern: {
              value: /^9[0-9]{8}$/,
              message: "El celular debe empezar con 9 y tener 9 dígitos",
            },
            minLength: {
              value: 9,
              message: "El celular debe tener 9 dígitos",
            },
            maxLength: {
              value: 9,
              message: "El celular debe tener 9 dígitos",
            },
          })}
        />
        <label className="w-full h-full absolute bottom-0 left-0 pointer-events-none pl-4 pt-1 text-xs">
          Nro. de celular
        </label>
        {errors.phone && (
          <span className="text-[10px] p-1 text-red-500 block">
            {errors.phone.message}
          </span>
        )}
      </div>
      {/* Checkbox 1 - Política de Privacidad */}
      <div className=" w-[351px] items-center gap-3">
        <label
          className="text-[#0A051E] flex text-xs font-normal leading-5 tracking-[0.1px]"
          htmlFor="PrivacyPolicy"
        >
          <input
            {...register("PrivacyPolicy", {
              required: "Debe aceptar la Política de Privacidad",
            })}
            className="mr-3 w-5 h-5 accent-[#0A051E] rounded-[25%] border border-black appearance-none checked:appearance-auto checked:clip-path-[circle(60%)]"
            type="checkbox"
            name="PrivacyPolicy"
            id="PrivacyPolicy"
          />
          Acepto lo Política de Privacidad
        </label>
        {errors.PrivacyPolicy && (
          <span className="text-[10px] text-red-500">
            {errors.PrivacyPolicy.message}
          </span>
        )}
      </div>
      {/* Checkbox 2 - Comunicaciones Comerciales */}
      <div className=" w-[351px] items-center gap-3">
        <label
          className="text-[#0A051E] flex text-xs font-normal leading-5 tracking-[0.1px]"
          htmlFor="CommercialCommunicationsPolicy"
        >
          <input
            {...register("CommercialCommunicationsPolicy", {
              required:
                "Debe aceptar la Política de Comunicaciones Comerciales",
            })}
            className="mr-3 w-5 h-5 accent-[#0A051E] rounded-[25%] border border-black appearance-none checked:appearance-auto checked:clip-path-[circle(60%)]"
            type="checkbox"
            name="CommercialCommunicationsPolicy"
            id="CommercialCommunicationsPolicy"
          />
          Acepto la Política Comunicaciones Comerciales
        </label>
        {errors.CommercialCommunicationsPolicy && (
          <span className="text-[10px] text-red-500">
            {errors.CommercialCommunicationsPolicy.message}
          </span>
        )}
      </div>

      <a className="text-[#03050F] text-xs font-semibold leading-5 tracking-[0.1px] underline">
        Aplican Términos y Condiciones.
      </a>
      <button
        type="submit"
        className="flex py-5 px-10 justify-center items-center gap-2 rounded-[40px] bg-[#03050F] text-white text-center text-xl font-bold leading-6 tracking-[0.4px] max-md:w-full"
      >
        Cotiza aquí
      </button>
    </form>
  );
};

export default ContactForm;
