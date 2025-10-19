import React from 'react'

const App = () => {

  localStorage.setItem("age","21");

  const user = {
    userName : "rohit",
    age : 21 ,
  }

  localStorage.setItem("user" ,JSON.stringify(user));

  const usera = JSON.parse(localStorage.getItem("user"));

  return (
    <div>App</div>
  )
}

export default App