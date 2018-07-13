<template>
    <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
    <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="panel-heading-login">
            <div id="signin" class="panel-title-login">Sign In Here!</div>
            <div style="padding-top:30px" class="panel-body" >
            <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
        </div>

        

            <form v-if="!seen" id="loginform" class="form-horizontal" role="form">
                <div style="margin-bottom: 25px" class="form-group">
                    <input type="email" class="form-control" id="login-input" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group" style="margin-bottom: 25px">
                    <input type="password" class="form-control" id="login-input" placeholder="Password">
                </div>

                <div style="margin-top:10px" class="form-group-login">
                    <div class="col-sm-12 controls">
                        <a id="btn-login"  class="btn btn-success">Login  </a>
                        <a id="btn-fblogin"  class="btn btn-primary">Login with Facebook</a>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12 control">
                        <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                            Don't have an account! 
                            <a>
                                <router-link to="/signup">Sign Up Here</router-link>
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
  data() {
    return {
      seen: false
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
#btn-fblogin {
  margin-left: 15px;
}

#loginbox {

  margin-left: 250px;
      /* border:1px solid black */

}

#loginform{
    border: 1px solid steelblue;
    width: 379px;
    padding: 38px 25px;
    border-radius: 5px;
    background-color: white
}

.form-group-login{
    padding-bottom: 20px;
}

.panel-heading-login{
    width: 379px;
    border-radius: 6px;
    background-color: steelblue
}


#signin{
    color: white;
    font-size: 23px;
    padding-top:19px;
}

#exampleInputEmail1{
      margin-left: -5px;

    /* border:1px solid black */
}

#exampleInputPassword1{
      margin-left: -5px;

    /* border:1px solid black */
}


</style>

