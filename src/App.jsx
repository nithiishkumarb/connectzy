import List from "./Components/List/List"
import Chat from "./Components/Chat/Chat"
import Details from "./Components/Details/Details"
import "./index.css"
const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Details/>
    </div>
  )
}

export default App