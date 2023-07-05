import FormInput from "./forminput";

function PersonalDetails({ formik, personalDetails, setPersonalDetails, paymentDetails, setPaymentDetails }) {
    const isInvalid = formik.values['firstName'] === "" || formik.values['lastName'] === "" || formik.values['email'] === "" || formik.values['phone'] === "";
    return (
        <>
            <h4 className='form-legend'>Personal Details</h4>
            <FormInput name='firstName' id='firstName' input='regular' type='text' label='First Name' formik={formik} />
            <FormInput name='lastName' id='lastName' input='regular' type='text' label='Last Name' formik={formik} />
            <FormInput name='email' id='email' input='regular' type='text' label='Email' formik={formik} />
            <FormInput name='phone' id='phone' input='regular' type='text' label='Phone' formik={formik} />
            <FormInput name='occasionType' id='occasionType' input='select' label='Occasion Type (optional)' optional={true} formik={formik}>
                <option disabled selected value=''>--</option>
                <option value='birthday'>Birthday</option>
                <option value='anniversary'>Anniversary</option>
                <option value='date'>Romantic Date</option>
                <option value='business'>Business Meeting</option>
            </FormInput>
            <FormInput name='specialRequest' id='specialRequest' input='regular' type='text' optional={true} label='Special Requests (optional)' formik={formik} />
            <button data-testid='next-2' disabled={isInvalid} className='button-link form-button' onClick={() => { setPaymentDetails(!paymentDetails); setPersonalDetails(!personalDetails) }}>Next</button>
        </>
    )
}

export default PersonalDetails