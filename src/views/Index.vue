<template>
  <div class="container-fluid d-flex flex-column justify-content-center align-items-center bg-dark py-5" style="min-height: 100vh">
    <h1 class="text-light">Your classes</h1>
    <div class="container-fluid d-flex flex-wrap flex-column flex-lg-row justify-content-around align-items-center">
        <div v-for="(work, index) in data" :key="index" @click="$router.push({name: 'Dashboard', params: { id: work.work.id}})"
            class="card mx-auto my-3 border-0 position-relative"  data-tilt>
            <img :src="require(`@/assets/${img_array[index]}`)" alt="abstract-img" class="card-img-top">
            <div class="card-body">
                <h2 class="card-title h4">Class name: {{ work.work.name }}</h2>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js"
import VanillaTilt from 'vanilla-tilt'
import { createNamespacedHelpers } from "vuex"

const { mapState } = createNamespacedHelpers("auth")

export default {
    name: "Home",
    data(){
        return {
            data: null,
            img_array: [
                "card-0.jpg",
                "card-1.jpg",
                "card-2.jpg",
                "card-3.jpg",
                "card-4.jpg",
                "card-5.jpg",
                "card-6.jpg",
                "card-7.jpg",
                "card-8.jpg",
                "card-9.jpg",
                "card-10.jpg",
                "card-11.jpg",
                "card-12.jpg",
            ]
        }
    },
    async mounted(){
        api.get(`/simpapi/staff/${this.authData.userId}`)
            .then((res) => {
                this.data = res.data.works;
            })
            .then(() => {
                VanillaTilt.init(document.querySelectorAll(".card"), {
                    max: 25,
                    speed: 400,
                    scale: 1.15,
                });
            })
        this.shuffle(this.img_array)
    },
    methods: {
        shuffle(array){
            for(let i=array.length-1; i>0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    },
    computed: {
        ...mapState(["authData"])
    },
    beforeRouteEnter(to, from, next) {
        api.get(`/simpapi/staffworks?work=1`)
        .then(()=>{
            next()
        })
        .catch((err)=>{
            return next({name:"Login"})
        })
    },
}
</script>

<style lang="scss" scoped>
.card{
    max-width:20rem; 
    min-width:20rem; 
    min-height:30rem; 
    max-height:30rem;
    background-color: rgba($color: #000, $alpha: 0.4);
     
    color: #fff;
    border-radius: 15px;
    overflow: hidden;

    transform-style: preserve-3d;
    transform: perspective(1000px);
}

.card-body{
    width: 100%;
    position: absolute;
    bottom: 0;

    background-color: rgba($color: #000000, $alpha: 0.4);
    transform-style: preserve-3d;
    transform: translateZ(20px);

    animation: intro 0.2s linear;
}

@keyframes intro {
    from{
        left: -100%;
    }

    to{
        left: 0%;
    }
}
</style>