<template>
    <div v-if="loading">
        <h1 class="loading-text">Loading...</h1>
    </div>
</template>

<script>
export default {
    name: "Loading",
    props: ["loading"]
}
</script>

<style lang="scss" scoped>
.loading-text{
    font-family: sans-serif;
    font-size: 5rem;

    position: relative;

    overflow: hidden;

    &::before{
        content: "Loading...";
        width: 0%;
        height: 100%;
        
        color: purple;

        position: absolute;
        top: 0;
        left: 0;

        overflow: hidden;
        animation: loading 1s linear 0s infinite alternate;
    }
}

@keyframes loading {
    to{
        width: 100%;
    }
    from{
        width: 0%;
    }
}
</style>