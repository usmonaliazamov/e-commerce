import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [MobilMenu, setMobilMenu] = useState(false)
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="navlink">
            <ul className={MobilMenu ? 'nav-links-MobileMenu' : 'link f_flex capitalize'} onClick={() => setMobilMenu(false)}>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/page">pages</Link>
              </li>
              <li>
                <Link to="/user">user account</Link>
              </li>
              <li>
                <Link to="/vendor">vendor account </Link>
              </li>
              <li>
                <Link to="/track">user my order </Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobilMenu(!MobilMenu)}>{MobilMenu ? <i className='fas fa-times close home btn'></i> : <i className='fa-solid fa-bars open'></i>}</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar