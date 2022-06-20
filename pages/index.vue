<template>
  <div>
    <div class="hero min-h-screen bg-base-200" id="home">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <img src="~/assets/img/aniosp.png" />
          <p class="py-6">An AOSP-based ROM for otakus</p>
          <a href="#features"><button class="btn btn-primary">Get Started</button></a>
        </div>
      </div>
    </div>

    <div class="hero min-h-screen bg-base-200 max-w-screen" id="features">
      <div class="hero-content text-center">
        <div class="max-w">
          <h1 class="text-5xl font-bold">Features</h1>
          <p class="py-6">Some stuff that you'll get as a result of using AniOSP</p>

          <div class="flex space-x-4">
            <div class="card w-96 bg-base-100 shadow-xl flex-1">
              <div class="card-body">
                <h1 class="card-title text-3xl justify-center"><i class="fa-brands fa-google"></i>Pixel Goodies!</h1>
                <p>AniOSP comes stock with Google Pixel-exclusive goodies, giving you a stock, yet feature-rich
                  android
                  experience.</p>
              </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl flex-1">
              <div class="card-body">
                <h1 class="card-title text-3xl justify-center"><i class="fa-solid fa-user-check"></i>User friendliness
                </h1>
                <p>AniOSP is by-design made to feel like the quality and ease-of-use you'd get from the perfect
                  OEM-specific ROM (even tho no OEM-specific ROMs are any good except for google's)</p>
              </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl flex-1">
              <div class="card-body">
                <h1 class="card-title text-3xl justify-center"><i class="fa-solid fa-paint-roller"></i>Customizable
                </h1>
                <p>AniOSP not only provides you with a stock android system, meaning that most tweaks will work, but
                  it also comes with some customizations that let you tweak your device further.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero min-h-screen bg-base-200 max-w-screen" id="team">
      <div class="hero-content text-center">
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
              <button class="btn btn-square btn-disabled"><i class="fa-brands fa-paypal"></i></button>
              <p class="py-6 text-xs">Not acepting donations</p>
            </div>

            <div class="flex-1 justify-center w-96">
              <div class="avatar mt-10">
                <div class="w-64 rounded-full">
                  <img src="~/assets/img/echo2.png" />
                </div>
              </div>

              <h1 class="text-2xl">ech0devv</h1>
              <p class="py-6">Lead Website &amp; Graphics designer</p>
              <a href="https://paypal.me/echodoesstuff?country.x=US&locale.x=en_US" target="blank"><button
                  class="btn btn-square"><i class="fa-brands fa-paypal"></i></button></a>
              <p class="py-6 text-xs">Currently accepting PayPal donations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  overflow: scroll;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  display: none;
}
</style>
