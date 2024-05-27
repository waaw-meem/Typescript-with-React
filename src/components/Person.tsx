import { personProps } from "./Person.type"

export const Person = (props:personProps) =>{
    return (
        <div>{props.name.fname} {props.name.lname}</div>
    )
}