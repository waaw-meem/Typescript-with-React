import { Name } from "./Person.type"

type personLists = {
    names:Name[]
}

export const PersonList = (props:personLists) =>{
    return (
        <div>
           {props.names.map(name=>{
          return (
            <h2>{name.fname} {name.lname}</h2>
          )
           })}
        </div>
    )
}