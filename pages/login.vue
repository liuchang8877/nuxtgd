<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    <div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <!-- <img class="mx-auto h-12 w-auto" src="/logo.svg" alt="Logo" /> -->
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {{ $t('login.title') }}
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          {{ $t('login.description') }}
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" @submit.prevent="handleLogin">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                {{ $t('login.email') }}
              </label>
              <div class="mt-1">
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">
                {{ $t('login.password') }}
              </label>
              <div class="mt-1">
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  v-model="rememberMe"
                  type="checkbox"
                  class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                  {{ $t('login.remember_me') }}
                </label>
              </div>

              <div class="text-sm">
                <a href="#" class="font-medium text-green-600 hover:text-green-500">
                  {{ $t('login.forgot_password') }}
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {{ $t('login.sign_in') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { navigateTo } from '#app'
import Header from '~/components/Header.vue'

const toast = useToast()
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const error = ref('')
const success = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  try {
    error.value = ''
    success.value = ''
    isLoading.value = true

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      })
    })

    const result = await response.json()

    if (!response.ok || result.code !== 0) {
      error.value = 'Invalid credentials'
      toast.error('Invalid credentials', {
        timeout: 3000
      })
      return
    }

    // Store token and user data
    const userData = result.data
    localStorage.setItem('token', userData.token)
    localStorage.setItem('user', JSON.stringify({
      id: userData.id,
      email: userData.email,
      name: userData.name,
      avatar: userData.avatar,
      status: userData.status
    }))

    toast.success('Login successful', {
      timeout: 2000
    })
    
    // Redirect to dashboard
    await navigateTo('/dashboard')
  } catch (err) {
    error.value = 'Network error'
    toast.error('Network error', {
      timeout: 3000
    })
    console.error('Login error:', err)
  } finally {
    isLoading.value = false
  }
}
</script>
