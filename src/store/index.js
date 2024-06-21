import { createStore } from 'vuex'

export default createStore({
  /* eslint-disable */
  // store data same way as variables
  state: {
    // data -> propertyName/key, null -> value
    about: null,
    projects: null,
    education: null,
    skills: null,
    workExp: null,
    testimonials: null,
  },
  mutations: {
    // used to change/update the state
    // commiting a mutation
    setAboutMe(state, payload) {
      state.aboutMe = payload
    },
    setProjects(state, payload) {
      state.projects = payload
    },
    setEducation(state, payload) {
      state.education = payload
    },
    setSkills(state, payload) {
      state.skills = payload
    },
    setWorkExp(state, payload) {
      state.workExp = payload
    },
    setTestimonials(state, payload) {
      state.testimonials = payload
    }
  },
  actions: {
    // run all async code
    // dispatching an action
    async getAboutMe({commit}) {
      let fetchedInfo = await fetch('https://harriselvin.github.io/first_api/data/data.json')
      let data = await fetchedInfo.json()
      // dependant on json file
      let {aboutMe, projects, education, skills, workExp, testimonials} = data
      commit('setAboutMe', aboutMe)
      commit('setProjects', projects)
      commit('setEducation', education)
      commit('setSkills', skills)
      commit('setWorkExp', workExp)
      commit('setTestimonials', testimonials)
    }
  },
  modules: {
  },
  getters: {
  }
})
