import { Box, Flex } from '@chakra-ui/react';
import Logo from '../icons/Logo.svg';

const Footer = () => {
  return (
    <Box >
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          justifyContent="space-around"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <img src={Logo} alt="logo of little lemon" />
          <p>Copyright Little Lemon 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
