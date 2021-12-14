<template>
<div class="container">
  <table class="table table-responsive-sm">
      <thead>
        <th v-for="(header, index) in Object.keys(data[0])" :key="index">
          {{ header }}
        </th>
      </thead>
      <tbody>
        <tr v-for="(el, index) in data" :key="index">
          <td v-for="(value, attr, i) in el" :key="i" class="p-3">
            <p>{{ value }}</p>
            <input v-show="false" @input="patchData(el.id, $event)" :value="inputData" type="text" class="form-control"/>
          </td>
        </tr>
      </tbody>
  </table>
  <button @click="submit()">submit</button>
</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex"
const { mapState } = createNamespacedHelpers("data")
export default {
  name: "Table",
  data(){
    return {
      inputData: {

      }
    }
  },
  props: ["type"],
  computed: {
    ...mapState(["data"])
  },
  methods: {
    submit(){
      console.log(this.inputData)
    },
    patchData(id, event){
      this.inputData = [id, event.target.value]
    }
  },
  mounted(){

  }
}
</script>
<style>

</style>