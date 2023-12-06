import React from "react";
import Button from "./Button";

export default function Friend({ friend, handleSelect, selected }) {
  const isSelected = selected?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : undefined}>
      <img src={friend.image} alt={friend.name} />
      <h2>{friend.name}</h2>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance == 0 && <p>You and {friend.name} are even</p>}
      <Button btn={() => handleSelect(friend)}>{isSelected ? "Close" : "Select"}</Button>
    </li>
  );
}
