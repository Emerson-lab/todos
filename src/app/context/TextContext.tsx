'use client'

import {SetStateAction, createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

interface TaskProps {
  id: string;
  title: string;
}

interface ITaskProps {
  handleFilterTask: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteTodo: (id: string) => void;
  filteredTasks: TaskProps[];
  tasks: TaskProps[];
  setFilteredTitle: React.Dispatch<SetStateAction<string>>;
  filteredTitle: string;
  title: string;
  setTitle: (value: SetStateAction<string>) => void;
  handleAddTodo: () => void;
}

export const TaskContext = createContext({} as ITaskProps)

interface TransactionsProviderProps {
  children: React.ReactNode
}

interface TodoProps {
  id: string;
  title: string;
}

export function TaskProvider({ children }: TransactionsProviderProps) {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState<TodoProps[]>([]);
  const [filteredTitle, setFilteredTitle] = useState('');

  function handleFilterTask(event: React.ChangeEvent<HTMLInputElement>) {
    setFilteredTitle(event.target.value);
  }  

  function handleAddTodo() {
    if (title.trim() !== '') {
      const newTask = { id: uuidv4(), title: title };
      setTasks(prevTasks => [...prevTasks, newTask]);
      setTitle('');
    }
  }

  function handleDeleteTodo(id: string) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }

  const filteredTasks =
  tasks.filter(task => task.title.toLowerCase().includes(filteredTitle.toLowerCase()));

  return (
    <TaskContext.Provider
      value={{ 
        handleFilterTask, 
        handleDeleteTodo, 
        filteredTasks, 
        tasks, 
        setFilteredTitle,
        filteredTitle,
        title,
        setTitle,
        handleAddTodo
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}