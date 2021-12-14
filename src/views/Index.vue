<template>
  <div class="container-fluid d-flex flex-column justify-content-center align-items-center bg-dark py-5" style="min-height: 100vh">
    <h1 class="text-light">Your classes</h1>
    <div class="container-fluid d-flex flex-wrap flex-column flex-lg-row justify-content-around align-items-center">
        <div v-for="(staff, index) in data" :key="index" @click="$router.push({name: 'Dashboard'})" 
            style="min-width:20rem;" class="card m-5 border-0" data-tilt>
            <img :src="require(`@/assets/${img_array[index]}`)" alt="abstract-img" class="card-img" style="height:30rem">
            <div class="card-img-overlay">
                <h2 class="card-title h4">Class name: {{ staff.work.name }}</h2>
                <h3 class="card-subtitle h5">Category: {{ staff.work.category  }}</h3>
                <p class="card-text">Student no: {{ staff.work.student_no }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js"
import VanillaTilt from 'vanilla-tilt'

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
        api.get('/simpapi/staffworks?staff=1')
            .then((res) => {
                this.data = res.data
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
    }
}
</script>

<style lang="scss" scoped>
.card{
    background-color: #8013ed;
    color: #fff;
    border-radius: 15px;
    overflow: hidden;
}
</style>