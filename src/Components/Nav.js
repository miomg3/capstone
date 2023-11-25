import { Link } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <nav>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<FontAwesomeIcon icon={faBars} />}
          variant='unstyled'
        />
        <MenuList>
          <MenuItem>
            <li><Link to="/" className="nav-item">Home</Link></li>
          </MenuItem>
          <MenuItem>
            <li><Link to="/about" className="nav-item">About</Link></li>
          </MenuItem>
          <MenuItem>
            <li><Link to="/menu" className="nav-item">Menu</Link></li>
          </MenuItem>
          <MenuItem>
            <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
          </MenuItem>
          <MenuItem>
            <li><Link to="/order-online" className="nav-item">Order online</Link></li>
          </MenuItem>
          <MenuItem>
            <li><Link to="/login" className="nav-item">Login</Link></li>
          </MenuItem>
        </MenuList>
      </Menu>

    </nav>
  );
}

export default Nav;
