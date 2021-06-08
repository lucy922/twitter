import { FaCog, FaEllipsisH, FaSearch } from 'react-icons/fa'
import "./RightSidebar.css"

const RightSidebar = () => {
  return (
    <div className="sidebar">
      <div className="search-bar">
        <FaSearch />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="wrap">
        <div className="trend-wrap1">
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
          <h4>Lagos</h4>
          <h5>100k Tweets</h5>
        </div>

        <div className="trend-wrap2">
          <div className="trending">
            <h5>Trending in Nigeria</h5>
            <FaEllipsisH />
          </div>
          <h4>Lagos</h4>
          <h5>100k Tweets</h5>
        </div>

        <div className="trend-wrap2">
          <div className="trending">
            <h5>Trending in Nigeria</h5>
            <FaEllipsisH />
          </div>
          <h4>Lagos</h4>
          <h5>100k Tweets</h5>
        </div>

        <div className="trend-wrap2">
          <div className="trending">
            <h5>Trending in Nigeria</h5>
            <FaEllipsisH />
          </div>
          <h4>Lagos</h4>
          <h5>100k Tweets</h5>
        </div>
        <div className="trend-wrap2">
          <div className="trending">
            <h5>Trending in Nigeria</h5>
            <FaEllipsisH />
          </div>
          <h4>Lagos</h4>
          <h5>100k Tweets</h5>
        </div>

      </div>
    </div>
  )
}

export default RightSidebar
