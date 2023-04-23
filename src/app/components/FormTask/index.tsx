'use client'

import { useContext } from "react";
import { TaskContext } from "src/app/context/TextContext";

export function FormTask() {
  const { title, setTitle, handleAddTodo } = useContext(TaskContext)

  return (
    <div className="w-96 border border-slate-700 py-10 flex justify-center gap-6 mb-10">
      <input
        className="text-black"
        placeholder="Add new task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button
        className={!title.trim() ? 'cursor-not-allowed border p-1' : 'cursor-pointer border p-1'}
        disabled={!title.trim()}
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  )
}