<template>
    <div class="container-fluid">
      <div class="row" style="background:#48247B">
          <div class="col-12 p-0">
              
                   <div id="scroll">
                        <table id="table" class="fl-table table-responsive">
                            <thead>
                                <tr>
                                    <th  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click to sort" onclick="sort(1)" class="pointer">Burmese Name</th>
                                    <th  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click to sort" onclick="sort(2)" class="pointer">English Name</th>
                                    <th  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click to sort" onclick="sort(3)" class="pointer">Date of Birth</th>
                                    <th  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click to sort" onclick="sort(4)" class="pointer">Gender</th>
                                    <th  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click to sort" onclick="sort(5)" class="pointer">Email</th>
                                    <th  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click to sort" onclick="sort(6)" class="pointer">Phone Number</th>
                                    <th  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click to sort" onclick="sort(6)" class="pointer">Viber Phone number</th>
                                    <th  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click to sort" onclick="sort(6)" class="pointer">Region</th>
                                </tr>
                            </thead>
                            <tbody id="tablebd"  v-for="e in students" :key="e.id">
                            
                                <tr v-for="(i,index) in e.students" :key="index"  @dblclick="detail()">
                                    
                                    <td>{{ i.name }}</td>
                                    <td>{{ i.ename }}</td>
                                    <td>{{ i.dob }}</td>
                                    <td>{{ i.gender }}</td>
                                    <td>{{ i.email }}</td>
                                    <td>{{ i.phone_number }}</td>
                                    <td>{{ i.viber_phone_number }}</td>
                                    <td>{{ i.region }}</td>
                                    
                                </tr>
                              
                                
                            </tbody>
                        </table>
                    </div>
             
          </div>
      </div>
    </div>
</template>

<script>
    import api from "@/services/api.js"
    export default {
        name:"demoStudent",
        data() {
            return {
                students: [],
            }
        },
         mounted () {
            let id = this.$route.params.id;
            api.get(`connect/works?work=${id}`)
                .then((res) => {
                    this.students = res.data.data;
                })
        },
        methods: {
            detail() {
                this.$router.push({name:'StudentDetail',params:{id:this.$route.params.id}})
            }
        },
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  #scroll{
            width: 100%;
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