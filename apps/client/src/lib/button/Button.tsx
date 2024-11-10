type ButtonProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
