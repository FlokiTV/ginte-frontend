<script lang="ts">
	import { onNavigate } from '$app/navigation';

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
	<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
		><title>chevron-left</title><path
			d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
		/></svg
	>
</button>
