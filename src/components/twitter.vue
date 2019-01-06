<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-8">{{handle}}</div>
        <div class="col-4">
          <button @click="showModal=true" class="btn btn-primary">
            <i class="fas fa-edit"></i> Edit
          </button>
        </div>
      </div>
    </div>
    <div class="card-body" :style="styles">
      <ul v-if="json.length >0" class="list-group list-group-flush">
        <li v-for="data in json.slice(0,limit)" class="list-group-item">
          {{data.text}}
          <div class="text-muted">
            <i class="fas fa-clock"></i>
            {{data.created_at | moment("dddd, MMMM Do YYYY")}}
          </div>
          <div v-if="data.entities.urls[0]">
            <a :href="data.entities.urls[0].url">
              <i class="fab fa-twitter"></i> see on Twitter
            </a>
          </div>
        </li>
      </ul>
    </div>

    <Modal v-if="showModal" @close="showModal = false; persistSettings()">
      <div slot="header col">Edit {{handle}}</div>
      <div slot="body" class="text-center">
        <form>
          <div class="form-group row">
            <label for="noOfLines" class>No of tweets</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="noOfLines" value="10" v-model="limit">
            </div>
          </div>
          <div class="form-group row">
            <label for="fontSize" class>font Size</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="fontSize" v-model="styles.fontSize">
            </div>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import getTwitterServie from "../_services/twitter.js";
import Modal from "./modal";

export default {
  name: "Twitter",
  components: {
    Modal
  },
  data() {
    return {
      json: [],
      limit: 10,
      showModal: false,
      styles: {
        fontSize: "16px"
      }
    };
  },
  props: ["handle"],
  mounted() {
    getTwitterServie.getTwitterData(this.handle).then(response => {
      this.json = response;
    });
    if (localStorage.getItem(this.handle)) {
      let json = JSON.parse(localStorage.getItem(this.handle));
      this.limit = json.noOfLines;
      this.styles = json.styles;
    }
  },
  methods: {
    persistSettings() {
      let setting = {
        noOfLines: this.limit,
        styles: this.styles
      };
      localStorage.setItem(this.handle, JSON.stringify(setting));
    }
  }
};
</script>

