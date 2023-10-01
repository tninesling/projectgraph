import { map, Status, type Task } from "$lib";
import { writable } from "svelte/store";

export const { subscribe, update } = writable<Task>(
  {
    id: "Task 7",
    description: "Bring the stuff from Task 6 home",
    estimate: 1, status: Status.Done, secondsSpent: 8320,
    dependsOn: [
      {
        id: "Task 6",
        description: "Pick up groceries at the store",
        estimate: 3, status: Status.Done, secondsSpent: 10235,
        dependsOn: [
          {
            id: "Task 4",
            description: "Put bags in the car",
            estimate: 2, status: Status.ToReview, secondsSpent: 1820,
            dependsOn: [],
          },
          {
            id: "Task 5",
            description: "Create a grocery list",
            estimate: 1, status: Status.InReview, secondsSpent: 2456,
            dependsOn: [],
          },
        ],
      },
      {
        id: "Task 3",
        description: "Do another thing",
        estimate: 3, status: Status.InProgress, secondsSpent: 7284,
        dependsOn: [
          {
            id: "Task 2",
            description: "Do something that depends on Task 1",
            estimate: 2, status: Status.Todo, secondsSpent: 120,
            dependsOn: [
              {
                id: "Task 1",
                description: "Do something",
                estimate: 5, status: Status.Todo, secondsSpent: 0,
                dependsOn: [],
              },
            ],
          }
        ],
      },
    ],
  },
);

const progressToggleTargets: Record<Status, Status> = {
  [Status.Todo]: Status.InProgress,
  [Status.InProgress]: Status.Todo,
  [Status.ToReview]: Status.InReview,
  [Status.InReview]: Status.ToReview,
  [Status.Done]: Status.Done,
}

export const taskTree = {
  subscribe,
  incrementTimers: () => update((tree) =>
      map(tree, (t) =>
        ![Status.InProgress, Status.InReview].includes(t.status)
          ? t
          : { ...t, secondsSpent: t.secondsSpent + 1 }
      )
  ),
  moveTask: (taskId: string, newStatus: Status) => update((tree) => 
    map(tree, (t) => t.id !== taskId ? t : Object.assign(t, { status: newStatus }))
  ),
  toggleInProgress: (taskId: string) => update((tree) =>
    map(tree, (t) => t.id !== taskId ? t : Object.assign(t, { status: progressToggleTargets[t.status] }))
  )
}