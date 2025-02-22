<svelte:head>
	<title>Dashboard - Ginte</title>
</svelte:head>

<div class="relative flex grow flex-col overflow-auto p-4">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		<div class="card bg-base-100 rounded-lg p-6 shadow-md">
			<h3 class="text-lg font-semibold">Stats</h3>
			<p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<div class="mt-4"><span class="text-3xl font-bold">1,240</span></div>
		</div>
		<div class="card bg-base-100 rounded-lg p-6 shadow-md">
			<h3 class="text-lg font-semibold">Stats</h3>
			<p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<div class="mt-4"><span class="text-3xl font-bold">785</span></div>
		</div>
		<div class="card bg-base-100 rounded-lg p-6 shadow-md">
			<h3 class="text-lg font-semibold">Stats</h3>
			<p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<div class="mt-4"><span class="text-3xl font-bold">R$ 15,000</span></div>
		</div>
	</div>
	<div class="mt-8">
		<h2 class="mb-4 text-2xl font-semibold">Recent Activity</h2>
		<div class="card bg-base-100 rounded-lg p-6 shadow-md">
			<div class="mx-auto size-[300px] opacity-30">
				<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
					><title>chart-line</title><path
						d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"
					></path></svg
				>
			</div>
		</div>
	</div>
	<!---->
</div>
