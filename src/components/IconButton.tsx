import * as React from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { Ripple } from "./Ripple"

const iconButton = tv({
  base: "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background relative overflow-hidden",
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border",
      solid: "",
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      error: "",
      warning: "",
      info: "",
      success: "",
    },
    size: {
      small: "h-8 w-8",
      medium: "h-10 w-10",
      large: "h-12 w-12",
    },
  },
  compoundVariants: [
    // Default variant
    {
      variant: "default",
      color: "default",
      class: "hover:bg-grey-100 text-grey-800",
    },
    {
      variant: "default",
      color: "primary",
      class: "text-primary-500 hover:bg-primary-50",
    },
    {
      variant: "default",
      color: "secondary",
      class: "text-secondary-500 hover:bg-secondary-50",
    },
    {
      variant: "default",
      color: "error",
      class: "text-error-500 hover:bg-error-50",
    },
    {
      variant: "default",
      color: "warning",
      class: "text-warning-500 hover:bg-warning-50",
    },
    {
      variant: "default",
      color: "info",
      class: "text-info hover:bg-info/10",
    },
    {
      variant: "default",
      color: "success",
      class: "text-success-500 hover:bg-success-50",
    },
    // Outline variant
    {
      variant: "outline",
      color: "default",
      class: "border-grey-300 text-grey-800 hover:bg-grey-100",
    },
    {
      variant: "outline",
      color: "primary",
      class: "border-primary-500 text-primary-500 hover:bg-primary-50",
    },
    {
      variant: "outline",
      color: "secondary",
      class: "border-secondary-500 text-secondary-500 hover:bg-secondary-50",
    },
    {
      variant: "outline",
      color: "error",
      class: "border-error-500 text-error-500 hover:bg-error-50",
    },
    {
      variant: "outline",
      color: "warning",
      class: "border-warning-500 text-warning-500 hover:bg-warning-50",
    },
    {
      variant: "outline",
      color: "info",
      class: "border-info text-info hover:bg-info/10",
    },
    {
      variant: "outline",
      color: "success",
      class: "border-success-500 text-success-500 hover:bg-success-50",
    },
    // Solid variant
    {
      variant: "solid",
      color: "default",
      class: "bg-grey-300 text-grey-800 hover:bg-grey-400",
    },
    {
      variant: "solid",
      color: "primary",
      class: "bg-primary-500 text-white hover:bg-primary-600",
    },
    {
      variant: "solid",
      color: "secondary",
      class: "bg-secondary-500 text-white hover:bg-secondary-600",
    },
    {
      variant: "solid",
      color: "error",
      class: "bg-error-500 text-white hover:bg-error-600",
    },
    {
      variant: "solid",
      color: "warning",
      class: "bg-warning-500 text-black hover:bg-warning-600",
    },
    {
      variant: "solid",
      color: "info",
      class: "bg-info text-white hover:bg-info/90",
    },
    {
      variant: "solid",
      color: "success",
      class: "bg-success-500 text-white hover:bg-success-600",
    },
  ],
  defaultVariants: {
    variant: "default",
    color: "default",
    size: "medium",
  },
})

const iconSize = tv({
  base: "relative flex items-center justify-center",
  variants: {
    size: {
      small: "h-4 w-4",
      medium: "h-5 w-5",
      large: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButton> {
  icon: React.ReactNode
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, color, size, icon, ...props }, ref) => {
    const getRippleColor = () => {
      if (variant === "solid") {
        return "rgba(255, 255, 255, 0.3)"
      } else {
        return "rgba(0, 0, 0, 0.1)"
      }
    }

    return (
      <button className={iconButton({ variant, color, size, className })} ref={ref} {...props}>
        <span className="sr-only">{props["aria-label"] || "Icon button"}</span>
        <span className={iconSize({ size })}>{icon}</span>
        <Ripple color={getRippleColor()} />
      </button>
    )
  },
)

IconButton.displayName = "IconButton"

