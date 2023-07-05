import { ACTIONS } from "./reservationform";

function FormInput({ formik, input, type, id, name, children, label, pattern, dispatch, optional }) {
    return (
        <div className='form-input'>
            <label htmlFor={id} className='lead-text'>{label} {optional ? null : <span style={{ color: 'var(--red' }}>*</span>}</label>
            {input === 'regular' && <input className='regular-input rounded-corner lead-text' id={id} name={name} type={type} pattern={pattern} onChange={type === 'date' ? (e) => { formik.handleChange(e); dispatch({ type: ACTIONS.UPDATE, payload: { date: e.target.value } }) } : formik.handleChange} value={formik.values[name]} />}
            {input === 'select' && <select className='select-input rounded-corner lead-text' id={id} name={name} onChange={formik.handleChange}>{children}</select>}
            {formik.touched[name] && formik.errors[name] && <span className='error paragraph-text'>{formik.errors[name]}</span>}
        </div>
    )
}

export default FormInput