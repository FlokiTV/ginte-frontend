<script lang="ts">
	import { goto } from '$app/navigation';

	function onSubmit(event: SubmitEvent) {
		event.preventDefault();
		goto('/app');
	}
</script>

<svelte:head>
	<title>Entrar - Ginte</title>
</svelte:head>

<div class="bg-base-300 flex size-full flex-col items-center justify-center gap-4 p-2">
	<figure>
		<img src="/logo.png" alt="" />
	</figure>
	<div class="card bg-base-100 w-full max-w-96 shadow-sm">
		<div class="card-body">
			<div class="text-3xl font-bold"><span class="text-5xl text-green-600">.</span>Login</div>
			<form onsubmit={onSubmit}>
				<div>
					<dvi class="fieldset-label">Email</dvi>
					<input required type="email" class="input validator mt-1" placeholder="Email" />
					<div class="validator-hint mt-1">Insira um email válido</div>
				</div>

				<div>
					<div class="fieldset-label">Senha</div>
					<input
						required
						minlength="6"
						type="password"
						class="input validator mt-1"
						placeholder="********"
					/>
					<div class="validator-hint mt-1">A senha deve conter ao menos 6 caracteres</div>
				</div>
				<div class="mt-2 flex justify-end">
					<button class="btn btn-neutral group"
						><span class="pl-2">Entrar</span><span
							class="relative mt-0.5 size-[3px] bg-green-600 opacity-0 transition-all group-hover:w-4 group-hover:opacity-100 delay-150"
						>
							<span
								class="absolute right-[0px] -bottom-[0px] size-[3px] -rotate-45 bg-green-600 opacity-0 transition-all group-hover:h-[7px] group-hover:opacity-100 group-hover:delay-300"
							></span>
							<span
								class="absolute -top-[0px] right-[0px] size-[3px] rotate-45 bg-green-600 opacity-0 transition-all group-hover:h-[7px] group-hover:opacity-100 group-hover:delay-300"
							></span>
						</span></button
					>
				</div>
			</form>
		</div>
	</div>
	<a href="//github.com/flokiTV" target="_blank" class="text-base-content/20 text-xs">by FlokiTV</a>
</div>
