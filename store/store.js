export const state = () => ({
  firstAnimation: false
})

export const mutations = {
  SET_FIRST_ANIMATION(state, validation) {
    state.firstAnimation = validation
  }
}

export const actions = {
  validateFirstAnimation({ commit }, validation) {
    commit('SET_FIRST_ANIMATION', validation)
  }
}

export const getters = {
  getValidation(state) {
    return state.firstAnimation
  }
}
