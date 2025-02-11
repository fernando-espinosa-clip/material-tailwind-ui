import * as React from 'react';
import { useState, forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Label } from './Label';
import { Input, type InputProps } from './Input';
import { HelperText, type HelperTextProps } from './HelperText';

const textField = tv({
  base: 'space-y-1',
  variants: {
    status: {
      default: '',
      success: '',
      error: '',
    },
  },
});

const inputWrapper = tv({
  base: 'relative',
  variants: {
    status: {
      default: '', // "focus-within:ring-1 focus-within:ring-primary focus-within:border-primary",
      success: '', // "focus-within:ring-1 focus-within:ring-success focus-within:border-success",
      error: '', // "focus-within:ring-1 focus-within:ring-error focus-within:border-error",
    },
  },
  defaultVariants: {
    status: 'default',
  },
});

const contentWrapper = tv({
  base: 'flex items-center rounded-md border border-input bg-transparent px-3',
  variants: {
    status: {
      default: '',
      success: 'border-success',
      error: 'border-error',
    },
  },
  defaultVariants: {
    status: 'default',
  },
});

const input = tv({
  base: 'w-full bg-transparent py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 border-0 pt-6',
  variants: {
    hasStartContent: {
      true: 'px-3',
      false: 'px-0',
    },
    hasEndContent: {
      true: '',
    },
  },
});

const labelStyles = tv({
  base: 'absolute transition-all duration-200',
  variants: {
    hasStartContent: {
      true: 'left-3',
      false: 'left-0',
    },
    floating: {
      true: 'top-2 text-xs text-primary',
      false: 'top-1/2 -translate-y-1/2 text-muted-foreground',
    },
    status: {
      default: 'text-text-primary',
      success: 'text-success',
      error: 'text-error',
    },
  },
  defaultVariants: {
    hasStartContent: false,
    floating: false,
    status: 'default',
  },
});

const contentStyles = tv({
  base: 'flex items-center',
});

export interface TextFieldProps
  extends InputProps,
    VariantProps<typeof textField> {
  label: string;
  helperText?: string;
  helperTextProps?: Omit<HelperTextProps, 'status'>;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      id,
      className = '',
      helperText,
      status = 'default',
      helperTextProps,
      startContent,
      endContent,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(event.target.value.length > 0);
      props.onChange?.(event);
    };

    return (
      <div className={textField({ status, className })}>
        <div data-testid={'test'} className={inputWrapper({ status })}>
          <div className={contentWrapper({ status })}>
            {startContent && (
              <div className={contentStyles()}>{startContent}</div>
            )}
            <div className="relative flex-grow test focus:outline-none">
              <Input
                id={id}
                className={input({
                  hasStartContent: !!startContent,
                  hasEndContent: !!endContent,
                })}
                ref={ref}
                aria-invalid={status === 'error'}
                aria-describedby={helperText ? `${id}-helper-text` : undefined}
                {...props}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Label
                htmlFor={id}
                className={labelStyles({
                  hasStartContent: !!startContent,
                  status: isFocused || hasValue ? status : 'default',
                  floating: isFocused || hasValue,
                })}
              >
                {label}
              </Label>
            </div>
            {endContent && <div className={contentStyles()}>{endContent}</div>}
          </div>
        </div>
        {helperText && (
          <HelperText
            id={`${id}-helper-text`}
            status={status}
            {...helperTextProps}
          >
            {helperText}
          </HelperText>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
