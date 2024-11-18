export default defineCachedEventHandler(
    async () => {
      return { time: Date.now() }
    },
    {
      swr: true, // 如果需要启用过期的重新验证功能
      maxAge: 60, // 缓存 60 秒
    }
  )