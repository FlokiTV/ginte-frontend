<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import IconLeft from '@/icons/IconLeft.svelte';

	let show = $state(false);

	function check() {
		if (location.pathname !== '/app') {
			show = true;
		} else {
			show = false;
		}
	}

	$effect(check);
	onNavigate(check);
</script>

<button
	class="size-10 {!show && 'opacity-0'}"
	onclick={() => {
		//back one page
		if (show) window.history.back();
	}}
>
	<IconLeft />
</button>
