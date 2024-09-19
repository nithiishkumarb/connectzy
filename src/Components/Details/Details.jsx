import React from 'react'
import "./details.css"
const Details = () => {
  return (
    <div className='details'>
      <div className='user'>
        <img src='./avatar.png' alt='profile'/>
        <h2>John Dow</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>
      <div className='info'>
        <div className='options'>
          <div className='title'>
            <span>Chat Settings</span>
            <img src='./arrowUp.png' alt=''/>
          </div>
        </div>
        <div className='options'>
          <div className='title'>
            <span>Privacy & Help</span>
            <img src='./arrowUp.png' alt=''/>
          </div>
        </div>
        <div className='options'>
          <div className='title'>
            <span>Shared Photos</span>
            <img src='./arrowDown.png' alt=''/>
          </div>
        </div>
        <div className='photos'>
          <div className='photoitems'>
            <div className='photodetails'>
                <img src='https://images.pexels.com/photos/27908115/pexels-photo-27908115.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='send'/>
                <span>Photo2024.png</span>
            </div>
            <img src='./download.png' alt='' className='icons'/>
          </div>
          <div className='photoitems'>
            <div className='photodetails'>
                <img src='https://images.pexels.com/photos/27908115/pexels-photo-27908115.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='send'/>
                <span>Photo2024.png</span>
            </div>
            <img src='./download.png' alt='' className='icons'/>
          </div>
          <div className='photoitems'>
            <div className='photodetails'>
                <img src='https://images.pexels.com/photos/27908115/pexels-photo-27908115.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='send'/>
                <span>Photo2024.png</span>
            </div>
            <img src='./download.png' alt='' className='icons'/>
          </div>
          <div className='photoitems'>
            <div className='photodetails'>
                <img src='https://images.pexels.com/photos/27908115/pexels-photo-27908115.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='send'/>
                <span>Photo2024.png</span>
            </div>
            <img src='./download.png' alt='' className='icons'/>
          </div>
        </div>    
        <div className='options'>
          <div className='title'>
            <span>Shared Files</span>
            <img src='./arrowUp.png' alt=''/>
          </div>
        </div>
        <button>Block user</button>
      </div>
    </div>
  )
}

export default Details