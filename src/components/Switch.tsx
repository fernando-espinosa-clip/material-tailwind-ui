import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { useFormControl } from './FormControl';
import { useState } from 'react';

type TSwitch = {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size: 'small' | 'medium';
  color:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
};

const switchThumb = tv({
  base: 'cursor-[inherit] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] bg-current rounded-[50%] ',
  variants: {
    size: {
      small: 'w-4 h-4',
      medium: 'h-5 w-5',
    },
    color: {
      default: 'text-primary-500',
      primary: 'text-primary-500',
      secondary: 'text-secondary-500',
      error: 'text-error-500',
      success: 'text-success-500',
      info: 'text-info',
      warning: 'text-warning-500',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const switchWrapper = tv({
  base: [
    ' overflow-hidden box-border shrink-0 z-0 align-middle relative inline-flex',
    // 'transition-transform duration-200 ease-in-out absolute left-0 ',
  ],
  variants: {
    size: {
      small: 'w-10 h-6 p-2',
      medium: 'w-14 h-10 p-3',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const switchInputWrapper = tv({
  base: [
    'absolute z-[1] select-none align-middle inline-flex items-center justify-center bg-transparent box-border  cursor-pointer no-underline text-white m-0 rounded-[50%] border-0 left-0 top-0',
  ],
  variants: {
    size: {
      small: 'p-[4px]',
      medium: 'p-[9px]',
    },
    isChecked: {
      true: 'translate-x-[18px]',
      false: '',
    },
    color: {
      default: 'text-primary-500',
      primary: 'text-primary-500',
      secondary: 'text-secondary-500',
      error: 'text-error-500',
      success: 'text-success-500',
      info: 'text-info',
      warning: 'text-warning-500',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const switchInput = tv({
  base: [
    'cursor-[inherit] absolute opacity-0 w-full h-full z-[1] m-0 p-0 left-0 top-0',
    //'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 ',
  ],
});

const switchRipple = tv({
  base: [
    'overflow-hidden pointer-events-none absolute z-0 rounded-[inherit] inset-0',
    // 'transition-transform duration-200 ease-in-out',
    //'before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500',
    'before:absolute before:inset-0  before:text-back/40',
    //'border border-solid border-[red]',
    //'focus-visible:before:absolute focus-visible:before:inset-0 focus-visible:before:animate-focus-ripple focus-visible:before:bg-white/40',
  ],
  variants: {
    isFocused: {
      true: 'before:animate-focus-ripple-switch before:block before:absolute before:-inset-1 before:-skew-y-3 before:rounded-full before:bg-current',
      false:
        'before:block before:absolute before:-inset-1 before:-skew-y-3 before:rounded-full before:bg-transparent', //':before:absolute :before:inset-0 :before:animate-focus-ripple :before:bg-back/40',,
    },
  },
  defaultVariants: {
    isFocused: true,
  },
});
//&::before
const switchTrack = tv({
  base: [
    'h-full w-full z-[-1] bg-black/60 opacity-[0.38] rounded-lg ',
    'transition-transform duration-200 ease-in-out ',
  ],
  variants: {
    color: {
      default: '',
      primary: '',
      secondary: '',
      error: '',
      success: '',
      info: '',
      warning: '',
    },
    isChecked: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    color: 'default',
    isChecked: true,
  },
  compoundVariants: [
    {
      color: 'default',
      isChecked: true,
      className: 'bg-primary-500',
    },
    {
      color: 'primary',
      isChecked: true,
      className: 'bg-primary-500',
    },
    {
      color: 'secondary',
      isChecked: true,
      className: 'bg-secondary-500',
    },
    {
      color: 'error',
      isChecked: true,
      className: 'bg-error-500',
    },
    {
      color: 'success',
      isChecked: true,
      className: 'bg-success-500',
    },
    {
      color: 'info',
      isChecked: true,
      className: 'bg-info',
    },
    {
      color: 'warning',
      isChecked: true,
      className: 'bg-warning-500',
    },
  ],
});

export type SwitchProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type'
> &
  TSwitch;

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
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(event);
    };
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
    const isCheckedProp = controlled ? checked : isChecked;
    return (
      <span className={switchWrapper({ size })}>
        <span
          className={switchInputWrapper({
            size,
            isChecked: isCheckedProp,
            color,
          })}
          data-checked={isCheckedProp}
        >
          <input
            className={switchInput()}
            type="checkbox"
            ref={ref}
            checked={isCheckedProp}
            disabled={disabled}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            data-checked={isCheckedProp}
            {...props}
          />
          <span
            className={switchThumb({ size, color })}
            data-checked={isCheckedProp}
          />
          <span className={switchRipple({ isFocused })} />
        </span>
        <span
          className={switchTrack({ isChecked: isCheckedProp, color })}
          data-checked={isCheckedProp}
        />
      </span>
    );
  }
);

Switch.displayName = 'Switch';
