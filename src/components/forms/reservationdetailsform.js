import FormInput from './forminput';

function ReservationDetails({ formik, bookingDetails, setBookingDetails, personalDetails, setPersonalDetails, times, dispatch }) {
    const isInvalid = formik.errors['date'] !== undefined;
    console.log(formik.errors['date']);
    console.log(formik.values);
    return (
        <>
            <h4 className='form-legend'>Reservation Details</h4>
            <FormInput name='date' id='date' input='regular' type='date' label='Date' formik={formik} dispatch={dispatch} />
            <FormInput name='timeOfBooking' id='timeOfBooking' input='select' label='Time' formik={formik} >
                {times.map(time => <option key={time} defaultValue={time === '17:00'} value={time}>{time}</option>)}
            </FormInput>
            <FormInput name='noOfPeople' id='noOfPeople' input='select' label='No of People' formik={formik}>
                <option defaultValue value='2'>2 people</option>
                <option value='3'>3 people</option>
                <option value='4'>4 people</option>
                <option value='5'>5 people</option>
                <option value='6'>6 people</option>
            </FormInput>
            <FormInput name='seatType' id='seatType' input='select' label='Seat Type' formik={formik}>
                <option defaultValue value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
            </FormInput>
            <button data-testid='next-1' disabled={isInvalid} className='button-link form-button' onClick={() => { setPersonalDetails(!personalDetails); setBookingDetails(!bookingDetails) }}>Next</button>
        </>
    )
}

export default ReservationDetails