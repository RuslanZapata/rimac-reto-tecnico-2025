import { useState } from "react";
import type { FormInput } from "../../core/interfaces/formInput.interface";

const FormInput: React.FC<FormInput> = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    label,
    onChange,
    errorMessage,
    entranceWidth = false,
    className,
    ...inputProps
  } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div
      className={`w-full min-h-14 max-w-[400px] relative overflow-hidden ${
        entranceWidth ? "w-1/2" : ""
      }`}
    >
      <input
        className={`w-full h-14 bg-transparent pt-5 px-4 pb-1 outline-none text-base m-0 border border-[#c7c7c7] ${className}`}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        data-focused={() => focused.toString()}
      />
      <label className="w-full h-full absolute bottom-0 left-0 pointer-events-none pl-4 pt-1 text-xs">
        {label}
      </label>
      <span className="text-xs p-1 text-red-500 hidden invalid:block">
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
