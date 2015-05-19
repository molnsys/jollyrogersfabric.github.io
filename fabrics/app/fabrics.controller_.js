'use strict';

angular.module('iprognos')
.controller('FabricsCtrl',['$scope','store', 'auth', 'Upload','$state','Fabric', 'FabricConstants', 'Restangular', function($scope,store,auth, Upload,$state, Fabric, FabricConstants,Restangular ) {
  //$scope.auth = auth;
  $scope.fabric = {};
   //$scope.ImagesConstants = ImagesConstants;
	$scope.FabricConstants = FabricConstants;
  //$scope.fabric.setCanvasSize('600', '800');

  $scope.auth = auth;



//  var theImage = files[0].type.indexOf('image') > -1;
/**
$scope.addImage = function(image) {
  var theImage = files[0].type.indexOf('image') > -1;
  $scope.fabric.addImage(theImg);
};
*/

//$scope.$watch('files', function ($files) {
 //   if ($files !== undefined) {
        // alert('onFileDrop!' + $files[0].type.indexOf('image'));

       // console.log($files[0]);
     //var fileReader = new FileReader() ;
/**
    fileReader.upload = function() {
      var layer = {
        active: false,
        image: fileReader.result
      } };
    */

      //console.log(fileReader.result);
      //$scope.createNewLayer(fileReader.result);
    //  $scope.addImageToCanvas(layer);
   /**
        $scope.addImage = function(image) {

		$scope.fabric.addImage($files[0]);
	};*/




  //  };
   //var theImage = fileReader.readAsDataURL(file);

      // add image to page!
   // $scope.fabric.addImage(layer.image);

    // test to add image to canvas

  //  });



/**
  $scope.setCanvasSize = function() {
    $scope.fabric.setCanvasSize('600', '500');
    $scope.fabric.setDirty(true);
    delete $scope.canvasCopy;
  };
*/
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


// ngf-src="files[0]" ng-show="files[0].type.indexOf('image') > -1"

//$scope.test;

$scope.addImage = function() {


// Define the string
//var string = $files[0];

// Encode the String
//var encodedString = Base64.encode(string);
//console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

//$scope.test = $scope.files;

// read the file when it is droped
var reader = new FileReader();
reader.onload = function(e) {
    var encodedUrl = e.target.result;
    var base64File = encodedUrl.substring(encodedUrl.indexOf(','));
    // add the right syntax to make it a dataURL
    $scope.encodedFile = 'data:' + $scope.files[0].type +';base64' + base64File;

    $scope.fabric.addImage($scope.encodedFile);
    //console.log(encodedFile);
    // add the encoded file to the canvas
    /**$scope.fabric.addImage(encodedFile,imageDefaults: {left: 100,
	  top: 100,
	  angle: 30,
	  opacity: 0.85});*/

    //$scope.fabric.addImage(encodedFile).imageDefaults({angle: 30});

/**
var imageDefaults = {left: 100,
top: 100,
angle: 30,
opacity: 0.85};

$scope.fabric.addImage(encodedFile,{left: 100,
top: 100,
angle: 30,
opacity: 0.85});
*/
    //$scope.fabric.addImage(encodedFile,imageOptions(imageDefaults) );
  };


// add the file to encode
reader.readAsDataURL($scope.files[0]);

};

/**
{
  left: 100,
  top: 100,
  angle: 30,
  opacity: 0.85
}
*/

$scope.setCanvasSize = function() {
  $scope.fabric.setCanvasSize($scope.canvasCopy.width, $scope.canvasCopy.height);
  $scope.fabric.setDirty(true);
  delete $scope.canvasCopy;
};


$scope.onFileDropped = function($files) {


    console.log('onFileDrop!');
/** direct upload!!
    var uploadPromise = FileUploaderService.upload(file);
    uploadPromise.error(function(response) {
      $scope.notify('Upload error: ' + response.message);
    });
  ngf-change="fileDropped($files, $event, $rejectedFiles)"

    ngf-drop="onFileDropped($files)"
    */

  };


	$scope.createNewLayer = function(layer) {
		$scope.layers.push(layer);
    layer.thumb = response.thumb;
		/**uploadPromise.success(function(response){

		});*/
		/**
    uploadPromise.error(function(response) {
			$scope.layers.splice(_.indexOf($scope.layers, layer), 1);
		});*/
	};






  $scope.$on('canvas:created', $scope.init);




    // File upload
    $scope.log = '';
    // show progress
    $scope.progressPercentage = '';
    // upload when button is pressed! function (files)


    $scope.upload = function (files) {


    //  canvasURL = $scope.fabric.toDataURL();
    //  var image = new Image();

      //$('#canvasContainer').replaceWith(image);


      // set auth token on the server first
      ///api/auth
      //var authen = Restangular.one('api/auth').get().$object; $scope.encodedFile
//console.log('Files:' + theImage );

//var formData = {};
//formData.push('user_id',$scope.auth.profile.user_id);
//formData.push('nickname', $scope.auth.profile.nickname);
//formData.push('file', theImage);
/**
Restangular.one('api/filtest')
          //.withHttpConfig({transformRequest: angular.identity})
          .customPOST({'user_id': $scope.auth.profile.user_id,'nickname': $scope.auth.profile.nickname, 'file': theImage},undefined, undefined,
            { 'Content-Type': undefined });
*/

/**
            Restangular.all('api/filtest').withHttpConfig({transformRequest: angular.identity}).customPOST({'user_id': $scope.auth.profile.user_id,'nickname': $scope.auth.profile.nickname, 'file': theImage},'',undefined,{'Content-Type': undefined});
*/
// first authenticate with moltin
/**
  Restangular.one('api/auth').get().then(function() {
        console.log("ok");


        // then send file if all is ok && files[0].length

      }, function(response) {
        // error
        console.log(response.status);
      });
      */


    //  if (theImage ) {
          //for (var i = 0; i < $scope.files.length; i++) {
              //var file = $scope.files[i];

              var file = $scope.fabric.getCanvasData();

              //store.set('theImageFile', $scope.fabric.getCanvasData());
            //  var theImage = store.get('theImageFile');
  /**
              Restangular.all('api/filtest').withHttpConfig({transformRequest: angular.identity}).customPOST({'user_id': $scope.auth.profile.user_id,'nickname': $scope.auth.profile.nickname, 'file': theImage},undefined,{'Content-Type': undefined});

*/
            //  console.log(theImage);
            //  var file = theImage;
//var file = store.get('theImageFile');
              Upload.upload({
                  url: 'http://localhost:8000/api/filtest',
                  headers: {
                      'user_id': $scope.auth.profile.user_id,
                      'nickname': $scope.auth.profile.nickname,
                      'filename': $scope.files[0].name
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
                  //$scope.progressPercentage = 0;
                  $scope.$apply();
              });


      }

//console.log('Authen: ' + angular.toJson(authen));

//console.log('Authen:' + authen);

/**
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                    url: 'http://localhost:8000/api/filtest2',
                    headers: {
                        'user_id': $scope.auth.profile.user_id,
                        'nickname': $scope.auth.profile.nickname
                    },
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progressPercentage = progressPercentage;
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                                evt.config.file.name + '\n' + $scope.log;
                                console.log('percent: ' + parseInt((100.0 * evt.loaded / evt.total).toString(), 10));
                }).success(function (data, status, headers, config) {

                    $scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                    $scope.$apply();
                });
            }
        }
        */
  //  };
}]);
