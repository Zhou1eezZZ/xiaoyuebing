<template>
    <div>
        <md-snackbar md-position="center" :md-active.sync="snackbarActive" md-persistent>
            <span>{{ message }}</span>
            <md-button class="md-primary" @click="handleClose">关闭</md-button>
        </md-snackbar>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'Snackbar',
    components: {},
    mixins: [],
    props: {},
    data() {
        return {}
    },
    computed: {
        ...mapState({
            active: state => state.snackbar.active,
            message: state => state.snackbar.message
        }),
        snackbarActive: {
            get() {
                return this.active
            },
            set(value) {
                this.setActive(value)
            }
        }
    },
    watch: {},
    created() {},
    mounted() {},
    beforeDestroy() {},
    methods: {
        ...mapMutations(['setActive']),
        handleClose() {
            this.setActive(false)
        }
    }
}
</script>

<style lang="scss" scoped></style>
