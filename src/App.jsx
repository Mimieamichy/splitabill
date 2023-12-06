import React from "react";
import FriendList from "./components/FriendList";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import SplitBillForm from "./components/SplitBillForm";
import { initialFriends } from "./constants/data";

export default function App() {
  const [friends, setFriends] = React.useState(initialFriends);
 
  const addFriend = (friend) => {
    setFriends((friends) => {
      return [...friends, friend];
    });
  };
  console.log(friends);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        <AddFriendForm addFriend={addFriend} />
        <Button>Add a Friend</Button>
      </div>
      <SplitBillForm />
    </div>
  );
}
