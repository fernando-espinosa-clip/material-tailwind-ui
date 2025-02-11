import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { CircleX } from 'lucide-react';
import { Ripple } from './Ripple';

const chip = tv({
  base: 'inline-flex items-center justify-center rounded-full text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden',
  variants: {
    variant: {
      filled: '',
      outlined: 'border',
    },
    color: {
      default: '',
      primary: '',
      secondary: '',
      error: '',
      info: '',
      success: '',
      warning: '',
    },
    size: {
      small: 'h-6 px-2 text-xs',
      medium: 'h-8 px-3',
      large: 'h-10 px-4 text-base',
    },
    clickable: {
      true: 'cursor-pointer hover:opacity-90',
      false: '',
    },
  },
  compoundVariants: [
    // Filled variants
    {
      variant: 'filled',
      color: 'default',
      class: 'bg-grey-100 text-grey-800',
    },
    {
      variant: 'filled',
      color: 'primary',
      class: 'bg-primary-100 text-primary-800',
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: 'bg-secondary-100 text-secondary-800',
    },
    {
      variant: 'filled',
      color: 'error',
      class: 'bg-error-100 text-error-800',
    },
    {
      variant: 'filled',
      color: 'info',
      class: 'bg-info/10 text-info',
    },
    {
      variant: 'filled',
      color: 'success',
      class: 'bg-success-100 text-success-800',
    },
    {
      variant: 'filled',
      color: 'warning',
      class: 'bg-warning-100 text-warning-800',
    },
    // Outlined variants
    {
      variant: 'outlined',
      color: 'default',
      class: 'border-grey-300 text-grey-800',
    },
    {
      variant: 'outlined',
      color: 'primary',
      class: 'border-primary-300 text-primary-800',
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: 'border-secondary-300 text-secondary-800',
    },
    {
      variant: 'outlined',
      color: 'error',
      class: 'border-error-300 text-error-800',
    },
    {
      variant: 'outlined',
      color: 'info',
      class: 'border-info/30 text-info',
    },
    {
      variant: 'outlined',
      color: 'success',
      class: 'border-success-300 text-success-800',
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: 'border-warning-300 text-warning-800',
    },
    // Add focus styles for filled variants
    {
      variant: 'filled',
      class: 'focus:bg-opacity-80',
    },
    // Add focus styles for outlined variants
    {
      variant: 'outlined',
      class: 'focus:border-opacity-80',
    },
  ],
  defaultVariants: {
    variant: 'filled',
    color: 'default',
    size: 'medium',
    clickable: false,
  },
});

const deleteIconStyles = tv({
  base: 'ml-1 -mr-1 rounded-full hover:bg-black/10 transition-colors',
  variants: {
    size: {
      small: 'h-4 w-4 p-0.5',
      medium: 'h-5 w-5 p-0.5',
      large: 'h-6 w-6 p-1',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export interface ChipProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof chip> {
  label: React.ReactNode;
  icon?: React.ReactNode;
  deleteIcon?: React.ReactNode;
  onDelete?: (event: React.MouseEvent<HTMLDivElement>) => void;
  avatar?: React.ReactNode;
  disabled?: boolean;
  component?: React.ElementType;
  href?: string;
  clickable?: boolean;
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  size?: 'small' | 'medium' | 'large';
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      className,
      variant,
      color,
      size,
      clickable,
      label,
      icon,
      deleteIcon,
      onDelete,
      avatar,
      disabled = false,
      component: Component = 'div',
      onClick,
      ...props
    },
    ref
  ) => {
    // If the chip is clickable (has onClick) or deletable (has onDelete), make it clickable
    const isClickable = clickable || !!onClick || !!onDelete;

    const handleDelete = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      onDelete?.(event);
    };

    const DeleteIcon = deleteIcon || <CircleX />;

    return (
      <Component
        ref={ref}
        className={chip({
          variant,
          color,
          size,
          clickable: isClickable,
          className,
        })}
        onClick={!disabled ? onClick : undefined}
        role={isClickable ? 'button' : undefined}
        tabIndex={isClickable && !disabled ? 0 : undefined}
        disabled={disabled}
        {...props}
      >
        {avatar && <span className="mr-1 -ml-1.5 flex">{avatar}</span>}
        {icon && <span className="mr-1 -ml-1.5 flex">{icon}</span>}
        {label}
        {onDelete && !disabled && (
          <div
            className={deleteIconStyles({ size })}
            onClick={handleDelete}
            role="button"
            aria-label="Remove"
            tabIndex={-1}
          >
            {DeleteIcon}
          </div>
        )}
        {isClickable && !disabled && (
          <Ripple
            color={
              variant === 'filled'
                ? 'rgba(255, 255, 255, 0.3)'
                : 'rgba(0, 0, 0, 0.1)'
            }
          />
        )}
      </Component>
    );
  }
);

Chip.displayName = 'Chip';
