import './Content.css'
import Posts from "./Posts"

const Content = ({ posts, onDelete, onAdd }) => {

  return (
    <div className="content">
      <Posts posts={posts} onDelete={onDelete} onAdd={onAdd} />
    </div>
  )
}

export default Content
