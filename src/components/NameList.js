import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['Mehwish', 'Owais', 'Mishal','Maryam', 'Mishal']
    const persons = [
        {
        id: 1,
        name: 'Mehwish',
        age: 33,
        skill: 'React'
       },
       {
           id: 2,
           name: 'owais',
           age:37,
           skill: 'c#'
       },
       {
        id: 3,
        name: 'Mishal',
        age:10,
        skill: 'python'

       },
       {
        id: 4,
        name: 'Maryam',
        age:5,
        skill: 'Art & Craft'

       }
      ]
     
    const nameList = names.map((name, index) =><h2 key={index}>{index}{name}</h2>)  
    return <div>{nameList}</div>
}
           
export default NameList
