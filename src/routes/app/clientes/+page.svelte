<script>
	import IconCheckAll from '@/icons/IconCheckAll.svelte';
	import IconMagnify from '@/icons/IconMagnify.svelte';
	import IconPlus from '@/icons/IconPlus.svelte';
	import IconSeemore from '@/icons/IconSeemore.svelte';
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
		<form class="relative flex min-w-xs max-md:w-full">
			<input placeholder="Pesquise por nome ou email" type="text" class="input w-full" />
			<button
				class="absolute top-0 right-1 bottom-0 flex w-8 cursor-pointer items-center opacity-30"
			>
				<IconMagnify />
			</button>
		</form>
		<button
			class="btn btn-error right-[80px] bottom-6 z-10 flex max-md:fixed max-md:h-auto max-md:rounded-full max-md:p-2"
		>
			<span class="max-md:pl-1">Excluir selecionados</span>
			<div class="size-6">
				<IconTrash />
			</div>
		</button>
	</div>

	<div class="mt-2">
		<button
			class="bg-base-100 border-base-300 fixed bottom-6 left-4 z-10 size-10 cursor-pointer rounded-full border p-1 md:hidden"
		>
			<IconCheckAll />
		</button>
		<div class="bg-base-100 flex items-center gap-3 rounded-t-lg p-3 font-semibold">
			<input class="checkbox" type="checkbox" />
			<div class="hidden w-[140px] shrink-0 md:block">Nome</div>
			<div class="w-[140px] shrink-0 grow">Email</div>
			<div class="hidden w-[140px] shrink-0 lg:block">Telefone</div>
			<div class="hidden w-[140px] shrink-0 xl:block">Nascimento</div>
			<div class="w-[50px] shrink-0">Ações</div>
		</div>
		{#each Array.from({ length: 10 }) as o}
			<div class="bg-base-100 border-base-300 flex gap-3 border-t p-3">
				<input class="checkbox" type="checkbox" />
				<div class="hidden w-[140px] shrink-0 truncate md:block">nome sobrenome grande</div>
				<div class="w-[140px] shrink-0 grow truncate">emailmtgrandeasdasdasddasd@example.com</div>
				<div class="hidden w-[140px] shrink-0 lg:block">Telefone</div>
				<div class="hidden w-[140px] shrink-0 xl:block">Nascimento</div>
				<div class="w-[50px] shrink-0">
					<div class="dropdown dropdown-end size-full">
						<div
							tabindex="0"
							role="button"
							class="flex size-full cursor-pointer items-center justify-center"
						>
							<div class="size-6">
								<IconSeemore />
							</div>
						</div>
						<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
						<ul
							tabindex="0"
							class="dropdown-content menu bg-base-100 border-base-300 rounded-box z-1 w-52 border p-2 shadow-sm"
						>
							<li><a href="/app/clientes">Editar</a></li>
							<li><a href="/app/clientes">Remover</a></li>
						</ul>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="mt-2 flex justify-between max-md:flex-col max-md:pb-20">
		<div class="text-center">1 de 10 linhas selecionadas</div>
		<div class="text-center">
			<button class="btn">Anterior</button>
			<button class="btn btn-neutral">Próxima</button>
		</div>
	</div>
</div>
