import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { auth,db } from "../../lib/firebase"
import { doc, setDoc } from "firebase/firestore"
import Upload from "../../lib/Upload"
const Login = () => {
    const [Avatar,setAvatar]=useState({
        file:null,
        url:""
    })

    const [loading,setloading]=useState(false)
    const handleAvatar=(e)=>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
    }
    const handlelogin= async(e) =>{
        e.preventDefault()

        const formdata=new FormData(e.target)
        const {email,password}=Object.fromEntries(formdata)
        try{
            await signInWithEmailAndPassword(auth,email,password)
            console.log("Yes")
        }catch(error){
            toast.error(error.message)
        }finally{
            setloading(false)
        }
    }
    const handleRegister= async(e) =>{
        e.preventDefault();
        setloading(true)
        const formData=new FormData(e.target)
        const {user,email,password}=Object.fromEntries(formData)

        try{
            const res= await createUserWithEmailAndPassword(auth,email,password)

            const imgURL=await Upload(Avatar.file)

            await setDoc(doc(db,"users",res.user.uid),{
                user,
                email,
                image:imgURL,
                id:res.user.uid,
                blocked:[]
            })

            await setDoc(doc(db,"userchats",res.user.uid),{
                chat:[]
            })
            toast.success("Account created Successfully")
        }
        catch(err){
            console.log(err)
            toast.error(err.message)
        }
        finally{
            setloading(false)
        }
    }

    
  return (
    <div className="login">
       <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handlelogin}>
            <input type="text" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <button disabled={loading}>{loading ? "Loading" :"Sign in"}</button>
        </form>
       </div>
       <div className="separator"></div>
       <div className="item">
        <h2>Crete an Account</h2>
        <form onSubmit={handleRegister}>
            <label htmlFor="file">
                <img src={Avatar.url || "./avatar.png"} alt=""/>
                Upload an Image</label>
            <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
            <input type="text" placeholder="Username" name="user"/>
            <input type="text" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <button disabled={loading}>{loading ? "Loading" : "Sign up"}</button>
        </form>
       </div>
    </div> 
  )
}

export default Login