new Vue({
    el: "#app",
    data: {
        header: 'DIY RTS Game',
        time: null
    },
    template: `
        <div>
            <h1>{{ header }}</h1>
            <h3>{{ time }}</h3>
        </div>`,
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
});