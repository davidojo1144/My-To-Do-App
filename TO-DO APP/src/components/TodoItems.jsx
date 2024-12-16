import React from 'react'
import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png"
import delete_item from "../assets/delete.png"

const TodoItems = ({text, id, isComplete, deleteTodo, toogle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

      <div onClick={()=>{toogle(id)}} className='flex flex-1 items-center gap-5 cursor-pointer'>
        <img src={tick} alt="" className='w-7'/>
        <p className='text-xl font-medium text-slate-700'>{text}</p>
      </div>

      <img onClick={()=> {deleteTodo(id)}} className='w-6 cursor-pointer' src={delete_item} alt="" />
    </div>
  )
}

export default TodoItems
