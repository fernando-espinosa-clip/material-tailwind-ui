import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Label } from './Label';
import { useFormControl } from './FormControl';

const formControlLabel = tv({
  base: 'inline-flex items-center cursor-pointer select-none',
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50',
    },
    error: {
      true: 'text-error',
    },
    labelPlacement: {
      start: 'flex-row-reverse',
      end: 'flex-row',
      top: 'flex-col-reverse items-center',
      bottom: 'flex-col items-center',
    },
    required: {
      true: "[&_.form-label]:after:content-['*'] [&_.form-label]:after:ml-1 [&_.form-label]:after:text-error",
    },
  },
  defaultVariants: {
    labelPlacement: 'end',
  },
});

const labelSpacing = tv({
  base: '',
  variants: {
    labelPlacement: {
      start: 'mr-auto pl-2',
      end: 'ml-2',
      top: 'mb-2',
      bottom: 'mt-2',
    },
  },
  defaultVariants: {
    labelPlacement: 'end',
  },
});

export interface FormControlLabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'color'>,
    VariantProps<typeof formControlLabel> {
  /**
   * The form control component to be wrapped (checkbox, switch, etc.)
   */
  control: React.ReactElement;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * The text to be used in the label.
   */
  label: React.ReactNode;
  /**
   * The position of the label.
   */
  labelPlacement?: 'start' | 'end' | 'top' | 'bottom';
  /**
   * Pass a ref to the `input` element.
   */
  ref?: React.Ref<HTMLLabelElement>;
}

export const FormControlLabel = React.forwardRef<
  HTMLLabelElement,
  FormControlLabelProps
>(
  (
    {
      className,
      control,
      disabled: disabledProp,
      label,
      labelPlacement,
      required: requiredProp,
      ...props
    },
    ref
  ) => {
    // Get context from FormControl if available
    const formControl = React.useContext(useFormControl);

    // Determine disabled and required states from props or context
    const disabled = disabledProp ?? formControl?.disabled ?? false;
    const error = formControl?.error ?? false;
    const required = requiredProp ?? formControl?.required ?? false;

    // Clone the control element with disabled prop
    const controlElement = React.cloneElement(control, {
      disabled,
      'aria-describedby': props['aria-describedby'],
    });

    return (
      <label
        ref={ref}
        className={formControlLabel({
          disabled,
          error,
          required,
          labelPlacement,
          className,
        })}
        {...props}
      >
        {controlElement}
        <span className={labelSpacing({ labelPlacement })}>
          <Label className="form-label cursor-inherit">{label}</Label>
        </span>
      </label>
    );
  }
);

FormControlLabel.displayName = 'FormControlLabel';
