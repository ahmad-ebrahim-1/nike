const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2
    ${label ? `px-7 py-4` : `p-4`} border font-montserrat text-lg leading-none

    ${
      backgroundColor
        ? `${backgroundColor} ${borderColor} ${textColor} hover:bg-coral-red hover:text-white hover:border-transparent`
        : `bg-coral-red text-white border-coral-red hover:btn-shadow`
    }
    rounded-full ${fullWidth && `w-full`}
     transition-all
    `}
    >
      {label && label}
      {iconURL && (
        <img
          src={iconURL}
          alt="Arrow right icon"
          className={`${label ? `ml-2 w-5 h-5` : `w-full h-full`} rounded-full`}
        />
      )}
    </button>
  );
};

export default Button;
