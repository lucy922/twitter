import { FaEllipsisH, FaRegComment, FaRetweet, FaRegHeart, FaUpload, FaSnapchatGhost, FaUserTimes, FaFolderPlus, FaBellSlash, FaTimesCircle, FaTintSlash, FaFlag, FaCheckCircle } from "react-icons/fa"
import { useState } from 'react'

const Post = ({ post, onDelete }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (

    <div className="post">
       <div className="posts">
       <div className="post-img">
          <img src={post.thumbnail} alt="post thumbnail" />
        </div>
       <div className="post-content">
        <div className="post-details">
          <div className="ps">
            <div>
              <a href="/">
                <span className="post-name">{post.name}</span>
                <span className="post-link">
                <FaCheckCircle/>
                </span>
                <span className="post-username">{post.username}</span>
                <span className="post-time">{post.time}</span>
              </a>
            </div>
            <div>
              <div className="Nb">
                <div onClick={handleClick} className="post-svg mb">
                  {click ? (
                    <FaEllipsisH />
                  ) : (
                    <FaEllipsisH />
                  )}
                </div>
              </div>
              {click ? (
                <div className="dropdown">
                  <div className="overlay" onClick={closeMobileMenu}> 
                  </div>
                  <ul className={click ? "menu-content active" : "menu-content"}>
                    <div className="lists">
                      <li className="link" onClick={closeMobileMenu}>
                        <FaSnapchatGhost />
                        <a href="/">Not interested in this tweet</a>
                      </li>
                      <li className="link" onClick={closeMobileMenu}>
                        <FaUserTimes />
                        <a href="/">Unfollow @noname</a>
                      </li>
                      <li className="link" onClick={closeMobileMenu}>
                        <FaFolderPlus />
                        <a href="/">Add/remove @noname from lists</a>
                      </li>
                      <li className="link" onClick={closeMobileMenu}>
                        <FaBellSlash />
                        <a href="/">Mute @noname</a>
                      </li>
                      <li className="link" onClick={closeMobileMenu}>
                        <FaTimesCircle />
                        <a href="/">Block @noname</a>
                      </li>
                      <li className="link" onClick={closeMobileMenu}>
                        <FaTintSlash />
                        <a href="/">Embed Tweet</a>
                      </li>
                      <li className="link" onClick={closeMobileMenu}>
                        <FaFlag />
                        <a href="/">Report Tweet</a>
                      </li>
                    </div>
                    <div className="btndiv">
                      <button className="canbtn" onClick={closeMobileMenu}>Cancel</button>
                    </div>
                  </ul>
                </div>
              ) :
                null
              }

            </div>

          </div>
          <div className="post-text">
            {post.caption}
          </div>
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
          <span><FaUpload onClick={() => onDelete(post.id)} /></span>
        </div>
      </div>

    </div>
  )
}

export default Post
