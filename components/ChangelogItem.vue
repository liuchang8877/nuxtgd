<template>
    <div class="bg-white shadow rounded-lg p-6">
      <!-- 时间 -->
      <p class="text-orange-500 text-sm font-medium mb-4">{{ time }}</p>
  
      <!-- 更改内容列表 -->
      <ul class="space-y-2">
        <li
          v-for="(change, index) in changes"
          :key="index"
          class="flex items-center space-x-2"
        >
          <span>{{ change.emoji }}</span>
          <span class="text-gray-700">{{ change.text }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  defineProps({
    time: String,
    changes: Array
  })
  </script>