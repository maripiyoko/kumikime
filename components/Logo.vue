<template lang="pug">
  .AppLogo
    .Logo.Circle
    .Logo.Letter
</template>

<style lang="sass" scoped>
.AppLogo
  display: inline-block
  position: relative
  overflow: hidden
  height: 195px
  width: 230px
  margin-bottom: 40px

.Logo
  position: absolute
  top: 0
  left: 0
  width: 0
  height: 0

.Circle
  background-image: url('~assets/flower_circle.svg')
  background-size: cover
  width: 230px
  height: 195px

.Letter
  background-image: url('~assets/logo_text.svg')
  background-size: cover
  width: 72px
  height: 72px
  top: 60px
  left: 80px
  animation: squash 1s ease-in-out 3
  animation-delay: 2s

@keyframes squash
  0%
    transform: scale(1) translateY(0)
  33.3333%
    transform: scale(1.5, 1) translateY(-6px)
  66.666%
    transform: translateY(0)
  100%
    transform: scale(1) translateY(0)
</style>
