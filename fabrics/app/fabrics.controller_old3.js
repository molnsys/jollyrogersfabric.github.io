'use strict';

angular.module('iprognos')
.controller('FabricsCtrl',['$scope','store', 'auth','Upload','$state','Fabric', 'FabricConstants', 'Restangular', function($scope,store,auth, Upload,$state, Fabric, FabricConstants,Restangular ) {
  //$scope.auth = auth;
  $scope.fabric = {};
   //$scope.ImagesConstants = ImagesConstants;
	$scope.FabricConstants = FabricConstants;
  //$scope.fabric.setCanvasSize('600', '800');

  $scope.auth = auth;



  //
  // Init
  // ================================================================
  $scope.init = function() {
    $scope.fabric = new Fabric();
    $scope.fabric.setCanvasSize(786, 460);
  };





$scope.onFileSelect = function($files, $event) {
    $scope.file = $files[0];
    //alert('Fileselected!');
    console.log('onfileSelect: ' + $scope.file);
};




$scope.addImage = function() {
  $scope.progressPercentage = 0;
//  $scope.files = {};
  //$scope.fabric.setDirty(true);
  //delete $scope.canvasCopy;
  // read the file when it is droped
  var reader = new FileReader();

    reader.onload = function(e) {
      var encodedUrl = e.target.result;
      var base64File = encodedUrl.substring(encodedUrl.indexOf(','));
      // add the right syntax to make it a dataURL
      $scope.encodedFile = 'data:' + $scope.files[0].type +';base64' + base64File;

      $scope.fabric.addImage($scope.encodedFile);
    };

    // add the file to encode
    reader.readAsDataURL($scope.files[0]);
};


$scope.setCanvasSize = function() {
  $scope.fabric.setCanvasSize($scope.canvasCopy.width, $scope.canvasCopy.height);
  $scope.fabric.setDirty(true);
  delete $scope.canvasCopy;
};



  $scope.$on('canvas:created', $scope.init);


    // File upload
    //$scope.log = '';
    // show progress
    //$scope.progressPercentage = '';


    // upload when button is pressed! function (files)
    $scope.upload = function (files) {
//console.log($scope.theForm.Productname);
//console.log($scope.formModel);
      // set auth token on the server first
      ///api/auth
      //var authen = Restangular.one('api/auth').get().$object; $scope.encodedFile

// check if slug is unique (isempty)
Restangular.one('api/slug').get({'productname': $scope.formModel.Productname}).then(function(response) {
  console.log(response);
  if (response == 'isempty'){

    console.log('Det är ok att fortsätta!');
  };
});


      if (form.$valid) {
      // get a bearer token
      Restangular.one('api/auth').get().then(function(rsp) {
            console.log(rsp);
            $scope.token = rsp; // whe get back the token in the response
            /**
            // create a product
            var ProductAPI = Restangular.all('api/product');
            var Product = {
              'productname': $scope.formModel.Productname,
              'description': $scope.formModel.Description,
              'user_id': $scope.auth.profile.user_id
              };
              ProductAPI.post(Product).then(function(id){
                console.log(id);
                $scope.id = id;

              });*/

          }).then(function() {

            // create a product
            var ProductAPI = Restangular.all('api/product');
            var Product = {
              'productname': $scope.formModel.Productname,
              'description': $scope.formModel.Description,
              'user_id': $scope.auth.profile.user_id
              };

              Restangular.one('api/product').get(Product).then(function(id){
                // Now whe have a product id, lets send the image.
                console.log(id);
                $scope.id = id;
                var file = $scope.fabric.getCanvasData();
                /**
                console.log($scope.files[0].name);
                console.log($scope.token);
                console.log($scope.id);
                console.log($scope.auth.profile.nickname);
                */


                Upload.upload({
                    url: 'http://localhost:8000/api/filer2',
                    headers: {
                        'id': $scope.id,
                        'nickname': $scope.auth.profile.nickname,
                        'filename': $scope.files[0].name,
                        'token': $scope.token
                    },
                    file: file,
                    data: {file}
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progressPercentage = progressPercentage;
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                                evt.config.file.name + '\n' + $scope.log;
                                console.log('percent: ' + parseInt((100.0 * evt.loaded / evt.total).toString(), 10));
                }).success(function (data, status, headers, config) {

                    $scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;

                });

                // end fileupload
              });


//file upload when we know the product id
// get the file from the canvas.
//var file = $scope.fabric.getCanvasData();
//console.log(id);
// then send file if all is ok && files[0].length
/**
Upload.upload({
    url: 'http://localhost:8000/api/filer2',
    headers: {
        'id': $scope.id,
        'nickname': $scope.auth.profile.nickname,
        'filename': $scope.files[0].name,
        'token': $scope.token
    },
    file: file,
    data: {file}
}).progress(function (evt) {
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    $scope.progressPercentage = progressPercentage;
    $scope.log = 'progress: ' + progressPercentage + '% ' +
                evt.config.file.name + '\n' + $scope.log;
                console.log('percent: ' + parseInt((100.0 * evt.loaded / evt.total).toString(), 10));
}).success(function (data, status, headers, config) {

    $scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;

});
// end fileupload
*/

          });

}; */
// end of validation
  }; // end of files function

// Form
$scope.schema = {
  "type": "object",
  "title": "Description",
  "properties": {
    "Productname": {
      "title": "Product name",
      "type": "string"
    },
    "Description": {
      "title": "Description",
      "type": "string",
      "maxLength": 500,
      "validationMessage": "Don't be greedy!"
    }
  },
  "required": [
    "Productname",
    "Description"
  ]
};

$scope.form = [
  {
    "key": "Productname",
    "type": "string",
    "placeholder": "Product name",
    onChange: "updated(formModel,form)"
  },
  {
    "key": "Description",
    "type": "textarea",
    "placeholder": "Description",
    onChange: "updated(formModel,form)"
  },

  {
    "type": "submit",
    "style": "btn-info",
    "title": " Save "
  }
];

$scope.formModel = {};
// End Form
}]);
