import Nav from './Nav';
import Logo from '../../src/icons/Logo.svg';

function HeaderComponent() {
  return (
    <header>
      <img src={Logo} alt="logo of little lemon" />
      <Nav />
    </header>
  );
}

export default HeaderComponent;
