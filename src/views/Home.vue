<template>
  <div class="home">
    <div>
      <strong>Logged in as: {{username}}</strong>
    </div>

    <div>
      <strong>{{count}}</strong>
      <md-button class="md-icon-button md-raised" @click="increment()">
        <md-icon>add</md-icon>
      </md-button>
      <md-button class="md-icon-button md-raised" @click="decrement()">
        <md-icon>remove</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
    name: 'home',
    computed:{
        ...mapState({
            username: state => state.user,
            count: state => state.counter.count
        })
    },
    methods:{
        ...mapActions({
            'increment': 'counter/incrementCount',
            'decrement': 'counter/decrementCount'
        })
    }
}
</script>
