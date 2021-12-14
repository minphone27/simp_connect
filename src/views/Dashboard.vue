<template>
  <div class="container-fluid py-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2">
          <div class="col d-flex align-items-center">
              <p class="mx-2">Title</p>
              <p class="text-muted">PET 10</p>
          </div>
          <div class="col d-flex align-items-center">
              <p class="mx-2">Date created</p>
              <p class="text-muted">Aug.31,2021,9 p.m.</p>
          </div>
          <div class="col d-flex align-items-center">
              <p class="mx-2">Date created</p>
              <p class="text-muted">Aug.31,2021,9 p.m.</p>
          </div>
          <div class="col d-flex align-items-center">
              <p class="mx-2">Date created</p>
              <p class="text-muted">Aug.31,2021,9 p.m.</p>
          </div>
        </div>
      </div>
      <table class="table table-responsive-sm">
          <thead>
              <th></th>
              <th></th>
          </thead>
      </table>
  </div>
</template>
<script>
import api from "@/services/api.js"
export default {
    name: "Dashboard",
    async mounted(){
        const data = api.get(`/connect/works?work=147`)
        console.log(data.data)
    }
}
</script>

<style lang="scss" scoped>

</style>