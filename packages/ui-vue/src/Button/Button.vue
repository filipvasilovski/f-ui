<script setup lang="ts">
import { buttonVariants, ButtonProps } from "@filipvasilovski/cva/src/main";

withDefaults(defineProps<{ variant: ButtonProps["variant"] }>(), {
  variant: "default"
});
</script>

<template>
  <button :class="buttonVariants({ variant })">
    <slot />
  </button>
</template>
