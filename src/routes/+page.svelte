<script lang="ts">
	import Theme from '$lib/theme/Theme.svelte';
	import {
		IconBrandLinkedin,
		IconBrandTwitter,
		IconBrandTwitterFilled,
		IconBrandYoutube
	} from '@tabler/icons-svelte';
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-800">
	<div class="flex flex-col gap-3">
		<div class="text-center">
			<img
				src="https://avatars.githubusercontent.com/u/43668181?s=256&v=4"
				alt="Profile Avatar"
				class="mx-auto mb-4 h-32 w-32 rounded-full"
			/>
			<h1 class="text-2xl font-bold text-gray-800 dark:text-gray-200">yazgan.xyz</h1>
			<a
				href="https://twitter.com/alperreha"
				target="_blank"
				rel="noopener"
				class="text-gray-600 dark:text-gray-100">@alperreha</a
			>
		</div>

		<div class="flex justify-center space-x-4">
			<a
				href="https://linkedin.com/in/alperreha"
				class="text-gray-600 transition-all duration-300 hover:scale-110 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
				rel="noopener"
				target="_blank"
			>
				<IconBrandLinkedin size="1.75rem" />
			</a>
			<a
				href="https://twitter.com/alperreha"
				class="text-gray-600 transition-all duration-300 hover:scale-110 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
				rel="noopener"
				target="_blank"
			>
				<IconBrandTwitter size="1.75rem" />
			</a>
			<a
				href="https://youtube.com/@rehash_dev"
				rel="noopener"
				target="_blank"
				class="text-gray-600 transition-all duration-300 hover:scale-110 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
			>
				<IconBrandYoutube size="1.75rem" />
			</a>
		</div>

		<div class="flex justify-center">
			<Theme />
		</div>

		<div class="max-w-sm text-wrap text-center">
			<h2 class="text-lg font-bold text-gray-800 dark:text-gray-300">About Me</h2>
		</div>
		<div class="max-w-sm text-wrap text-center">
			<p class="text-gray-600 dark:text-gray-400">
				Hello! I'm Alper Reha Yazgan, a software engineer from Turkey. I'm passionate about web
				development and open-source. I'm currently working at <a href="https://gantek.com"
					>Gantek Teknoloji</a
				> as a Software Engineer.
			</p>
		</div>
	</div>
</div>
