const Button = ({
  bgColor,
  textColor,
  label,
}: {
  bgColor: string;
  textColor: string;
  label: string;
}) => {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} border border-white py-2 px-6 rounded-3xl font-bold hover:bg-white hover:text-black duration-300`}
    >
      {label}
    </button>
  );
};

export default Button;
