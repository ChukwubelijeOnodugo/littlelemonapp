import ReservationForm from '../components/forms/reservationform';
import { submitAPI } from '../api/api';

function BookATable() {
    const handleSubmit = (formValues) => {
        return submitAPI(formValues);
    }

    const currentDateObject = new Date();
    const currentDate = `${currentDateObject.getFullYear()}-${currentDateObject.getMonth() + 1}-${currentDateObject.getDate()}`;

    return (
        <>
            <section className='page-heading'>
                <h2 className='sub-title'>Book A Table</h2>
            </section>
            <ReservationForm currentDate={currentDate} currentDateObject={currentDateObject} onSubmit={handleSubmit} />
        </>
    )
}

export default BookATable