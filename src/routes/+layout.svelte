<script>
	import '../app.css';
</script>

<div class="min-h-screen bg-white">
	<!-- Top Banner -->
	<div class="bg-gray-900 px-4 py-2 text-center text-sm text-gray-200">
		<span class="inline-flex items-center gap-2 text-wrap">
			<span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
			yazgan.xyz - Alper Reha Yazgan personal blog
		</span>
	</div>

	<slot />

	<main class="mx-auto flex flex-col content-center items-center justify-center border-t-2">
		<!-- Footer -->
		<footer class="flex max-w-md border-gray-200 pt-8 text-center text-sm text-gray-500">
			<p>
				u can find me on
				<a href="https://github.com/AlperRehaYAZGAN" class="text-blue-500 hover:underline">GitHub</a
				>
				and
				<a href="https://twitter.com/alperreha" class="text-blue-500 hover:underline">X</a>
			</p>
		</footer>
	</main>
</div>
