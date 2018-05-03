new Vue ({
    el: '#exercise',
    data: {
        name: 'Marius',
        age: 26,
        imageLink: 'https://treeday.planetark.org/images/coords/public/image-760-testimage.jpg'
    },
    methods: {
        ageTimesThree: function() {
            return this.age*3;
        },
        randomNumber: function() {
            return Math.random() * (0 - 100) + 100;
        }
    }
});