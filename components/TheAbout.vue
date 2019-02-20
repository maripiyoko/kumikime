<template lang="pug">
  section.about
    logo
    p 
      |たくさんの参加者をグループ分けします。
      br
      |PTAやボランティアお手伝いグループなど
      br
      |参加者の希望を反映しながら、必要な人数を満たす
      br
      |最適な組み合わせを見つけます。
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="sass" scoped>
.about
  background-color: $color-yellow
  background-image: url('~assets/images/dots.png')
  background-size: contain
  padding-top: 120px
  margin-top: 80px
</style>
