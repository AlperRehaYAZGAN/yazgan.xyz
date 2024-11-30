<script>
	import { page } from '$app/stores';
</script>

<div class="flex min-h-[calc(100vh-10rem)] items-center justify-center bg-gray-100">
	<div class="space-y-6 text-center">
		<div class="animate-bounce">
			<h1 class="text-9xl font-bold text-gray-800">{$page.status}</h1>
		</div>
        <div class="space-y-2">
            {#if $page.status === 404}
                <h2 class="text-2xl font-semibold text-gray-700">Page Not Found</h2>
                <p class="text-gray-600">The resource you're looking for doesn't exist.</p>
            {:else}
                <h2 class="text-2xl font-semibold text-gray-700">Oops! Something went wrong</h2>
                <p class="text-gray-600">{$page.error?.message || 'An unexpected error occurred'}</p>
            {/if}
        </div>

		<div class="mt-8">
			<a
				href="/"
				class="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors duration-200 hover:bg-blue-700"
			>
				Go back home
			</a>
		</div>
	</div>
</div>
