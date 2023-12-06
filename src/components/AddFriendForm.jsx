import React from "react";
import Button from "./Button";

export default function AddFriendForm({ addFriend }) {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("https://i.pravatar.cc/48");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !image) return;
    console.log(name, image)
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      id,
      balance: 0,
    };
    console.log(newFriend)
    addFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="">Image URL</label>

      <input
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <Button>Add...</Button>
    </form>
  );
}
