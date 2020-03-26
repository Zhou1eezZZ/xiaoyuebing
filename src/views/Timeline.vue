<template>
    <div class="timeline">
        <Card v-for="i in 10" :key="i" />
    </div>
</template>

<script>
export default {
    name: 'Timeline',
    components: {},
    mixins: [],
    props: {},
    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    beforeDestroy() {},
    methods: {}
}
</script>

<style lang="scss" scoped>
.timeline {
    padding: 10px 10px;
}
</style>
