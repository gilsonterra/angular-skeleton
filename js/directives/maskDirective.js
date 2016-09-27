app.directive("mask", function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attr, ctrl) {
            if (attr.mask) {
                $(elem).mask(attr.mask, {
                    reverse: attr.maskReverse
                });
            }
        }
    };
});
