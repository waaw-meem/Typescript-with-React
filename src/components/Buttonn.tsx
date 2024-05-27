import React from 'react'

type buttonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>,id:number) => void
}

function Buttonn(props:buttonProps) {
  return (
    <div>
      <button onClick={event => props.handleClick(event,11)}>Click Here!</button>
    </div>
  )
}

export default Buttonn
