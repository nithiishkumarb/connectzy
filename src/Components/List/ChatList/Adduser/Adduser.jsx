import "./adduser.css"

const Adduser = () => {
  return (
    <div className="adduser">
        <form>
            <input type="input" placeholder="User name" name="username"/>
            <button>Search</button>
        </form>
        <div className="users">
            <div className="details">
                <img src="./avatar.png" alt="img"/>
                <span>John Doe</span>
            </div>
            <button>Add user</button>
        </div>
    </div>
  )
}

export default Adduser