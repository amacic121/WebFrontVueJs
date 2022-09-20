<template>
    <div>
        <h1>
            Users
        </h1>
        
        <h3> Add new user </h3>
                    <div>
                        <label>Email    </label>
                        <input type="email" class="form-control" placeholder="email" id="email" v-model = "User.email" required>
                    </div>

                    <div>
                        <label>First Name    </label>
                        <input type="text" class="form-control" placeholder="first name" id="first_name" v-model = "User.first_name" required>
                    </div>

                    <div>    
                        <label>Last Name    </label>
                        <input type="text" class="form-control" placeholder="last name" id="last_name" v-model = "User.user_type" required>
                    </div>
                    
                    <div>
                        <label>User type    </label>
                        <input type="text" class="form-control" placeholder="user type" id="user_type" v-model = "User.last_name" required>
                    </div>

                    <div>
                        <label>Status    </label>
                        <input type="text" class="form-control" placeholder="status" id="status" v-model = "User.status" required>
                    </div>

                    <div>
                        <label>password    </label>
                        <input type="password" class="form-control" placeholder="password" id="password" v-model = "User.password" required>
                    </div>

                    <input type="submit" value="Add User" @click = "addUser()"> 

        <div class="posts-list row">
            <div class="card mt-4 col-md-6 bg-ligt" v-for = "user_i in users" v-bind:key="user.id">
                    <h1 class="card-title">Email: {{user_i.email}}</h1>
                    <h2 class="card-title">First Name: {{user_i.first_name}}</h2>
                    <h3 class="card-title">Last Name: {{user_i.user_type}}</h3>
                    <h4 class="card-title">User type: {{user_i.last_name}}</h4>
                    <h5 class="card-title">Status: {{user_i.status}}</h5>
                    <h6 class="card-title">Password: {{user_i.password}}</h6>
                    
                    
                </div>
                <button type="button" id="edit-user" @click = "editUser();reloadPage()">Edit</button>
            </div>
        </div>
                
</template>


<script>
    import axios from 'axios';

    export default {
      name: 'User',

      data() {
        return{

          User: {email: '', first_name: '',user_type: '', last_name: '',status: '', password: ''},
          
          users: []
        }
      },
      
      methods: {
         
         loadAllusers(){

            let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }

          axios.get('http://localhost:8000/users/listAllUsers', this.users,config)
          .then(response => {
            this.categories = response.data
          })
          },


          addUser() {
            let newUser = {
                email: this.User.email,
                firstName: this.User.first_name,
                lastName: this.User.last_name,
                userType: this.User.user_type,
                status: this.User.status,
                password: this.User.password
            }
            console.log(newUser);


            let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }

            axios.post('http://localhost:8000/users/addUser', newUser, config)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

        },
      
      editUser(id)
      {
         let updatedUser = {
            email: this.User.email,
                firstName: this.User.first_name,
                lastName: this.User.last_name,
                userType: this.User.user_type,
                status: this.User.status,
                password: this.User.password
         }
         console.log(id)

         let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }
         axios.put('http://localhost:8000/users/editUser'+id, updatedUser)
            .then((response) => {
               console.log(response);
            })
            .catch((error) => {
               console.log(error);
            });
            
      } ,


     },


      

      mounted() {
        this.loadAllusers()
        //console.log(this.categories.name)
      },

    }
    </script>


<style>

    html,body{
    /* background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg'); */
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    font-family: 'Numans', sans-serif;
    }
    
    .container{
    height: 100%;
    align-content: center;
    }
    
    .card{
    height: 370px;
    margin-top: auto;
    margin-bottom: auto;
    width: 400px;
    background-color: rgba(0,0,0,0.5) !important;
    }
    
    .social_icon span{
    font-size: 60px;
    margin-left: 10px;
    color: #FFC312;
    }
    
    .social_icon span:hover{
    color: white;
    cursor: pointer;
    }
    
    .card-header h3{
    color: white;
    }
    
    .social_icon{
    position: absolute;
    right: 20px;
    top: -45px;
    }
    
    .input-group-prepend span{
    width: 50px;
    background-color: #FFC312;
    color: white;
    border:0 !important;
    }
    
    input:focus{
    outline: 0 0 0 0  !important;
    box-shadow: 0 0 0 0 !important;
    
    }
    
    .remember{
    color: white;
    }
    
    .remember input
    {
    width: 20px;
    height: 20px;
    margin-left: 15px;
    margin-right: 5px;
    }
    
    .login_btn{
    color: white;
    background-color: #fcfcfc;
    width: 100px;
    }
    
    .login_btn:hover{
    color: white;
    background-color: white;
    }
    
    .links{
    color: white;
    }
    
    .links a{
    margin-left: 4px;
    }
    </style>