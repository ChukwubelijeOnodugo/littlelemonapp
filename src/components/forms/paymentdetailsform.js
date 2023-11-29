import FormInput from "./forminput";

function PaymentDetails({ formik, paymentDetails, setPaymentDetails, bookingDetails, setBookingDetails }) {
    const isInvalid = formik.values['cardNumber'] === "" || formik.values['expiryDate'] === "" || formik.values['cvv'] === "";
    return (
        <>
            <h4 className='form-legend'>Payment Details</h4>
            <FormInput name='cardNumber' id='cardNumber' input='regular' type='text' label='Card Number' formik={formik} />
            <FormInput name='expiryDate' id='expiryDate' input='regular' type='text' label='Expiry Date (MM/YY)' formik={formik} />
            <FormInput name='cvv' id='cvv' input='regular' type='text' label='CVV' formik={formik} />
            <button data-testid='submit' disabled={isInvalid || formik.isSubmitting} onClick={formik.handleSubmit} type="submit" className='button-link form-button'>Confirm</button>
        </>
    )
}

export default PaymentDetails