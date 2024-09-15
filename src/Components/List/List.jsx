import React from "react"
import "./list.css"
import Userinfo from "./Userinfo/Userinfo"
import ChatList from "./ChatList/ChatList"
const List=()=>{
    return(
        <div className="List">
            <Userinfo/>
            <ChatList/>
        </div>
    )
}
export default List