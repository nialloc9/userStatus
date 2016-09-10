<?php
if(!isset($_SESSION)){
    session_start();
}
//TOKEN CLASS
class Token{
    //GENERATE TOKEN
    public static function generate(){
        //CREATE CSRF TOKEN
        session_unset('csrfToken');
        $_SESSION['csrfToken'] = base64_encode(openssl_random_pseudo_bytes(32)); //RANDOM 32 BYTE VALUE
        return $_SESSION['csrfToken'];
    }

    //CHECK TOKEN
    public static function check($token){
        //TOKEN CHECK
        if($token == $_SESSION['csrfToken']){
            return 1;
        }else{
            return 0;
        }
    }
}
?>