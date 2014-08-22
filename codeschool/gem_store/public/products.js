(function(){
    var app = angular.module('store-directives', []);

    app.directive("productDescription", function() {
      return {
        restrict: 'E',
        scope: {
          item:'='
        },
        templateUrl: "product-description.html"
      };
    });

    app.directive("productReviews", function() {
      return {
        restrict: 'E',
        scope: {
          reviewedProduct: '='
        },
        templateUrl: "product-reviews.html"
      };
    });

    app.directive("productSpecs", function() {
      return {
        restrict:"A",
        scope: {
            item:'='
        },
        templateUrl: "product-specs.html"
      };
    });

    app.directive("productTabs", function() {
      return {
        restrict: "E",
        scope: {
            tabbedProduct: "="
        },
        templateUrl: "product-tabs.html",
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab"
      };
    });

    app.directive("productGallery", function() {
      return {
        restrict: "E",
        templateUrl: "product-gallery.html",
        controller: function() {
          this.current = 0;
          this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
          };
        },
        controllerAs: "gallery"
      };
    });

    app.directive("tabgroup", function() {
      return {
        restrict:"E",
        transclude: true,
        template: "<product-gallery></product-gallery>" +
        "<div ng-repeat='tab in tabs' ng-click='select(tab)' class='btn btn-info' ng-class='{active:tab.selected}'>{{tab.title}}</div>" +
        "<div ng-transclude=''></div>",
       controller: function($scope) {
          $scope.tabs = [];
          this.addTab = function(tab) {
            if ($scope.tabs.length == 0) {
              tab.selected = true;
            }
            $scope.tabs.push(tab);
          }
          $scope.select = function(tab) {
            angular.forEach($scope.tabs,function(eachTab){
             eachTab.selected = angular.equals(tab,eachTab); 
            });
          };
        }
      };
    });

    app.directive("tab", function() {
      return {
        restrict:"E",
        scope: {
            title:'@'
        },
        transclude: true,
        template: "<div ng-show='selected' ng-transclude=''></div>",
        require:'^tabgroup',
        link: function(scope,element,attrs,ctrl) {
          ctrl.addTab(scope);
        }
      };
    });

  })();
