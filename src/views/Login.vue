<template>
    <div class="d-flex align-items-center justify-content-center text-light bg-primary" style="min-height:100vh">
        <div class="containe form-container">
            <div class="img-container">
                <img src="@/assets/simplogo-white.png" alt="simpconnectlogo" class="img-fluid" />
            </div>
            <form @submit.prevent="login()" class="needs-validation" novalidate>
                <div class="form-group my-3">
                    <label for="username" class="form-label">User name</label>
                    <input v-model="username"  type="text" id="username" class="form-control" placeholder="Enter username" required/>
                    <template >
                        <p class="text-danger">Please enter username</p>
                    </template>
                </div>
                <div class="form-group my-3">
                    <label for="password" class="form-label">Password</label>
                    <input v-model="password"  type="password" id="password" class="form-control" placeholder="Enter Password" required/>
                    <template >
                        <p class="text-danger">Please enter password</p>
                    </template>
                </div>
                <div class="form-group my-3">
                    <input type="submit" class="btn btn-primary">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import useValidate from "@vuelidate/core"
// import { required } from "@vuelidate/validators"
import {mapActions, mapGetters, mapState} from 'vuex';
import api from "../services/api"

export default {
    data(){
        return{
            // v$: useValidate(), 
            username:'',
            password:''
        }
    },
    validations(){
        return{
            username: { required },
            password: { required }
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
        async login(){
            // const isFormCorrect = await this.v$.$validate()
            // var form = document.querySelector(".needs-validation")
            // if (!isFormCorrect) return form.classList.add("was-validated");
            this.actionLogin({username:this.username, password:this.password})
            .then(()=> {
                if(this.$store.state.auth.loginStatus == 'success'){
                this.$router.push({name:"Home"});
                }else if(this.$store.state.auth.loginStatus == 'failed'){
                    alert('failed to login')
                }else{
                    alert(this.$store.state.auth.loginStatus)
                }
            });
        },
    },
}
</script>

<style lang="scss" scoped>
.form-container{
    background-color: rgba($color: #000000, $alpha: 0.2);
    padding: 3rem 5rem;
    border-radius: 20px;

    position: relative;
}

.img-container{
    width: 5rem;
    height: 5rem;
    background-color: inherit;
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
}
</style>