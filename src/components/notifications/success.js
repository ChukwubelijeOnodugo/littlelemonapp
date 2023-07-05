import { FaRegCheckCircle } from 'react-icons/fa';

function SuccessAlert({ message }) {
    return (
        <div style={{ background: 'var(--yellow)', color: 'var(--black)', padding: '5px 10px', borderRadius: '5px', position: 'fixed', top: '20px', right: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}><FaRegCheckCircle /> <span className='paragraph-text'>{message}</span></div>
    )
}

export default SuccessAlert