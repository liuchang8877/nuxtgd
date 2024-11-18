<template>
    <Header />
    <div class="bg-gray-50 min-h-screen">
        <div class="flex">
            <!-- 左侧导航 -->
            <aside class="w-1/4 bg-white p-6 border-r">
                <h2 class="font-bold text-lg mb-4">Documentation</h2>
                <nav class="space-y-4">
                    <div>
                        <p class="font-semibold text-gray-700">Getting Started</p>
                        <ul class="pl-4 space-y-2 text-gray-500">
                            <li class="hover:text-gray-800"><a href="#overview">Overview</a></li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-700">Installation</p>
                        <ul class="pl-4 space-y-2 text-gray-500">
                            <li class="hover:text-gray-800"><a href="#installation-overview">Overview</a></li>
                            <li class="hover:text-gray-800"><a href="#macos">macOS</a></li>
                        </ul>
                    </div>
                </nav>
            </aside>

            <!-- 主文档内容 -->
            <main class="flex-1 p-8">
                <header class="mb-8">
                    <h1 class="text-3xl font-bold">Documentation</h1>
                    <p class="text-gray-500 mt-2">Welcome to the documentation of acme. Here you will find all the
                        information you need to work with our software.</p>
                </header>

                <!-- 文档内容 -->
                <section id="overview" class="mb-12">
                    <h2 class="text-2xl font-bold mb-4">1.1 Getting started – Overview</h2>
                    <p class="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p class="text-gray-600 leading-relaxed mt-4">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>
                </section>
            </main>

            <!-- 右侧页面索引 -->
            <aside class="w-1/4 bg-gray-50 p-6">
                <div class="bg-white shadow rounded-lg p-4">
                    <h3 class="font-bold text-lg mb-4">On this page</h3>
                    <ul class="space-y-2 text-gray-500">
                        <li><a href="#overview" class="hover:text-gray-800">1.1 Getting started – Overview</a></li>
                        <li><a href="#another-sub-section" class="hover:text-gray-800">Another sub-section</a></li>
                        <li><a href="#code-example" class="hover:text-gray-800">Code example</a></li>
                        <li><a href="#images" class="hover:text-gray-800">Images</a></li>
                        <li><a href="#lists" class="hover:text-gray-800">Lists</a></li>
                    </ul>
                </div>
            </aside>
        </div>
    </div>
</template>

<script setup>
// 没有需要额外的脚本逻辑
</script>