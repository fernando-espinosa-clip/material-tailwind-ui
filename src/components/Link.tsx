import * as React from "react";
import { tv } from "tailwind-variants";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const linkClasses = tv({
  base: "text-blue-500 hover:underline",
  variants: {},
  defaultVariants: {}, // Puedes agregar variantes específicas si lo necesitas
});

const Link: React.FC<LinkProps> = ({ href, children, className, ...props }) => {
  const isExternal = /^(http|https):\/\//.test(href);

  return (
      <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={linkClasses({ className })}
          {...props}
      >
        {children}
      </a>
  );
};

export default Link;