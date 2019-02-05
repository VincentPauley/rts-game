// mixins have access to the Vue instance properties from which
// they are called.
export default {
    computed: {
        suffix() {

            return this.citizen_attributes.gender === 'M' ? 'Mr' : Math.random() > .5 ? 'Mrs' : 'Ms';
        }
    }
}
// could then use this with any component that imported it