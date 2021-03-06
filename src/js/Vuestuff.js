new Vue ({
    el: '#app',
    data: {
        pageTitle: 'VueJS Udemy course',
        sectionHeader: 'Different parts of the course:',

        parts: [
            { name: 'Part 1', href: '/partone.html' },
            { name: 'Part 2', href: '/parttwo.html' },
            { name: 'Part 3 - Two-Way-Binding & Computed Properties & Watch', href: '/partthree.html' },
            { name: 'Part 4 - Shorthands', href: '/partfour.html' },
            { name: 'Part 5 - Dynamic styling with CSS classes', href: '/partfive.html' }
        ],

        assignments: [
            { name: 'Assignment 1 - Outputting Data to Templates', href: '/assignment1.html' },
            { name: 'Assignment 2 - Events', href: '/assignment2.html' },
            { name: 'Assignment 3 - Reactive Properties', href: '/assignment3.html' },
            { name: 'Assignment 4 - Styling', href: '/assignment4.html' }
        ]
    },

    methods: {
        setSectionheader: function() {
            this.sectionHeader = 'Assignments';
            return this.sectionHeader;
        }
    }
});
