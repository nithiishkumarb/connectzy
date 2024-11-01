import List from "./Components/List/List"
import Chat from "./Components/Chat/Chat"
import Details from "./Components/Details/Details"
import Login from "./Components/Login/Login.jsx"
import Notifications from "./Components/notifications/Notifications.jsx"
import "./index.css"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase.js"
const App = () => {
  const user=false;

  useEffect(()=>{
    const unsub=onAuthStateChanged(auth,(user)=>{
      console.log(user)
    })
    return ()=>{
      unsub();
    }
  },[])
  return (
    <div className='container'>
      {
        user?(
          <>
            <List/>
            <Chat/>
            <Details/>
          </>
        ):(<Login/>)
      }
      <Notifications/>
    </div>
  )
}

export default App