import React from 'react'
import { initialFriends } from '../constants/data'
import Friend from './Friend'

export default function FriendList() {
  return (
    <ul>
      {initialFriends.map((friend) => {
        return <Friend key={friend.id} friend={friend} />
      })}

    </ul>
  )
}
