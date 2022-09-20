<template>
    <div>
        <h1>
            Posts
        </h1>
        
        <h3> Add new post </h3>
                    <div>
                        <label>Title    </label>
                        <input type="email" class="form-control" placeholder="title" id="title" v-model = "post.title" required>
                    </div>

                    <div>
                        <label>Text    </label>
                        <input type="text" class="form-control" placeholder="text" id="text" v-model = "post.text" required>
                    </div>

                    <div>    
                        <label>Author    </label>
                        <input type="text" class="form-control" placeholder="author" id="author" v-model = "post.author" required>
                    </div>
                    
                    <div>
                        <label>Category id    </label>
                        <input type="text" class="form-control" placeholder="category id" id="category_id" v-model = "post.category_id" required>
                    </div>

                    <input type="submit" value="Add User" @click = "addPost()"> 

        <div class="posts-list row">
            <div  style="border:1px solid black;" v-for = "post_i in posts" v-bind:key="post_i.id">
                    <h1 class="card-title">Title: {{post_i.title}}</h1>
                    <h2 class="card-title">Text: {{post_i.text}}</h2>
                    <h3 class="card-title">Author: {{post_i.author}}</h3>
                    <h4 class="card-title">Category: {{post_i.category_id}}</h4>
                    <button type="button" id="edit-post" @click = "editPost();reloadPage()">Edit</button>
                    <button type="button" id="edit-post" @click = "deletePost();">Delete</button>
                </div>
            </div>
        </div>
                
    
</template>


<script>
    import axios from 'axios';

    export default {
      name: 'Post',

      data() {
        return{ 

          post: {title: '', text: '', author: '', category_id: ''},

          posts: []
        }
      },

      
      methods: {

         loadAllPosts(){
          axios.get('http://localhost:8000/posts/listAllPosts', this.posts)
          .then(response => {
            this.posts = response.data
          })
          },



          addPost() {
            let newPost = {
                title: this.post.title,
                text: this.post.text,
                author: this.post.author,
                category_id: this.post.category_id
            }
            console.log(newPost);


            let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }

            axios.post('http://localhost:8000/posts/addPost', newPost, config)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
                

        },
        deletePost(id)
      {
         console.log(id)
         let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }
         axios.delete('http://localhost:8000/posts/editPost'+id,config)
            .then(() => {
            
            })
            .catch((error) => {
               console.log(error);
            });
            
      } ,
      editPost(id)
      {
         let updatedPost = {
                title: this.post.title,
                text: this.post.text,
                author: this.post.author,
                category_id: this.post.category_id
         }
         console.log(id)
         let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }
         axios.put('http://localhost:8000/posts/editPost'+id, updatedPost,config)
            .then((response) => {
               console.log(response);
            })
            .catch((error) => {
               console.log(error);
            });
            
      } ,

        
        reloadPage() {
            window.location.reload();
        },
        



        },

      

      mounted() {
        this.loadAllPosts()
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

