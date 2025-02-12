import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { useFormControl } from './FormControl';
import { Ripple } from './Ripple';

const switchRoot = tv({
  base: 'inline-flex items-center relative',
  variants: {
    size: {
      small: '',
      medium: '',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const switchBase = tv({
  base: [
    'appearance-none m-0 p-0 inline-flex items-center justify-center relative overflow-hidden',
    'rounded-full border-2 border-transparent transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer',
  ],
  variants: {
    size: {
      small: 'w-7 h-3',
      medium: 'w-9 h-3.5',
    },
    color: {
      default: ['bg-primary-500/50 hover:bg-primary/80 '],
      primary: [
        'bg-primary-500/50 hover:bg-primary-500/80',
        'data-[checked=true]:bg-primary-500/50 data-[checked=true]:hover:bg-primary-600',
      ],
      secondary: [
        'bg-secondary-500/50 hover:bg-secondary-500/80',
        'data-[checked=true]:bg-secondary-500/50 data-[checked=true]:hover:bg-secondary-600',
      ],
      error: [
        'bg-error-500/50 hover:bg-error-500/80',
        'data-[checked=true]:bg-error-500/50 data-[checked=true]:hover:bg-error-600',
      ],
      info: [
        'bg-info/50 hover:bg-info/80',
        'data-[checked=true]:bg-info/80 data-[checked=true]:hover:bg-info/90',
      ],
      success: [
        'bg-success-500/50 hover:bg-success-500/80',
        'data-[checked=true]:bg-success-500/50 data-[checked=true]:hover:bg-success-600',
      ],
      warning: [
        'bg-warning-500/50 hover:bg-warning-500/80',
        'data-[checked=true]:bg-warning-500/50 data-[checked=true]:hover:bg-warning-600',
      ],
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'primary',
  },
});

const switchThumb = tv({
  base: [
    'pointer-events-none block rounded-full bg-background shadow-switchShadow ring-0',
    'transition-transform duration-200 ease-in-out absolute left-0 ',
  ],
  variants: {
    size: {
      small: 'h-4 w-4 data-[checked=true]:translate-x-3',
      medium: 'h-5 w-5 data-[checked=true]:translate-x-4',
    },
    color: {
      default: 'bg-primary-500',
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
      error: 'bg-error-500',
      info: 'bg-info',
      success: 'bg-success-500',
      warning: 'bg-warning-500',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const ripple = tv({
  base: [
    'pointer-events-none block rounded-full bg-background shadow-switchShadow ring-0',
    'transition-transform duration-200 ease-in-out absolute -left-1 z-0 ',
  ],
  variants: {
    size: {
      small: 'h-6 w-6 data-[checked=true]:translate-x-3',
      medium: 'h-7 w-7 data-[checked=true]:translate-x-4',
    },
    color: {
      default: 'bg-primary-500/20',
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
      error: 'bg-error-500',
      info: 'bg-info',
      success: 'bg-success-500',
      warning: 'bg-warning-500',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
    VariantProps<typeof switchBase> {
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked?: boolean;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * The size of the component.
   */
  size?: 'small' | 'medium';
  /**
   * The color of the component.
   */
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      checked,
      defaultChecked,
      disabled: disabledProp,
      size,
      color = 'default',
      onChange,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked ?? false);
    const formControlContext = React.useContext(useFormControl);

    // Use the context if available, otherwise use the prop
    const disabled = formControlContext
      ? formControlContext.disabled
      : (disabledProp ?? false);
    const controlled = checked !== undefined;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!controlled) {
        setIsChecked(event.target.checked);
      }
      onChange?.(event);
    };

    return (
      <span className={switchRoot({ size, disabled, className })}>
        <input
          type="checkbox"
          className={switchBase({ size, color })}
          ref={ref}
          checked={controlled ? checked : isChecked}
          disabled={disabled}
          onChange={handleChange}
          data-checked={controlled ? checked : isChecked}
          {...props}
        />
        <span
          className={switchThumb({ size, color })}
          data-checked={controlled ? checked : isChecked}
        />
        <span
          className={ripple({ size, color })}
          data-checked={controlled ? checked : isChecked}
        />
      </span>
    );
  }
);

Switch.displayName = 'Switch';
