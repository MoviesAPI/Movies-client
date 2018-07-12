<template>
  <div class="home">
  
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/loginForm.vue'

export default {
  name: 'home',
  components: {
    Login
  }
}
</script>
