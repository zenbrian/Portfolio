/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/portfolio',  // 指定你的 GitHub Pages 路徑
    assetPrefix: '/portfolio/',  // 為靜態資源添加正確的路徑前綴
    images: {
      domains: ['zenbrian.github.io'],  // 如果圖片來自外部，需要允許該域名
      unoptimized: true,  // 禁用 Next.js 圖片優化（如果你不需要）
    },
  };
  
  export default nextConfig;
  