<script lang="ts">
	import '@/app.css';
	import ThemeController from '@/components/themeController.svelte';
	let { children } = $props();
</script>

<div class="h-screen w-screen bg-gray-200">
	<div class="fixed right-2 top-2">
		<ThemeController />
	</div>
	{@render children()}
</div>
