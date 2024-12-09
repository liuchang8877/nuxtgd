interface App {
  id: string;
  name: string;
  description: string;
  type: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  icon?: string;
  verified?: boolean;
}

interface ApiResponse {
  apps: App[];
  agents: App[];
  assistants: App[];
}

export function useApi() {
  const config = useRuntimeConfig()
  
  async function getApps() {
    const token = localStorage.getItem('token')
    
    if (!token) {
      throw new Error('未找到身份验证令牌')
    }
  
    const response = await fetch('/api/apps', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      }
    })
  
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        await navigateTo('/login')
        throw new Error('未授权')
      }
      throw new Error('获取应用列表失败')
    }
  
    const result = await response.json()
    if (result.code === 0) {
      return result.data
    } else {
      throw new Error(result.message || '获取应用列表失败')
    }
  }
  const getCards = async (): Promise<ApiResponse> => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${config.public.server}/api/apps`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': '*/*',
          'Connection': 'keep-alive'
        }
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      
      const data = await response.json()
      return {
        apps: data.apps || [],
        agents: data.agents || [],
        assistants: data.assistants || []
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      return {
        apps: [],
        agents: [],
        assistants: []
      }
    }
  }

  return {
    getApps,
    getCards
  }
}
