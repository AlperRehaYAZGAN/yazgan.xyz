import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable<number>(0);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		reset: () => set(0)
	};
}

const countStore = createCount();

export default countStore;
