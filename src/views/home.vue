<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-sm-6 col-xs-12">
        <Twitter handle="MakeSchool"></Twitter>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <Twitter handle="newsycombinator"></Twitter>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <Twitter handle="ycombinator"></Twitter>
      </div>
    </div>
  </div>
</template>

<script>
import Twitter from "../components/twitter";

export default {
  name: "Home",
  components: {
    Twitter
  }
};
</script>