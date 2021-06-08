import { FaRegFilePdf, FaStar, FaImage, FaPollH, FaSmile, FaCalendar, FaEllipsisH, FaRegComment, FaRetweet, FaRegHeart, FaUpload } from "react-icons/fa"
import image from '../assets/images/img.jpeg'
import "./Posts.css"

const Posts = ({ posts }) => {
  console.log(posts)
  return (
    <div>
      <div className="top-header">
        <div className="header-icon">
          <h3>Home</h3>
          <FaStar />
        </div>
      </div>
      <div className="bottom-header">
        <div className="header-details">
          <img src={image} alt="profile thumbnail"></img>
          <h4>What's happening?</h4>
        </div>
        <div className="nav-details">
          <div className="icons">
            <div className="nav-icons">
              <div>
                <FaImage />
              </div>
              <div>
                <FaRegFilePdf />
              </div>
              <div>
                <FaPollH />
              </div>
              <div>
                <FaSmile />
              </div>
              <div>
                <FaCalendar />
              </div>
            </div>
            <div className="btn">
              Tweet
            </div>
          </div>
        </div>
        <div className="emp"></div>
      </div>

      {posts.map((post) => (
        <div className="posts">
          <div className="post-content">
            <div className="post-img">
              <img src={post.thumbnail} alt="post thumbnail" />
            </div>
            <div>
              <div className="post-name">
                <a href="#">{post.name} <span>{post.username} {post.date}</span></a>
                <div className="post-svg">
                  <FaEllipsisH />
                </div>
              </div>
              <div className="post-text">
                {post.caption}
              </div>
            </div>
          </div>
       
          <div className="icon">
            <div className="span1">
              <span><FaRegComment /></span>
              <span>1.5k</span>
            </div>
            <div className="span2">
              <span><FaRetweet /></span>
              <span>5k</span>
            </div>
            <div className="span3">
              <span><FaRegHeart /></span>
              <span>9.1k</span>
            </div>
            <div className="span4">
              <span><FaUpload /></span>
            </div>
          </div>
        </div>
         ))}
    </div>
  )
}

export default Posts
