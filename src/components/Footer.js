import { FaBell, FaEnvelope, FaHome, FaSearch } from "react-icons/fa"
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="/" className="footer-link"><FaHome/></a>
        <a href="/" className="footer-link"><FaSearch/></a>
        <a href="/" className="footer-link"><FaBell/></a>
        <a href="/" className="footer-link"><FaEnvelope/></a>
      </div>
      
    </div>
  )
}

export default Footer
