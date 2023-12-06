import React from 'react'
import Button from './Button'

export default function AddFriendForm() {
  const [name, setName] = React.useState("")
  const [image, setImage] = React.useState("https://i.pravatar.cc/48")

  return (
    <form className="form-add-friend">
      <label htmlFor="">Name</label>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <label htmlFor="">Image URL</label>
      
      <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
   <Button>Add...</Button>
    </form>

  )
}
