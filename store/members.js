export const state = () => ({
  members: []
})

export const getters = {
  members: state => state.members
}

export const mutations = {
  setMember(state, member) {
    state.members.push(member)
  },
  clearMembers(state) {
    state.members = []
  }
}

export const actions = {
  setMembers({ commit }, { members }) {
    commit('clearMembers')
    let id = 1
    members.map(line => {
      const trimmedLine = line.trim().replace(/、/g, ',')
      if (trimmedLine.length === 0) return
      const [name, ...choices] = trimmedLine.split(',')
      const member = {
        id: id,
        name: name,
        choices: choices.map(i => parseInt(i)).filter(j => !Number.isNaN(j))
      }
      id++
      commit('setMember', member)
    })
  }
}
