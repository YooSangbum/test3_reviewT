import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer mw">
        <div className="linkto">
          <Link to="/">CONTACT</Link>
          <Link to="/">TERMS OF SERVICES</Link>
          <Link to="/">SHIPPING AND RETURNS</Link>
        </div>
        <div className="emali">
          <p>Give an email, get the newsletter.</p>
          <Link to="/">
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="footer_bottom">
          <span>
            <i className="fa-regular fa-copyright"></i>
            <strong>2021 Sheely.</strong> Terms of use <strong>and</strong>{' '}
            privacy policy.{' '}
          </span>
          <div className="icon">
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
