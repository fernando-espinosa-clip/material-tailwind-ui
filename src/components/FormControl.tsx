import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const formControl = tv({
  base: 'inline-flex flex-col relative',
  variants: {
    disabled: {
      true: 'opacity-50 pointer-events-none',
    },
    error: {
      true: 'text-error [&_.form-label]:text-error [&_.form-helper]:text-error',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
    margin: {
      none: 'm-0',
      normal: 'mb-4',
      dense: 'mb-2',
    },
    size: {
      small: '[&_.form-input]:text-sm [&_.form-label]:text-sm',
      medium: '[&_.form-input]:text-base [&_.form-label]:text-base',
    },
    required: {
      true: "[&_.form-label]:after:content-['*'] [&_.form-label]:after:ml-1 [&_.form-label]:after:text-error",
    },
  },
  defaultVariants: {
    fullWidth: true,
    margin: 'normal',
    size: 'medium',
    required: false,
  },
});

export interface FormControlProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formControl> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled?: boolean;
  /**
   * If `true`, the label is displayed in an error state.
   */
  error?: boolean;
  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required?: boolean;
  /**
   * The size of the component.
   */
  size?: 'small' | 'medium';
  /**
   * The margin between the form controls
   */
  margin?: 'none' | 'normal' | 'dense';
}

export interface FormControlContextValue
  extends Required<
    Pick<FormControlProps, 'disabled' | 'error' | 'required' | 'size'>
  > {
  id: string;
}

export const FormControlContext = React.createContext<
  FormControlContextValue | undefined
>(undefined);

export const useFormControl = () => {
  const context = React.useContext(FormControlContext);
  if (context === undefined) {
    throw new Error('useFormControl must be used within a FormControl');
  }
  return context;
};

export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  (
    {
      children,
      className,
      disabled = false,
      error = false,
      fullWidth,
      required = false,
      size = 'medium',
      margin,
      ...props
    },
    ref
  ) => {
    const id = React.useId();

    const contextValue = React.useMemo(
      () => ({
        disabled,
        error,
        required,
        size,
        id,
      }),
      [disabled, error, required, size, id]
    );

    return (
      <FormControlContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={formControl({
            disabled,
            error,
            fullWidth,
            margin,
            size,
            required,
            className,
          })}
          {...props}
        >
          {children}
        </div>
      </FormControlContext.Provider>
    );
  }
);

FormControl.displayName = 'FormControl';
