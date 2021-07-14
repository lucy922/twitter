import RightSidebar from "./RightSidebar"
import Content from "./Content"
import LeftSidebar from "./LeftSidebar"
import "./Main.css"
import Footer from './Footer'
import Header from './Header'
import { useState } from 'react'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Main = ({open}) => {
  const [posts, setPost] = useState([
    {
      id: 1,
      thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg",
      name: "OBA ORIN",
      caption: "God is the greatest",
      username: "@TeniEntertainer"
      
    },

    {
      id: 2,
      thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg",
      name: "OBA ORIN",
      caption: "God is the greatest",
      username: "@TeniEntertainer "
      
    },

    {
      id: 3,
      thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg",
      name: "OBA ORIN",
      caption: "God is the greatest",
      username: "@TeniEntertainer "
      
    },

    {
      id: 4,
      thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg",
      name: "OBA ORIN",
      caption: "God is the greatest",
      username: "@TeniEntertainer "
    },

    {
      id: 5,
      thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg",
      name: "OBA ORIN",
      caption: "God is the greatest",
      username: "@TeniEntertainer"
    }
  ])

  const addPost = (post) => {
    const id = Math.floor(Math.random() * 1000 + 1)
    const newPost = { id, ...post }
    setPost([...posts, newPost])
  }

  const deletePost = (id) => {
    setPost(posts.filter((post) => post.id !== id)
    )
  }

  return (
    <>
    <Header/>
    <div className="container">
      <div className="wrapper">
        <LeftSidebar />
        <Content posts={posts} onDelete={deletePost} onAdd={addPost} />
        <RightSidebar />
      </div>
    </div>
    <Footer/>
</>

  )
}

export default Main
