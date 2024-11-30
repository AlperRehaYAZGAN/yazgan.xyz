<script>
	import { WebContainer } from '@webcontainer/api';
	import '@xterm/xterm/css/xterm.css';

	let terminalElement = $state();
	let terminal = $state();
	let webcontainerInstance = $state();
	let containerStatus = $state('Initializing...');
	let errorMessage = $state('');

	$effect(async () => {
		let xterm = await import('@xterm/xterm'); // import when the dom is ready
		let fit = await import('@xterm/addon-fit'); // import when the dom is ready
		// Initialize terminal
		terminal = new xterm.Terminal({
			fontFamily: 'Consolas',
			cursorBlink: true
		});

		const fitAddon = new fit.FitAddon();
		terminal.loadAddon(fitAddon);

		// Open terminal in the DOM element
		terminal.open(terminalElement);
		fitAddon.fit();

		// Boot WebContainer
		bootWebContainer();

		// // on resize
		// function handleResize() {
		// 	console.log('resizing...');
		// 	terminal?.fit();
		// }
		// window.addEventListener('resize', handleResize);

		// Cleanup on unmount
		return () => {
			if (terminal) {
				terminal.dispose();
			}
			if (webcontainerInstance) {
				webcontainerInstance.teardown();
			}
			// // remove resize event listener
			// window.removeEventListener('resize', handleResize);
		};
	});

	async function bootWebContainer() {
		try {
			webcontainerInstance = await WebContainer.boot();
			containerStatus = 'WebContainer booted successfully!';

			const shellProcess = await webcontainerInstance.spawn('jsh', {
				terminal: {
					cols: terminal.cols,
					rows: terminal.rows
				}
			});

			// Wire up stdin/stdout
			shellProcess.output.pipeTo(
				new WritableStream({
					write(data) {
						terminal.write(data);
					}
				})
			);

			// Handle terminal input
			const input = shellProcess.input.getWriter();
			terminal.onData((data) => {
				input.write(data);
			});

			// Handle terminal resizing
			terminal.onResize(({ cols, rows }) => {
				shellProcess.resize({ cols, rows });
			});
		} catch (error) {
			containerStatus = 'Boot failed';
			errorMessage = error.message;
			console.error('WebContainer boot error:', error);
		}
	}
</script>

<div class="flex h-full max-w-full flex-col">
	<div class="border-b border-gray-700 p-2 font-mono text-white">
		<span>
			<span class="text-green-400">$</span> Terminal
		</span>
		<span class="ml-2 rounded px-2 py-0.5 text-xs {containerStatus.includes('failed') 
			? 'bg-red-700 text-red-200' 
			: containerStatus.includes('success') 
				? 'bg-green-700 text-green-200' 
				: 'bg-gray-700 text-gray-300'}">{containerStatus}</span>
				<button 
					class="float-right rounded bg-red-600 px-2 py-0.5 text-xs text-white hover:bg-red-700"
					onclick={() => {
						if (webcontainerInstance) {
							webcontainerInstance.teardown();
							containerStatus = 'Container closed';
						}
					}}
				>
					Close
				</button>
	</div>
	{#if errorMessage}
		<div class="bg-red-50 text-red-600">
			<p>Error: {errorMessage}</p>
		</div>
	{/if}
	<div id="terminal" bind:this={terminalElement} class="h-full"></div>
</div>
