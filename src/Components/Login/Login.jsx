import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify";
const Login = () => {
    const [Avatar,setAvatar]=useState({
        file:null,
        url:""
    })
    const handleAvatar=(e)=>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
    }
    const handlelogin= e =>{
        e.preventDefault()
        toast.warn("Hello")
    }
  return (
    <div className="login">
       <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handlelogin}>
            <input type="text" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <button>Sign in</button>
        </form>
       </div>
       <div className="separator"></div>
       <div className="item">
        <h2>Crete an Account</h2>
        <form>
            <label htmlFor="file">
                <img src={Avatar.url || "./avatar.png"} alt=""/>
                Upload an Image</label>
            <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
            <input type="text" placeholder="Username" name="user"/>
            <input type="text" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <button>Sign up</button>
        </form>
       </div>
    </div> 
  )
}

export default Login