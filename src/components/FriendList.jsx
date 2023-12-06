import React from "react";

import Friend from "./Friend";

export default function FriendList({ friends, handleSelect, selected }) {
  return (
    <ul>
      <h1 style={{ fontFamily: "fantasy", fontSize: "30px" }}>
        Split <span style={{ color: "#ff922b" }}>a</span> Bill{" "}
        <span style={{ color: "#ff922b" }}>with</span> X
      </h1>
      {friends.map((friend) => {
        return (
          <Friend
            key={friend.id}
            friend={friend}
            handleSelect={handleSelect}
            selected={selected}
          />
        );
      })}
    </ul>
  );
}
