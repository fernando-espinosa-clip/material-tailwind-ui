import * as React from "react"
import { forwardRef } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const label = tv({
  base: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
})

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof label> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => {
  return <label ref={ref} className={label({ className })} {...props} />
})

Label.displayName = "Label"

