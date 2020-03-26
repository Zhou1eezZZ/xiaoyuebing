export default {
    state: {
        active: false,
        duration: 4000,
        message: ''
    },
    mutations: {
        setActive(state, value) {
            state.active = value
        },
        trigerSnackbar(state, { message, duration }) {
            message && (state.message = message)
            duration && (state.duration = duration)
            this.commit('setActive', true)
        }
    },
    actions: {}
}
