<script lang="ts">
	import '@/app.css';
	import ThemeController from '@/components/themeController.svelte';
	let { children } = $props();
</script>

<div class="flex h-screen w-screen">
	<div class="bg-base-100 top-0 bottom-0 flex w-full max-w-xs flex-col p-2 max-md:fixed">
		<figure class="flex justify-center">
			<img src="/logo.png" alt="" />
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
			<a href="/#" class="rounded-lg p-2 text-error font-semibold">Sair</a>
		</div>
	</div>
	<div class="bg-base-300 grow">
		{@render children()}
	</div>
</div>
