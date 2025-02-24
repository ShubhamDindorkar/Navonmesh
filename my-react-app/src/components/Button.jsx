import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-transform duration-300 ease-in-out rounded-full bg-gradient-to-r from-[#FFB347] to-[#FFCC33] hover:from-[#FFD700] hover:to-[#FFF8DC] ${
    px || "px-7"
  } text-black ${className || ""}`;
  const spanClasses = "relative z-10 text-lg font-syne";

  const renderButton = () => (
    <button className={`${classes} border-2 border-black`} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={`${classes} border-2 border-black`}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
