import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { User } from 'lucide-react';

const avatar = tv({
  base: 'relative flex shrink-0 overflow-hidden',
  variants: {
    variant: {
      circular: 'rounded-full',
      rounded: 'rounded-md',
      square: 'rounded-none',
    },
    size: {
      small: 'h-8 w-8 text-xs',
      medium: 'h-10 w-10 text-sm',
      large: 'h-12 w-12 text-base',
    },
    color: {
      default: 'bg-grey-500 text-white',
      primary: 'bg-primary-500 text-white',
      secondary: 'bg-secondary-500 text-white',
      error: 'bg-error-500 text-white',
      info: 'bg-info text-white',
      success: 'bg-success-500 text-white',
      warning: 'bg-warning-500 text-white',
    },
  },
  defaultVariants: {
    variant: 'circular',
    size: 'medium',
    color: 'default',
  },
});

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof avatar> {
  src?: string;
  srcSet?: string;
  alt?: string;
  imgProps?: Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'srcSet' | 'alt'
  >;
  children?: React.ReactNode;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      variant,
      size,
      color,
      src,
      srcSet,
      alt,
      imgProps,
      children,
      ...props
    },
    ref
  ) => {
    const [hasError, setHasError] = React.useState(false);

    const handleError = (
      event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
      setHasError(true);
      imgProps?.onError?.(event);
    };

    return (
      <div
        ref={ref}
        className={avatar({ variant, size, color, className })}
        {...props}
      >
        {src && !hasError ? (
          <img
            src={src || '/placeholder.svg'}
            srcSet={srcSet}
            alt={alt}
            className="h-full w-full object-cover"
            {...imgProps}
            onError={handleError}
          />
        ) : children ? (
          <div className="flex h-full w-full items-center justify-center">
            {children}
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <User className="h-1/2 w-1/2" />
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
