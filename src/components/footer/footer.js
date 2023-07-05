import './footer.css';
import { Link } from 'react-router-dom';
import { BsTwitter, BsFacebook, BsPinterest, BsInstagram } from 'react-icons/bs';

function Footer() {
  return (
    <footer>
      <img src={require("../../assets/alternatelogo.jpeg")} alt="Alternate Little Lemon Logo" />
      <section>
        <h4 className='section-title'>Navigation</h4>

        <ul>
          <li><Link to={'/'} className='nav-link'>Home</Link></li>
          <li><Link className='nav-link'>About</Link></li>
          <li><Link className='nav-link'>Menu</Link></li>
          <li><Link to={'/book'} className='nav-link'>Reservations</Link></li>
          <li><Link className='nav-link'>Order Online</Link></li>
        </ul>

      </section>
      <section>
        <h4 className='section-title'>Contact</h4>
        <ul>
          <li><Link className='nav-link' href="">Email</Link></li>
          <li><Link className='nav-link' href="">Phone</Link></li>
          <li><Link className='nav-link' href="">Address</Link></li>
        </ul>
      </section>
      <section>
        <h4 className='section-title'>Social Media</h4>
        <ul>
          <li><Link className='nav-link' href=""> <BsTwitter /></Link></li>
          <li><Link className='nav-link' href=""> <BsFacebook /></Link></li>
          <li><Link className='nav-link' href=""> <BsInstagram /></Link></li>
          <li><Link className='nav-link' href=""> <BsPinterest /></Link></li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer;