'use client'

import { useContext } from 'react'
import { AiFillRest } from 'react-icons/ai'
import { TaskContext } from 'src/app/context/TextContext'
import { SearchTask } from './SearchTask';

export function ListTask() {
  const {
    tasks,
    filteredTasks,
    handleDeleteTodo
  } = useContext(TaskContext);
  
  return (
    <>
      {tasks.length > 0 &&
        <div className="border border-slate-700 w-96 flex flex-col gap-2 p-1">

         <SearchTask/>

          {filteredTasks.map(todo => (
            <div key={todo.id}>
              <div className="border border-slate-700 flex justify-between px-10">
                <p>{todo.title}</p>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  <AiFillRest size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  )
}