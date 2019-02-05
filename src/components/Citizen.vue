<template>
    <li class="list-group-item">
        <!-- Use computed property "suffix" directly from within mixin -->
        <h4>{{ suffix + ' ' + citizen_attributes.first_name + ' ' + citizen_attributes.last_name }} <small>{{ citizen_attributes.gender }}</small></h4>    
    </li>
</template>

<script>

    import randomSuffix from '../mixins/randomSuffix';

    export default {
        props: [ 'citizen_attributes' ],
        mixins: [ randomSuffix ] // < include mixins into this property
    }
</script>