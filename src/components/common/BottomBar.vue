<template>
    <div class="bottom-bar">
        <md-bottom-bar md-type="shift" md-sync-route>
            <md-bottom-bar-item to="/" exact md-label="首页" md-icon="home"></md-bottom-bar-item>
            <md-bottom-bar-item to="/yuebing" md-label="饼" md-icon="face"></md-bottom-bar-item>
            <md-bottom-bar-item
                to="/timeline"
                md-label="月饼圈"
                md-icon="camera"
            ></md-bottom-bar-item>
            <md-bottom-bar-item
                to="/member"
                md-label="用户"
                md-icon="supervised_user_circle"
            ></md-bottom-bar-item>
        </md-bottom-bar>
    </div>
</template>

<script>
export default {
    name: 'BottomBar'
}
</script>

<style lang="scss" scoped>
.bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
    background: rgba(#000, 0.06);
}
</style>
