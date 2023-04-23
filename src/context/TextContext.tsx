'use client'

import {
  SetStateAction,
  createContext,
  useState,
  useRef,
  useEffect,
  Dispatch,
  RefObject,
  KeyboardEvent,
  ChangeEvent
} from 'react'
import { v4 as uuidv4 } from 'uuid';

interface TaskProps {
  id: string;
  title: string;
}

interface ITaskProps {
  title: string;
  tasks: TaskProps[];
  filteredTitle: string;
  filteredTasks: TaskProps[];
  handleAddTodo: () => void;
  handleDeleteTask: (id: string) => void;
  inputRef: RefObject<HTMLInputElement>;
  setTitle: (value: SetStateAction<string>) => void;
  setFilteredTitle: Dispatch<SetStateAction<string>>;
  handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleFilterTask: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TaskContext = createContext({} as ITaskProps)

interface TransactionsProviderProps {
  children: React.ReactNode
}

export function TaskProvider({ children }: TransactionsProviderProps) {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [filteredTitle, setFilteredTitle] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  function handleFilterTask(event: React.ChangeEvent<HTMLInputElement>) {
    setFilteredTitle(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault(); // previne o comportamento padrão de inserir uma quebra de linha
      handleAddTask();
      setFilteredTitle('');
    }
  }

  function handleAddTask() {
    if (title.trim() !== '') {
      const newTask = { id: uuidv4(), title: title };
      setTasks(prevTasks => [...prevTasks, newTask]);
      setTitle('');
    }
  }

  function handleDeleteTask(id: string) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }

  const filteredTasks =
    tasks.filter(task => task.title.toLowerCase().includes(filteredTitle.toLowerCase()));

  return (
    <TaskContext.Provider
      value={{
        handleFilterTask,
        handleDeleteTask,
        filteredTasks,
        tasks,
        setFilteredTitle,
        filteredTitle,
        title,
        setTitle,
        handleAddTodo: handleAddTask,
        inputRef,
        handleKeyDown
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}