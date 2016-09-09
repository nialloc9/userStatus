//ADD INFO MESSAGE
function addInfoMessage(message, messageAreaId, pOrN, successClass, errorClass){

    //ASSIGN VARIABLES
    var infoArea = '#' + messageAreaId;

    //BOOLEAN CHECK
    if(pOrN){
        //ERROR CLASS CHECK
        if($(infoArea).hasClass(errorClass)){
            $(infoArea).removeClass(errorClass);
        }

        //SUCCESS CLASS CHECK
        if($(infoArea).hasClass(successClass)){
            //DO NOTHING
        }else{
            $(infoArea).addClass(successClass);
        }
    }else{ //BOOLEAN CHECK ELSE
        //SUCCESS CLASS CHECK
        if($(infoArea).hasClass(successClass)){
            $(infoArea).removeClass(successClass);
        }

        //ERROR CLASS CHECK
        if($(infoArea).hasClass(errorClass)){
            //DO NOTHING
        }else{
            $(infoArea).addClass(errorClass);
        }
    }

    //RENDER INFO
    $(infoArea).text(message);
}/**
 * Created by Niall on 31/08/2016.
 */
