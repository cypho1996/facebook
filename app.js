window.fbAsyncInit = function() {
    FB.init({
      appId      : '1471776699504628',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

  function log(){
    FB.getLoginStatus(function(response) {
     if (response.status === 'connected') {
      alert("you have successfully logged in facebook");
      }
     else {
     alert("please login into your facebook");
       FB.login(function(){},{scope: 'publish_actions'});
       }
    });
  }
 function post(){
  //
  FB.login(function(){
  FB.api('/me/photos/new', 'post', {message: 'hello !! this is jarvish..wish a wish from jarvishkjhj'},{url: 'https://scontent.fixc1-1.fna.fbcdn.net/v/t1.0-9/12376813_594884550662508_8500747376284462933_n.jpg?oh=f87c2081f24d7ba4ff1ea737c9247a3d&oe=58A492CA'});
    }, {scope: 'publish_actions'});
}



  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));