import Logo from "../../../../assets/image/svg/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img src={Logo} alt="React Logo" className="header-content-logo" />
        <span className="header-content-name">Fatk1d's Weather</span>
      </div>
    </div>
  );
};

export default Header;
