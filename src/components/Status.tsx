import React from 'react'

type statusProps = {
    status?:'load' | 'success' | "error"
}

const Status = (props:statusProps) => {
    let message;
    if(props.status === 'load'){
        message = 'Loading...'
    }else  if(props.status === 'success'){
        message = 'Data fetch Successfully!'
    }else if(props.status === 'error'){
        message = 'Error Occur try again'
    }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  )
}

export default Status
