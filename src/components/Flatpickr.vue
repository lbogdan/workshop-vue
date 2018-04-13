<template>
  <input type="text" v-model="localDate"/>
</template>

<script>
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

export default {
  name: 'flatpickr',
  props: {
    value: {
      required: true,
      type: String,
    },
  },
  computed: {
    localDate: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  watch: {
    value(newValue) {
      this.flatpickr.setDate(newValue);
    },
  },
  mounted() {
    this.flatpickr = flatpickr(this.$el, {
      altFormat: 'j M Y',
      altInput: true,
      allowInput: true,
    });
  },
  beforeDestroy() {
    this.flatpickr.destroy();
  },
};
</script>
