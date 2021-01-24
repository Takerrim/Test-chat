<template>
  <div class="chat-input-wrapper">
    <div
      class="input"
      contenteditable
      ref="input"
      @keydown.enter.prevent="send"
      @paste.prevent="pasteClipboardData"
    ></div>
    <button class="send-message-btn" @click="send">
      <img src="@/assets/send.svg"/>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'chat-input',
    methods: {
      send() {
        const value = this.$refs.input.textContent
        this.$refs.input.textContent = ''
        this.$emit('send', value)
      },
      pasteClipboardData(e) {
        this.$refs.input.textContent = (e.clipboardData || window.clipboardData).getData('text')
      },
    }
  }
</script>

<style scoped>
.chat-input-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 18px;
  border-top: 1px solid #EBEDF0;
}

.input {
  outline: none;
  word-break: break-word;
  flex: 1;
  max-height: 80px;
  overflow: auto;
}

.input:empty::before {
  content: "Write a message..."
}

.send-message-btn {
  width: 48px;
  height: 48px;
  background: linear-gradient(79.79deg, #55A2CE -82.2%, #5D63C8 110.59%);
  box-shadow: 0px 4px 18px rgba(69, 78, 137, 0.06);
  border-radius: 8px;
  cursor: pointer;
  margin-left: 12px;
}
</style>
