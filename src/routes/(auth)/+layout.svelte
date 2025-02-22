<script lang="ts">
	import '@/app.css';
	import ThemeController from '@/components/themeController.svelte';
	let { children } = $props();
</script>

<div class="h-screen w-screen">
	<div class="fixed top-2 right-2">
		<ThemeController />
	</div>
	{@render children()}
</div>
