type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text = "Click Me", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-[340px] h-[40px] rounded-[4px] px-[20px] py-[10px] bg-[#FFCE22] active:bg-[#FFD84D]"
    >
      {text}
    </button>
  );
};

export default Button;
