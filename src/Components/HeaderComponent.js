import Nav from './Nav';
import Logo from '../icons/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function HeaderComponent() {
  return (
    <header>
      <Nav />
      <img src={Logo} alt="logo of little lemon" />
      <FontAwesomeIcon icon={faCartShopping} />
    </header>
  );
}

export default HeaderComponent;
