import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const typography = tv({
  base: 'text-text-primary scroll-m-20',
  variants: {
    variant: {
      h1: ' text-[clamp(2.5rem,1.125rem+3.5vw,3.5em)] font-semibold leading-[1.1142857143] tracking-[-0.2px]',
      h2: ' text-[clamp(1.5rem,0.9643rem+1.4286vw,2.25rem)] font-semibold leading-[1.2222222222] tracking-[-0.2px]',
      h3: ' text-[2.25rem] leading-[1.2222222222] tracking-[0.2px] font-normal',
      h4: ' text-[1.875rem] leading-[1.5] tracking-[0.2px] font-normal',
      h5: 'text-[1.5rem] leading-[1.5] tracking-[0.1px] font-normal',
      h6: 'text-[1.25rem] leading-[1.5]  font-medium',
      subtitle1:
        'text-[1.125rem] leading-[1.3333333333] tracking-[0px] font-medium ',
      subtitle2: 'text-[0.875rem] leading-[1.57]  font-medium',
      body1: 'text-base leading-[1.5] tracking-[0px]  font-normal',
      body2: 'text-[0.875rem] leading-[1.5] tracking-[0px]  font-normal',
      button:
        'text-[0.875rem] leading-[1.75] font-bold tracking-[0px]  normal-case',
      caption:
        'text-[0.75rem] leading-[1.5] tracking-[0px] font-bold  inline-block',
      inherit:
        'font-inherit font-inherit text-inherit leading-inherit tracking-inherit',
    },
    gutterBottom: {
      true: 'mb-[0.35em]',
    },
    paragraph: {
      true: 'mb-4',
    },
    noWrap: {
      true: 'truncate',
    },
  },
  defaultVariants: {
    variant: 'body1',
  },
});

const variantTagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  button: 'span',
  caption: 'span',
  inherit: 'span',
} as const;

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typography> {
  component?: keyof JSX.IntrinsicElements;
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      children,
      className,
      component,
      variant = 'body1',
      gutterBottom = false,
      paragraph = false,
      noWrap = false,
      ...props
    },
    ref
  ) => {
    const Component = (component ||
      (paragraph
        ? 'p'
        : variantTagMap[variant])) as keyof React.JSX.IntrinsicElements;

    return (
      <Component
        ref={ref}
        className={typography({
          variant,
          gutterBottom,
          paragraph,
          noWrap,
          className,
        })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';
