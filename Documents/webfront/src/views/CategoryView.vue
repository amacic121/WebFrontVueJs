<template>
    <div>
        <h1>
            Categories
        </h1>

        <h3> Add new category </h3>

        <label>Name</label>
        <input type="text" class="form-control" placeholder="name" id="name" v-model="category.name" required>
        <div>
            <label>Description</label>
            <input type="text" class="form-control" placeholder="description" id="description"
                v-model="category.description" required>
        </div>
        <input type="submit" value="Add Category" @click="addCategory();reloadPage()">
        <input type="submit" value="Delete Category" @click="deleteCategory();reloadPage()">
        <input type="submit" value="Edit Category" @click="editCategory();reloadPage()">



        <table class="table">
            <thead>
                <tr class="table-active">
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>

                <ul v-for="category_i in categories">
                    <li>{{category_i.name}}</li>
                    <li>{{category_i.description}}</li>
                    <li>{{category_i.id}}</li>
                    <li>
                        <ul v-for="post in category_i.posts">
                            <li>{{post.title}}</li>
                        </ul>
                    </li>

                </ul>

            </tbody>
        </table>


    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'Category',



    data() {
        return {
            category: { name: '', description: '' },
            categories: [],
            posts: []
        }
    },

    components: {

    },

    methods: {

        addCategory() {
            let newCategory = {
                name: this.category.name,
                description: this.category.description,
            }
            console.log(newCategory);


            let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }

            axios.post('http://localhost:8000/categories/addCategory', newCategory, config)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        deleteCategory(id)
      {
         console.log(id)
        let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }

         axios.delete('http://localhost:8000/categories/deleteCategory'+id , config)
            .then(() => {
            
            })
            .catch((error) => {
               console.log(error);
            });
            
      } ,
      editCategory(id)
      {
         let updatedCategory = {
            name: this.category.name,
                description: this.category.description,
         }
         let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }
         console.log(id)
         axios.put('http://localhost:8000/categories/updateCategory'+id, updatedCategory,config)
            .then((response) => {
               console.log(response);
            })
            .catch((error) => {
               console.log(error);
            });
            
      } ,
        reloadPage() {
            window.location.reload();
        }
    },


    mounted() {


        axios.get('http://localhost:8000/categories/listAllCategories', this.categories)
            .then((response) => {
                console.log(response.data);
                this.categories = response.data;
            })

    }

}
</script>