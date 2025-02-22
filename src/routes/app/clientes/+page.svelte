<script>
	import IconPlus from '@/icons/IconPlus.svelte';
</script>

<svelte:head>
	<title>Clientes - Ginte</title>
</svelte:head>

<div class="p-10">
	<div class="flex justify-between items-end">
		<div class="hidden items-end text-5xl font-semibold md:flex">
			<div
				class="border-base-300 relative z-10 -mr-2 mb-1 size-4 rounded-full border-2 bg-green-600"
			></div>
			<span class="z-0">Clientes</span>
		</div>
		<button class="btn btn-success flex max-md:rounded-full max-md:p-2 max-md:h-auto max-md:fixed right-6 bottom-6">
			<div class="size-6">
				<IconPlus />
			</div>
			<span class="max-md:hidden">Adicionar cliente</span>
		</button>
	</div>
</div>
