<script>
	import IconCalendar from '@/icons/IconCalendar.svelte';
	import IconCursor from '@/icons/IconCursor.svelte';
	import IconLeft from '@/icons/IconLeft.svelte';
	import IconMail from '@/icons/IconMail.svelte';
	import IconMarker from '@/icons/IconMarker.svelte';
	import IconPhone from '@/icons/IconPhone.svelte';
	import IconSave from '@/icons/IconSave.svelte';
</script>

<svelte:head>
	<title>Editar cliente - Ginte</title>
</svelte:head>

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
			<span class="z-0">Editar Cliente</span>
		</div>
	</div>

	<form class="mt-4 flex flex-wrap justify-between space-y-2 md:mt-8">
		<div class="w-full md:w-495/1000">
			<label class="input validator w-full">
				<span>Nome *</span>
				<input required minlength="10" type="text" />
				<div class="flex size-8 items-center opacity-60">
					<IconCursor />
				</div>
			</label>
			<p class="validator-hint mt-1">Insira um nome válido</p>
		</div>
		<div class="w-full md:w-495/1000">
			<label class="input validator w-full">
				<span>Email *</span>
				<input required type="email" />
				<div class="flex size-8 items-center opacity-60">
					<IconMail />
				</div>
			</label>
			<p class="validator-hint mt-1">Insira um email válido</p>
		</div>
		<div class="w-full md:w-495/1000">
			<label class="input validator w-full">
				<span>Telefone *</span>
				<input
					required
					pattern={'[0-9]{11}'}
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
				<input required type="date" min="1900-01-01" max="2026-01-01" />
				<div class="flex size-11 items-center opacity-60">
					<IconCalendar />
				</div>
			</label>
			<p class="validator-hint mt-1">Insira uma data válida</p>
		</div>
		<div class="w-full">
			<label class="input validator w-full">
				<span>Endereço *</span>
				<input required minlength="10" type="text" />
				<div class="flex size-8 items-center opacity-60">
					<IconMarker />
				</div>
			</label>
			<p class="validator-hint mt-1">Insira um endereço válido</p>
		</div>

		<div class="flex w-full justify-end gap-2">
			<button class="btn btn-neutral">Cancelar</button>
			<button type="submit" class="btn btn-success"
				>Salvar <div class="size-6"><IconSave /></div></button
			>
		</div>
	</form>
</div>
