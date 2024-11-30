<script>
	import counterStore from './Counter.store';
</script>

<div class="flex items-center justify-center space-x-4">
	<button
		onclick={counterStore.decrement}
		class="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">-</button
	>
	<span>{$counterStore}</span>
	<button
		onclick={counterStore.increment}
		class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">+</button
	>
</div>
