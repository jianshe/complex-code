<template>
    <div>
      <p>This is a child component.</p>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // 监听来自父窗口的消息
      window.addEventListener('message', (event) => {
        if (event.origin === 'https://your-vue-app-domain.com') {
          // 处理来自父窗口的消息
          console.log('Message from parent:', event.data);
          // 回复消息给父窗口
          window.parent.postMessage('Hello from child!', 'https://your-vue-app-domain.com');
        }
      });
    },
  };
  </script>
  