'use client'

import { useContext } from 'react'
import { AiFillRest } from 'react-icons/ai'
import { TaskContext } from 'src/context/TextContext'
import { SearchTask } from './SearchTask';

export function ListTask() {
  const {
    tasks,
    filteredTasks,
    handleDeleteTask
  } = useContext(TaskContext);
  
  return (
    <>
      {tasks.length > 0 &&
        <div className="border border-slate-700 w-96 flex flex-col gap-2 p-1">

         <SearchTask/>

          {filteredTasks.map(task => (
            <div key={task.id}>
              <div className="border border-slate-700 flex justify-between px-10">
                <p>{task.title}</p>
                <button onClick={() => handleDeleteTask(task.id)}>
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