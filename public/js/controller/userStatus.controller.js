/**
 * Created by Niall on 10/09/2016.
 */

var Status = {

    //CREATE STATUS
    createStatus: function(pathToStatusServerScript, newStatusAreaId ,authId, firstname, lastname, authProfilePicPath, parentId, statusText, statusImagePath, timestamp){

        $.post(
            pathToStatusServerScript,
            {
                task: 'newStatus',
                authId: authId,
                statusText: statusText,
                statusImage: statusImagePath,
                timestamp: timestamp
            }
        ).error(function(){
            console.log("ERROR: createStatus http request failure in userStatus.controller.js");
        }).success(function (newStatus) {
            console.log("SUCCES: createStatus http request success.. adding status");

            //assign variables
            var area = '#'+newStatusAreaId;
            var statusId = 2;

            //prepend new status
            $(area).prepend(newStatus);
        });

    },

    //UPDATE STATUS
    updateStatus: function(statusId, statusText, statusImage, timestamp){

    },

    //DELETE STATUS
    deleteStatus: function (statusId) {

    },

    //LIKE STATUS
    likeStatus: function (statusId) {

    },

    //GET USER STATUSES
    getUserStatuses: function () {

    }

};