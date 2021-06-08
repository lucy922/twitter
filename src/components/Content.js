import './Content.css'
import Posts from "./Posts"

const Content = ({ posts }) => {
  return (
    <div className="content">
      <Posts posts={posts} />
    </div>
  )
}

export default Content
