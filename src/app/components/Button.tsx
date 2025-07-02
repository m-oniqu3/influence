type Props = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
};

function Button(props: Props) {
  const { label, onClick, disabled, className, type = "button" } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
