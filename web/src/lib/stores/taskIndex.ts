import { derived, writable } from "svelte/store"
import { taskTree } from "./taskTree"
import Fuse from "fuse.js"
import _ from "lodash";
import { unwrapTree } from "$lib"

export const taskQuery = writable("");

const fuseOptions = {
  includeScore: true,
  keys: ["id", "description"]
}
const fuse = derived(taskTree, ($tasks) => new Fuse(unwrapTree($tasks), fuseOptions))

export const taskIndex = derived([fuse, taskQuery], ([$fuse, $query]) => {
  const results = $fuse.search($query);

  return {
    searchResults: _.keyBy(results, (r) => r.item.id)
  }
})
