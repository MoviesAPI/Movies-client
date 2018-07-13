<template>
    <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div class="panel-heading-login">
                <div id="signin" class="panel-title-login">Sign In Here!</div>
                <div style="padding-top:30px" class="panel-body">
                    <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
                </div>

                <form id="loginform" class="form-horizontal" role="form">
                    <div style="margin-bottom: 25px" class="form-group">
                        <input v-model="email" type="email" class="form-control" id="login-input" aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group" style="margin-bottom: 25px">
                        <input v-model="password" type="password" class="form-control" id="login-input" placeholder="Password">
                    </div>

                    <div style="margin-top:10px" class="form-group-login">
                        <div class="col-sm-12 controls">
                            <a @click="login" id="btn-login" class="btn btn-success">Login </a>
                            <a @click="loginFb" id="btn-fblogin" class="btn btn-primary">Login with Facebook</a>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-12 control">
                            <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%">
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
import axios from 'axios'
import { firebase, providerFB } from '@/helpers/firebase.js'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      let account = {
        email: this.email,
        password: this.password
      }
      axios
        .post('http://localhost:3000/users/signin', account)
        .then(response => {
          localStorage.setItem('token', response.data.token)
          // console.log(response);

          swal({
            text: 'Login Success',
            icon: 'success'
          })
          this.$router.push('/home')
        })

        .catch(err => {
          console.log(err)
          swal({
            text: 'Wrong Email/Password!',
            icon: 'error'
          })
        })
    },
    loginFb() {
      firebase
        .auth()
        .signInWithPopup(providerFB)
        .then(result => {
          // var token = result.credential.accessToken

          // console.log(token)
          // localStorage.setItem('token', token)
          swal({
            text: 'Login Success',
            icon: 'success'
          })

          let account = {
            name: result.user.providerData[0].displayName[0],
            email: result.user.providerData[0].email,
            password: result.user.providerData[0].displayName
          }

          axios
            .post('http://localhost:3000/users/loginFb', account)
            .then(response => {
              // console.log(response.data.token);
              // this.$router.push('/login')
              console.log('masuk lah gan', response.data.token)

              localStorage.setItem('token', response.data.token)
              this.$router.push('/home')
            })
            .catch(err => {})

          // var user = result.user
          // console.log(result)

          // console.log(result.user.providerData[0].displayName)
        })
        .catch(function(error) {
          var errorCode = error.code
          var errorMessage = error.message
          var email = error.email
          var credential = error.credential
        })
    }
  }
}
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

#loginform {
  border: 1px solid steelblue;
  width: 379px;
  padding: 38px 25px;
  border-radius: 5px;
  background-color: white;
}

.form-group-login {
  padding-bottom: 20px;
}

.panel-heading-login {
  width: 379px;
  border-radius: 6px;
  background-color: steelblue;
}

#signin {
  color: white;
  font-size: 23px;
  padding-top: 19px;
}

#exampleInputEmail1 {
  margin-left: -5px;

  /* border:1px solid black */
}

#exampleInputPassword1 {
  margin-left: -5px;

  /* border:1px solid black */
}
</style>

