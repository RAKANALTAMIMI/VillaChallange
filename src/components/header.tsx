import './header.css';
import { checkToken } from '../utility/Auth';

type Props = {
  onLogout?: () => void;
};

const Header = ({ onLogout }: Props) => {
  const token = sessionStorage.getItem('token');
  const tokenData = token ? checkToken(token) : null;
  const userEmail = tokenData?.email || 'Guest';

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };


  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="header-title">Villa Challange</h1>
        </div>

        <nav className="header-nav">
          <a href="#" className="nav-link active">Dashboard</a>
          <a href="#" className="nav-link">Wallet</a>
          <a href="#" className="nav-link">Profile</a>
        </nav>

        <div className="header-right">
          <div className="user-info">
            <span className="user-email">{userEmail}</span>
          </div>

          {onLogout && (
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
