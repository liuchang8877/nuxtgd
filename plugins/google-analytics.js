export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      // 插入 Google Analytics 的 gtag.js
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-L2V0L8LKP0';
      document.head.appendChild(script);
  
      // 初始化 Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-L2V0L8LKP0');
    }
  });