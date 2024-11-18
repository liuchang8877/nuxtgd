<template>
    <Header />

    <div class="bg-gray-50 min-h-screen">
        <!-- Header -->
        <header class="text-center py-10">
            <h1 class="text-4xl font-bold">Pricing</h1>
            <p class="text-gray-500 mt-2">Choose the plan that works best for you.</p>
        </header>

        <!-- Pricing Options -->
        <div class="flex justify-center space-x-4 mb-8">
            <button class="text-gray-800 font-semibold border-b-2 border-green-500 pb-1">
                Monthly
            </button>
            <button class="text-gray-500 hover:text-gray-800">
                Yearly
            </button>
        </div>

        <!-- Pricing Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
            <!-- Basic Plan -->
            <div class="bg-white shadow-lg rounded-lg p-6 text-center">
                <h2 class="text-xl font-bold mb-2">Basic</h2>
                <p class="text-gray-500 mb-4">Get started with your business</p>
                <p class="text-2xl font-bold text-orange-500 mb-4">$9.00 <span class="text-sm text-gray-500">/
                        month</span></p>
                <button class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                    Subscribe
                </button>
            </div>

            <!-- Pro Plan -->
            <div class="bg-white shadow-lg rounded-lg p-6 text-center">
                <h2 class="text-xl font-bold mb-2">Pro</h2>
                <p class="text-gray-500 mb-4">Extended features for your business</p>
                <p class="text-2xl font-bold text-orange-500 mb-4">$29.00 <span class="text-sm text-gray-500">/
                        month</span></p>
                <button class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                    Subscribe
                </button>
            </div>

            <!-- Ultimate Plan -->
            <div class="bg-white shadow-lg rounded-lg p-6 text-center">
                <h2 class="text-xl font-bold mb-2">Ultimate</h2>
                <p class="text-gray-500 mb-4">The ultimate experience for your business</p>
                <p class="text-2xl font-bold text-orange-500 mb-4">$69.00 <span class="text-sm text-gray-500">/
                        month</span></p>
                <button class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                    Subscribe
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
// 没有逻辑部分，这里为空
</script>