<template>

  <div id="loginbox" style="margin-top:50px; text-align: center;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
    <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="panel-heading">
            <div class="panel-title">Sign In</div>
                    </div>

        <div style="padding-top:30px" class="panel-body" >
            <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>

            <form id="loginform" class="form-horizontal" role="form">
                <div style="margin-bottom: 25px" class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group" style="margin-bottom: 25px">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>

                <div style="margin-top:10px" class="form-group">
                    <div class="col-sm-12 controls">
                        <a id="btn-login"  class="btn btn-success">Login  </a>
                        <a id="btn-fblogin"  class="btn btn-primary">Login with Facebook</a>
                    </div>
                </div>
                <div style="float:center; font-size: 80%; position: relative; top:-10px"><a href="#">Forgot password?</a></div>
                <div class="form-group">
                    <div class="col-md-12 control">
                        <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                            Don't have an account! 
                            <a href="#" onClick="$('#loginbox').hide(); $('#signupbox').show()">
                                Sign Up Here
                            </a>
                        </div>
                    </div>
                </div>
        
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

#btn-fblogin{
    margin-left:10px;
}

#loginbox{
    margin-left:250px;
    
}


</style>

