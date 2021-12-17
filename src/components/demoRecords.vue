<template>
    <div class="container-fluid">
      <div class="row mx-1 mx-md-5" style="background:#48247B;border-radius:30px;">
          <div class="col-12 card-con">
              
                  <div  v-for="e in records" :key="e.id" class="d-flex justify-content-center align-items-center flex-wrap">
                      <router-link :to="{name:'RecordDetail',params:{id:$route.params.id}}" v-for="(i,index) in e.records" :key="index" class="co-card d-flex align-items-center justify-content-center shadow text-dark">
                          <div >
                            <span class="fs-4">{{ i.date }}</span>
                        </div>
                      </router-link>
                  </div>
              
          </div>
      </div>
    </div>
</template>

<script>
    import api from "@/services/api.js"
    export default {
        name:"demoRecord",
        data() {
            return {
                records: [],
            }
        },
         mounted () {
            let id = this.$route.params.id;
            api.get(`connect/works?work=${id}`)
                .then((res) => {
                    this.records = res.data.data;
                })
        },
    }
</script>

<style lang="scss" scoped>
.co-card{
    background: rgba(219, 233, 236, 0.986);
    padding: 10px 20px;
    border-radius: 10px;
    margin: 20px auto;
    min-width: 310px;
}
.card-con{
    height: 400px;
    overflow-y: scroll;
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