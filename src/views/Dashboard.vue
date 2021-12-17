<template>
  <div class="container-fluid" style="background: #6733b0;min-height:100vh;">
      <button @click="$router.push({name: 'SimpConnect', params: { id: $route.params.id}})">go to sheet</button>
      <div class="row mx-1 mx-md-5" style="background:#48247B;border-radius:30px;">
          <div class="col-12">
                <div class="d-flex align-items-center justify-content-evenly flex-wrap card-con">
                    <div v-for="e in data" :key="e.id" class="d-flex align-items-center justify-content-evenly co-card shadow" :class="{'main':e.staff.role === 4}">
                        <div class="profile-img">
                            <img :src="`https://simp.teachersucenter.com/media/${e.staff.profile}`" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" alt="">
                        </div>
                        <div>
                            <span class="fw-bolder">{{ e.staff.dname }}</span> <br>
                            <a :href="'https://simp.teachersucenter.com/details/staff/'+ e.staff.id " target="blank" ><span class="text-muted">{{ e.staff.ename }}</span></a>
                        </div>
                        
                    </div>
                </div>
          </div>
      </div>
      <div class="row">
          <div class="col-12 my-2">

                
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a  @click="activeTab = 'demoRecords'" class="nav-link active" aria-current="page" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a @click="activeTab = 'demoStudent'" class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    <component :is ="activeTab" />
            </div>
            <!-- <div class="col-12">
                <component :is ="activeTab" />
            </div> -->
      </div>
  </div>
</template>
<script>
import demoRecords from "../components/demoRecords.vue"
import demoStudent from "../components/demoStudent.vue"
import api from "@/services/api.js"
export default {
    name: "Dashboard",
    data() {
        return {
            data: [],
            activeTab: 'demoRecords'
        }
    },
    components: {
        demoRecords,
        demoStudent
    },
    mounted () {
        const id = this.$route.params.id;
        api.get(`/simpapi/staffworks?work=${id}`)
            .then((res) => {
                this.data = res.data
            })
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
body{
    background: #6733b0;
}
.co-card{
    background: rgba(219, 233, 236, 0.986);
    padding: 10px 20px;
    border-radius: 10px;
    margin: 20px auto;
    min-width: 310px;
}
.profile-img{
  width: 40px;
  height: 40px;
}
.card-con{
    height: 200px;
    overflow-y: scroll;
}
.main{
    border: 2px solid rgb(0, 132, 255);
}
/* width */
::-webkit-scrollbar {
    width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
    background-color: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>