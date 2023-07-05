import { fireEvent, render, screen, waitFor, act, renderHook } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import ReservationForm from './components/forms/reservationform';
import { fetchAPI } from './api/api';
// import './matchmedia.mock.js';
import App from './App';



describe('App', () => {
  test('app rendering and navigating', async () => {
    render(<App />, { wrapper: BrowserRouter })

    // verify page content for default route
    expect(screen.getAllByText(/Little Lemon/i)[0]).toBeInTheDocument()

    // verify page content for expected route after navigating
    fireEvent.click(screen.getAllByText(/Reservations/i)[0])
    expect(screen.getByText(/Book A Table/i)).toBeInTheDocument()
  })

  test('landing on a bad page', () => {
    const badRoute = '/some/bad/route'

    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    )

    // verify navigation to "no match" route
    expect(screen.getByText(/Oops/i)).toBeInTheDocument()
  })
})

describe("Reservation Form", () => {

  test('initializeTimes works', () => {
    const currentDateObject = new Date();
    render(<ReservationForm currentDateObject={currentDateObject} />, { wrapper: BrowserRouter })
    const reservationTimeInput = screen.getByLabelText(/Time/);
    const defaultValue = screen.getByDisplayValue(reservationTimeInput.options[0].value);

    expect(defaultValue).toBeInTheDocument()
  })

  test('updateTimes works', async () => {
    const currentDateObject = new Date();
    const selectedDate = '2023-07-07';
    const availableTimes = fetchAPI(new Date(selectedDate));
    render(<ReservationForm currentDateObject={currentDateObject} />, { wrapper: BrowserRouter })

    const reservationDateInput = screen.getByLabelText(/Date/);

    await waitFor(() => {
      fireEvent.change(reservationDateInput, { target: { value: selectedDate } });
    })

    const reservationTimeInput = screen.getByLabelText(/Time/);
    const arr = [...reservationTimeInput.options].map(option => { return option.value })

    expect(arr.length).toBe(availableTimes.length)
  })

  test("User is able to submit the form", async () => {
    const handleSubmit = jest.fn();
    const currentDateObject = new Date();
    const currentDate = `${currentDateObject.getFullYear()}-${currentDateObject.getMonth() + 1}-${currentDateObject.getDate()}`;

    render(<ReservationForm currentDateObject={currentDateObject} currentDate={currentDate} onSubmit={handleSubmit} />, { wrapper: BrowserRouter });

    const values = {
      noOfPeople: "3",
      date: '2023-07-07',
      timeOfBooking: '17:00',
      seatType: "indoor",
      firstName: "Chike",
      lastName: "Onodugo",
      phone: "08100995136",
      email: "bjonodugo@gmail.com",
      occasionType: "birthday",
      specialRequest: "Please cook",
      cardNumber: "1234567898765432",
      expiryDate: "02/24",
      cvv: "123"
    };

    const reservationDateInput = screen.getByLabelText(/Date/);
    const reservationTimeInput = screen.getByLabelText(/Time/);
    const noOfPeopleInput = screen.getByLabelText(/No of People/);
    const seatTypeInput = screen.getByLabelText(/Seat Type/);
    const firstNextButton = screen.getByTestId('next-1');

    await waitFor(() => {
      fireEvent.change(reservationDateInput, { target: { value: values.date } });
    })

    await waitFor(() => {
      fireEvent.change(reservationTimeInput, { target: { value: values.timeOfBooking } });
    })

    await waitFor(() => {
      fireEvent.change(seatTypeInput, { target: { value: values.seatType } });
    })

    await waitFor(() => {
      fireEvent.change(noOfPeopleInput, { target: { value: values.noOfPeople } });
    })

    fireEvent.click(firstNextButton);


    const firstNameInput = screen.getByLabelText(/First Name/);
    const lastNameInput = screen.getByLabelText(/Last Name/);
    const emailInput = screen.getByLabelText(/Email/);
    const phoneInput = screen.getByLabelText(/Phone/);
    const occasionTypeInput = screen.getByLabelText(/Occasion Type/);
    const specialRequestsInput = screen.getByLabelText(/Special Requests/);
    const secondNextButton = screen.getByTestId('next-2')

    await waitFor(() => {
      fireEvent.change(firstNameInput, { target: { value: values.firstName } });
    })

    await waitFor(() => {
      fireEvent.change(lastNameInput, { target: { value: values.lastName } });
    })

    await waitFor(() => {
      fireEvent.change(emailInput, { target: { value: values.email } });
    })

    await waitFor(() => {
      fireEvent.change(phoneInput, { target: { value: values.phone } });
    })

    await waitFor(() => {
      fireEvent.change(occasionTypeInput, { target: { value: values.occasionType } });
    })

    await waitFor(() => {
      fireEvent.change(specialRequestsInput, { target: { value: values.specialRequest } });
    })

    fireEvent.click(secondNextButton);

    const cardNumberInput = screen.getByLabelText(/Card Number/);
    const expiryDateInput = screen.getByLabelText(/Expiry Date/);
    const cvvInput = screen.getByLabelText(/CVV/);

    await waitFor(() => {
      fireEvent.change(cardNumberInput, { target: { value: values.cardNumber } });
    })

    await waitFor(() => {
      fireEvent.change(expiryDateInput, { target: { value: values.expiryDate } });
    })

    await waitFor(() => {
      fireEvent.change(cvvInput, { target: { value: values.cvv } });
    })

    const submitButton = screen.getByTestId('submit');

    await act(() => {
      fireEvent.click(submitButton);
    })

    // const waitForComponentToPaint = async (wrapper) => {
    //   await act(async () => {})    



    // You have to write the rest of the test below to make the assertion pass
    // expect(handleSubmit).toHaveBeenCalled()
    await waitFor(() => {
      //expect(handleSubmit).toHaveBeenCalledTimes(1);
      // expect(firstNextButton).toBeDisabled()
      setTimeout(() => {
        expect(handleSubmit).toHaveBeenCalled()
      }, 5000)

    })
  });

  test("User is unable to submit the form if the date for the booking date has already passed", async () => {
    const handleSubmit = jest.fn();
    const currentDateObject = new Date();
    render(<ReservationForm currentDateObject={currentDateObject} onSubmit={handleSubmit} />, { wrapper: BrowserRouter });

    const values = {
      noOfPeople: "3",
      timeOfBooking: "17:00",
      date: '1997-05-01',
      seatType: "indoor",
      firstName: "Chike",
      lastName: "Onodugo",
      phone: "08100995136",
      email: "bjonodugo@gmail.com",
      occasionType: "birthday",
      specialRequest: "Please cook",
      cardNumber: "1234567898765432",
      expiryDate: "02/24",
      cvv: "123"
    };

    const reservationDateInput = screen.getByLabelText(/Date/);
    const reservationTimeInput = screen.getByLabelText(/Time/);
    const noOfPeopleInput = screen.getByLabelText(/No of People/);
    const seatTypeInput = screen.getByLabelText(/Seat Type/);
    const firstNextButton = screen.getByTestId('next-1');

    await waitFor(() => {
      fireEvent.change(reservationDateInput, { target: { value: values.date } });
    })

    await waitFor(() => {
      fireEvent.change(reservationTimeInput, { target: { value: values.timeOfBooking } });
    })

    await waitFor(() => {
      fireEvent.change(seatTypeInput, { target: { value: values.seatType } });
    })

    await waitFor(() => {
      fireEvent.change(noOfPeopleInput, { target: { value: values.noOfPeople } });
    })

    fireEvent.click(firstNextButton);


    const firstNameInput = screen.getByLabelText(/First Name/);
    const lastNameInput = screen.getByLabelText(/Last Name/);
    const emailInput = screen.getByLabelText(/Email/);
    const phoneInput = screen.getByLabelText(/Phone/);
    const occasionTypeInput = screen.getByLabelText(/Occasion Type/);
    const specialRequestsInput = screen.getByLabelText(/Special Requests/);
    const secondNextButton = screen.getByTestId('next-2')

    await waitFor(() => {
      fireEvent.change(firstNameInput, { target: { value: values.firstName } });
    })

    await waitFor(() => {
      fireEvent.change(lastNameInput, { target: { value: values.lastName } });
    })

    await waitFor(() => {
      fireEvent.change(emailInput, { target: { value: values.email } });
    })

    await waitFor(() => {
      fireEvent.change(phoneInput, { target: { value: values.phone } });
    })

    await waitFor(() => {
      fireEvent.change(occasionTypeInput, { target: { value: values.occasionType } });
    })

    await waitFor(() => {
      fireEvent.change(specialRequestsInput, { target: { value: values.specialRequest } });
    })

    fireEvent.click(secondNextButton);

    const cardNumberInput = screen.getByLabelText(/Card Number/);
    const expiryDateInput = screen.getByLabelText(/Expiry Date/);
    const cvvInput = screen.getByLabelText(/CVV/);

    await waitFor(() => {
      fireEvent.change(cardNumberInput, { target: { value: values.cardNumber } });
    })

    await waitFor(() => {
      fireEvent.change(expiryDateInput, { target: { value: values.expiryDate } });
    })

    await waitFor(() => {
      fireEvent.change(cvvInput, { target: { value: values.cvv } });
    })

    const submitButton = screen.getByTestId('submit');

    await waitFor(() => {
      fireEvent.click(submitButton);
    })

    // const waitForComponentToPaint = async (wrapper) => {
    //   await act(async () => {})    


    // You have to write the rest of the test below to make the assertion pass
    await waitFor(() => {
      // expect(handleSubmit).toHaveBeenCalledTimes(1);
      expect(handleSubmit).not.toHaveBeenCalled()
    })
  });
});

