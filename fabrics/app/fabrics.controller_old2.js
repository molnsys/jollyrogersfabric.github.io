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

      // set auth token on the server first
      ///api/auth
      //var authen = Restangular.one('api/auth').get().$object; $scope.encodedFile

      // get a bearer token
      Restangular.one('api/auth').get().then(function(rsp) {
            console.log(rsp);
            var token = rsp;
            // get the file from the canvas.
            var file = $scope.fabric.getCanvasData();
            // then send file if all is ok && files[0].length
            Upload.upload({
                url: 'http://localhost:8000/api/filer2',
                headers: {
                    'user_id': $scope.auth.profile.user_id,
                    'nickname': $scope.auth.profile.nickname,
                    'filename': $scope.files[0].name,
                    'token': token,
                    'productname': $scope.form.Productname,
                    'description': $scope.form.Description
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

          }, function(response) {
            // error
            console.log(response.status);
          });
      };
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
      "maxLength": 20,
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
    "placeholder": "Product name"
  },
  {
    "key": "Description",
    "type": "textarea",
    "placeholder": "Description"
  },
  /**
  {
    "type": "submit",
    "style": "btn-info",
    "title": "OK"
  }*/
];

//$scope.model = {};
// End Form
}]);
