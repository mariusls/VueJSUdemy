new Vue ({
    el: '#partTwo',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increaseCounter: function(amount, event) {
            this.counter += amount;

        },
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function() {
            alert("Hei");
        }
    }
});
