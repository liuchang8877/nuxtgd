<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navigation -->
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <span class="text-xl font-bold text-gray-800">{{ $t('dashboard.title') }}</span>
            </div>
          </div>
          <div class="flex items-center">
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
    <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- App Cards -->
        <NuxtLink 
          v-for="app in apps" 
          :key="app.site_code" 
          :href="chatURL(app.site_code)" 
          class="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <div class="text-2xl mr-2">{{ app.icon }}</div>
              <h3 class="text-lg font-semibold text-gray-900">{{ app.name }}</h3>
            </div>
            <div class="text-sm">
              <span class="px-2 py-1 rounded-full" :class="app.status === 'normal' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'">
                {{ app.status }}
              </span>
            </div>
          </div>
          
          <div class="space-y-2">
            <div class="text-sm text-gray-600">
              <span class="font-medium">创建时间:</span> {{ formatDate(app.created_at) }}
            </div>
            <div v-if="app.description" class="text-sm text-gray-600">
              <span class="font-medium">描述:</span> {{ app.description }}
            </div>
            <div class="text-sm text-gray-600">
              <span class="font-medium">公开:</span> {{ app.is_public ? '是' : '否' }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useRuntimeConfig } from '#app'

// 获取运行时配置
const config = useRuntimeConfig()
const chatURL = (site_code) => `${config.public.baseURL}/chat/${site_code}`

const router = useRouter()
const isUserMenuOpen = ref(false)
const user = ref({
  name: '',
  email: '',
  avatar: null
})

// 从localStorage加载用户信息
onMounted(() => {
  console.log('Runtime Config:', config)
  console.log('Apps:', apps.value)
  const userStr = localStorage.getItem('user')
  if (userStr) {
    user.value = JSON.parse(userStr)
  } else {
    // 如果没有用户信息，重定向到登录页
    router.push('/login')
  }
})

const apps = ref([])
const { getApps } = useApi()

const userInitials = computed(() => {
  if (!user.value?.name) return ''
  return user.value.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
})

function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

onMounted(async () => {
  try {const user = JSON.parse(localStorage.getItem('user'))
    const fetchedApps = await getApps()
    apps.value = fetchedApps
  } catch (error) {
    console.error('Error loading apps:', error)
  }
})

async function handleLogout() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  await router.push('/login')
}
</script>
