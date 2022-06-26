<template>
	<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
		<div>
			<div class="grid grid-flow-col gap-4 text-2xl">
				<a href="https://github.com/AniOSP" target="blank">
					<BrandGithubIcon />
				</a>
				<a href="https://t.me/AniOSPUpdates" target="blank">
					<BrandTelegramIcon />
				</a>
			</div>
		</div>
		<div>
			<p>Copyright © 2022 - AniOSP</p>
		</div>
	</footer>
</template>

<script>
import { BrandGithubIcon, BrandTelegramIcon } from 'vue-tabler-icons';

export default {
	components: { BrandGithubIcon, BrandTelegramIcon },
}
</script>
