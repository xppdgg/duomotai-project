<template>
    <div class="connect-container">
      <nav class="navbar">
        <div class="nav-item" 
             v-for="item in navItems" 
             :key="item.name">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </div>
      </nav>
      
      <!-- 子路由内容显示区域 -->
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        navItems: [
          {
            name: '首页',
            path: '/'
          },
          {
            name: '天正磁系统焊接',
            path: '/diagnosis/weld'
          },
          
          {
            name: '天正自动总装',
            path: '/diagnosis/auto'
          },
          {
            name: '天正热组件打螺丝',
            path: '/diagnosis/hotscrew'

          },
          {
            name: '天正机构件组装',
            path: '/diagnosis/assembly'
          },
          {
            name: '产品缺陷检测',
            path: '/diagnosis/detection'
          },
          {
            name: '天正自动综合特性测试',
            path: '/diagnosis/test'
          },
          {
            name: '天正自动打螺丝',
            path: '/diagnosis/screw'
          },
          {
            name: '天正热组件冲裁焊接',
            path: '/diagnosis/hotweld'
          },
          {
            name: '天正线圈绕制',
            path: '/diagnosis/wind'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .connect-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .navbar {
    display: flex;
    background-color: #ffffff;
    padding: 1rem 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }
  
  .nav-item {
    position: relative;
    margin: 0 1.5rem;
  }
  
  .nav-item a {
    text-decoration: none;
    color: #64748b;
    font-weight: 500;
    padding: 0.5rem 0;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .nav-item a:hover {
    color: #334155;
  }
  
  .nav-item a.router-link-exact-active {
    color: #3b82f6;
  }
  
  .nav-item a.router-link-exact-active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #3b82f6;
  }
  </style>
  
