import {useState} from 'react'
import EmojiPicker from 'emoji-picker-react'
import "./chat.css"
const Chat = () => {
  const [showEmoji,setShowEmoji]=useState(false)
  const [text,setText]=useState("")
  const handleEmoji=e=>{
    setText(prev => prev+ e.emoji)
    setShowEmoji(!showEmoji);
  }
  return (
    <div className='chat'>
      <div className='top'>
        <div className='users'>
          <img src='./avatar.png' alt=""/>
          <div className='texts'>
            <span>John Doe</span>
            <p>Then is good</p>
          </div>
        </div>
        <div className='icons'>
          <img src='./phone.png' alt=''/>
          <img src='./video.png' alt=''/>
          <img src='./info.png' alt=''/>
        </div>
      </div>
      <div className='center'></div>
      <div className='bottom'>
        <div className='icons'>
          <img src='./img.png' alt=''/>
          <img src='./camera.png' alt=''/>
          <img src='./mic.png' alt=''/>
        </div>
        <input type='text' placeholder='Type a message...' value={text} onChange={(e)=>setText(e.target.value)}/>
        <div className='emoji'>
          <img src='./emoji.png' alt='' onClick={()=>{setShowEmoji(prev=> !prev)}}/>
          <div className='picker'>
              <EmojiPicker open={showEmoji} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat