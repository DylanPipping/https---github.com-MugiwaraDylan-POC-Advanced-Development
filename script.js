var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",


        // The data model. These items would normally be requested via AJAX,
        // but are hardcoded here for simplicity.

        articles: [{
                "title": "Portfolio",
                "url": "./site/index.html",
                "image": "https://tutorialzine.com/media/2016/03/css-variables.jpg"
            },
            {
                "title": "Development",
                "url": "./site/development.html",
                "image": "https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg"
            },
            {
                "title": "Professional Identity",
                "url": "./site/professional.html",
                "image": "https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg"
            }

        ]
    },

    computed: {
        // A computed property that holds only those articles that match the searchString.
        filteredArticles: function() {
            var articles_array = this.articles,
                searchString = this.searchString;


            if (!searchString) {
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();


            articles_array = articles_array.filter(function(item) {
                if (item.title.toLowerCase().indexOf(searchString) !== -1) {
                    return item;
                }
            })



            // Return an array with the filtered data.
            return articles_array;
        }
    }
});