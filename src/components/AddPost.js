import { useState } from 'react'
import "./AddPost.css"

const AddPost = ({ onAdd }) => {
  const [thumbnail, setThumbnail] = useState("")
  const [name, setName] = useState("")
  const [caption, setCaption] = useState("")
  const [username, setUsername] = useState("")
  const [date, setDate] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    if (!caption) {
      alert('nothing to tweet')
      return
    }

    onAdd({ thumbnail, caption, username })

    setThumbnail('')
    setName('')
    setCaption('')
    setUsername('')
    setDate('')
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input id="caption" className="new-tweet" type="text" placeholder="what's happening?" value={caption} onChange={e => setCaption(e.target.value)} />

        <div className="submitbtn">
          <button type="submit" className="btn">
            Tweet
          </button>
        </div>

      </form>
    </div>
  )
}

export default AddPost
