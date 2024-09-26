<script setup lang="ts">
import { buttonVariants, ButtonProps } from "@f/cva/src/main";

withDefaults(defineProps<{ variant: ButtonProps["variant"] }>(), {
  variant: "default"
});
</script>

<template>
  <button :class="buttonVariants({ variant })">
    <slot />
  </button>
</template>
