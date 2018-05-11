new Vue ({
    el: '#exercise',
    data: {
        value: 0
    },

    computed: {
        result: function() {
            return this.value == 35 ? 'Done' : 'Not 35';
        }
    },

    watch: {
        result: function() {
            var theValue = this;
            
            setTimeout(function(){
                theValue.value = 0;
                console.log("Reset");
            }, 5000);
        }
    }
});