<template lang="pug">
  footer.footer
    .links
      ul
        li 
          a(href="#") 利用規約
        li
          a(href="#") FAQ
        li
          a(href="#") お問い合わせ
    .copyright
      |Copyright @mpiyok
</template>

<style lang="sass" scoped>
.footer
  background-image: url('~assets/images/footer_bg.jpg')
  background-size: cover
  display: flex
  flex-direction: column
  align-items: stretch
  width: 100%
  color: $color-text-white
  a
    color: $color-text-white
  .links
    margin: 20px 30px 0 30px
  .copyright
    margin: 20px 30px
    font-size: 0.5rem
  ul
    list-style: none
    padding: 0
    margin: 0
    display: flex
    flex-direction: row
    justify-content: flex-end
    align-items: baseline
    li
      padding-left: 30px
</style>
