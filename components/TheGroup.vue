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
      textarea.input(placeholder="入力例\nポスター描き,2\nお祭り販売手伝い,6" @input="methodGroups")
    .row(v-if="groupCount > 0")
      table
        thead
          tr
            th ID
            th グループ名
            th 必要な人数
        tbody
          tr(v-for="group in groups" :key="group.id")
            td {{ group.id }}
            td {{ group.name }}
            td {{ group.num }}
          tr
            td(colspan="3") total {{ totalRequiredMembers }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    groupCount() {
      return this.groups.length
    },
    ...mapGetters('group', ['groups', 'totalRequiredMembers'])
  },
  methods: {
    methodGroups(event) {
      const groups = event.target.value.split(/\r\n|\r|\n/)
      this.setGroups({ groups })
    },
    ...mapActions('group', ['setGroups'])
  }
}
</script>


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
