import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';
import ReserveTableForm from 'Components/ReserveTableForm';

const BookingPage = () => {
  const { isLoading, response, submit } = useSubmit();

  const { onOpen } = useAlertContext();

  useEffect(() => {
    console.log(response);
    if (response) {
      onOpen(response.type, response.message);
    }
  }, [response]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
      date: '',
    },
    onSubmit: (values, { resetForm }) => { submit('', values), resetForm(); },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      date: Yup.string().required('Required'),
    }),
  });

  return (
    <ReserveTableForm isLoading={isLoading} formik={formik} onSubmit={formik.handleSubmit} />
  );
};

export default BookingPage;
