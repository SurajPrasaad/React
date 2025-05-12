import React from 'react'

const Dummy = (props) => {
  return (
    <>
   <h1>hello 👻 from {props.name}</h1>
   {props.children}
   </>
  )
}

export default Dummy