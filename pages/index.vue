<template>
  <div class="bg-gray-50 text-gray-800">
    <Header />
    <main class="flex flex-col items-center text-center py-20 px-6">
      <div class="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
        New: Amazing feature of your SaaS
      </div>
      <h1 class="text-4xl sm:text-6xl font-extrabold leading-tight mb-4">
        Your revolutionary <span class="text-green-600">Nuxt 3 SaaS</span>
      </h1>
      <p class="text-lg sm:text-xl text-gray-600 max-w-2xl">
        This is a demo application built with supastarter. It will save you a lot of time and effort building your next
        SaaS.
      </p>
      <div class="flex gap-4 mt-8">
        <button class="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700">
          Get started →
        </button>
        <button class="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100">
          Documentation
        </button>
      </div>

      <div class="bg-gray-50 text-gray-800 min-h-screen">
        <main class="px-8 py-6">
          <!-- 顶部欢迎消息 -->
          <section class="mb-8">
            <h1 class="text-2xl font-bold">Welcome Jonathan Wilke!</h1>
            <p class="text-gray-500">See the latest stats of your awesome business.</p>
          </section>

          <!-- 统计卡片 -->
          <section class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <!-- 卡片：New Clients -->
            <div class="bg-white shadow rounded-lg p-6 flex items-center justify-between">
              <div>
                <p class="text-gray-500 text-sm">New clients</p>
                <h2 class="text-2xl font-bold">344</h2>
              </div>
              <span class="text-green-600 text-sm bg-green-100 px-3 py-1 rounded-full">+12%</span>
            </div>

            <!-- 卡片：Revenue -->
            <div class="bg-white shadow rounded-lg p-6 flex items-center justify-between">
              <div>
                <p class="text-gray-500 text-sm">Revenue</p>
                <h2 class="text-2xl font-bold">$5,243.00</h2>
              </div>
              <span class="text-green-600 text-sm bg-green-100 px-3 py-1 rounded-full">+60%</span>
            </div>

            <!-- 卡片：Churn -->
            <div class="bg-white shadow rounded-lg p-6 flex items-center justify-between">
              <div>
                <p class="text-gray-500 text-sm">Churn</p>
                <h2 class="text-2xl font-bold">3%</h2>
              </div>
              <span class="text-red-600 text-sm bg-red-100 px-3 py-1 rounded-full">-30%</span>
            </div>
          </section>

          <!-- 可替换内容区域 -->
          <!-- <section class="bg-white shadow rounded-lg p-6 flex items-center justify-center min-h-[200px]">
            <p class="text-gray-400 text-sm">Place your content here...</p>
          </section> -->



          <!-- Feature A 区域 -->
          <section class="bg-white shadow rounded-lg p-8 flex items-center">
            <!-- 左侧图片 -->
            <div class="flex-1 bg-green-50 rounded-lg p-8">
              <!-- <img src="/laptop.png" alt="Laptop illustration" class="w-full h-auto" /> -->
            </div>
            <!-- 右侧内容 -->
            <div class="flex-1 pl-8">
              <h2 class="text-2xl font-bold mb-2">Feature A</h2>
              <p class="text-gray-500 mb-6">
                This is a brilliant feature. And below you can see some reasons why. This is basically just a dummy
                text.
              </p>
              <button class="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800">
                Learn more →
              </button>
              <!-- Benefit 区域 -->
              <div class="flex space-x-8 mt-8">
                <!-- Benefit 1 -->
                <div class="text-center">
                  <div class="text-yellow-500 text-2xl mb-2">★</div>
                  <p class="text-lg font-bold">Benefit 1</p>
                  <p class="text-gray-500">This is a brilliant benefit.</p>
                </div>
                <!-- Benefit 2 -->
                <div class="text-center">
                  <div class="text-yellow-500 text-2xl mb-2">👍</div>
                  <p class="text-lg font-bold">Benefit 2</p>
                  <p class="text-gray-500">This is a brilliant benefit.</p>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>

    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>