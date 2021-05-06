<template>
  <div v-if="isDev">
    <BaseAlert title="Environment Debug" align="left" color="danger">
      <pre>{{ data }}</pre>
    </BaseAlert>
  </div>
</template>

<script>
export default {
  name: 'BaseEnv',
  components: {},
  data: function() {
    return {
      data: process.env
    };
  },
  computed: {
    isDev() {
      return process.env.NODE_ENV === `development`;
    }
  }
};
</script>
