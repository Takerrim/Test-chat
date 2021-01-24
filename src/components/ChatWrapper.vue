<template>
  <div class="chat-wrapper">
    <div class="chat-messages-container">
      <chat-message
        v-for="(message, i) in messages"
        :key="i"
        :message-info="message"
      />
    </div>
    <chat-input @send="sendMessage"/>
  </div>
</template>

<script>
import Ws from '@/ws'
import ChatMessage from './ChatMessage.vue'
import ChatInput from './ChatInput.vue'

const USERNAME = 'Dummy'

export default {
  components: { ChatMessage, ChatInput, },
  data() {
    return {
      ws: new Ws(USERNAME),
      messages: [],
    }
  },
  methods: {
    onMessage(data) {
      this.messages.push({
        type: 'incoming',
        ...data,
      })
    },
    sendMessage(text) {
      const data = {
        type: 'outgoing',
        sender: {
          username: this.$options.username,
        },
        created: new Date(),
        text,
      }

      this.ws.sendMessage(data)
      this.messages.push(data)
    }
  },
  created() {
    this.ws.on('message', this.onMessage)
  },
  beforeDestroy() {
    this.ws.off('message', this.onMessage)
    this.ws.connection.disconnect()
  },
  username: USERNAME,
}
</script>

<style scoped>
.chat-wrapper {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.chat-messages-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  padding: 18px 12px 0 12px;
}
</style>
