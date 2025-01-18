<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div
      class="absolute w-full h-auto flex flex-col bg-slate-900 overflow-hidden pt-10 -z-10 top-0"
    >
      <!-- Landing page -->
      <img src="/public/resources/rectangle.png" class="absolute left-60 -top-48" alt="" />
      <img
        src="/public/resources/circle gradient bw.png"
        class="absolute -right-52 -top-2 size-[480px]"
        alt=""
      />
      <img src="/public/resources/dash-rt.png" class="absolute size-[50px]" alt="" />
      <img src="/public/resources/circle gradient coloured.png" class="absolute -bottom-40 -left-[220px] size-[500px] " alt="" />
      <img
        src="/public/resources/dash-rt.png"
        class="absolute rotate-90 top-40 right-32 size-[50px]"
        alt=""
      />
      <div class="w-full h-screen flex">
        <div class="relative mx-auto w-3/4 flex flex-col items-center justify-start">
          <div class="flex flex-col text-6xl gap-2 font-extrabold">
            <h1 class="text-pink-400">Stop Spreading</h1>
            <h1 class="text-white">Misinformation</h1>
            <h1 class="text-pink-400">Misinformation</h1>
          </div>
          <!-- tv and shadow -->
          <div class="flex flex-col absolute top-24">
            <div class="relative flex flex-col">
              <img src="/public/resources/tv-landingPage.png" alt="tv" class="z-[50]" />
              <img
                src="/public/resources/shadow.png"
                class="absolute bottom-[-12px]"
                alt="shadow"
              />
            </div>
          </div>
          <div class="flex flex-col gap-2 mt-48">
            <p class="px-36 text-center text-white text-md">
              Join a full-packed webinar on how to combat misinformation, often associated with
              ‘fake news’ which some scholars define as "fabricated information that mimics news
              media content in form but not in organizational process or intent"
            </p>
            <div class="flex items-center justify-center gap-4 font-bold text-sm">
              <button
                class="bg-pink-400 text-white py-2 px-4 rounded-md hover:bg-transparent hover:border-2 hover:border-pink-400 transition duration-300 ease-in-out"
              >
                HOW TO HELP
              </button>
              <button
                class="text-white py-2 px-4 rounded-md border-2 border-pink-400 hover:bg-pink-500 transition duration-300 ease-in-out"
              >
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
