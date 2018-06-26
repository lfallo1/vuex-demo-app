<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <strong>Logged in as: {{username}}</strong>
    </div>
  </div>
</template>

<script>

    import {mapState} from 'vuex'

    export default {
        name: 'about',
        computed:{
            ...mapState({
                username: state => state.user
            })
        }
    }
</script>