import React from 'react'
import Button from './Button'
import Button1 from './Button1'
import Buttonapp from './Buttonapp'

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

export default FunctionalComponent
export {FunctionalComponent1, FunctionalComponent2, FunctionalComponent3 }
