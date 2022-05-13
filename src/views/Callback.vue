<template>
  <div class="callback">Callback</div>
</template>

<script>
export default {
  name: 'callbackView',
  mounted() {
    this.$auth.handleAuthentication().then(() => {
      this.$router.push({ name: 'home' })
    })
  }
}
</script>