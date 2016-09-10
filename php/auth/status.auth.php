<?php


//NEW STATUS
if(isset($_POST['task']) && $_POST['task'] == 'newStatus'){

    if(
        isset($_POST['authId'], $_POST['statusText'], $_POST['timestamp']) && !empty($_POST['authId']) && !empty($_POST['statusText']) && !empty($_POST['timestamp'])
    ){
        //assign variables
        $authId = $_POST['authId'];
        $statusText = $_POST['statusText'];
        $timestamp = $_POST['timestamp'];

        //get user data
        $firstname = 'Niall';
        $lastname = "O Connor";
        $profilePicPath = "res/images/profileImages/noProfilePic.jpg";

        //check status image
        if(isset($_POST['statusImage']) && !empty($_POST['statusImage'])){
            $statusImagePath = $_POST['statusImage'];

            //assing image area
            $statusImageArea = "
                <div class='status-image-wrapper'>
                        <img class='img-rounded status-image' src='" . $statusImagePath . "' alt='User Status Image'/>
                    </div>
            ";
        }else{
            $statusImageArea = "";
        }


        $statusId = 2;

        //create new status
        echo "
            <div class='status'>
                <div class='status-contents'>
                    <img class='img-circle status-profile-image' src=".$profilePicPath." alt='Profile Picture'/>
                    <a href='index.html?pi=". $authId ."'><p class='status-username'>".$firstname . " " . $lastname."</p></a>
                    ". $statusImageArea ."
                    <p class='status-text'>".$statusText."</p>
                    <p class='status-timestamp'>" . $timestamp . "</p>
                    <a class='status-edit-button' id='statusEdit". $statusId ."'>Edit</a>
                    <a class='status-delete-button' id='statusDelete". $statusId ."'>Delete</a>
                </div>
            </div>
        ";
    }else{
        //required var no set
        echo 2;
    }
}

?>