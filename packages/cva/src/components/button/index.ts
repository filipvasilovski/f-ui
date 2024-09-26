import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import "../../styles/base.css";
import styles from "./style.module.css";

export const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: styles.default,
      destructive: styles.destructive
    }
  }
});

export type ButtonProps = VariantProps<typeof buttonVariants>;
