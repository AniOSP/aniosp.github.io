<template>
	<div>
		<template v-if="pending">
		</template>
		<template v-else>
			<div class="hero min-h-screen bg-base-200">
				<div class="hero-content flex-col">
					<h1 class="text-5xl font-bold">{{ findDevice.name }}</h1>
					<p>{{ findDevice.codename }}</p>
					<a :href="otaFile.url"><button class="btn btn-primary">Download</button></a>
				</div>
			</div>
		</template>
	</div>
</template>

<script setup>
const route = useRoute();

const devices = await useFetch('https://raw.githubusercontent.com/AniOSP/api/main/devices.json');
const jsonDevices = devices.data.value;
const objectDevices = JSON.parse(jsonDevices);
const findDevice = objectDevices.find((device) => device.codename === route.params.id);

const { pending, data: otaFile } = useLazyFetch(findDevice.ota);

onBeforeMount(() => {
	if (!findDevice) {
		return navigateTo({
			path: '/404'
		});
	}
});
</script>
