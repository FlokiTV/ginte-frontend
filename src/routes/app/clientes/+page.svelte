<script lang="ts">
	import { goto, onNavigate } from '$app/navigation';
	import IconMagnify from '@/icons/IconMagnify.svelte';
	import IconPencil from '@/icons/IconPencil.svelte';
	import IconPlus from '@/icons/IconPlus.svelte';
	import IconSeemore from '@/icons/IconSeemore.svelte';
	import IconTrash from '@/icons/iconTrash.svelte';
	import { api, type Client } from '@/lib';
	import { onMount } from 'svelte';

	let clients = $state<Client[]>([]);
	let selectedsToRemove = $state<number[]>([]);
	let selectedAll = $state(false);
	let deleteClient = $state<Client>();
	let search = $state('');
	let page = $state(1);
	let totalPages = $state(10);

	onMount(async () => {
		await fetchClients();
	});

	onNavigate(() => {
		// console.log('navigate', window.location.pathname);
		//get query from url ?q
		const query = new URLSearchParams(window.location.search);
		const q = query.get('q');
		if (q) search = decodeURIComponent(q);
	});

	async function fetchClients() {
		const req = await api.clients.list({
			page,
			search
		});
		if (req.ok) {
			const { data, total } = await req.json();
			clients = data;
			totalPages = Math.ceil(total / 10);
		}
	}

	function updateSelectedIds() {
		selectedsToRemove = [];
		document
			.querySelectorAll<HTMLInputElement>('.toremove:checked')
			.forEach((el) => selectedsToRemove.push(+el.value));
	}

	async function doDeleteMass() {
		const id = selectedsToRemove.join(',');
		if (!id) return;
		const data = await api.clients.delete(id);
		if (data.ok) {
			fetchClients();
			const allEls = document.querySelectorAll<HTMLInputElement>('.toremove');
			allEls.forEach((el) => (el.checked = false));
			selectedAll = false;
			deleteClient = undefined;
			selectedsToRemove = [];
		}
	}

	async function doDelete() {
		const id = deleteClient?.id;
		if (!id) return;
		const data = await api.clients.delete(String(id));
		if (data.ok) {
			fetchClients();
			deleteClient = undefined;
		}
	}

	function doCheck() {
		const allEls = document.querySelectorAll<HTMLInputElement>('.toremove');
		const selectedEls: boolean[] = [];
		function update() {
			document
				.querySelectorAll<HTMLInputElement>('.toremove')
				.forEach((el) => selectedEls.push(el.checked));
		}
		update();
		// if is all checked, uncheck all
		if (selectedEls.every((el) => el)) {
			allEls.forEach((el) => (el.checked = false));
			selectedAll = false;
		} else {
			allEls.forEach((el) => (el.checked = true));
			selectedAll = true;
		}
		update();
		updateSelectedIds();
	}

	function parseDate(date: string) {
		if (!date) return '';
		const [year, month, day] = date.split('-');
		return `${day}/${month}/${year}`;
	}

	function parsePhone(phone: string) {
		if (!phone) return '';
		//convert 22987654321 to (22) 98765-4321
		return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;
	}

	function doSearch(event: Event) {
		event.preventDefault();
		page = 1;
		updateQuery();
	}

	function updateQuery() {
		goto(`/app/clientes?q=${encodeURIComponent(search)}&page=${page}`);
		fetchClients();
	}

	function next() {
		if (page < totalPages) {
			page += 1;
			updateQuery();
		}
	}

	function prev() {
		if (page > 1) {
			page -= 1;
			updateQuery();
		}
	}
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
		<a
			href="/app/clientes/adicionar"
			class="btn btn-success right-6 bottom-6 z-10 flex max-md:fixed max-md:h-auto max-md:rounded-full max-md:p-2"
		>
			<div class="size-6">
				<IconPlus />
			</div>
			<span class="max-md:hidden">Adicionar cliente</span>
		</a>
	</div>
	<div class="flex justify-between pb-2 md:mt-6">
		<form class="relative flex min-w-xs max-md:w-full" onsubmit={doSearch}>
			<input
				placeholder="Pesquise por nome ou email"
				bind:value={search}
				type="text"
				class="input w-full"
			/>
			<button
				class="absolute top-0 right-1 bottom-0 flex w-8 cursor-pointer items-center opacity-30"
			>
				<IconMagnify />
			</button>
		</form>
		<button
			onclick={doDeleteMass}
			class="{selectedsToRemove.length === 0 &&
				'hidden'} btn btn-error right-[80px] bottom-6 z-10 flex max-md:fixed max-md:h-auto max-md:rounded-full max-md:p-2"
		>
			<span class="max-md:pl-1">Excluir selecionados</span>
			<div class="size-6">
				<IconTrash />
			</div>
		</button>
	</div>

	<div class="mt-2">
		<div class="bg-base-100 flex items-center gap-3 rounded-t-lg p-3 font-semibold">
			<input
				onchange={(e) => {
					e.preventDefault();
					doCheck();
					const target = e.target as HTMLInputElement;
					target.checked = selectedAll;
				}}
				class="checkbox"
				type="checkbox"
			/>
			<div class="hidden w-[140px] shrink-0 md:block">Nome</div>
			<div class="w-[140px] shrink-0 grow">Email</div>
			<div class="hidden w-[140px] shrink-0 lg:block">Telefone</div>
			<div class="hidden w-[140px] shrink-0 xl:block">Nascimento</div>
			<div class="w-[50px] shrink-0">Ações</div>
		</div>
		{#each clients as client}
			<div class="bg-base-100 border-base-300 flex gap-3 border-t p-3">
				<input
					onchange={updateSelectedIds}
					class="checkbox toremove"
					type="checkbox"
					value={client.id}
				/>
				<div class="hidden w-[140px] shrink-0 truncate md:block">{client.name}</div>
				<div class="w-[140px] shrink-0 grow truncate">{client.email}</div>
				<div class="hidden w-[140px] shrink-0 lg:block">{parsePhone(client.phone)}</div>
				<div class="hidden w-[140px] shrink-0 xl:block">{parseDate(client.date)}</div>
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
							class="{deleteClient !== undefined &&
								'hidden'} dropdown-content menu bg-base-100 border-base-300 rounded-box z-1 w-52 border p-2 shadow-sm"
						>
							<li>
								<a href="/app/clientes/editar/{client.id}">
									<div class="size-6">
										<IconPencil />
									</div>
									<span>Editar</span>
								</a>
							</li>
							<li>
								<button
									onclick={() => {
										deleteClient = client;
									}}
								>
									<div class="size-6">
										<IconTrash />
									</div>
									<span>Remover</span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		{:else}
			<div
				class="bg-white font-bold text-zinc-400 rounded-b-lg p-4 flex items-center justify-center text-3xl"
			>
				Nehum cliente encontrado
			</div>
		{/each}
	</div>
	<!-- remove modal -->
	<div
		class="{deleteClient == undefined &&
			'hidden'} fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
	>
		<button aria-label="Close modal" class="absolute inset-0 -z-0"></button>
		<div class="card bg-base-100 w-full max-w-[460px] shadow-sm">
			<div class="card-body">
				<div class="font-semibold">
					<b class="text-red-400">CUIDADO:</b> Você está prestes a excluir um cliente!
				</div>
				<p class="my-4 text-sm">
					Tem certeza de que deseja excluir permanentemente o cliente <b class="text-red-400"
						>Claudia Sampaio da Silva?</b
					> Esta ação não pode ser desfeita e todos os dados relacionados ao cliente, incluindo histórico
					de empréstimos e faturas, serão removidos permanentemente.
				</p>
				<div class="card-actions justify-end">
					<button
						onclick={() => {
							deleteClient = undefined;
						}}
						class="btn">Cancelar</button
					>
					<button onclick={doDelete} class="btn btn-error">
						<div class="size-5">
							<IconTrash />
						</div>
						<span>Deletar</span>
					</button>
				</div>
			</div>
		</div>
	</div>

	{#if clients}
		<div class="mt-2 flex justify-between max-md:flex-col max-md:pb-20">
			<div class="text-center text-sm">
				{selectedsToRemove.length} de {clients.length} linhas selecionadas
			</div>
			<div class="flex flex-col items-center gap-4 md:flex-row">
				<div class="text-sm">página {page} de {totalPages}</div>
				<div class="text-center">
					<button disabled={page == 1} class="btn" onclick={prev}>Anterior</button>
					<button disabled={page == totalPages} class="btn btn-neutral" onclick={next}
						>Próxima</button
					>
				</div>
			</div>
		</div>
	{/if}
</div>
