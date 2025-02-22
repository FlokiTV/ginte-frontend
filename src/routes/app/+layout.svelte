<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import '@/app.css';
	import BackButton from '@/components/backButton.svelte';
	import MenuButton from '@/components/menuButton.svelte';
	import NavLink from '@/components/navLink.svelte';
	import ThemeController from '@/components/themeController.svelte';
	import IconBox from '@/icons/IconBox.svelte';
	import IconBrush from '@/icons/IconBrush.svelte';
	import IconClose from '@/icons/IconClose.svelte';
	import IconDashboard from '@/icons/IconDashboard.svelte';
	import IconLogout from '@/icons/IconLogout.svelte';
	import IconPersons from '@/icons/IconPersons.svelte';
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
		<!-- logo -->
		<figure class="relative flex justify-center">
			<img src="/logo.png" alt="" />
			<button
				class="absolute top-0 right-0 size-10 md:hidden"
				aria-label="Toggle navigation"
				onclick={() => (isMobileOpen = false)}><IconClose /></button
			>
		</figure>
		<!-- menu list -->
		<div class="mt-10 flex grow flex-col gap-2">
			<NavLink
				href="/app"
				isActive={(pathname: string) => {
					return pathname === '/app';
				}}
			>
				<div class="flex items-center gap-2">
					<div class="size-6">
						<IconDashboard />
					</div>
					<div>Dashboard</div>
				</div>
			</NavLink>
			<NavLink
				href="/app/clientes"
				isActive={(pathname: string) => {
					return pathname.includes('/app/clientes');
				}}
			>
				<div class="flex items-center gap-2">
					<div class="size-6">
						<IconPersons />
					</div>
					<div>Clientes</div>
				</div>
			</NavLink>
			<div class="cursor-wait rounded-lg p-2 text-zinc-400 opacity-60">
				<div class="flex items-center gap-2">
					<div class="size-6">
						<IconBox />
					</div>
					<div>Estoque</div>
				</div>
			</div>
		</div>
		<!-- footer -->
		<div class="flex flex-col gap-2">
			<div class="flex justify-between p-2">
				<div class="flex items-center gap-2">
					<div class="size-6">
						<IconBrush />
					</div>
					<span>Tema</span>
				</div>
				<ThemeController />
			</div>
			<a
				href="/#"
				class="text-error flex items-center gap-2 rounded-lg p-2 font-semibold transition-all hover:bg-red-100"
			>
				<div class="size-6">
					<IconLogout />
				</div>
				<span>Sair</span>
			</a>
			<a
				href="//github.com/flokiTV"
				target="_blank"
				class="text-base-content/20 text-center text-xs">by FlokiTV</a
			>
		</div>
	</div>
	<!-- main content -->
	<div class="bg-base-300 grow">
		{@render children()}
	</div>
</div>
