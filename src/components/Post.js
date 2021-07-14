import { FaEllipsisH, FaRegComment, FaRetweet, FaRegHeart, FaUpload } from "react-icons/fa"


const Post = ({ post, onDelete }) => {
  return (
    
    <div className="post">
      <div className="posts">
        <div className="post-content">
          <div className="post-img">
            <img src={post.thumbnail} alt="post thumbnail" />
          </div>
          <div>
            <div className="post-name">
              <a href="/">{post.name} <span>{post.username}</span></a>
              <div className="post-svg">
                <FaEllipsisH onClick={() => onDelete(post.id)}/>
              </div>
            </div>
            <div className="post-text">
              {post.caption}
            </div>
          </div>
        </div>

        <div className="icon">
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
