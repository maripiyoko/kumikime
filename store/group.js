export const state = () => ({
  groups: []
})

export const getters = {
  groups: state => state.groups,
  totalRequiredMembers: state =>
    state.groups.length > 0
      ? state.groups.reduce((accumulator, group) => accumulator + group.num, 0)
      : 0
}

export const mutations = {
  setGroup(state, group) {
    state.groups.push(group)
  },
  clearGroups(state) {
    state.groups = []
  }
}

export const actions = {
  setGroups({ commit }, { groups }) {
    commit('clearGroups')
    let id = 1
    groups.map(line => {
      const trimmedLine = line.trim().replace('、', ',')
      if (trimmedLine.length === 0) return
      const [name, num] = trimmedLine.split(',')
      const group = {
        id: id,
        name: name.trim(),
        num: parseInt(num, 10) ? parseInt(num, 10) : 0
      }
      id++
      commit('setGroup', group)
    })
  }
}
