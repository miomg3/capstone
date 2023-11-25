import { fireEvent, render, screen } from '@testing-library/react';
import ReserveTableForm from './Components/ReserveTableForm';
import userEvent from '@testing-library/user-event';

describe('Feedback Form', () => {
  test('renders form elements correctly', () => {
    const onSubmitMock = jest.fn();
    const getFieldPropsMock = jest.fn().mockReturnValue({
      value: '',
      onChange: () => { },
      onBlur: () => { },
    });

    render(<ReserveTableForm isLoading={false} formik={{ touched: {}, errors: {}, getFieldProps: getFieldPropsMock }} onSubmit={onSubmitMock} />);

    // Ensure all form elements are rendered
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose your Date and time/i)).toBeInTheDocument();
    expect(screen.getByText(/How many Persons/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Type of table/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/You can leave special wishes here/i)).toBeInTheDocument();
    expect(screen.getByText(/Book your table/i)).toBeInTheDocument();
  });

  test('renders form elements and fires booking button', () => {
    const onSubmitMock = jest.fn();
    const getFieldPropsMock = jest.fn().mockReturnValue({
      value: '',
      onChange: () => { },
      onBlur: () => { },
    });

    render(<ReserveTableForm isLoading={false} formik={{ touched: {}, errors: {}, getFieldProps: getFieldPropsMock }} onSubmit={onSubmitMock} />);

    userEvent.type(screen.getByLabelText(/Name/i), 'John Doe');
    userEvent.type(screen.getByLabelText(/Email Address/i), 'john@example.com');
    userEvent.type(screen.getByLabelText(/Choose your Date and time/i), '2023-01-01T12:00');
    userEvent.selectOptions(screen.getByLabelText(/Type of table/i), 'lounge');
    userEvent.type(screen.getByLabelText(/You can leave special wishes here/i), 'Special request');
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Book your table/i));
  });

});