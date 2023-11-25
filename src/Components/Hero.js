import { Image, Box, Text, Link } from '@chakra-ui/react';
import restaurantImage from '../restaurant.jpg';

function Hero() {
  return (
    <section>
      <Box p={4} >
        <Box flexShrink={0} mb="2rem">
          <Image
            maxH={350}
            maxW={650}
            m="auto"
            w='100%'
            borderRadius="lg"
            src={restaurantImage}
            alt="image of restaurant"
          />
        </Box>
        <Box >
          <Text
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="2xl"
            letterSpacing="wide"
            color="teal.600"
            mb="2rem"
          >
            Table Reservations
          </Text>
          <Link
            textAlign="center"
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Reserve your Table
          </Link>
          <Text mt={2} color="gray.500" textAlign="center">
            Here you can enter the number of eaters, chose your time and date.
          </Text>
        </Box>
      </Box>
    </section>
  );

}

export default Hero;
