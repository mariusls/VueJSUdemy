// Shorthands
new Vue ({
    el: '#partFour',
    data: {
        link: 'http://google.com'
    },
    methods: {
        changeLink: function() {
            this.link = 'http://apple.com'
        }
    }
});