import { FaEllipsisH, FaRegComment, FaRetweet, FaRegHeart, FaUpload } from "react-icons/fa"


const Post = ({ post, onDelete }) => {
  return (
    
    <div className="post">
      <div className="posts">
        <div>
        <div className="post-content">
          <div className="post-img">
            <img src={post.thumbnail} alt="post thumbnail" />
          </div>
          <div className="pd">
            <div className="post-details">
              <a href="/">
                <span className="post-name">{post.name}</span>
                <span>{post.username}</span>
              </a>
              <a href="/">
                <span>{post.time}</span> 
              </a>
            </div>
            <div className="post-svg">
                <FaEllipsisH onClick={() => onDelete(post.id)}/>
              </div>
          </div>
        </div>
        <div className="post-text">
              {post.caption}
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
    </div>
  )
}

export default Post
