<template>
    <Header />
    <div class="bg-gray-50 min-h-screen">
      <!-- 页面标题 -->
      <header class="text-center py-10">
        <h1 class="text-4xl font-bold">Changelog</h1>
        <p class="text-gray-500 mt-2">
          Stay up to date with the latest changes in our product.
        </p>
      </header>
  
      <!-- Changelog 列表 -->
      <main class="px-8 space-y-6">
        <ChangelogItem
          :time="'9 months ago'"
          :changes="[
            { emoji: '🚀', text: 'Improved performance' }
          ]"
        />
        <ChangelogItem
          :time="'10 months ago'"
          :changes="[
            { emoji: '🎨', text: 'Updated design' },
            { emoji: '🐞', text: 'Fixed a bug' }
          ]"
        />
        <ChangelogItem
          :time="'11 months ago'"
          :changes="[
            { emoji: '🎉', text: 'Added new feature' },
            { emoji: '🐞', text: 'Fixed a bug' }
          ]"
        />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import ChangelogItem from '~/components/ChangelogItem.vue'
  import Header from '~/components/Header.vue'

  </script>