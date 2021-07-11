import "./LeftSidebar.css"
import { FaBell, FaBookmark, FaEllipsisH, FaEnvelope, FaHashtag, FaHome, FaListAlt, FaTwitter, FaUserAlt } from 'react-icons/fa'

const LeftSidebar = () => {
  return (
    <div className="sidebar">
      <div className="nav-wrap">
        <div className="icon">
          <FaTwitter />
        </div>
        <a href="/" className="nav">
            <FaHome />
            Home
        </a>
        <a href="/" className="nav">
          <FaHashtag />
          Explore
        </a>
        <a href="/" className="nav">
          <FaBell />
          Notifications
        </a>
        <a href="/" className="nav">
          <FaEnvelope />
          Messages
        </a>
        <a href="/" className="nav">
          <FaBookmark />
          Bookmarks
        </a>
        <a href="/" className="nav">
          <FaListAlt />
          Lists
        </a>
        <a href="/" className="nav">
          <FaUserAlt />
          Profile
        </a>
        <a href="/" className="nav">
          <FaEllipsisH />
          More
        </a>
      </div>
      <div className="tweet-btn">
        <a href="/">Tweet</a>
      </div>
    </div>
  )
}

export default LeftSidebar