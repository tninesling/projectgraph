import type { Task } from "$lib";
import { writable } from "svelte/store";

export const taskTree = writable<Task>(
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