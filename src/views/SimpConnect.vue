<template>
    <div class="container-fluid d-flex align-items-center justify-content-center " style="background: #6733b0;min-height:100vh;">
       
                <div class="row mx-auto">
                        <div class="col-12">
                            <table id="table" class="fl-table">
                                <thead>
                                    <tr>
                                        <th v-for="(e,index) in students.header_row" :key="index">{{ e }}</th>
                                    </tr>
                                </thead>
                                <tbody  id="tablebd" >
                                    <tr v-for="(e,index) in students.data" :key="index">
                                        <td v-for="(i,index) in e" :key="index">{{ i }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
                
    </div>
</template>
<script>
import api from "@/services/api.js"
export default {
    name: "SimpConnect",
    data() {
            return {
                students: [],
            }
        },
    mounted () {
    let id = this.$route.params.id;
    api.get(`connect/sheet/1`)
        .then((res) => {
            this.students = res.data;
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
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

         .row{
            height: 500px;
            overflow-y: scroll;
            overflow-x: scroll;
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
        .fl-table {
            border-radius: 10px;
            font-weight: normal;
            border: none;
            border-collapse: collapse;
            width: 100%;
            color: #ffffff;
            font-family: 'Dongle', sans-serif;
        }
        .fl-table th {
            text-align: center;
            padding: 8px;
            font-size: 1.2rem;
            height: 80px;
            min-width: 200px;
            line-height: 20px;
            background-color: #391270;
            position: sticky;
            top: 0%;
        }
        .fl-table td{
            text-align: center;
            padding: 8px;
            font-weight: lighter;
            font-size: 1.2rem;
            height: 60px;
            border-bottom: 1px solid white;
            line-height: 20px;
        }

        
        .pointer {
            cursor: pointer;
        }
        
        .fl-table tbody tr:hover{
            background-color: #363636;
        }

</style>