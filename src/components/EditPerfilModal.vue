<template>
    <transition name="modal">
        <div v-if="getShowEditPerfilModal" class="modal-mask">
            <div class="modal-container">

                <div >
                    <div class="modal-header">

                        <div>
                            <div @click="changeShowEditPerfilModal(false)">
                                <img class="close-img" src="../assets/close.svg" alt="">
                            </div>
                        
                            <p class="modal-header-title">Edit perfil</p>
                            
                        </div>


                        <div>
                            <button v-if="!change" @click="submitEditPerfil" >Save</button>
                            <button v-else @click="cropImage" >Crop image</button>
                        </div>

                    </div>

                    <div class="modal-body">
                        <div v-if="!change">
                            <div class="modal-cover">

                            </div>
                            <div class="modal-avatar" :style="{backgroundImage: urlImage, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}">
                                <div>
                                    <label class="label-file" for="file">
                                        <img width="20px" src="../assets/photo-camera.svg">
                                    </label>
                                    <input
                                        id="file"
                                        type="file"
                                        @change="onFileChange" >
                                </div>
                            </div>
                            <div class="modal-form">
                                <div class="name">
                                    <label for="name">
                                        Name
                                    </label>
                                    <div>
                                        <input type="text" id="name" placeholder="Name" >
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div :style="{height: ht}" >
                            <img style="display: none" width="300px" ref="avatar" src="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
import { log } from 'util';

export default {

    data () {
        return {
            showModal: false,
            cropper: null,
            cropperCanvas: null,
            image: 'http://127.0.0.1:8000/uploads/avatar/default.jpg',
            urlImage: "url('http://127.0.0.1:8000/uploads/avatar/default.jpg')",
            selectedFile: null,
            user: null,
            color: 'red',
            avatar: '',
            change: false,
            ht: '0px'
        }
    },
    methods: {
        ...mapMutations([
            'changeShowEditPerfilModal'
        ]),
        ...mapActions([
            'userDataAction', 'initPostsAction'
        ]),
        onFileChange(e) {
            var files = e.target.files;
            
            if (!files.length)
                return;

            this.selectedFile = files[0]

            this.change = true
            this.ht = '300px'

            this.$refs.avatar.src = URL.createObjectURL(this.selectedFile)

            this.cropper = new Cropper(this.$refs.avatar, {
                aspectRatio: 1
            });
        },
        cropImage () {
            this.ht = '0px'
            this.change   = false

            var canvas;

            if ( this.cropper ) {
                canvas = this.cropper.getCroppedCanvas({
                    width: 300,
                    height: 300
                });

                this.urlImage = `url(${canvas.toDataURL()})`

                canvas.toBlob( blob => {
                    this.selectedFile = blob
                })

                this.cropper.destroy();
                this.cropper = null;  
            }
        },
        submitEditPerfil () {
            const formData = new FormData()

            if (this.selectedFile)
                formData.append('photo', this.selectedFile)

            formData.append('id', this.user.id)
            formData.append('api_token', this.user.api_token)
            formData.append('name', 'qweqw')

            this.$http.post('/edit_perfil', formData)
            .then( res => {
                let user = this.$helper.getStorageUserData()
                let { data } = res

                user.avatar = data.user.avatar
                this.$store.dispatch('userDataAction', user)
                this.$store.dispatch('initPostsAction')
                this.$helper.setStorageUserData(user)

            })
            .catch(err => log(err))
        }
    },
    computed: {
        ...mapGetters([
            'getShowEditPerfilModal'
        ]),
    },
    created () {
        const isAuthenticated = JSON.parse(localStorage.getItem('authenticatedUser'))
        this.user = isAuthenticated
    }

}
</script>

<style>

.modal-mask {
  position: fixed;
  z-index: 101;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity .3s ease;
}

.modal-container {
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 15px;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 8px;
    border-bottom: 1px solid #eee;
}

.modal-header div:nth-child(1) {
    margin-left: 5px;
    display: flex;
    align-items: center;
}

.close-img {
    cursor: pointer;
    width: 16px;
}

.modal-header-title {
    margin-left: 15px;
}

.modal-header div:nth-child(2) {
    padding: 5px;
}

.modal-header div:nth-child(2) button {
    cursor: pointer;
    border-radius: 50px;
    padding: 5px 10px;
    border: 1px solid #107C10;;
    color: #fff;
    background: #107C10;
    font-weight: bold;
    letter-spacing: .05em;
}

.modal-body {
    position: relative;
}

.modal-cover {
    height: 193px;
    background: #ccc;
}

.modal-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #fff;
    height: 115px;
    width: 115px;
    border-radius: 150px;

    position: absolute;
    top: 146px;
    left: 14px;
}

input[type='file'] {
    display: none;
}

.label-file {
  border-radius: 50px;
  border: 2px solid #fff;
  cursor: pointer;
  margin: 10px;
  padding: 8px;
  display: flex;
  align-items: center;
}

.modal-form {
    margin-top: 80px;
    padding: 15px;
}

.modal-form div {
    padding: 6px;
    background: rgb(245, 248, 250);
}

.name label {
    padding-left: 6px;
    font-size: 13px;
}

.name input {
    width: 100%;
    font-size: 20px;
    border: none;
    background: rgb(245, 248, 250);
    outline: none;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>