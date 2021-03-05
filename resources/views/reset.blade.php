<html>
<head>
    <title>Reset Password</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="stylesheet" href="{{asset('css/responsive.css')}}">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
</head>
<body>
<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-md-6 text-center mt-5">
            <div class="card">
                <div class="card-body">
                    <h3>Reset your password<button id="iconBox" class="btn btn-warning"><i id="statusIcon" class="fas fa-key"></i></button> </h3>
                    <p><sub>Minimum 6 & Maximum 10 Characters</sub></p>
                    <hr>
                    <form method="POST">
                        @csrf
                        @error('newPassword') <div class="alert alert-danger">{{ $message }}</div> @enderror
                        <input id="newPass" name="newPassword" class="form-control" type="password" placeholder="New Password"><br>
                        <input id="conPass" name="newPassword_confirmation" class="form-control" type="password" placeholder="Confirm Password"><br>
                        <input type="checkbox" id="checkbox">Show Password<br><br>
                        <button id="loginBtn" type="submit" class="btn normal-btn btn-block">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</div>


<script type="text/javascript">

    $(document).ready(function(){
        $('#checkbox').on('change', function(){
            $('#newPass').attr('type',$('#checkbox').prop('checked')==true?"text":"password");
        });
        $('#conPass').on('keyup', function(){
            var pass1 = $('#newPass').val();
            var pass2 = $('#conPass').val();

                $('#statusIcon').attr('class',pass1==pass2?"fas fa-check-circle":"fas fa-times-circle");
                $('#iconBox').attr('class',pass1==pass2?"btn btn-success":"btn btn-danger");
        });
    });

</script>



</body>
</html>
