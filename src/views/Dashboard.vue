<template>
    <div>
        <h1>Dashboard Page</h1>
        <div>
            UserName -- {{gettersAuthData.userName}}
        </div>
        <div>
            Id  -- {{gettersAuthData.userId}}
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import api from '../services/api';


export default {
    computed:{
        ...mapGetters('auth',{
            gettersAuthData:'getAuthData'
        })
    },
    beforeRouteEnter(to, from, next) {
        api.get("/simpapi/works?work=189")
        .then(()=>{
            next()
        })
        .catch((err)=>{
            return next({name:"Login"})
        })
    },
    
}
</script>
<style scoped>

</style>