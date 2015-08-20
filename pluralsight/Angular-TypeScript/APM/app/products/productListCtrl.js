var app;
(function (app) {
    var producList;
    (function (producList) {
        var ProductListCtrl = (function () {
            function ProductListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "ProductList";
                this.showImage = false;
                this.products = [];
                var productResource = dataAccessService.getProductResource();
                productResource.query(function (data) {
                    _this.products = data;
                });
            }
            ProductListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            ProductListCtrl.$inject = ["dataAccessService"];
            return ProductListCtrl;
        })();
        angular.module("productManagement")
            .controller("ProductListCtrl", ProductListCtrl);
    })(producList = app.producList || (app.producList = {}));
})(app || (app = {}));
