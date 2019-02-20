<template lang="pug">
  header.header
    nav
      ul.nav.nav__left
        li
          img(src="~assets/images/favicon.svg" alt="Brand")
        li
          img(src="~assets/images/github.svg" alt="GitHub")
        li
          img(src="~assets/images/twitter.svg" alt="twitter")
      ul.nav.nav__right
        li
          a(href="#group") グループ
        li
          a(href="#members") 参加者
        li
          a(href="#result") 結果
</template>

<style lang="sass" scoped>
header
  position: fixed
  width: 100%
  height: 80px
  display: flex
  flex-direction: column
  padding: 0 30px

.header
  background-color: $color-yellow

nav
  height: 79px
  display: flex
  justify-content: space-between
  align-items: stretch
  align-content: center
  align-self: stretch

ul
  margin: 0
  padding: 0
  list-style: none
  align-items: baseline

.nav
  display: flex
  flex-direction: row
  li
    justify-content: space-between
    align-self: center
  &__left
    li
      padding-right: 30px
  &__right
    li
      padding-left: 30px
</style>
