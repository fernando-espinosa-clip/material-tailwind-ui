import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Ripple } from './Ripple';

const toggleButton = tv({
  base: 'inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none ring-offset-background border-r last:border-r-0 relative overflow-hidden',
  variants: {
    variant: {
      default: '',
      outline: 'border border-input',
    },
    size: {
      sm: 'h-8 px-2.5 text-xs min-w-[32px]',
      default: 'h-10 px-3 min-w-[40px]',
      lg: 'h-12 px-5 text-base min-w-[48px]',
    },
    color: {
      default:
        'border-input hover:bg-accent/50 hover:text-accent-foreground/90',
      primary:
        'border-primary hover:bg-primary/90 hover:text-primary-foreground/90',
      secondary:
        'border-secondary hover:bg-secondary/90 hover:text-secondary-foreground/90',
      error: 'border-error hover:bg-error/90 hover:text-error-foreground/90',
      warning:
        'border-warning hover:bg-warning/90 hover:text-warning-foreground/90',
      info: 'border-info hover:bg-info/90 hover:text-info-foreground/90',
      success:
        'border-success hover:bg-success/90 hover:text-success-foreground/90',
    },
    selected: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      color: 'default',
      selected: true,
      class: 'bg-accent text-accent-foreground border-accent',
    },
    {
      color: 'primary',
      selected: true,
      class: 'bg-primary text-primary-foreground border-primary-border',
    },
    {
      color: 'secondary',
      selected: true,
      class: 'bg-secondary text-secondary-foreground border-secondary-border',
    },
    {
      color: 'error',
      selected: true,
      class: 'bg-error text-error-foreground border-error-border',
    },
    {
      color: 'warning',
      selected: true,
      class: 'bg-warning text-warning-foreground border-warning-border',
    },
    {
      color: 'info',
      selected: true,
      class: 'bg-info text-info-foreground border-info-border',
    },
    {
      color: 'success',
      selected: true,
      class: 'bg-success text-success-foreground border-success-border',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'default',
    color: 'default',
    selected: false,
  },
});

export interface ToggleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof toggleButton> {
  selected?: boolean;
  value: string | number;
}

export const ToggleButton = React.forwardRef<
  HTMLButtonElement,
  ToggleButtonProps
>(
  (
    { className, variant, size, color, selected, children, disabled, ...props },
    ref
  ) => {
    const getRippleColor = () => {
      if (selected) {
        return 'rgba(255, 255, 255, 0.5)';
      }
      switch (color) {
        case 'primary':
        case 'secondary':
        case 'error':
        case 'warning':
        case 'info':
        case 'success':
          return 'rgba(255, 255, 255, 0.3)';
        default:
          return 'rgba(0, 0, 0, 0.1)';
      }
    };

    return (
      <button
        className={toggleButton({ variant, size, color, selected, className })}
        ref={ref}
        type="button"
        aria-pressed={selected}
        disabled={disabled}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
          {children}
        </span>
        {!disabled && <Ripple color={getRippleColor()} />}
      </button>
    );
  }
);

ToggleButton.displayName = 'ToggleButton';
