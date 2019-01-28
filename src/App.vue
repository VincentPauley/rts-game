<template>
    <div>
        <h1>{{ header }}</h1>

        <time-display></time-display>
        
        <div v-if="citizens">
            <p>Citizens:</p>

            <ul class="list-group">
                <citizen v-for="citizen in citizens" :key="citizen.id" :citizen_attributes="citizen"></citizen>
            </ul>
        </div>
    </div>
</template>

<style>
</style>

<script>

    // components
    import TimeDisplay from './components/TimeDisplay.vue';
    import Citizen from './components/Citizen.vue';

    import { randomCitizenList } from './citizen-generator';

    export default {
        data() {
            return {
                header: 'RTS',
                citizens: null
            };
        },
        methods: {
            create_citizens() {

                this.citizens = randomCitizenList();
            }
        },
        components: { TimeDisplay, Citizen },
        created() {

            this.create_citizens();
        }
    }
</script>