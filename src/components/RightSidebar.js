import { FaCog, FaEllipsisH, FaSearch } from 'react-icons/fa'
import "./RightSidebar.css"
import Image from '../assets/images/img.jpeg'

const RightSidebar = () => {
  return (
    <div className="sidebar">
      <div className="search-bar">
        <FaSearch />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="trend-table">
        <div className="wrap">
          <div className="header-wrap">
            <div className="title">
              <h3>Trends for you</h3>
              <div><FaCog /></div>
            </div>
          </div>

          <div className="trend-wrap2">
            <div className="trending">
              <h5>Trending in Nigeria</h5>
              <FaEllipsisH />
            </div>
            <h4>WhatsApp</h4>
            <h3>242k Tweets</h3>
          </div>

          <div className="trend-wrap2">
            <div className="trending">
              <h5>Trending in Nigeria</h5>
              <FaEllipsisH />
            </div>
            <h4>Lagos</h4>
            <h3>100k Tweets</h3>
          </div>

          <div className="trend-wrap2">
            <div className="trending">
              <h5>Trending in Nigeria</h5>
              <FaEllipsisH />
            </div>
            <h4>Lagos</h4>
            <h3>100k Tweets</h3>
          </div>

          <div className="trend-wrap2">
            <div className="trending">
              <h5>Trending in Nigeria</h5>
              <FaEllipsisH />
            </div>
            <h4>Lagos</h4>
            <h3>100k Tweets</h3>
          </div>
          <div className="trend-wrap2">
            <div className="trending">
              <h5>Music - Trending</h5>
              <FaEllipsisH />
            </div>
            <h4>Rihanna</h4>
            <div className="numoftweets">
              <h3>103k Tweets</h3>
            </div>
          </div>
          <div className="trend-wrap2">
            <div className="trend-link">
              <a href="/">
                Show more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
