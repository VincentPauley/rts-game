const MyPlugin = {

    // install method is the only thing required in a Vue object
    // takes in Global vue obejct and user-defined options
    install( Vue, options ) {

        Vue.say_hello = function() {

            console.log( 'Why Hello there!' );
        }

        // Call Vue.mixin to inject functionality into all components
        // Vue.mixin({

        //     // anything added to mixin will be added to all componenents
        //     mounted() { 

        //         console.log( 'Mounted' );
        //     }
        // });
    }
};

export default MyPlugin;