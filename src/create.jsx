import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';

const create = (props) => {
    // console.log(props)
    const {users, setusers} = props  ;
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [city, setcity] = useState("")
    const [gender, setgender] = useState("")
  


    const submitHandler = (e)=>{
        e.preventDefault();
        const newuser = {username, password, city, gender}

        if(username.trim().length === 0){
          return toast.error("username is empty")
        }
    
        console.log({username, password, city, gender})
        const copyuser = [...users]
        copyuser.push(newuser);
        setusers(copyuser)
      }


  return (
    <div>
         <form onSubmit={submitHandler}>
        <input type="text"
        placeholder="username" 
        onChange={(e) => setusername(e.target.value)}
        value={username}/>


        <input type="password"
        placeholder="password" 
        onChange={(e) => setpassword(e.target.value)}
        value={password}/>
        
        <select onChange={(e) =>setcity(e.target.value)}>
          <option value="bhopal">bhopal</option>
          <option value="indore">indore</option>
          <option value="sagar">sagar</option>
          <option value="rewa">rewa</option>
          <option value="satna">satna</option>
          </select> 

         <label>
          <input type="radio" name="gender" onChange={(e) =>setgender(e.target.value)} value="male" />male
          <input type="radio" name="gender" onChange={(e) =>setgender(e.target.value)} value="female" />female
          <input type="radio" name="gender" onChange={(e) =>setgender(e.target.value)} value="other" />other
         </label>


        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default create
