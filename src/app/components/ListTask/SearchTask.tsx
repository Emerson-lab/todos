'use client'
import { useContext} from 'react'
import { TaskContext } from "src/app/context/TextContext"

export function SearchTask() {
  const {filteredTitle, handleFilterTask, setFilteredTitle} = useContext(TaskContext)

  return (
    <div className="border border-slate-700 flex justify-between px-10">
    <input
      className="text-black"
      placeholder="Filter tasks"
      value={filteredTitle}
      onChange={handleFilterTask}
    />
    <button
      className="border p-1"
      onClick={() => setFilteredTitle('')}
    >
      Clear
    </button>
  </div>
  )
}