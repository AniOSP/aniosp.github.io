<template>
	<div>
		<div id="animated" style="position: relative; top: -100vh;">
			<div class="navbar bg-base-100 shadow-2xl px-10" v-if="!animationComplete" id="top-nav">
				<div class="flex-none">
					<button class="btn btn-square btn-ghost">
						<img src="~/assets/img/aniosp-logo.png" />
					</button>
				</div>
				<div class="flex-1 p-2">
					<a class="btn btn-ghost normal-case text-xl">AniOSP</a>
				</div>

				<div class="navbar-end">
					<div class="flex-none">
						<ul class="menu menu-horizontal bg-base-100 rounded-box p-2">
							<li v-if="isHome()"><a href="#home">Home</a></li>
							<li v-else>
								<a href="/">Home</a>
							</li>
							<li v-if="isHome()"><a href="#features">Features</a></li>
							<li v-if="isHome()"><a href="#team">Team</a></li>
							<li>
								<NuxtLink to="/downloads" id="downloads">Download</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div v-if="animationComplete" class="navbar bg-base-100 shadow-2xl px-10" id="top-nav">
			<div class="flex-none">
				<button class="btn btn-square btn-ghost">
					<img src="~/assets/img/aniosp-logo.png" />
				</button>
			</div>
			<div class="flex-1 p-2">
				<a class="btn btn-ghost normal-case text-xl">AniOSP</a>
			</div>

			<div class="navbar-end">
				<div class="flex-none">
					<ul class="menu menu-horizontal bg-base-100 rounded-box p-2">
						<li v-if="isHome()"><a href="#home">Home</a></li>
						<li v-else>
							<a href="/">Home</a>
						</li>
						<li v-if="isHome()"><a href="#features">Features</a></li>
						<li v-if="isHome()"><a href="#team">Team</a></li>
						<li>
							<NuxtLink to="/downloads" id="downloads">Download</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import gsap from 'gsap';

export default {
	methods: {
		isHome() {
			return this.$route.path === "/";
		},
	},
	data() {
		return {
			animationComplete: false,
		}
	},
	mounted() {
		gsap.to(this.$el.querySelector('#animated'), { duration: 1, ease: 'power1.out', y: '100vh' }).then(() => {
			this.animationComplete = true;

			// I dunno why but it only works if i add this to the code lol
			setTimeout(() => {
				if (this.$route.path === '/') {
					document.querySelectorAll('a[href*="#"]').forEach((el) => {
						if (el.getAttribute('href').includes(this.$route.hash)) {
							el.classList.add('active');
						}
					});
				} else if (this.$route.path === '/downloads') {
					document.querySelectorAll('#downloads').forEach((el) => {
						el.classList.add('active');
					});
				}
			}, 0);
		});
	},
	watch: {
		$route(to, from) {
			if (to.path === '/') {
				document.querySelectorAll('a[href*="#"]').forEach((el) => {
					if (el.getAttribute('href').includes(to.hash)) {
						el.classList.add('active');
					}

					if (el.classList.contains('active') && el.getAttribute('href').includes(from.hash)) {
						el.classList.remove('active');
					}
				});
			} else if (to.path === '/downloads') {
				setTimeout(() => {
					document.querySelectorAll('#downloads').forEach((el) => {
						el.classList.add('active');
					});
				}, 0);
			}
		},
	}
}
</script>

<style>
#top-nav {
	position: fixed;
	top: 0;
	width: 100%;
	min-height: 50px;
	margin-bottom: 20px;
	background: rgba(42, 48, 60, .4);
	z-index: 1010;
	backdrop-filter: blur(8px);
}
</style>
