<script>
	import IconPlus from '@/icons/IconPlus.svelte';
	import IconTrash from '@/icons/iconTrash.svelte';
</script>

<svelte:head>
	<title>Clientes - Ginte</title>
</svelte:head>

<div class="p-2 md:p-10">
	<div class="flex items-end justify-between">
		<div class="hidden items-end text-5xl font-semibold md:flex">
			<div
				class="border-base-300 relative z-10 -mr-2 mb-1 size-4 rounded-full border-2 bg-green-600"
			></div>
			<span class="z-0">Clientes</span>
		</div>
		<button
			class="btn btn-success right-6 bottom-6 z-10 flex max-md:fixed max-md:h-auto max-md:rounded-full max-md:p-2"
		>
			<div class="size-6">
				<IconPlus />
			</div>
			<span class="max-md:hidden">Adicionar cliente</span>
		</button>
	</div>
	<div class="flex justify-between pb-2 md:mt-6">
		<div class="min-w-xs max-md:w-full">
			<input placeholder="Pesquise por nome ou email" type="text" class="input w-full" />
		</div>
		<button
			class="btn btn-error right-[80px] bottom-6 z-10 flex max-md:fixed max-md:h-auto max-md:rounded-full max-md:p-2"
		>
			<span class="max-md:pl-1">Excluir selecionados</span>
			<div class="size-6">
				<IconTrash />
			</div>
		</button>
	</div>
	<div class="mt-2 max-h-[80vh] overflow-x-auto">
		<div class="bg-base-100 rounded-lg p-4 md:p-2">
			<input class="checkbox" type="checkbox" />
		</div>
	</div>
</div>
