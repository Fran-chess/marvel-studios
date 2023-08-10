import logoImg from "../assets/images/Marvel_Logo.png";

const Logo = () => {
  return (
    <div>
      <a href="/index.html" >
        <img src={logoImg} alt="Logo-Marvel"
        className="w-36 h-16 lg:w-64  " />
      </a>
    </div>
  );
};

export default Logo;
