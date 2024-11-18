<template>
    <header class="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
      <a href="/" class="flex items-center space-x-4">
        <!-- <img src="/logo.png" alt="Logo" class="w-8 h-8" /> -->
        <span  class="text-xl font-bold">acme</span>
      </a>
      <nav class="flex items-center space-x-6">
        <a href="/pricing" class="text-gray-600 hover:text-gray-800">Pricing</a>
        <a href="/changelog" class="text-gray-600 hover:text-gray-800">Changelog</a>
        <a href="/documentation" class="text-gray-600 hover:text-gray-800">Docs</a>
        <button class="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900">
          Dashboard
        </button>
      </nav>
    </header>
  </template>