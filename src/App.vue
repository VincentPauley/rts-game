<template>
    <div>
        <h1>{{ header }}</h1>

        <time-display></time-display>
    </div>
</template>

<style>
    * {
        text-align:center;
    }
</style>

<script>

    import TimeDisplay from './components/TimeDisplay.vue';

    export default {
        data() {
            return {
                header: 'RTS'
            };
        },
        components: { TimeDisplay },
    }
</script>