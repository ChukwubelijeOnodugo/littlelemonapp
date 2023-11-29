import { useReducer, useState } from 'react';
import ReservationDetails from './reservationdetailsform';
import PersonalDetails from './personaldetailsform';
import PaymentDetails from './paymentdetailsform';
import status1 from '../../assets/Status Bar1.svg';
import status2 from '../../assets/Status Bar2.svg';
import status3 from '../../assets/Status Bar3.svg';
import { useFormik } from "formik";
import * as Yup from 'yup';
import './reservationform.css';
import SuccessAlert from '../notifications/success';
import { useNavigate } from 'react-router';
import { fetchAPI } from '../../api/api';

export const ACTIONS = {
    UPDATE: 'update'
}

const initializeTimes = (date) => {
    const response = fetchAPI(date)
    return response
}


export function updateTimes(times, action) {
    switch (action.type) {
        case ACTIONS.UPDATE:
            return [...fetchAPI(new Date(action.payload.date))]
        default:
            return times
    }
}

function ReservationForm({ onSubmit, currentDate, currentDateObject }) {
    const [times, dispatch] = useReducer(updateTimes, initializeTimes(currentDateObject));
    const [bookingDetails, setBookingDetails] = useState(true);
    const [personalDetails, setPersonalDetails] = useState(false);
    const [paymentDetails, setPaymentDetails] = useState(false);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            noOfPeople: "2",
            timeOfBooking: "17:00",
            date: currentDate,
            seatType: "indoor",
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            occasionType: "",
            specialRequest: "",
            cardNumber: "",
            expiryDate: "",
            cvv: ""
        },
        onSubmit: (values, { setSubmitting }) => {
            console.log("Submitting....");
            setTimeout(() => {
                let response = onSubmit(values);
                if (response) {
                    setBookingSuccess(true);
                    setTimeout(() => {
                        setSubmitting(false);
                        navigate('/confirm');
                    }, 3000);
                }
            }, 5000);
        },
        validationSchema: Yup.object({
            noOfPeople: Yup.string().required("Required"),
            timeOfBooking: Yup.string().required("Required"),
            date: Yup.string().test('is a vaiid date', 'Please enter a valid date', (value, context) => new Date(value) > new Date(currentDate) || new Date(value) === new Date(currentDate)).required("Required"),
            seatType: Yup.string().required("Required"),
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            phone: Yup.string().required("Required"),
            email: Yup.string().email().required("Required"),
            occasionType: Yup.string(),
            specialRequest: Yup.string(),
            cardNumber: Yup.string().length(16, "Card Number isn't up to 16 characters").required("Required"),
            expiryDate: Yup.string().matches(/\d\d\/\d\d/i).required('Required'),
            cvv: Yup.string().length(3).required("Required")
        }),
    });

    let current = null;
    if (personalDetails) {
        current = <PersonalDetails personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} paymentDetails={paymentDetails} setPaymentDetails={setPaymentDetails} formik={formik} />;
    } else if (paymentDetails) {
        current = <PaymentDetails paymentDetails={paymentDetails} setPaymentDetails={setPaymentDetails} bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} formik={formik} />;
    }

    return (
        <>
            {!bookingDetails && <BackButton aria-label='Back' onClick={personalDetails ? () => { setBookingDetails(!bookingDetails); setPersonalDetails(!personalDetails) } : () => { setPersonalDetails(!personalDetails); setPaymentDetails(!paymentDetails) }} alt='back button' />}
            {bookingDetails && <img src={status1} className='status-bar' alt='Form status bar' />}
            {personalDetails && <img src={status2} className='status-bar' alt='Form status bar' />}
            {paymentDetails && <img src={status3} className='status-bar' alt='Form status bar' />}
            {bookingSuccess && <SuccessAlert message={'Booking completed'} />}
            <form onSubmit={formik.handleSubmit}>
                {bookingDetails ? <ReservationDetails dispatch={dispatch} times={times} personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} formik={formik} /> : current}
            </form>
        </>
    )
}

export default ReservationForm;

function BackButton(props) {
    return (
        <svg className='back-button' {...props} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="8" fill="#D9D9D9" />
            <path d="M10.5 14.366C9.83333 13.9811 9.83333 13.0189 10.5 12.634L15.75 9.60289C16.4167 9.21799 17.25 9.69911 17.25 10.4689V16.5311C17.25 17.3009 16.4167 17.782 15.75 17.3971L10.5 14.366Z" fill="black" />
        </svg>
    )
}