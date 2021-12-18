<template>
    <main class="container-fluid d-flex justify-content-center align-items-center" style="min-height: 100vh;">
        <Loading :loading="loading"/>        
        <Table v-if="!loading"></Table>
    </main>
</template>

<script>
import Table from "@/components/Table.vue"
import Loading from "@/components/Loading.vue"
import api from "@/services/api.js"
import { createNamespacedHelpers } from "vuex"
const { mapState, mapMutations } = createNamespacedHelpers("data");
export default {
    name: "RecordDetail",
    components: { Table, Loading },
    data(){
        return {
            loading: Boolean,
        }
    },
    methods: {
        ...mapMutations(["chgdata"])
    },
    computed: {
        ...mapState(["data"])
    },
    mounted(){
        this.loading = true;
        api.get(`/connect/records?date=${this.$route.params.date}&work=${this.$route.params.id}`)
            .then((response)=>{
                let data = response.data.data[0].sturecs;                
                data = data.map((el)=>{
                    return {
                        id: el.id,
                        name: el.student.name,
                        attendance: el.attendance,
                        strengths: el.strengths
                    }
                })
                this.chgdata(data)
                this.loading = false;
            })
    },
}
</script>

<style>

</style>