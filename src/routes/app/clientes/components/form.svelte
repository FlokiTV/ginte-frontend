<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import IconCalendar from '@/icons/IconCalendar.svelte';
	import IconCursor from '@/icons/IconCursor.svelte';
	import IconLeft from '@/icons/IconLeft.svelte';
	import IconMail from '@/icons/IconMail.svelte';
	import IconMarker from '@/icons/IconMarker.svelte';
	import IconPhone from '@/icons/IconPhone.svelte';
	import IconPlus from '@/icons/IconPlus.svelte';
	import IconSave from '@/icons/IconSave.svelte';
	import { api, type Client } from '@/lib';
	import { onMount } from 'svelte';

	let id = $state(0);
	let editData = $state<Client>();

	async function load(id: number) {
		const reqData = await api.clients.read(id);
		if (reqData.ok) {
			editData = await reqData.json();
		} else {
			goto('/app/clientes');
		}
	}

	async function onSubmit(event: Event) {
		event.preventDefault();
		const target = event.target as HTMLFormElement;
		const data = new FormData(target);
		const dataJson = Object.fromEntries(data.entries());

		const insertData = {
			name: String(dataJson.name),
			email: String(dataJson.email),
			address: String(dataJson.address),
			date: String(dataJson.date),
			phone: String(dataJson.phone)
		} as Client;

		if (!id) {
			const insert = await api.clients.create(insertData);
			if (insert.ok) {
				const { id } = await insert.json();
				goto('/app/clientes/editar/' + id);
			}
		} else {
			const update = await api.clients.update(id, insertData);
			if (update.ok) {
				const { id } = await update.json();
				await load(id);
			}
		}
	}

	onMount(async () => {
		if (page.params.id) {
			id = +page.params.id;
			await load(id);
		}
	});
</script>

<div class="p-2 md:p-10">
	<div class="flex items-end">
		<div class="hidden items-end text-5xl font-semibold md:flex">
			<a
				href="/app/clientes"
				class="mr-4 flex size-10 items-center justify-center rounded-full border-2 text-green-600 transition-all hover:bg-green-400/30 [&_svg]:cursor-pointer"
			>
				<div class="size-8">
					<IconLeft />
				</div>
			</a>
			<div
				class="border-base-300 relative z-10 -mr-2 mb-1 size-4 rounded-full border-2 bg-green-600"
			></div>
			<span class="z-0">{id ? 'Editar' : 'Cadastrar'} Cliente</span>
		</div>
	</div>

	<form onsubmit={onSubmit} class="mt-4 flex flex-wrap justify-between space-y-2 md:mt-8">
		<div class="w-full md:w-495/1000">
			<label class="input validator w-full">
				<span>Nome *</span>
				<input value={editData?.name} name="name" required minlength="10" type="text" />
				<div class="flex size-8 items-center opacity-60">
					<IconCursor />
				</div>
			</label>
			<p class="validator-hint mt-1">Insira um nome válido</p>
		</div>
		<div class="w-full md:w-495/1000">
			<label class="input validator w-full">
				<span>Email *</span>
				<input
					name="email"
					value={editData?.email}
					title="Insira um email válido, como exemplo@dominio.com"
					required
					type="email"
				/>
				<div class="flex size-8 items-center opacity-60">
					<IconMail />
				</div>
			</label>
			<p class="validator-hint mt-1">Insira um email válido como exemplo@dominio.com</p>
		</div>
		<div class="w-full md:w-495/1000">
			<label class="input validator w-full">
				<span>Telefone *</span>
				<input
					required
					name="phone"
					pattern={'[0-9]{11}'}
					value={editData?.phone}
					type="text"
					title="Digite apenas números, DDD e mais 9 digitos. Exemplo: 11923456789"
				/>
				<div class="flex size-8 items-center opacity-60">
					<IconPhone />
				</div>
			</label>
			<p class="validator-hint mt-1">Insira um telefone válido</p>
		</div>
		<div class="w-full md:w-495/1000">
			<label class="input validator w-full">
				<span>Data de nascimento *</span>
				<input
					value={editData?.date}
					name="date"
					required
					type="date"
					min="1900-01-01"
					max="2026-01-01"
				/>
				<div class="flex size-11 items-center opacity-60">
					<IconCalendar />
				</div>
			</label>
			<p class="validator-hint mt-1">Insira uma data válida</p>
		</div>
		<div class="w-full">
			<label class="input validator w-full">
				<span>Endereço *</span>
				<input value={editData?.address} name="address" required minlength="10" type="text" />
				<div class="flex size-8 items-center opacity-60">
					<IconMarker />
				</div>
			</label>
			<p class="validator-hint mt-1">Insira um endereço válido</p>
		</div>

		<div class="flex w-full justify-end gap-2">
			<a href="/app/clientes" class="btn btn-neutral">Cancelar</a>
			<button type="submit" class="btn btn-success"
				>{id ? 'Salvar' : 'Cadastrar'}
				<div class="size-6">
					{#if id}
						<IconSave />
					{:else}
						<IconPlus />
					{/if}
				</div></button
			>
		</div>
	</form>
</div>
