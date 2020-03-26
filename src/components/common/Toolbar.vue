<template>
    <div class="toolbar">
        <md-toolbar class="md-primary">
            <h3 class="md-title" style="flex: 1">{{ routeName }}</h3>
            <transition name="fade">
                <md-button
                    v-show="routeName === 'timeline'"
                    class="md-icon-button"
                    @click="handleUpload"
                >
                    <md-icon>camera_alt</md-icon>
                </md-button>
            </transition>
            <md-field v-show="false">
                <md-file
                    ref="upload"
                    v-model="fileName"
                    accept="image/*"
                    @md-change="handleImgChange"
                />
            </md-field>
        </md-toolbar>
    </div>
</template>

<script>
export default {
    name: 'Toolbar',
    components: {},
    mixins: [],
    props: {},
    data() {
        return {
            routeName: '',
            fileName: ''
        }
    },
    computed: {},
    watch: {
        $route(to) {
            this.routeName = to.name
        }
    },
    created() {},
    mounted() {},
    beforeDestroy() {},
    methods: {
        handleUpload() {
            const upload = this.$refs['upload'].$refs['inputFile']
            upload.click()
        },
        handleImgChange(FileList) {
            if (FileList.length !== 0) {
                console.log(this.fileName)
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>
