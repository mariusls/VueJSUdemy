new Vue ({
    el: '#app',
    data: {
        title: 'Hello world'
    },
    methods: {
        changeTitle: function() {
            this.title = event.target.value;
        }
    }
});