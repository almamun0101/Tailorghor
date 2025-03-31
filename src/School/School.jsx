import React from 'react'
import { useState } from 'react'

const options = [
    {value:"option 1", lebel:"Option 1"},
    {value:"option 2", lebel:"Option 2"},
    {value:"option 3", lebel:"Option 3"}
]

export const School = () => {
    const [selected , setSelected] = useState("")
    
    const handleSelected = (event)=>{
        setSelected(event.target.value);
    }
  return (
    <div>
        <div className="container px-10 flex flex-col gap-4 justify-center items-center pt-5">
            <label htmlFor="dropdown" className=' text-center font-bold'>Select A School</label>
            <select name="" id="dropdown" value={selected} onChange={handleSelected}
            className="border rounded-lg p-2 w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select The School Name</option>
                {options.map((option)=>(
                    <option key={option.value} value={option.value}>{option.lebel}</option>
                ))}
            </select>
        </div>
    </div>
  )
}
