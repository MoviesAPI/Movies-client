<template>
    <div id="signupbox" style="display:block; margin-top:50px" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="panel-heading">
            <div class="panel-title">Sign Up Here!</div>
        </div>

        <div class="panel-body" >
            <form id="signupform" class="form-horizontal" role="form">
  
                <div class="form-group">
                    <div class="col-md-9 center">
                        <input type="text" class="form-control" name="email" placeholder="Email Address">
                    </div>
                </div>
                                    
                <div class="form-group">
                        <div class="col-md-9">
                            <input type="text" class="form-control" name="firstname" placeholder="First Name">
                         </div>
                        </div>
                <div class="form-group">
                        <div class="col-md-9">
                            <input type="password" class="form-control" name="passwd" placeholder="Password">
                        </div>
                </div>
                
                <div style="margin-top:10px" class="form-button">
                    <div class="col-sm-12 controls">
                        <a id="btn-signup"  class="btn btn-success">Sign Up</a>
                    </div>
                </div>

                <div id="or" class="form-button">
                    <div class="col-md-offset-3 col-md-9">
                      
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
      
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
#btn-fbsignup {
  margin-left: 10px;
  color: white;
  /* border: 1px solid black; */
}

#btn-signup{
    color: white;
}

#signupbox {
    margin-left: 350px
}

#signupform{
    border:1px solid steelblue;
	width: 400px;
	margin-left: auto;
	margin-right: auto;
	padding:30px 20px 50px 20px;
	background-color: white;
	text-align: center;
	border-radius: 5px;
}

.panel-heading{
    margin-left: 128px;
    border: 1px solid steelblue;
    width: 61%;
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
    background-color: steelblue;
}

.panel-title{
    color: white;
}

.form-control {
  margin-left: 30px;
  /* border: 1px solid black; */
    width: 270px;

}

.form-button {
    padding: 8px;
    margin-right: -8px;
  /* border: 1px solid black; */
}

#or {
    padding: 0px;
  margin-right: -110px;
  font-size: 20px;
  /* border: 1px solid black; */
}

#label{
      border: 1px solid black;

}
</style>

