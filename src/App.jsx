import React from 'react'
import FriendList from './components/FriendList'
import AddFriendForm from './components/AddFriendForm'
import Button from './components/Button'
import SplitBillForm from './components/SplitBillForm'

export default function App() {
  
  return (
    <div className='app'>
      <div className="sidebar">
        <FriendList />
        <AddFriendForm />
        <Button>Add a Friend</Button>
      </div>
      <SplitBillForm />
    </div>
  )
}
