import React from "react";

import Friend from "./Friend";

export default function FriendList({ friends }) {
  
  return (
    <ul>
      {friends.map((friend) => {
        return(
          <Friend key={friend.id} friend={friend} />
        )
        
      })}
      
    </ul>
  );
}
