import logo from '../../assets/stackline_logo.svg';
import './HeaderBar.css';

const HeaderBar = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" width={150} height={60} />
    </div>
  );
};

export default HeaderBar;
