<template>
	<div id="main">
		<div class="hero min-h-screen bg-base-200" id="home">
			<div class="hero-content text-center" style="position: relative; left: -100vw" id="home-content">
				<div class="max-w-md">
					<img src="~/assets/img/aniosp.png" />
					<p class="py-6">An AOSP-based ROM for otakus</p>
					<a href="#features"><button class="btn btn-primary">Get Started</button></a>
				</div>
			</div>
		</div>

		<div class="hero min-h-screen bg-base-200 max-w-screen" id="features">
			<div class="hero-content text-center" style="position: relative; left: -100vw" id="features-content">
				<div class="max-w">
					<h1 class="text-5xl font-bold">Features</h1>
					<p class="py-6">Some stuff that you'll get as a result of using AniOSP</p>

					<div class="flex space-x-4">
						<div class="card w-96 bg-base-100 shadow-xl flex-1">
							<div class="card-body">
								<div class="flex justify-center space-x-2 card-title text-3xl">
									<BrandGoogleIcon />
									<h1>
										Pixel Goodies!
									</h1>
								</div>
								<p>AniOSP comes stock with Google Pixel-exclusive goodies, giving you a stock, yet feature-rich
									android experience.</p>
							</div>
						</div>

						<div class="card w-96 bg-base-100 shadow-xl flex-1">
							<div class="card-body">
								<div class="flex justify-center space-x-2 card-title text-3xl">
									<UserCheckIcon />
									<h1>
										User friendliness
									</h1>
								</div>
								<p>AniOSP is by-design made to feel like the quality and ease-of-use you'd get from the perfect
									OEM-specific ROM (even tho no OEM-specific ROMs are any good except for google's)</p>
							</div>
						</div>

						<div class="card w-96 bg-base-100 shadow-xl flex-1">
							<div class="card-body">
								<div class="flex justify-center space-x-2 card-title text-3xl">
									<PaintIcon />
									<h1>
										Customizable
									</h1>
								</div>
								<p>AniOSP not only provides you with a stock android system, meaning that most tweaks will work, but
									it also comes with some customizations that let you tweak your device further.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="hero min-h-screen bg-base-200 max-w-screen no-snap" id="team">
			<div class="hero-content text-center" id="team-content" style="position: relative; left: -100vw">
				<div class="max-w">
					<h1 class="text-5xl font-bold">Developer Team</h1>

					<div class="flex space-x-4">
						<div class="flex-1 justify-center w-96">
							<div class="avatar mt-10">
								<div class="w-64 rounded-full">
									<img src="~/assets/img/relms.jpg" />
								</div>
							</div>

							<h1 class="text-2xl">Relms</h1>
							<p class="py-6">Lead Developer</p>
							<button class="btn btn-square btn-disabled">
								<BrandPaypalIcon />
							</button>
							<p class="py-6 text-xs">Not accepting donations</p>
						</div>

						<div class="flex-1 justify-center w-96">
							<div class="avatar mt-10">
								<div class="w-64 rounded-full">
									<img src="~/assets/img/echo2.png" />
								</div>
							</div>

							<h1 class="text-2xl">ech0devv</h1>
							<p class="py-6">Lead Website &amp; Graphics designer</p>
							<a href="https://paypal.me/echodoesstuff?country.x=US&locale.x=en_US" target="blank">
								<button class="btn btn-square">
									<BrandPaypalIcon />
								</button></a>
							<p class="py-6 text-xs">Currently accepting PayPal donations</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap';
import { BrandPaypalIcon, PaintIcon, UserCheckIcon, BrandGoogleIcon } from 'vue-tabler-icons';

export default {
	components: { BrandPaypalIcon, PaintIcon, UserCheckIcon, BrandGoogleIcon },
	data() {
		return {
			isFeaturesInScreen: false,
			isTeamsInScreen: false,
			sectionObserver: null,
		}
	},
	beforeMount() {
		if (this.$route.hash === "#features") {
			this.isFeaturesInScreen = true;
		} else if (this.$route.hash === "#teams") {
			this.isTeamsInScreen = true;
		}
	},
	mounted() {
		this.observeSections();

		const home = this.$el.querySelector('#home-content');
		gsap.to(home, { duration: 1, ease: 'power1.out', x: '100vw' });

		this.$router.replace({ name: '/', hash: '#home' });
	},
	methods: {
		observeSections() {
			try {
				this.sectionObserver.disconnect();
			} catch (error) { }

			const options = {
				threshold: 0.5,
			};
			this.sectionObserver = new IntersectionObserver(this.sectionObserverHandler, options);

			// Observe each section
			const sections = document.querySelectorAll('.hero');
			sections.forEach(section => {
				this.sectionObserver.observe(section);
			});
		},
		sectionObserverHandler(entries) {
			for (const entry of entries) {
				if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
					const sectionId = entry.target.id;
					// Push sectionId to router here
					this.$router.replace({ name: this.$route.name, hash: `#${sectionId}` });
				}
			}
		},
	},
	watch: {
		$route(to) {
			if (to.hash === '#features') {
				this.isFeaturesInScreen = true;
			} else if (to.hash === "#team") {
				this.isTeamsInScreen = true;
			}
		},
		isFeaturesInScreen(n, o) {
			if (n) {
				const features = this.$el.querySelector("#features-content");
				gsap.to(features, { duration: 1, ease: "power1.out", x: "100vw" });
			}
		},
		isTeamsInScreen(n, o) {
			if (n) {
				const team = this.$el.querySelector('#team-content');
				gsap.to(team, { duration: 1, ease: "power1.out", x: "100vw" });
			}
		},
	},
}
</script>

<style>
html {
	scroll-behavior: smooth;
	overflow: scroll;
	overflow-x: hidden;
	scroll-snap-type: y proximity;
}

::-webkit-scrollbar {
	display: none;
}

.hero {
	scroll-snap-align: start;
}

.no-snap {
	scroll-snap-type: unset;
	scroll-snap-align: unset;
}
</style>
