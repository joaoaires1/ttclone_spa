<template>
    <transition name="modal">
        <div v-if="getShowEditPerfilModal" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">

                        <div>
                            <button @click="changeShowEditPerfilModal(false)">
                                <img class="close-img" src="../assets/close.svg" alt="">
                            </button>
                        </div>

                        <div>
                            <p>Edit perfil</p>
                        </div>

                        <div>
                            <button >Save</button>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {

    data () {
        return {
            showModal: false
        }
    },
    methods: {
        ...mapMutations([
            'changeShowEditPerfilModal'
        ])
    },
    computed: {
        ...mapGetters([
            'getShowEditPerfilModal'
        ]),
    }

}
</script>

<style>

.modal-header {
    display: flex;
    /* justify-content: space-between; */
    flex-direction: row;
    padding: 8px;
}

.modal-header div:nth-child(1) button {
    cursor: pointer;
    border-radius: 50px;
    padding: 5px;
    border: 1px solid #107C10;;
    color: #107C10;
    background: #fff;
}

.close-img {
    width: 12px;
}

.modal-header div:nth-child(2) {
    padding: 5px;
}

.modal-header div:nth-child(3) {
    align-self: flex-end;
}

.modal-header div:nth-child(3) button {
    cursor: pointer;
    border-radius: 50px;
    padding: 5px 10px;
    border: 1px solid #107C10;;
    color: #fff;
    background: #107C10;
    font-weight: bold;
    letter-spacing: .05em;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  background-color: #fff;
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