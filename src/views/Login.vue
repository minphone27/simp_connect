<template>
    <div class="d-flex align-items-center justify-content-center">
            <form action="" @submit.prevent="login()">
                <div class="mb-3 row d-flex align-items-center justify-content-evenly">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
                    <div class="col-sm-10">
                    <input type="text" v-model="username" class="form-control" id="staticEmail" placeholder="email">
                    </div>
                </div>
                <div class="mb-3 row d-flex justify-content-evenly align-items-center">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                    <input type="password" v-model="password" class="form-control" id="inputPassword" placeholder="password">
                    </div>
                </div>
                <input type="submit">
            </form>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';

export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    computed:{
      ...mapGetters('auth',{
        getterLoginStatus:'getLoginStatus'
      }),
      ...mapState('auth',["loginStatus"])
    },
    methods:{
        ...mapActions('auth',{
          actionLogin:'login'
        }),
        login(){
            this.actionLogin({username:this.username, password:this.password})
            .then(()=> {
                if(this.$store.state.auth.loginStatus == 'success'){
                this.$router.push("/dashboard");
                }else if(this.$store.state.auth.loginStatus == 'failed'){
                    alert('failed to login')
                }else{
                    alert(this.$store.state.auth.loginStatus)
                }
            });
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>