import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Ripple } from './Ripple';

const button = tv({
  base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none ring-offset-background relative overflow-hidden',
  variants: {
    variant: {
      text: 'bg-transparent',
      contained: '',
      outlined: 'border bg-transparent',
    },
    color: {
      default:
        'focus-visible:before:absolute focus-visible:before:inset-0 focus-visible:before:animate-focus-ripple  ',
      primary:
        'focus-visible:before:absolute focus-visible:before:inset-0 focus-visible:before:animate-focus-ripple  ',
      secondary:
        'focus-visible:before:absolute focus-visible:before:inset-0 focus-visible:before:animate-focus-ripple  ',
      error:
        'focus-visible:before:absolute focus-visible:before:inset-0 focus-visible:before:animate-focus-ripple  ',
      warning:
        'focus-visible:before:absolute focus-visible:before:inset-0 focus-visible:before:animate-focus-ripple  ',
      info: 'focus-visible:before:absolute focus-visible:before:inset-0 focus-visible:before:animate-focus-ripple  ',
      success:
        'focus-visible:before:absolute focus-visible:before:inset-0 focus-visible:before:animate-focus-ripple  ',
    },
    size: {
      small: 'h-8 px-3 text-xs',
      medium: 'h-10 px-4 py-2',
      large: 'h-12 px-6 text-lg',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  compoundVariants: [
    // Contained button colors
    {
      variant: 'contained',
      color: 'default',
      class:
        'bg-grey-300 text-grey-800 hover:bg-grey-400 disabled:bg-grey-200 focus-visible:before:bg-white/40',
    },
    {
      variant: 'contained',
      color: 'primary',
      class:
        'bg-primary-500 text-white hover:bg-primary-600 disabled:bg-primary-300 focus-visible:before:bg-white/40',
    },
    {
      variant: 'contained',
      color: 'secondary',
      class:
        'bg-secondary-500 text-white hover:bg-secondary-600 disabled:bg-secondary-300 focus-visible:before:bg-white/40',
    },
    {
      variant: 'contained',
      color: 'error',
      class:
        'bg-error-500 text-white hover:bg-error-600 disabled:bg-error-300 focus-visible:before:bg-white/40',
    },
    {
      variant: 'contained',
      color: 'warning',
      class:
        'bg-warning-500 text-white hover:bg-warning-600 disabled:bg-warning-300 focus-visible:before:bg-white/40',
    },
    {
      variant: 'contained',
      color: 'info',
      class:
        'bg-info text-white hover:bg-info/90 disabled:bg-info/50 focus-visible:before:bg-white/40',
    },
    {
      variant: 'contained',
      color: 'success',
      class:
        'bg-success-500 text-white hover:bg-success-600 disabled:bg-success-300 focus-visible:before:bg-white/40',
    },
    // Text button colors
    {
      variant: 'text',
      color: 'default',
      class:
        'text-grey-800 hover:bg-grey-100 disabled:text-grey-400 focus-visible:before:bg-gray/20',
    },
    {
      variant: 'text',
      color: 'primary',
      class:
        'text-primary-500 hover:bg-primary-50 disabled:text-primary-300 focus-visible:before:bg-primary/20',
    },
    {
      variant: 'text',
      color: 'secondary',
      class:
        'text-secondary-500 hover:bg-secondary-50 disabled:text-secondary-300 focus-visible:before:bg-secondary/20',
    },
    {
      variant: 'text',
      color: 'error',
      class:
        'text-error-500 hover:bg-error-50 disabled:text-error-300 focus-visible:before:bg-error/20',
    },
    {
      variant: 'text',
      color: 'warning',
      class:
        'text-warning-500 hover:bg-warning-50 disabled:text-warning-300 focus-visible:before:bg-warning/20',
    },
    {
      variant: 'text',
      color: 'info',
      class:
        'text-info hover:bg-info/10 disabled:text-info/50 focus-visible:before:bg-info/20',
    },
    {
      variant: 'text',
      color: 'success',
      class:
        'text-success-500 hover:bg-success-50 disabled:text-success-300 focus-visible:before:bg-success/20',
    },
    // Outlined button colors
    {
      variant: 'outlined',
      color: 'default',
      class:
        'border-grey-300 text-grey-800 hover:bg-grey-100 disabled:text-grey-400 disabled:border-grey-200 focus-visible:before:bg-gray/20',
    },
    {
      variant: 'outlined',
      color: 'primary',
      class:
        'border-primary-500 text-primary-500 hover:bg-primary-50 disabled:text-primary-300 disabled:border-primary-200 focus-visible:before:bg-primary/20',
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class:
        'border-secondary-500 text-secondary-500 hover:bg-secondary-50 disabled:text-secondary-300 disabled:border-secondary-200 focus-visible:before:bg-secondary/20',
    },
    {
      variant: 'outlined',
      color: 'error',
      class:
        'border-error-500 text-error-500 hover:bg-error-50 disabled:text-error-300 disabled:border-error-200 focus-visible:before:bg-error/20',
    },
    {
      variant: 'outlined',
      color: 'warning',
      class:
        'border-warning-500 text-warning-500 hover:bg-warning-50 disabled:text-warning-300 disabled:border-warning-200 focus-visible:before:bg-warning/20',
    },
    {
      variant: 'outlined',
      color: 'info',
      class:
        'border-info text-info hover:bg-info/10 disabled:text-info/50 disabled:border-info/30 focus-visible:before:bg-info/20',
    },
    {
      variant: 'outlined',
      color: 'success',
      class:
        'border-success-500 text-success-500 hover:bg-success-50 disabled:text-success-300 disabled:border-success-200 focus-visible:before:bg-success/20',
    },
    // Focus styles
    {
      variant: ['contained'],
      class: 'focus-visible:ring-offset-2 ',
    },
    {
      variant: ['text', 'outlined'],
      class: '',
    },
  ],
  defaultVariants: {
    variant: 'text',
    color: 'primary',
    size: 'medium',
    fullWidth: false,
  },
});

export interface ButtonProps<C extends React.ElementType>
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  component?: C;
}

type ButtonComponent = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof ButtonProps<C>>
) => React.ReactElement | null;

export const Button: ButtonComponent = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      className,
      variant,
      color,
      size,
      fullWidth,
      leftIcon,
      rightIcon,
      children,
      component,
      ...props
    }: ButtonProps<C>,
    ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    let rippleColor = 'rgba(255, 255, 255, 0.7)';
    if (variant === 'outlined' || variant === 'text') {
      rippleColor = 'rgba(0, 0, 0, 0.1)';
    }

    const Comp = component || 'button';
    return (
      <Comp
        className={button({ variant, color, size, fullWidth, className })}
        ref={ref}
        {...props}
      >
        <span className="absolute inset-0 overflow-hidden rounded-[inherit] z-ripple">
          <Ripple color={rippleColor} />
        </span>
        <span className="relative flex items-center justify-center w-full h-full">
          {leftIcon && <span className="mr-2 flex-shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="ml-2 flex-shrink-0">{rightIcon}</span>}
        </span>
      </Comp>
    );
  }
);

Button.displayName = 'Button';
