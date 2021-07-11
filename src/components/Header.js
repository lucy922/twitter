import './Header.css'
import { useState } from 'react'
import { FaBookmark, FaComment, FaList, FaNewspaper, FaStar, FaTimes, FaUser, FaToggleOff } from 'react-icons/fa'
import Image from '../assets/images/img.jpeg'

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (

    <>

      <div className="Navbar">
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <FaTimes className="menu-icon" />
          ) : (
            <img src={Image} alt="profile thumbnail" className="menu-icon" />
          )}
        </div>
        <div><FaStar /></div>
      </div>
      <div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <div className="Nav-header">
            <img src={Image} alt="profile thumbnail" />
            <h3>Lucie</h3>
            <span className="name">@_dada_dev</span>
            <div className="span">
              <h4> 70 <span className="follow">following</span> </h4>
              <h4> 70 <span className="follow">followers</span> </h4>
            </div>
          </div>

          <div className="list-items">
            <li className="option" onClick={closeMobileMenu}>
              <FaUser />
              <a href="/">Profile</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <FaList />
              <a href="/">Lists</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <FaComment />
              <a href="/">Topics</a>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <FaBookmark />
              <a href="/">Bookmark</a>
            </li>
            <li className=" option mobile-option" onClick={closeMobileMenu}>
              <FaStar />
              <a href="/" className="moments">
                Moments
              </a>
            </li>
            <li className=" option mobile-option" onClick={closeMobileMenu}>
              <FaNewspaper />
              <a href="/" className="moments">
                Newsletters
              </a>
            </li>
          </div>
          <div className="list-items">
            <li className=" option mobile-option" onClick={closeMobileMenu}>
              <a href="/">Security and Privacy</a>
            </li>
            <li className=" option mobile-option" onClick={closeMobileMenu}>
              <a href="/">Help Center</a>
            </li>
          </div>

          <div className="list-items">
            <li className=" option mobile-option" onClick={closeMobileMenu}>
              <div className="toggle">
              <a href="/">Data saver</a>
              <span><FaToggleOff /></span> 
              </div>
             
            </li>
            <li className=" option mobile-option" onClick={closeMobileMenu}>
              <a href="/">Display</a>
            </li>
          </div>

          <div className="logoutbtn">
            <a href="/">Log Out</a>
          </div>
        </ul>
      </div>
    </>
  )
}

export default Header