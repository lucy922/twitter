import RightSidebar from "./RightSidebar"
import Content from "./Content"
import LeftSidebar from "./LeftSidebar"
import "./Main.css"
import { useState } from 'react'

const Main = () => {
 const [posts] = useState([
   {
    thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg",
     name: "OBA ORIN",
     caption: "God is the greatest",
     username: "@TeniEntertainer -",
     date: "may 12"
   },
   {
    thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg",
     name: "OBA ORIN",
     caption: "God is the greatest",
     username: "@TeniEntertainer -",
     date: "may 12"
   },
   {
    thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg",
     name: "OBA ORIN",
     caption: "God is the greatest",
     username: "@TeniEntertainer -",
     date: "may 12"
   },
   {
    thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg",
     name: "OBA ORIN",
     caption: "God is the greatest",
     username: "@TeniEntertainer -",
     date: "may 12"
   },
   {
    thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg",
     name: "OBA ORIN",
     caption: "God is the greatest",
     username: "@TeniEntertainer -",
     date: "may 12"
   }
 ])

  return (
    <div className="container">
      <div className="wrapper">
      <LeftSidebar/>
      <Content posts={posts}/>
      <RightSidebar/>
      </div>
    </div>
  )
}

export default Main
