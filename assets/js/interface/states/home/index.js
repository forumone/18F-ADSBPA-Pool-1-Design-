angular.module('gsa18f').controller('HomeController', function($scope, $stateParams, $state, fdaLabel, substances, $q, DrugSeriousness, $mdToast, $filter) {
  $q.all({
    brands : substances.getBrands(),
    substances : substances.getSubstances()
  })
  .then(function(results) {
    $scope.brands = results.brands.brands;
    $scope.substances = results.substances.substances;
  });
  
  // Update the current stateParams
  function updatePage() {
    $state.go('home', {
      display : $scope.display,
      drug : $scope.medicinalproducts
    }, { notify : false });
  }
  
  // Add a new drug
  $scope.addDrug = function() {
    if ($scope.newDrug) {
      $scope.drugs.push({
        medicinalproduct : $scope.newDrug
      });
      
      $scope.newDrug = '';
    }
  }

  // Reset the current parameters
  $scope.reset = function() {
    $scope.drugs = [];
    
    $scope.medicinalproducts = [];
  }
  
  // Check for changes to the display variable
  $scope.$watch('display', function(newValue, oldValue) {
    if (newValue != oldValue) {
      $scope.reset();
    }
    
    updatePage();
  });
  
  // Check for changes in the list of drugs
  $scope.$watchCollection('drugs', function() {
    $scope.processChanges();
  }, true);
  
  // Process any changes
  $scope.processChanges = function() {
    var medicinalproducts = _.chain($scope.drugs)
    .map(function(drug) {
      return (_.has(drug, 'medicinalproduct')) ? drug.medicinalproduct : null;
    })
    .compact()
    .value();
    
    rdiff = _.difference(medicinalproducts, $scope.medicinalproducts);
    ldiff = _.difference($scope.medicinalproducts, medicinalproducts);
    
    if (0 == medicinalproducts.length || 0 < rdiff.length || 0 < ldiff.length) {
      $scope.medicinalproducts = medicinalproducts;
    }
    
    updatePage();
  }
  
  $scope.$watchCollection('medicinalproducts', function() {
    if (angular.isArray($scope.medicinalproducts)) {
      if (0 < $scope.medicinalproducts.length) {
        $mdToast.show({
          controller : 'LoadingController',
          templateUrl: 'states/home/loading.html',
          hideDelay: 0,
          position: 'bottom right'
        });
        
        fdaLabel.getEvents($scope.medicinalproducts)
        .then(function(events) {

          var drugEvents = _.chain(events)
            .reduce(function(result, key) {
             var output = (_.isArray(result)) ? result : [];
 
             var drugCombo = key.drugs.join(' and ');
 
             var drug = _.find(output, { key : drugCombo });
 
             if (!drug) {
               drug = {
                 key : drugCombo,
                 values : [],
               }
 
               output.push(drug);
             }
 
             drug.values.push({
               label : _.has(DrugSeriousness, key.seriousness) ? DrugSeriousness[key.seriousness] : key.seriousness,
               value : key.count
             });
 
             return output;
           }, {})
           .map(function(drug) {
             var sum = d3.sum(drug.values, function(v) { return v.value; });
             
             drug.values = _.map(drug.values, function(value) {
               value.value = (0 != value.value) ? ((value.value / sum) * 100) : 0;
               
               return value;
             });
             
             return drug;
           })
           .value();
          
          
          $mdToast.hide();
          
          $scope.data = drugEvents;
        })
        .catch(function() {
          $scope.data = [];
        });
      }
      else {
        $scope.data = [];
      }
    }
  });
  
  
  $scope.isReadOnly = true;
  $scope.newDrug = '';
  
  // Convert $stateParams to scope variables
  $scope.display = $stateParams.display;

  var drugs = angular.isArray($stateParams.drug) ? $stateParams.drug : [$stateParams.drug];

  $scope.drugs = _.chain(drugs)
   .compact()
   .map(function(medicinalproduct) {
     return { medicinalproduct : medicinalproduct };
   })
   .value();
});