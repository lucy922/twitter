import { FaEllipsisH, FaRegComment, FaRetweet, FaRegHeart, FaUpload } from "react-icons/fa"


const Post = ({ post, onDelete }) => {
  return (

    <div className="post">
        <div className="post-content">
          <div className="post-img">
            <img src={post.thumbnail} alt="post thumbnail" />
          </div>
          <div className="post-details">
            <div className="ps">
              <div>
              <a href="/">
              <span className="post-name">{post.name}</span>
              <span className="post-username">{post.username}</span>
              <span className="post-time">{post.time}</span>
            </a>
              </div>
            
            <div className="post-svg">
              <FaEllipsisH onClick={() => onDelete(post.id)} />
            </div>
          </div>
          <div className="post-text">
              {post.caption}
            </div>
            </div>
        </div>
      

      <div className="icons">
        <div className="span">
          <span><FaRegComment /></span>
          <span>1.5k</span>
        </div>
        <div className="span">
          <span><FaRetweet /></span>
          <span>5k</span>
        </div>
        <div className="span">
          <span><FaRegHeart /></span>
          <span>9.1k</span>
        </div>
        <div className="span">
          <span><FaUpload /></span>
        </div>
      </div>

    </div>
  )
}

export default Post
