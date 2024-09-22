import List from "./Components/List/List"
import Chat from "./Components/Chat/Chat"
import Details from "./Components/Details/Details"
import Login from "./Components/Login/Login.jsx"
import Notifications from "./Components/notifications/Notifications.jsx"
import "./index.css"
const App = () => {
  const user=false;
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