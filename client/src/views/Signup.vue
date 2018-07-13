<template>
  <div class="home">
    <Signup/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/SignupForm.vue'

export default {
  name: 'home',
  components: {
    Signup
  }
}
</script>