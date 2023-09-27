export interface Task {
  id: string;
  estimate: number;
  status: string;
  secondsSpent: number;
  dependsOn: Task[];
}

export function map(task: Task, f: (t: Task) => Task): Task {
  return {
    ...f(task),
    dependsOn: task.dependsOn.map((d) => map(d, f))
  }
}

export function unwrapTree(tree: Task): Task[] {
  return [tree].concat(...tree.dependsOn.flatMap(unwrapTree))
}