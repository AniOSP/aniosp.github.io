<template>
	<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
		<div>
			<div class="grid grid-flow-col gap-4">
				<a href="https://github.com/AniOSP" target="blank">
					<FontAwesomeIcon icon="fa-brands fa-github" size="2xl" />
				</a>
				<a href="https://t.me/AniOSPUpdates" target="blank">
					<FontAwesomeIcon icon="fa-brands fa-telegram" size="2xl" />
				</a>
			</div>
		</div>
		<div>
			<p>Copyright © 2022 - AniOSP</p>
		</div>
	</footer>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([faGithub, faTelegram]);

export default {
	components: { FontAwesomeIcon },
}
</script>
