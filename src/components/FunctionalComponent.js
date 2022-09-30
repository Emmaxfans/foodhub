import React from 'react'
import Button from './Button'
import Button1 from './Button1'
import Buttonapp from './Buttonapp'
import OrderRow from './OrderRow'

export const FunctionalComponent = () => {
  return (
    <>
      <Button props="Get Notified"/>

    </>
  )
}
// export default FunctionalComponent

function FunctionalComponent1(){
  return (
    <>
      <Button1 props="Sign Up"/>
    </>
  )
}

function FunctionalComponent2(){
  return (
    <>
      <Buttonapp/>
      {/* <Buttonapp props="Apple"/> */}
    </>
  )
}

function FunctionalComponent3(){
  return (
    <>
      <Buttonapp/>
      {/* <Buttonapp props="Apple"/> */}
    </>
  )
}

function FunctionalComponent4(){
  return (
    <>
    
     <OrderRow props={"ROW1"} />
     
     {/* <OrderRow props="ROW2" />
     <OrderRow props="ROW3" /> */}
    </>
  )
}

function FunctionalComponent5(){
  return (
    <>
     {/* <OrderRow props="ROW1"/> */}
     <OrderRow props="ROW2" />
     {/* <OrderRow props="ROW3" /> */}
    </>
  )
}

function FunctionalComponent6(){
  return (
    <>
     {/* <OrderRow props="ROW1"/> */}
     {/* <OrderRow props="ROW2" /> */}
     <OrderRow props="ROW3" />
    </>
  )
}

export default FunctionalComponent
export {FunctionalComponent1, FunctionalComponent2, FunctionalComponent3, FunctionalComponent4, FunctionalComponent5, FunctionalComponent6 }
