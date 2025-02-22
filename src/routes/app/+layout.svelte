<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import '@/app.css';
	import BackButton from '@/components/backButton.svelte';
	import MenuButton from '@/components/menuButton.svelte';
	import ThemeController from '@/components/themeController.svelte';
	let { children } = $props();
	let isMobileOpen = $state(false);

	onNavigate(() => {
		isMobileOpen = false;
	});
</script>

<div class="flex h-screen w-screen max-md:flex-col">
	<!-- mobile navbar -->
	<div class="bg-base-100 flex items-center p-2 md:hidden">
		<BackButton />
		<div class="grow text-center text-lg font-semibold uppercase">Clientes</div>
		<MenuButton onclick={() => (isMobileOpen = true)} />
	</div>
	<!-- backdrop -->
	<button
		onclick={() => (isMobileOpen = false)}
		aria-label="close menu"
		class="inset-0 z-20 backdrop-blur-sm md:hidden {isMobileOpen ? 'fixed' : 'hidden'}"
	></button>
	<!-- sidebar -->
	<div
		class="bg-base-100 top-0 bottom-0 z-30 flex w-full max-w-xs flex-col p-2 transition-all max-md:fixed {isMobileOpen
			? 'max-md:translate-x-0'
			: 'max-md:-translate-x-full'}"
	>
		<figure class="relative flex justify-center">
			<img src="/logo.png" alt="" />
			<button
				class="absolute top-0 right-0 size-10 md:hidden"
				aria-label="Toggle navigation"
				onclick={() => (isMobileOpen = false)}
				><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
					><title>close</title><path
						d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
					/></svg
				></button
			>
		</figure>
		<div class="mt-10 flex grow flex-col gap-2">
			<a href="/#" class="rounded-lg bg-green-600/40 p-2 font-semibold">Dashboard</a>
			<a href="/app/clientes" class="p-2">Clientes</a>
			<a href="/#" class="p-2">Estoque</a>
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
