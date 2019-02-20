<template lang="pug">
  section#group
    img.hidden-smallest.icon(src="~/assets/images/circle_group.svg", alt="group")
    h3
      .title
    p 
      |グループを登録します。
      br
      |グループ名、必要な人数をカンマ区切り(,)で入力してください。
      br
      |1行が1つのグループです。
    .input-area
      textarea.input(placeholder="入力例\nポスター描き,2\nお祭り販売手伝い,6")
</template>

<style lang="sass" scoped>
#group
  background-color: $color-blue
  position: relative
  display: flex
  flex-direction: column
  .icon
    position: absolute
    top: -40px
    left: 40px
    width: 180px
    height: 180px
  .title
    background-image: url('~assets/images/text_group.svg')
    background-size: cover
    width: 200px
    height: 43px
    margin: 10px auto 40px auto
</style>
