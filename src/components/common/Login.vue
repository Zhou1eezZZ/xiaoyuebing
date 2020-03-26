<template>
    <div class="login">
        <img src="../../assets/logo.png" alt="login" />
        <h1 class="login-title">登 录</h1>
        <md-field md-clearable>
            <md-icon>face</md-icon>
            <label>用户名</label>
            <md-input v-model="username"></md-input>
        </md-field>

        <md-field>
            <md-icon>lock</md-icon>
            <label>密码</label>
            <md-input v-model="password" type="password"></md-input>
        </md-field>
        <div class="tip">
            <md-button class="md-primary" @click="handleForgetPsd">忘记密码</md-button>
        </div>
        <md-button style="width:95%" class="md-raised md-primary" @click="handleLogin"
            >登录</md-button
        >
    </div>
</template>

<script>
// import { throttle } from '../../utils/tool'
export default {
    name: 'Login',
    components: {},
    mixins: [],
    props: {},
    data() {
        return {
            username: '',
            password: ''
        }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    beforeDestroy() {},
    methods: {
        handleForgetPsd() {
            this.$message({ message: '请联系管理员修改密码' })
        },
        handleLogin() {
            if (this.username.trim() && this.password.trim()) {
                console.log(this.username, this.password)
            } else {
                this.$message({ message: '请输入用户名和密码' })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    text-align: center;
    img {
        width: 80px;
        height: 80px;
    }
    &-title {
        margin: 10px 0;
        font-size: 18px;
    }
    .tip {
        width: 100%;
        text-align: right;
    }
}
</style>
