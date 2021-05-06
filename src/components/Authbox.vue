<template>
  <div>
    <div class="card card-body">
      <div>Is Admin (getter function): {{ isAdmin }}</div>
      <div>Token (directly from state): {{ auth.token }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Authbox',
  components: {},
  data: function() {
    return {};
  },
  props: {
    title: String,
    content: String
  },
  methods: {},
  computed: {
    ...mapGetters(['isAdmin']),
    ...mapState(['auth'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
