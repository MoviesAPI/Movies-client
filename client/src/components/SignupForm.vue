<template>
    <div id="signupbox" style="display:block; margin-top:50px" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="panel-heading">
            <div class="panel-title">Sign Up</div>
        </div>

        <div class="panel-body" >
            <form id="signupform" class="form-horizontal" role="form">
  
                <div class="form-group">
                <label id="label" for="email" class="col-md-3 control-label">Email</label>
                    <div class="col-md-9 center">
                        <input type="text" class="form-control" name="email" placeholder="Email Address">
                    </div>
                </div>
                                    
                <div class="form-group">
                    <label for="firstname" class="col-md-3 control-label">Full Name</label>
                        <div class="col-md-9">
                            <input type="text" class="form-control" name="firstname" placeholder="First Name">
                         </div>
                        </div>
                <div class="form-group">
                    <label for="password" class="col-md-3 control-label">Password</label>
                        <div class="col-md-9">
                            <input type="password" class="form-control" name="passwd" placeholder="Password">
                        </div>
                </div>

                <div id="or" class="form-button">
                    <div class="col-md-offset-3 col-md-9">
                        <span style="margin-left:8px;">or</span>  
                    </div>
                </div>
                <div style="margin-top:10px" class="form-button">
                    <div class="col-sm-12 controls">
                        <a id="btn-login"  class="btn btn-success">Sign Up  </a>
                        <a id="btn-fblogin"  class="btn btn-primary">Sign Up with Facebook</a>
                    </div>
                </div>
                
            </form>
        </div>
        </div>
</template>

<script>
export default {
  data() {
    return {
      seen: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
#btn-fblogin {
  margin-left: 10px;
  /* border: 1px solid black; */
}

#signupbox {
  margin-left: 350px;
  /* border: 1px solid black; */
}

.form-control {
  margin-left: 210px;
  /* border: 1px solid black; */
    width: 60%;

}

.form-button {
  margin-right: -80px;
  /* border: 1px solid black; */
}

#or {
  margin-right: -300px;
  /* border: 1px solid black; */
}

#label{
      border: 1px solid black;

}
</style>

