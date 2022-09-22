import React from 'react'
import Button from './Button'
import Button1 from './Button1'

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
export default FunctionalComponent
export {FunctionalComponent1}
