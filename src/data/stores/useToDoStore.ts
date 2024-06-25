import { create } from "zustand";
import { generateId } from "./helpers";
import { devtools , persist } from "zustand/middleware";

interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>()(
  devtools(
    persist(
      (set, get) => ({
        tasks: [],
        createTask: (title) => {
          const { tasks } = get();
          const newTask = {
            id: generateId(),
            title,
            createdAt: Date.now(),
          };
          set({
            tasks: [newTask, ...tasks], 
          });
        },
        updateTask: (id: string, title: string) => {
          const { tasks } = get();
          set({
            tasks: tasks.map((task) => 
              task.id === id ? { ...task, title } : task
            ),
          });
        },
        removeTask: (id: string) => {
          const { tasks } = get();
          set({
            tasks: tasks.filter((task) => task.id !== id),
          });
        },
      }),
      {
        name: "todo-store", 
      }
    )
  )
);
