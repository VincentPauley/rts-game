<template>
    <li class="list-group-item">
        <h4>{{ citizen_attributes.first_name + ' ' + citizen_attributes.last_name }} <small>{{ citizen_attributes.gender }}</small></h4>    
    </li>
</template>

<script>

    export default {
        props: [ 'citizen_attributes' ]
    }
</script>