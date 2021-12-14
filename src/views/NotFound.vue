<template>
    <div class="container">
        <h1>Page not found</h1>
        <router-link :to="{name: 'Home'}">Go back to Home</router-link>
    </div>
</template>
<script>
export default {
    name: "NotFound",
}
</script>
<style lang="scss" scoped>
div{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>