import { derived, writable } from "svelte/store"
import { taskTree } from "./taskTree"
import Fuse from "fuse.js"
import { unwrapTree } from "$lib"

export const taskQuery = writable("");

const fuseOptions = {
  includeScore: true,
  keys: ["id"]
}
const fuse = derived(taskTree, ($tasks) => new Fuse(unwrapTree($tasks), fuseOptions))

export const taskIndex = derived([fuse, taskQuery], ([$fuse, $query]) => {
  const results = $fuse.search($query);

  return {
    searchResults: results.map((r) => r.item.id)
  }
})
