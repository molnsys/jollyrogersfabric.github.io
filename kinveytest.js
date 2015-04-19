{
     "_id"             : "facebook",
     "consumer_key"    : "905218366212324",
     "consumer_secret" : "df416c8c2cc701b98e78e2e59c938cc8"
 }



function onRequest(request,response,modules){
    var req = modules.request;
    req.post('https://faktaochkunskap-moltin-e-commerce-v1.p.mashape.com/oauth/access_token', function(error, resp, body){
        if (error){
            response.body = {error: error.message};
            response.complete(400);
            return;
        }
        response.body = JSON.parse(body);
        response.complete(resp.status);
    });
}


function onRequest(request, response, modules){
  var uriString = 'https://faktaochkunskap-moltin-e-commerce-v1.p.mashape.com/oauth/access_token';
  var opts = {
    uri: uriString,
    method: 'post',
    headers: {
      'X-Mashape-Key': '6DpI2WC9YbmshTmcAkJI7fsTSe0sp1LraCpjsnclhdnIqs0Gon',
      'Content-Type':'application/x-www-form-urlencoded'
    },
    json:true
  };
    
  }  
    
  modules.request.request(opts, function( err, resp, body ) {
    if (err) {
      response.body = err;
    } else if (response.body.valid === true) {
      response.continue();
    } else {
        response.error("No balance remaining.");
       }
  });
}

var r = request.post('http://service.com/upload')
var form = r.form()
form.append('my_field', 'my_value')
form.append('my_buffer', new Buffer([1, 2, 3]))
form.append('my_file', fs.createReadStream(path.join(__dirname, 'doodle.png'))
form.append('remote_file', request('http://google.com/doodle.png'))


function onRequest(request, response, modules){
  var logger = modules.logger;
  var form = r.form()
  var uriString = 'https://api.molt.in/oauth/access_token';
  var opts = {
    uri: uriString,
    method: 'post',
    form: {
      "X-Mashape-Key": "6DpI2WC9YbmshTmcAkJI7fsTSe0sp1LraCpjsnclhdnIqs0Gon",
      "Content-Type": "application/x-www-form-urlencoded",
      "grant_type: "client_credentials",
      "client_id":"YFWE8D0RnpBHxwnyck0DjoHT0SXFP48FdArlMLMy",
      "client_secret": "dnzIYu8GrjN87WZ9d3KvmQWuo4dE9WcQWi9o8Cyy"
    },
    json:true
  };
  modules.request.request(opts, function( err, resp, body ) {
    if (err) {
      response.body = err;
    } else {
       response.complete();
       logger.info(response);
       }
  });
}







var req = modules.request;



req.request({

uri: 'https://faktaochkunskap-moltin-e-commerce-v1.p.mashape.com/oauth/access_token'',

method: 'POST',

json: {"mobile" : request.body.mobile, "cc": request.body.cc},

auth: {

user: 'APP_KEY_HERE',

pass: 'MASTER_SECRET_HERE',

sendImmediately: true

}

}, function ( validateErr, validateResponse, validateBody) {



if( validateErr ) {

response.body.debug = {"error" : "Failed to validate mobile number"};

response.complete(400);

return;

}



if( validateBody.valid !== true ) {

validationResults.push( {"attr" : "mobile", "valid" : false, "msg": ["Mobile number is not valid"] } );

} else {

request.body.mobile = validateBody.e164;

}



if( callback ) {

callback('validateMobile');

}



});



} else {



// Nothing to check so let it know all done.

if( callback ) {

callback('validateMobile');

}

}

};




var req = modules.request;
req.request({uri: 'http://api.example-api.com/v1/abcdefg',
             method: 'GET'},
            function(error, res, body){
            if (error){
                response.body = {error: error.message};
                response.complete(434);
            } else {
                response.body = JSON.parse(body);
                response.complete(res.status);
            }
});



var req = modules.request;
req.request({uri: 'https://api.molt.in/beta/file/917503639700897821',
             method: 'GET'},
            function(error, res, body){
            if (error){
                response.body = {error: error.message};
                response.complete(434);
            } else {
                response.body = JSON.parse(body);
                response.complete(res.status);
            }
});

function onRequest(request, response, modules){
var req = modules.request;
req.request({uri: 'https://api.molt.in/oauth/access_token',
             method: 'POST',form: {
      "Content-Type": "multipart/form-data",
      "grant_type": "client_credentials",
      "client_id":"YFWE8D0RnpBHxwnyck0DjoHT0SXFP48FdArlMLMy",
      "client_secret": "dnzIYu8GrjN87WZ9d3KvmQWuo4dE9WcQWi9o8Cyy"
    }},
            function(error, res, body){
            if (error){
                response.body = {error: error.message};
                response.complete(434);
            } else {
                response.body = JSON.parse(body);
                response.complete(res.status);
            }
});
}
------------------
    
    
function onRequest(request, response, modules){
  var logger = modules.logger;
  var uriString = 'https://api.molt.in/oauth/access_token';
  var opts = {
    uri: uriString,
    method: 'post',
    form: {
      "Content-Type": "multipart/form-data",
      "grant_type": "client_credentials",
      "client_id":"YFWE8D0RnpBHxwnyck0DjoHT0SXFP48FdArlMLMy",
      "client_secret": "dnzIYu8GrjN87WZ9d3KvmQWuo4dE9WcQWi9o8Cyy"
    },
    json:true
  };
  modules.request.request(opts, function( err, resp, body ) {
    if (err) {
      response.body = err;
    } else {
      
       response.complete();
       //response.body = JSON.parse(body);
       logger.info(JSON.parse(body));
       }
  });
}    