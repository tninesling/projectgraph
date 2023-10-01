import { map, type Task } from "$lib";
import { writable } from "svelte/store";

export const { subscribe, update } = writable<Task>(
  {
    id: "Task 7",
    estimate: 1, status: "Done", secondsSpent: 8320,
    dependsOn: [
      {
        id: "Task 6",
        estimate: 3, status: "Done", secondsSpent: 10235,
        dependsOn: [
          {
            id: "Task 4",
            estimate: 2, status: "To Review", secondsSpent: 1820,
            dependsOn: [],
          },
          {
            id: "Task 5",
            estimate: 1, status: "In Review", secondsSpent: 2456,
            dependsOn: [],
          },
        ],
      },
      {
        id: "Task 3",
        estimate: 3, status: "In Progress", secondsSpent: 7284,
        dependsOn: [
          {
            id: "Task 2",
            estimate: 2, status: "Todo", secondsSpent: 120,
            dependsOn: [
              {
                id: "Task 1",
                estimate: 5, status: "Todo", secondsSpent: 0,
                dependsOn: [],
              },
            ],
          }
        ],
      },
    ],
  },
);

const progressToggleTargets: Record<string, string> = {
  Todo: "In Progress",
  "In Progress": "Todo",
  "To Review": "In Review",
  "In Review": "To Review",
  "Done": "Done",
}

export const taskTree = {
  subscribe,
  incrementTimers: () => update((tree) =>
      map(tree, (t) =>
        !["In Progress", "In Review"].includes(t.status)
          ? t
          : { ...t, secondsSpent: t.secondsSpent + 1 }
      )
  ),
  moveTask: (taskId: string, newStatus: string) => update((task) => 
    map(task, (t) => t.id !== taskId ? t : Object.assign(t, { status: newStatus }))
  ),
  toggleInProgress: (taskId: string) => update((tree) =>
    map(tree, (t) => t.id !== taskId ? t : Object.assign(t, { status: progressToggleTargets[t.status] }))
  )
}