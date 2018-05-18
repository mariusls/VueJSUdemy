new Vue ({
    el: '#exercise',
    data: {
        effectClasses: {
            highlight: false,
            shrink: true
        },

        float: 'float',
        blue: 'blue',
        userClass: ''

    },
    methods: {
        startEffect: function() {
            var temp = this;

            setInterval(function() {
                temp.effectClasses.highlight = !temp.effectClasses.highlight;
                temp.effectClasses.shrink = !temp.effectClasses.shrink;

            }, 1000);
        }
    }
}); 