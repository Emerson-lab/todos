'use client'
import { useContext } from 'react'
import { TaskContext } from "src/context/TextContext"

export function SearchTask() {
  const {
    filteredTitle,
    handleFilterTask,
    setFilteredTitle,
    inputRef,
    handleKeyDown
  } = useContext(TaskContext)

  function updateTitle() {
    setFilteredTitle('')
  }

  return (
    <div className="border border-slate-700 flex justify-between px-10">
      <input
        className="text-black px-1"
        placeholder="Filter tasks"
        value={filteredTitle}
        onChange={handleFilterTask}
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <button
        className="border p-1"
        onClick={() => updateTitle()}
      >
        Clear
      </button>
    </div>
  )
}