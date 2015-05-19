app.factory('ShowsService',function(Restangular){
  
 
 
    return {
        list: function(){
          var files = Restangular.all('files').getList().$object;
            return files;
        },
        find: function(id) {
          var afile = Restangular.one('files',id).get().$object;
          
          return angular.fromJson(afile);
        }
        
    }
 });