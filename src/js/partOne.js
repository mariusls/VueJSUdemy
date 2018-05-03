new Vue ({
    el: '#partOne',
    data: {
        title: 'Hello world',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>'
    },
    methods: {
        setTitle: function() {
            this.title = 'hello';
            return this.title;
        }
    }
});