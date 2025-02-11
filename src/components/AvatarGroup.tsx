import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Avatar, type AvatarProps } from './Avatar';

const avatarGroup = tv({
  base: 'flex items-center -space-x-2',
  variants: {
    spacing: {
      small: '-space-x-1',
      medium: '-space-x-2',
      large: '-space-x-3',
    },
  },
  defaultVariants: {
    spacing: 'medium',
  },
});

export interface AvatarGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarGroup> {
  max?: number;
  total?: number;
  variant?: AvatarProps['variant'];
  size?: AvatarProps['size'];
  children: React.ReactNode;
}

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    { className, spacing, max = 5, total, variant, size, children, ...props },
    ref
  ) => {
    const childrenArray = React.Children.toArray(children);
    const totalAvatars = total ?? childrenArray.length;
    const maxAvatars = Math.min(max, totalAvatars);
    const extraAvatars = totalAvatars - maxAvatars;

    return (
      <div ref={ref} className={avatarGroup({ spacing, className })} {...props}>
        {childrenArray.slice(0, maxAvatars).map((child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(
              child as React.ReactElement<AvatarProps>,
              {
                variant,
                size,
                key: index,
                className: 'ring-2 ring-background',
              }
            );
          }
          return child;
        })}
        {extraAvatars > 0 && (
          <Avatar
            variant={variant}
            size={size}
            className="ring-2 ring-background"
          >
            +{extraAvatars}
          </Avatar>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
