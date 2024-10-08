import React from 'react'
import App from './App';

const Show = (props) => {
    const {users, setusers} = props  ;

    
  const deleteHandler = (index) =>{
    const copyuser = [...users]
    copyuser.splice(index, 1)
    setusers(copyuser)
  }

  let data = <h2>Loading...</h2>



  if(users.length > 0){

    
    data = users.map((user, index) => {
      return <div className="card" key={index}>
        <div className='kakk w-full h-full bg-red' >
        {user.username}
        <span onClick={() => deleteHandler(index)}>+</span>
        </div>
        </div>
    })
    
  }
  return (
    <div>
      {data}
    </div>
  )
}

export default Show
