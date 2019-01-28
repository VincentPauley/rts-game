<template>
    <div id="time-indicator" :style="'background-color:' + active.color + ';'">
        <h3>{{ active.hour ? active.hour : 12 }} 
            <small>{{ is_am ? "A" : "P" }}M</small>  
        </h3>
    </div>
</template>

<style>
    #time-indicator {
        display: inline-block;
        color: #FFF;
        padding: 10px 100px;
        border-radius: 10px;
        /* font controls */
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }
</style>

<script>

    export default {
        data() {
            return {
                is_am: true,
                hour_duration: 1000,
                color_order: [
                    '#000033',
                    '#302B54',
                    '#00008B',
                    '#00009C',
                    '#0000FF',
                    '#4B0082',
                    '#FFA500',
                    '#FFB00F',
                    '#FFCC11',
                    '#00EEEE',
                    '#00CED1',
                    '#0099CC',
                    '#0099CB'
                ],
                active: {
                    color: null,
                    hour: 0
                }
            }
        },
        methods: {
            
            run_clock() {

                let i = 0;

                setInterval(() => {

                    const color_index = this.is_am ? i : 12 - i;

                    this.active.color = this.color_order[ color_index ];

                    i++;

                    if( i > 11 ) {

                        i=0;

                        this.is_am = !this.is_am;
                    }

                    this.active.hour = i; 

                }, this.hour_duration );
            }
        },
        created() {

            this.active.color = this.color_order[0];

            this.run_clock();
        }
    }
</script>