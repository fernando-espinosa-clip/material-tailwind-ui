import * as React from "react"
import { forwardRef } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const helperText = tv({
  base: "text-sm mt-1",
  variants: {
    status: {
      default: "text-text-primary",
      success: "text-success",
      error: "text-error",
    },
  },
  defaultVariants: {
    status: "default",
  },
})

export interface HelperTextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof helperText> {}

export const HelperText = forwardRef<HTMLParagraphElement, HelperTextProps>(
  ({ className, status = "default", ...props }, ref) => {
    return <p ref={ref} className={helperText({ status, className })} {...props} />
  },
)

HelperText.displayName = "HelperText"

