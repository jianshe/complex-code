<template>
    <div>
      <iframe
        ref="iframe"
        src="https://example.com/child.html"
        width="400"
        height="300"
        @load="setupIframeCommunication"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      setupIframeCommunication() {
        const iframe = this.$refs.iframe;
        // 监听iframe加载完成后的事件
        iframe.addEventListener('load', () => {
          // 获取iframe的contentWindow
          const childWindow = iframe.contentWindow;
  
          // 发送消息给iframe
          childWindow.postMessage('Hello from parent!', 'https://example.com');
        });
  
        // 监听来自iframe的消息
        window.addEventListener('message', (event) => {
          if (event.origin === 'https://example.com') {
            // 处理来自iframe的消息
            console.log('Message from iframe:', event.data);
          }
        });
      },
    },
  };
  </script>
  