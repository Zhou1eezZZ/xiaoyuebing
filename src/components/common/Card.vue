<template>
    <div class="card">
        <transition name="fade">
            <md-card v-show="imgLoaded">
                <md-card-media>
                    <img
                        src="https://vuematerial.io/assets/examples/card-image-1.jpg"
                        alt="People"
                        @load="handleImgLoad"
                    />
                </md-card-media>
                <md-card-content>
                    <i>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea,
                        nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas,
                        saepe voluptate pariatur in deleniti minus deleniti minus
                        <!-- <b style="float:right">
                        —— yuebing papa
                    </b> -->
                    </i>
                </md-card-content>
                <md-card-actions md-alignment="space-between">
                    <md-button :class="`${like ? 'md-raised' : ''} md-accent`" @click="like = !like"
                        ><md-icon>favorite_border</md-icon>1034</md-button
                    >
                    <span class="time">2020.02.09</span>
                </md-card-actions>
            </md-card>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Card',
    components: {},
    mixins: [],
    props: {},
    data() {
        return {
            like: false,
            imgLoaded: false
        }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    beforeDestroy() {},
    methods: {
        handleImgLoad() {
            this.imgLoaded = true
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    font-family: 'Rubik';
    margin-bottom: 10px;
    /deep/.md-button-content {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    /deep/.md-icon {
        font-size: 18px !important;
    }
    .time {
        color: #899bb4;
    }
}
</style>
