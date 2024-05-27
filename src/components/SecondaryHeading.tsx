import React from 'react'

type containerProps = {
    style:React.CSSProperties
}

function SecondaryHeading(props:containerProps) {
  return (
    <div style={props.style}>
      Heading is style with css properties
    </div>
  )
}

export default SecondaryHeading
