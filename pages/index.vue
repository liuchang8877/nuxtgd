<template>
  <div class="bg-gray-50 text-gray-800">
    <Header />
    <main class="flex flex-col items-center text-center py-20 px-6">
      <div class="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
        {{ $t('hero.newFeature') }}
      </div>
      <h1 class="text-4xl sm:text-6xl font-extrabold leading-tight mb-4">
        {{ $t('hero.heading') }}
      </h1>
      <p class="text-lg sm:text-xl text-gray-600 max-w-2xl">
        {{ $t('hero.description') }}
      </p>
      <div class="flex gap-4 mt-8">
        <button class="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700">
          {{ $t('hero.getStarted') }}
        </button>
        <button class="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100">
          {{ $t('hero.documentation') }}
        </button>
      </div>

      <div class="bg-gray-50 text-gray-800 min-h-screen">
        <main class="px-8 py-6">
          <!-- 顶部欢迎消息 -->
          <section class="mb-8">
            <h1 class="text-2xl font-bold">{{ $t('header.welcome') }}</h1>
            <p class="text-gray-500">{{ $t('header.subtitle') }}</p>
          </section>

          <!-- 统计卡片 -->
          <section class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div class="bg-white shadow rounded-lg p-6 flex items-center justify-between">
              <div>
                <p class="text-gray-500 text-sm">{{ $t('stats.newClients') }}</p>
                <h2 class="text-2xl font-bold">344</h2>
              </div>
              <span class="text-green-600 text-sm bg-green-100 px-3 py-1 rounded-full">
                {{ $t('stats.increase') }}
              </span>
            </div>

            <div class="bg-white shadow rounded-lg p-6 flex items-center justify-between">
              <div>
                <p class="text-gray-500 text-sm">{{ $t('stats.revenue') }}</p>
                <h2 class="text-2xl font-bold">$5,243.00</h2>
              </div>
              <span class="text-green-600 text-sm bg-green-100 px-3 py-1 rounded-full">
                {{ $t('stats.increaseRevenue') }}
              </span>
            </div>

            <div class="bg-white shadow rounded-lg p-6 flex items-center justify-between">
              <div>
                <p class="text-gray-500 text-sm">{{ $t('stats.churn') }}</p>
                <h2 class="text-2xl font-bold">3%</h2>
              </div>
              <span class="text-red-600 text-sm bg-red-100 px-3 py-1 rounded-full">
                {{ $t('stats.decreaseChurn') }}
              </span>
            </div>
          </section>

          <!-- Feature A 区域 -->
          <section class="bg-gray-50 p-10 rounded-lg shadow-md flex items-center space-x-8">
            <!-- 左侧图片 -->
            <div class="flex-1 bg-green-50 rounded-lg p-6 relative">
              <div class="bg-white rounded-lg p-6 shadow-lg w-full h-auto">
                <div class="w-10 h-1 bg-gray-300 rounded-full mb-2"></div>
                <div class="w-8 h-1 bg-gray-300 rounded-full mb-2"></div>
                <div class="w-24 h-6 bg-green-500 rounded-md"></div>
              </div>
            </div>

            <!-- 右侧内容 -->
            <div class="flex-1">
              <h2 class="text-2xl font-bold mb-4">{{ $t('featureA.title') }}</h2>
              <p class="text-gray-600 mb-6">
                {{ $t('featureA.description') }}
              </p>
              <!-- <button
                class="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 flex items-center space-x-2">
                <span>{{ $t('featureA.learnMore') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button> -->

              <!-- Benefits 区域 -->
              <div class="flex justify-between mt-8">
                <!-- Benefit 1 -->
                <div class="flex flex-col items-center">
                  <div class="text-yellow-500 text-3xl mb-2">★</div>
                  <h3 class="font-bold text-lg">{{ $t('featureA.benefit1.title') }}</h3>
                  <p class="text-gray-600 text-center">{{ $t('featureA.benefit1.description') }}</p>
                </div>

                <!-- Benefit 2 -->
                <div class="flex flex-col items-center">
                  <div class="text-yellow-500 text-3xl mb-2">👍</div>
                  <h3 class="font-bold text-lg">{{ $t('featureA.benefit2.title') }}</h3>
                  <p class="text-gray-600 text-center">{{ $t('featureA.benefit2.description') }}</p>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-gray-50 py-16 text-center px-6">
            <!-- 图标 -->
            <div class="flex justify-center items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13.828 14.828a4 4 0 01-5.656-5.656l5.656 5.656zm0 0L21 12m-7.172-1.828a4 4 0 105.656 5.656" />
              </svg>
            </div>
            <!-- 标题 -->
            <h2 class="text-3xl font-bold mb-4">{{ $t('subscribe.title') }}</h2>
            <p class="text-gray-600 mb-8">{{ $t('subscribe.description') }}</p>

            <!-- 表单 -->
            <div class="flex justify-center items-center space-x-4">
              <input type="email" v-model="email" placeholder="Email"
                class="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:ring focus:ring-green-200" />
              <button @click="submitEmail" class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                {{ $t('subscribe.button') }}
              </button>
            </div>

            <!-- 提交结果 -->
            <div v-if="responseMessage" class="mt-4 text-sm" :class="responseError ? 'text-red-600' : 'text-green-600'">
              {{ responseMessage }}
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

import { ref } from 'vue';

const email = ref('');
const responseMessage = ref('');
const responseError = ref(false);

const submitEmail = async () => {
  try {
    // 清除之前的响应信息
    responseMessage.value = '';
    responseError.value = false;

    // 检查 email 是否为空
    if (!email.value) {
      responseMessage.value = 'Email is required.';
      responseError.value = true;
      return;
    }
    
    // 验证邮箱格式
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email.value)) {
      responseMessage.value = 'Please enter a valid email address.';
      responseError.value = true;
      return;
    }

    // 调用后端 API
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value })
    });

    const data = await res.json();

    if (!res.ok) {
      responseMessage.value = data.statusMessage || 'Something went wrong.';
      responseError.value = true;
    } else {
      responseMessage.value = data.message || 'Subscription successful!';
      email.value = ''; // 清空输入框
    }
  } catch (err) {
    responseMessage.value = 'Network error, please try again.';
    responseError.value = true;
  }
};
</script>