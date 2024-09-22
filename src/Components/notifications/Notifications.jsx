import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const Notifications = () => {
  return (
    <div className="notifications">
        <ToastContainer position="bottom-right"/>
    </div>
  )
}

export default Notifications