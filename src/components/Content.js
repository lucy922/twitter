import { FaPenAlt, FaPenFancy } from 'react-icons/fa'
import './Content.css'
import Posts from "./Posts"

const Content = ({ posts, onDelete, onAdd }) => {

  return (
    <div className="content">
      <Posts posts={posts} onDelete={onDelete} onAdd={onAdd} />
      <div className="retweet">
      <FaPenAlt/>
      </div>
    </div>
  )
}

export default Content
