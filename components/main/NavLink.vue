<template>
  <li class="relative whitespace-nowrap">
    <NuxtLink
      :to="to"
      class="w-full text-slate-400 items-center flex py-3 px-4 mb-2 text-[15px] font-openSans rounded-lg transition-colors hover:bg-gray-800"
      active-class="bg-gray-800 !text-rose-500"
    >
      <slot />
    </NuxtLink>
  </li>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="postcss">
.active {
  @apply bg-gray-800 text-white;
}
</style>
