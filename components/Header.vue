<template>
  <header class="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
    <a href="/" class="flex items-center space-x-4">
      <span class="text-xl font-bold">orbital16</span>
    </a>
    <nav class="flex items-center space-x-6">
      <!-- <a href="/pricing" class="text-gray-600 hover:text-gray-800">{{ $t('nav.pricing') }}</a>
      <a href="/changelog" class="text-gray-600 hover:text-gray-800">{{ $t('nav.changelog') }}</a>
      <a href="/documentation" class="text-gray-600 hover:text-gray-800">{{ $t('nav.docs') }}</a>
      <button class="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900">
        {{ $t('nav.dashboard') }}
      </button> -->

      <!-- 添加语言切换按钮 -->
      <div class="relative">
        <!-- 当前语言按钮 -->
        <button
          @click="toggleDropdown"
          class="px-4 py-2 border rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center space-x-2"
        >
          {{ getLocaleName(locale) }}
          <span class="text-gray-600">{{ getLocaleName(currentLocale.value) }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 9l-7.5 7.5L4.5 9"
            />
          </svg>
        </button>

        <!-- 语言选择下拉菜单 -->
        <div
          v-if="dropdownOpen"
          class="absolute right-0 mt-2 bg-white border rounded-lg shadow-md transition-opacity duration-200 z-10"
          :class="{ 'opacity-0': !dropdownOpen, 'opacity-100': dropdownOpen }"
        >
          <button
            v-for="locale in availableLocales"
            :key="locale"
            @click="switchLocale(locale)"
            class="block px-4 py-2 hover:bg-gray-100 w-full text-left flex items-center space-x-2"
          >
            <span>{{ getLocaleName(locale) }}</span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n() // 动态获取语言列表和当前语言

// 管理下拉菜单状态
const dropdownOpen = ref(false)

// 切换语言逻辑
const currentLocale = locale
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const switchLocale = (lang) => {
  locale.value = lang
  dropdownOpen.value = false
}

// 点击外部关闭菜单
const closeDropdown = (event) => {
  if (!event.target.closest('.relative')) {
    dropdownOpen.value = false
  }
}

// 动态获取语言名称
const localeNames = {
  en: 'English',
  zh: '中文',
}

const getLocaleName = (lang) => localeNames[lang] || lang

// 挂载和卸载全局点击事件
onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>