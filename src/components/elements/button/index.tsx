interface ButtonProps {
  type?: "button" | "submit";
  bgColor: string;
  textColor: string;
  label: string;
  onClick?: () => void;
}
const Button = ({ type, bgColor, textColor, label, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-${bgColor} text-${textColor} border border-white py-2 px-6 rounded-3xl font-bold hover:bg-white hover:text-black duration-300 active:bg-slate-500 active:text-white`}
    >
      {label}
    </button>
  );
};

export default Button;
