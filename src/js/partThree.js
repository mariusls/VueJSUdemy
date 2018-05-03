new Vue ({
    el: '#partThree',
    data: {
        name: 'Marius',
        counter: 0,
        secondCounter: 0
    },

    computed: {
        output: function() {
            console.log('Computed');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },

    watch: {
        counter: function(value) {
            // Can only access "this" Vue object in default Vue objects and functions, so store
            // it first before accessing another callback function
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },

    methods: {
        result: function() {
            console.log('Method');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    }
});