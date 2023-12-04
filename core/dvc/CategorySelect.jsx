import React, { useState } from 'react'
export const CategorySelect =  props => {
  const [selectedTheme, setSelectedTheme] = useState(null)
  
    let  options = JSON.stringify(props.categories);
   // let ids = options.map( (item) => item.name);
    //options = options.map(({ name }) => name);
//console.log(options);
  return (
    <div>
      <select
      className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
       // value={selectedTheme}
       // onChange={e => setSelectedTheme(e.target.value)}
      >
        {/* {options?.map(category => {
          ;<option>{category}</option>
        })} */}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div>
    </div>
  )
}