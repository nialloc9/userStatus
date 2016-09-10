$(document).ready(function () {

    $('#newStatusBtn').click(function () {

        var AUTH_ID = $('#authId').val();
        var TIMESTAMP = $('#timestamp').val();
        var statusText = $('#newStatusText').val();
        var newStatusImage = $('#newStatusImage').val();

        Status.createStatus('php/auth/status.auth.php', 'newStatusArea' ,AUTH_ID, 'Niall', 'O Connor', 'res/images/profileImages/noProfilePic.jpg', '1', statusText, newStatusImage, TIMESTAMP);
    });

});