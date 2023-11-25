import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

function ReserveTableForm({ isLoading, formik, onSubmit }) {
  return (
    <VStack m="2rem 2rem" alignItems="flex-start">
      <Box p={6} rounded="md" w="100%">
        <form onSubmit={onSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={!!formik.touched.firstName && !!formik.errors.firstName}>
              <FormLabel htmlFor="firstName">Name*</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                {...formik.getFieldProps('firstName')}
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!formik.touched.email && !!formik.errors.email}>
              <FormLabel htmlFor="email">Email Address*</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps('email')}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!formik.touched.date && !!formik.errors.date}>
              <FormLabel htmlFor="date">Choose your Date and time*</FormLabel>
              <Input
                id="date"
                name="date"
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                {...formik.getFieldProps('date')}
              />
              <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="personNumber">How many Persons</FormLabel>
              <NumberInput step={1} defaultValue={1} min={1} max={50}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="type">Type of table</FormLabel>
              <Select id="type" name="type" {...formik.getFieldProps('type')}>
                <option value="hireMe">lounge</option>
                <option value="openSource">
                  inside
                </option>
                <option value="other">outside</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="comment">You can leave special wishes here</FormLabel>
              <Textarea
                id="comment"
                name="comment"
                height={150}
                {...formik.getFieldProps('comment')}
              />
              <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
            </FormControl>
            <Button isLoading={isLoading} type="submit" colorScheme="purple" width="full">
              Book your table
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
}

export default ReserveTableForm;