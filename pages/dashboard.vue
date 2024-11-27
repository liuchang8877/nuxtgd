<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navigation -->
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <!-- <img class="h-8 w-auto" src="/logo.svg" alt="Logo" /> -->
              <span class="text-xl font-bold text-gray-800">{{ $t('dashboard.title') }}</span>
            </div>
          </div>
          <div class="flex items-center">
            <!-- User Dropdown -->
            <div class="ml-3 relative">
              <div class="flex items-center">
                <button
                  @click="isUserMenuOpen = !isUserMenuOpen"
                  class="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <span class="sr-only">Open user menu</span>
                  <div v-if="user?.avatar" class="h-8 w-8 rounded-full">
                    <img :src="user.avatar" alt="" class="h-8 w-8 rounded-full" />
                  </div>
                  <div v-else class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                    {{ userInitials }}
                  </div>
                </button>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-800">{{ user?.name }}</div>
                  <div class="text-sm font-medium text-gray-500">{{ user?.email }}</div>
                </div>
              </div>
              <!-- Dropdown Menu -->
              <div v-if="isUserMenuOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1">
                <a href="#" @click.prevent="handleLogout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {{ $t('dashboard.logout') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Welcome Section -->
      <div class="px-4 py-6 sm:px-0">
        <h1 class="text-2xl font-semibold text-gray-900">{{ $t('dashboard.welcome', { name: user?.name }) }}</h1>
        <p class="mt-1 text-sm text-gray-600">{{ $t('dashboard.welcome_message') }}</p>
      </div>

      <!-- Stats Section -->
      <div class="mt-8">
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Stat cards -->
          <div v-for="(stat, index) in stats" :key="index" class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <component :is="stat.icon" class="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">{{ $t(stat.name) }}</dt>
                    <dd class="flex items-baseline">
                      <div class="text-2xl font-semibold text-gray-900">{{ stat.value }}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="mt-8">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h2 class="text-lg font-medium text-gray-900">{{ $t('dashboard.recent_activity') }}</h2>
            <p class="mt-1 text-sm text-gray-500">{{ $t('dashboard.activity_description') }}</p>
          </div>
          <div class="border-t border-gray-200">
            <ul role="list" class="divide-y divide-gray-200">
              <li v-for="(activity, index) in recentActivities" :key="index" class="px-4 py-4 sm:px-6">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <component :is="activity.icon" class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate">{{ $t(activity.title) }}</p>
                    <p class="text-sm text-gray-500">{{ $t(activity.description) }}</p>
                  </div>
                  <div>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" :class="activity.statusClass">
                      {{ $t(activity.status) }}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import {
  EyeIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  Cog6ToothIcon
} from '@heroicons/vue/24/outline'

const router = useRouter()
const toast = useToast()
const { t } = useI18n()

const user = ref(null)
const isUserMenuOpen = ref(false)

// Computed property for user initials
const userInitials = computed(() => {
  if (!user.value?.name) return ''
  return user.value.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

// Mock stats data
const stats = ref([
  {
    name: 'dashboard.stats.total_views',
    value: '2,651',
    icon: 'EyeIcon',
  },
  {
    name: 'dashboard.stats.total_likes',
    value: '789',
    icon: 'HeartIcon',
  },
  {
    name: 'dashboard.stats.total_comments',
    value: '156',
    icon: 'ChatBubbleLeftIcon',
  },
])

// Mock recent activities
const recentActivities = ref([
  {
    title: 'dashboard.activity.login',
    description: 'dashboard.activity.login_description',
    status: 'dashboard.status.success',
    statusClass: 'bg-green-100 text-green-800',
    icon: 'ArrowRightOnRectangleIcon',
  },
  {
    title: 'dashboard.activity.profile_update',
    description: 'dashboard.activity.profile_update_description',
    status: 'dashboard.status.completed',
    statusClass: 'bg-blue-100 text-blue-800',
    icon: 'UserIcon',
  },
  {
    title: 'dashboard.activity.settings',
    description: 'dashboard.activity.settings_description',
    status: 'dashboard.status.in_progress',
    statusClass: 'bg-yellow-100 text-yellow-800',
    icon: 'Cog6ToothIcon',
  },
])

// Load user data on mount
onMounted(() => {
  const userData = localStorage.getItem('user')
  if (userData) {
    user.value = JSON.parse(userData)
  } else {
    router.push('/login')
  }
})

// Handle logout
const handleLogout = () => {
  localStorage.removeItem('user')
  toast.success(t('dashboard.logout_success'))
  router.push('/login')
}
</script>
