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
      thumbnail: "https://www.mygbedu.com/wp-content/uploads/2019/03/tenimakanaki_49651359_396184144505234_3244100020574777051_n.jpg",
      name: "OBA ORIN",
      caption: "God is the greatest",
      username: "@TeniEntertainer -",
      time: "5h"
    },

    {
      id: 2,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNG7V8j4Ci7R5J5VlMh7K4HjacqMTl8jczA&usqp=CAU",
      name: "Samuel Otigba",
      caption: "I'm not a religious person but you see corporate Nigeria, not everyone on suit & tie is normal. There are people that carry their fetish to work and use it. Just make sure your prayer life & relationship with God is intact daily before entering the office if not you'll collect.",
      username: "@SamuelOtigba -",
      time: "Aug 5"
    },

    {
      id: 3,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1F7sotb1p-9YuR_1IFYP_nAizS5RpQoiE2g&usqp=CAU",
      name: "Ben Awad",
      caption: "How i validate my startup ideas: I make a video about the idea and wait to see if any large tech companies copy it.", 
      username: "@benawad -",
      time: "Jul 29"
    },

    {
      id: 4,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlR7qWV4j4MI3MRg6ErDT8_vH0N9PkwD4Osw&usqp=CAU",
      name: "Davido",
      caption: "Happy 5th birthday @Imade Love you!!",
      username: "@OBO -",
      time: "21h"
    },

    {
      id: 5,
      thumbnail: "https://cdns-images.dzcdn.net/images/artist/7531aa52f957cfaf6ae242b4cc57b9b9/500x500.jpg",
      name: "Johnny Drille #Before",
      caption: "Loving is harder than they show you",
      // username: "@Preshy -",
      time: "- 1h"
    },

    {
      id: 6,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0LB9IcxbedLJlGGuG9h89ClztLe2Dwh7vg&usqp=CAU",
      name: "Simi",
      caption: "God of defense, come to my defense",
      username: "@SympLySimi -",
      time: "8m"
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
