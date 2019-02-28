<template lang="pug">
  section#result
    img.hidden-smallest.icon(src="~/assets/images/circle_result.svg", alt="result")
    h3
      .title
    .input-area
      button(@click="findResult") Result
      textarea.input(readonly=true)
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('result', ['result']),
    ...mapGetters('group', ['groups']),
    ...mapGetters('members', ['members'])
  },
  methods: {
    findResult() {
      this.matchResult({ groups: this.groups, members: this.members })
    },
    ...mapActions('result', ['matchResult'])
  }
}
</script>

<style lang="sass" scoped>
#result
  background-color: $color-pink
  position: relative
  display: flex
  flex-direction: column
  .icon
    position: absolute
    top: -40px
    left: 0
    right: 0
    margin: auto
    width: 180px
    height: 180px
  .title
    background-image: url('~assets/images/text_result.svg')
    background-size: cover
    width: 240px
    height: 43px
    position: relative
    left: 40px
</style>
