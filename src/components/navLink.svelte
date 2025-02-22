<script lang="ts">
	import { onNavigate } from '$app/navigation';

	const { href = '#', isActive, children } = $props();

	let pathNow = $state('/app');

	$effect(() => {
		pathNow = location.pathname;
	});

	onNavigate(() => {
		pathNow = location.pathname;
	});
</script>

<a
	{href}
	class="rounded-lg {isActive(pathNow)
		? 'bg-green-600/40'
		: 'hover:bg-green-600/10'} p-2 font-semibold"
>
	{@render children()}
</a>
