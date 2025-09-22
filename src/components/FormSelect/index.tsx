import type {
  FormInput,
  Opciones,
} from "../../core/interfaces/formSelect.interface";

const FormSelect: React.FC<FormInput> = (props) => {
  const {
    onChange,
    name,
    errorMessage,
    defaultValue,
    label,
    opciones,
    selectorWidth = false,
    className
  } = props;

  return (
    <div
      className={`w-full h-14 max-w-[400px] relative overflow-hidden ${
        selectorWidth ? "w-1/2" : ""
      }`}
    >
      <select
        onChange={onChange}
        className={`w-full h-14 bg-transparent pt-5 px-4 pb-1 outline-none text-base m-0 border border-[#c7c7c7] invalid:border-red-500 invalid:focus:border-red-500 ${className}`}
        defaultValue={defaultValue}
        name={name}
      >
        {opciones.map((item: Opciones) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      <label className="w-full h-full absolute bottom-0 left-0 pointer-events-none pl-4 pt-1 text-xs">
        {label}
      </label>
      <span className="text-xs p-1 text-red-500 hidden invalid:block">
        {errorMessage}
      </span>
    </div>
  );
};

export default FormSelect;
