<template>
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content text-center">
			<div class="flex-col">
				<div class="max-w">
					<h1 class="text-5xl font-bold">Downloads</h1>
					<p class="py-3 mt-1">Search for your device to find the latest release!</p>
				</div>
				<div class="w-screen flex">
					<input type="text" placeholder="Type here" class="input input-bordered w-11/12 mt-10 mx-20" />
				</div>

				<div class="mt-10 mx-20">
					<template v-for="device in objectDevices">
						<template v-if="device.avail">
							<div class="card w-96 bg-base-100 shadow-xl">
								<div class="card-body">
									<h1 class="card-title text-3xl justify-center">{{ device.name }}</h1>
									<p>{{ device.codename }}</p>
									<div class="card-actions justify-center">
										<NuxtLink :to="'/downloads/' + device.codename"><button class="btn btn-primary">More
												Info</button>
										</NuxtLink>
									</div>
								</div>
							</div>
						</template>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const devices = await useFetch('https://raw.githubusercontent.com/AniOSP/api/main/devices.json');
const jsonDevices = devices.data.value;
const objectDevices = JSON.parse(jsonDevices);
</script>
