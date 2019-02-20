<template lang="pug">
  section#members
    img.hidden-smallest.icon(src="~/assets/images/circle_member.svg", alt="member")
    h3
      .title
    p 
      |参加者を登録します。
      br
      |参加者名、希望するグループ番号をカンマ区切り(,) で入力してください。
      br
      |1行が1人です。
    .input-area
      textarea.input(placeholder="入力例\n田中さん,2,1,4\n山田さん,6,2,1")
</template>

<style lang="sass" scoped>
#members
  background-color: $color-yellow
  position: relative
  .icon
    position: absolute
    top: -40px
    right: 40px
    width: 180px
    height: 180px
  .title
    background-image: url('~assets/images/text_member.svg')
    background-size: cover
    background-repeat: no-repeat
    width: 140px
    height: 43px
    margin: 10px auto 40px auto
</style>
