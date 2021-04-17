import React, { useState } from "react";

let baseUrl = "fakeapi";

export const Todo = () => {

let [data,setData] = useState();

const showTodoHandle =() =>{
      fetch(`/${baseUrl}/getTodos`)
      .then((res) => res.json())
      .then((data) => {
          setData(data.todos)
          console.log("data is", data)
        });
  }

  const addTodoHandle =()=>{
      fetch(`${baseUrl}/addTodo`,{
          method :"POST",
          body:{name  : 'bilo' , id : 2}
      }).then(res =>{
          console.log("success " , res)
         // setData(data)
      }).catch(error =>{
          console.log("error occured",error)
      })
      
  }
  return (
    <div>
      <h3>Hello from todos</h3>
      <button onClick={showTodoHandle}>SHow</button>
      <button onClick={addTodoHandle}>ADD</button>

      {JSON.stringify(data)}

    
    </div>
  );

  }