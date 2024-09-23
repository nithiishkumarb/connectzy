import {useState} from 'react'
import "./ChatList.css"
import Adduser from './Adduser/Adduser'
const ChatList = () => {
  const [newchat,setnewchat]=useState(false)
  return (
    <div className='chatList'>
      <div className='search'>
        <div className='search-bar'>
          <img src='./search.png' alt='search'/>
          <input type='text' placeholder='Search'/>
        </div>
        <img src={newchat ? "./minus.png" :'./plus.png'} alt='new chat' className='add' 
        onClick={()=>setnewchat((prev)=>!prev)}/>
      </div>
      <div className='item'>
        <img src='./avatar.png' alt=''/>
        <div className='texts'>
          <span>John Doe</span>
          <p>Hello Nithish</p>
        </div>
      </div>
      <div className='item'>
        <img src='./avatar.png' alt=''/>
        <div className='texts'>
          <span>John Doe</span>
          <p>Hello Nithish</p>
        </div>
      </div>
      <div className='item'>
        <img src='./avatar.png' alt=''/>
        <div className='texts'>
          <span>John Doe</span>
          <p>Hello Nithish</p>
        </div>
      </div>
      <div className='item'>
        <img src='./avatar.png' alt=''/>
        <div className='texts'>
          <span>John Doe</span>
          <p>Hello Nithish</p>
        </div>
      </div>
      {newchat && <Adduser/>}
    </div>
  )
}

export default ChatList