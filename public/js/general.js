$(document).ready(function () {
    //UPDATE TIME EVERY 5 SECONDS
    get_time('timestamp');
    setInterval(function(){
        get_time('timestamp');
    },5000);

    csrfTokenGenerate('php/auth/csrfToken.auth.php', 'csrfToken', tokenGnerateCallback);

});

//generate token call back function
function tokenGnerateCallback(result){
    //result boolean check.. result == true: csrf token is confirmed
    if(result){
        console.log('SUCCESS: csrf token created');
    }else{
        console.log('ERROR: creating csrf token');
    }
}