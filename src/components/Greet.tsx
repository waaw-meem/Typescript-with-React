type greetProps = {
    name?:string,
    messageCount?:number,
    isLoggedIn?:boolean
}

export const Greet = (props:greetProps) => {
    return (
        <div>
           { 
           props.isLoggedIn ? 
           `Hello ${props.name}, Welcome you have ${props.messageCount} new messgaes..`
           :`Welcome Guest`
           }
        </div>
    )
}