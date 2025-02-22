<script lang="ts">
	import '@/app.css';
	import ThemeController from '@/components/themeController.svelte';
	let { children } = $props();
	let isMobileOpen = $state(false);
</script>

<div class="flex h-screen w-screen max-md:flex-col">
	<!-- mobile navbar -->
	<div class="bg-base-100 flex items-center p-2 md:hidden">
		<button class="btn size-10" aria-label="Toggle navigation" onclick={() => (isMobileOpen = true)}
			>O</button
		>
		<div class="grow text-center text-lg font-semibold uppercase">Clientes</div>
		<div class="size-10"></div>
	</div>
	<!-- backdrop -->
	<button
		onclick={() => (isMobileOpen = false)}
		aria-label="close menu"
		class="inset-0 z-20 backdrop-blur-sm md:hidden {isMobileOpen ? 'fixed' : 'hidden'}"
	></button>
	<!-- sidebar -->
	<div
		class="bg-base-100 top-0 bottom-0 z-30 flex w-full max-w-xs flex-col p-2 transition-all max-md:fixed max-md:{isMobileOpen
			? 'translate-x-0'
			: '-translate-x-full'}"
	>
		<figure class="relative flex justify-center">
			<img src="/logo.png" alt="" />
			<button
				class="btn absolute top-0 right-0 size-10 md:hidden"
				aria-label="Toggle navigation"
				onclick={() => (isMobileOpen = false)}>X</button
			>
		</figure>
		<div class="mt-10 flex grow flex-col gap-2">
			<a href="/#" class="rounded-lg bg-green-600/40 p-2 font-semibold">Clientes</a>
			<a href="/#" class="p-2">Adicionar clientes</a>
		</div>
		<div class="flex flex-col gap-2">
			<div class="flex justify-between p-2">
				<span>Tema</span>
				<ThemeController />
			</div>
			<a href="/#" class="text-error rounded-lg p-2 font-semibold">Sair</a>
		</div>
	</div>
	<div class="bg-base-300 grow">
		{@render children()}
	</div>
</div>
