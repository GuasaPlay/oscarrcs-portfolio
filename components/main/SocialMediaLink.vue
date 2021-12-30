<template>
  <a
    :href="to"
    target="__blank"
    class="inline-block w-9 h-9 mr-1 bg-gray-800 rounded-full py-2 text-center text-white transition-colors duration-300 hover:bg-emerald-500"
  >
    <slot />
  </a>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
}
</script>
