<template>
  <div class="chat-message" :class="`-${messageInfo.type}`">
    <div class="text-block">
      <p class="text">{{ messageInfo.text }}</p>
      <span class="time">{{ time }}</span>
    </div>
    <h4 class="username" v-if="messageInfo.type === 'incoming'">{{ messageInfo.sender.username }}</h4>
  </div>
</template>

<script>
  export default {
    props: {
      messageInfo: {
        type: Object,
        required: true,
      },
    },
    computed: {
      time() {
        const date = new Date(this.messageInfo.created)

        const format = (time) => time < 10 ? `0${time}` : time

        return `${format(date.getHours())}:${format(date.getMinutes())}`
      }
    }
  }
</script>

<style scoped>
.chat-message {
  margin-bottom: 12px;
}

.text-block {
  padding: 14px;
  max-width: 400px;
  margin-bottom: 6px;
  font-size: 14px;
  letter-spacing: 0.3px;
  display: flex;
  flex-direction: column;
  word-break: break-word;
}

.chat-message.-outgoing {
  align-self: flex-end;
}

.chat-message.-outgoing .text-block {
  background: linear-gradient(147.18deg, #5F62C6 0%, #4C62D3 100%);
  border-radius: 8px 8px 0px 8px;
}

.chat-message.-incoming .text-block {
  background-color: #F6F8FD;
  border-radius: 8px 8px 8px 0px;
}

.username,
.text {
  margin: 0;
}

.username,
.chat-message.-incoming .text {
  color: #262B3C;
}

.chat-message.-outgoing .text {
  color: #FFFFFF;
}

.time {
  margin-top: 4px;
  margin-left: auto;
  color: #747D8A;
}

.chat-message.-outgoing .time {
  color: #b6bec9;
}

.username {
  margin-left: 4px;
}
</style>
