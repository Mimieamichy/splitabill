import React from "react";
import FriendList from "./components/FriendList";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import SplitBillForm from "./components/SplitBillForm";
import { initialFriends } from "./constants/data";

export default function App() {
  const [friends, setFriends] = React.useState(initialFriends);
  const [selected, setSelected] = React.useState(null);
  const [show, setShow] = React.useState(false);

  const handleSplit = (value) => {
    setFriends((friends) =>
      friends.map((friend) => {
        return friend.id === selected.id
          ? { ...friend, balance: friend.balance + value }
          : friend;
      })
    );
    setSelected(null)
  };

  const handleShow = () => {
    setShow((show) => !show);
  };

  const handleSelect = (friend) => {
    // setSelected(friend);
   setSelected(selected?.id === friend.id ? null : friend) 
  };

  const addFriend = (friend) => {
    setFriends((friends) => {
      return [...friends, friend];
    });
  };
  console.log(friends);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          handleSelect={handleSelect}
          selected={selected}
        />
        {show && <AddFriendForm addFriend={addFriend} />}
        <Button btn={handleShow}>{show ? "Close" : "Add a Friend"}</Button>
      </div>
      {selected && <SplitBillForm selected={selected} handleSplit={handleSplit} />}
    </div>
  );
}
