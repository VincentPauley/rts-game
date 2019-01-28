<template>
    <div>
        <h1>{{ header }}</h1>
        <h3>{{ time }}</h3>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                header: 'Wonderful RTS',
                time: null
            };
        },
        methods: {
            start_game_clock() {

                const root = this;

                setInterval(() => {

                    root.time = new Date();
                }, 1000 );
            }
        },
        created() {

            this.start_game_clock();
        }
    }
</script>