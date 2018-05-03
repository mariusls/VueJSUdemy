new Vue ({
    el: '#exercise',
    data: {
        storedMsg: ''
    },
    
    methods: {
        clickAlert: function() {
            alert("Button alert!");
        },
        storeValue: function(event) {
            storedMsg = event.target.value;
            console.log(storedMsg);
        }
    }
});