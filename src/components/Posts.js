import{ FaCalendar,  FaPollH, FaSmile, FaImage, FaRegFilePdf, FaStar } from 'react-icons/fa'
import Image from '../assets/images/img.jpeg'
import AddPost from './AddPost'
import "./Posts.css"
import Post from './Post'

const Posts = ({ posts, onDelete, onAdd }) => {

  // const addPost = (post) =>{
  //   // console.log(post)
  //   const newPost = { id, ...post}
  //   setPost([...posts, newPost])
  // }

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
        <img src={Image} alt="profile thumbnail" />
          <AddPost onAdd={onAdd} />
        
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
          </div>
        </div>
        <div className="emp"></div>
      </div>

      {posts.map((post) => (
        <Post key={post.id} post={post} onDelete={onDelete}/>
      ))}
        </div>
       
     
      )}
     


export default Posts
