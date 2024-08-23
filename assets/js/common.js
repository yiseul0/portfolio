const common =
    {
        init: function () {
            this.events();
        },
        events: function () {
            portfolio.bindSkills();
            portfolio.bindItems();
        },
    }