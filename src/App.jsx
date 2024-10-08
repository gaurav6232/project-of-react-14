



import { useState } from "react"
import Create from "./create"
import Show from "./Show"


const App = () => {
  const [users, setusers] = useState([])
  

 

 
  return (
    <div>
     <Create users={users} setusers={setusers} />
      <hr />
      <Show users={users} setusers={setusers}/>
    </div>
  )
}

export default App






















// import { useState } from "react"


// const App = () => {
//   const [users, setusers] = useState([])
//   const [username, setusername] = useState("")
//   const [password, setpassword] = useState("")
//   const [city, setcity] = useState("")
//   const [gender, setgender] = useState("")

 
//   let data = <h2>Loading...</h2>

//   if(users.length > 0){

    
//     data = users.map((user, index) => {
//       return <h1 key={index}> {user.username}</h1>
//     })
    
//   }

//   const submitHandler = (e)=>{
//     e.preventDefault();
//     const newuser = {username, password, city, gender}

//     console.log({username, password, city, gender})
//     const copyuser = [...users]
//     copyuser.push(newuser);
//     setusers(copyuser)
//   }
//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input type="text"
//         placeholder="username" 
//         onChange={(e) => setusername(e.target.value)}
//         value={username}/>


//         <input type="password"
//         placeholder="password" 
//         onChange={(e) => setpassword(e.target.value)}
//         value={password}/>
        
//         <select onChange={(e) =>setcity(e.target.value)}>
//           <option value="bhopal">bhopal</option>
//           <option value="indore">indore</option>
//           <option value="sagar">sagar</option>
//           <option value="rewa">rewa</option>
//           <option value="satna">satna</option>
//           </select> 

//          <label>
//           <input type="radio" name="gender" onChange={(e) =>setgender(e.target.value)} value="male" />male
//           <input type="radio" name="gender" onChange={(e) =>setgender(e.target.value)} value="female" />female
//           <input type="radio" name="gender" onChange={(e) =>setgender(e.target.value)} value="other" />other
//          </label>


//         <button>Submit</button>
//       </form>
//       <hr />
//       {data}
//     </div>
//   )
// }

// export default App
