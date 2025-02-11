import * as React from "react"
import { createContext, useContext } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const toggleButtonGroup = tv({
  base: "inline-flex border rounded-md overflow-hidden",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col [&>button]:border-r-0 [&>button]:border-b [&>button:last-child]:border-b-0",
    },
    size: {
      sm: "",
      default: "",
      lg: "",
    },
    color: {
      default: "border-input bg-white",
      primary: "border-primary-border",
      secondary: "border-secondary-border",
      error: "border-error-border",
      warning: "border-warning-border",
      info: "border-info-border",
      success: "border-success-border",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    size: "default",
    color: "default",
  },
})

interface ToggleButtonGroupContextType {
  value: string | string[]
  onChange: (value: string | string[]) => void
  exclusive: boolean
  size?: "sm" | "default" | "lg"
  color?: "default" | "primary" | "secondary" | "error" | "warning" | "info" | "success"
}

const ToggleButtonGroupContext = createContext<ToggleButtonGroupContextType | undefined>(undefined)

export interface ToggleButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toggleButtonGroup> {
  value: string | string[]
  onChange: (value: string | string[]) => void
  exclusive?: boolean
  children: React.ReactNode
}

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  className,
  orientation,
  value,
  onChange,
  exclusive = false,
  children,
  size = "default",
  color = "default",
  ...props
}) => {
  const handleChange = (buttonValue: string) => {
    if (exclusive) {
      onChange(buttonValue)
    } else {
      const newValue = Array.isArray(value) ? value : [value]
      const index = newValue.indexOf(buttonValue)
      if (index === -1) {
        onChange([...newValue, buttonValue])
      } else {
        onChange(newValue.filter((v) => v !== buttonValue))
      }
    }
  }

  return (
    <ToggleButtonGroupContext.Provider value={{ value, onChange: handleChange, exclusive, size, color }}>
      <div className={toggleButtonGroup({ orientation, size, color, className })} role="group" {...props}>
        {children}
      </div>
    </ToggleButtonGroupContext.Provider>
  )
}

export const useToggleButtonGroup = () => {
  const context = useContext(ToggleButtonGroupContext)
  if (!context) {
    throw new Error("ToggleButton must be used within a ToggleButtonGroup")
  }
  return context
}

// Modify the ToggleButton component to use the ToggleButtonGroup context
import { ToggleButton as BaseToggleButton, type ToggleButtonProps } from "./ToggleButton"

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  size: buttonSize,
  color: buttonColor,
  ...props
}) => {
  const { value: groupValue, onChange, exclusive, size: groupSize, color: groupColor } = useToggleButtonGroup()
  const isSelected = Array.isArray(groupValue) ? groupValue.includes(value.toString()) : groupValue === value.toString()

  return (
    <BaseToggleButton
      {...props}
      value={value}
      selected={isSelected}
      size={buttonSize || groupSize}
      color={buttonColor || groupColor}
      onClick={() => onChange(value.toString())}
    />
  )
}

