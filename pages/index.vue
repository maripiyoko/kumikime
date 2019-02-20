<template lang="pug">
  .container
    TheAbout
    TheGroup
    TheMember
    TheResult
    TheFooter
</template>

<script>
import TheAbout from '~/components/TheAbout.vue'
import TheGroup from '~/components/TheGroup.vue'
import TheMember from '~/components/TheMember.vue'
import TheResult from '~/components/TheResult.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheAbout,
    TheGroup,
    TheMember,
    TheResult,
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

p
  font-size: 1rem
  line-height: 1.7
  letter-spacing: 6px

@media screen and (max-width: $vp-desktop)
  .desktop-only
    display: none !important
@media screen and (max-width: $vp-smallest)
  .hidden-smallest
    display: none !important

a
  cursor: pointer
  text-decoration: none
  font-weight: bolder
  color: $color-text-link

.input-area
  max-width: 800px
  width: 80%
  height: 380px
  margin: 40px auto
  .input
    width: 100%
    height: 100%
    font-size: 1rem
    line-height: 1.5
    letter-spacing: 2px
    padding: 5px 12px
    border: 1px solid $color-border-input
    border-radius: 8px
    &:focus
      outline: 0
      border: 1px solid $color-border-input-focused
</style>
