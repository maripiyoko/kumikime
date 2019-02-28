export const state = () => ({
  result: []
})

export const getters = {
  result: state => state.result
}

export const mutations = {
  setResult(state, result) {
    state.result = result
  }
}

export const actions = {
  matchResult({ commit }, { groups, members }) {
    console.log(groups.length)
    console.log(members.length)
  }
}
