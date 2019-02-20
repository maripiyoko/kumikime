<template lang="pug">
  .container
    TheAbout
    section.group
      h3 Groups
    section.members
      h3 Members
    section.result
      h3 Result
    TheFooter
</template>

<script>
import TheAbout from '~/components/TheAbout.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheAbout,
    TheFooter
  }
}
</script>

<style lang="sass">
section
  width: 100%
  padding: 60px 20px

.container
  margin: 0 auto
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: start
  align-items: center
  text-align: center

.group
  background-color: $color-blue

.members
  background-color: $color-yellow

.result
  background-color: $color-pink

p
  font-size: 1rem
  line-height: 1.7
  letter-spacing: 6px

a
  cursor: pointer
  text-decoration: none
  font-weight: bolder
  color: $color-text-link
</style>
