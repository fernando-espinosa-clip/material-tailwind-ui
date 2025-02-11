import * as React from "react"
import { tv, type VariantProps } from "tailwind-variants"

const badge = tv({
    slots: {
        base: "relative inline-flex",
        badge: "flex items-center justify-center absolute min-w-[20px] h-5 px-1 text-[0.75rem] font-medium rounded-full",
    },
    variants: {
        color: {
            default: {
                badge: "bg-grey-500 text-white",
            },
            primary: {
                badge: "bg-primary-500 text-white",
            },
            secondary: {
                badge: "bg-secondary-500 text-white",
            },
            error: {
                badge: "bg-error-500 text-white",
            },
            info: {
                badge: "bg-info text-white",
            },
            success: {
                badge: "bg-success-500 text-white",
            },
            warning: {
                badge: "bg-warning-500 text-white",
            },
        },
        variant: {
            standard: {
                badge: "",
            },
            dot: {
                badge: "min-w-[8px] h-2 p-0 rounded-full",
            },
        },
        anchorOrigin: {
            "top-right": {
                badge: "",
            },
            "top-left": {
                badge: "",
            },
            "bottom-right": {
                badge: "",
            },
            "bottom-left": {
                badge: "",
            },
        },
        overlap: {
            rectangular: {
                badge: "",
            },
            circular: {
                badge: "",
            },
        },
        invisible: {
            true: {
                badge: "hidden",
            },
        },
        showZero: {
            false: {
                badge: "hidden",
            },
        },
        max: {
            true: {},
        },
    },
    defaultVariants: {
        color: "default",
        variant: "standard",
        anchorOrigin: "top-right",
        overlap: "rectangular",
        showZero: true,
    },
})

const badgeWithCompoundVariants = tv({
    ...badge,
    compoundVariants: [
        {
            overlap: "rectangular",
            anchorOrigin: "top-right",
            class: {
                badge: "translate-x-2/4 -translate-y-2/4 origin-[100%_0%] scale-100 top-0 right-0",
            },
        },
        {
            overlap: "rectangular",
            anchorOrigin: "top-left",
            class: {
                badge: "translate-x-2/4 -translate-y-2/4 origin-[0%_0%] scale-100 left-0 top-0",
            },
        },
        {
            overlap: "rectangular",
            anchorOrigin: "bottom-right",
            class: {
                badge: "translate-x-2/4 translate-y-2/4 origin-[100%_100%] scale-100 right-0 bottom-0",
            },
        },
        {
            overlap: "rectangular",
            anchorOrigin: "bottom-left",
            class: {
                badge: "translate-x-2/4 translate-y-2/4 origin-[0%_100%] scale-100 left-0 bottom-0",
            },
        },
        //- - - - - -
        {
            overlap: "circular",
            anchorOrigin: "top-right",
            class: {
                badge: "translate-x-2/4 -translate-y-2/4 origin-[100%_0%] scale-100 right-[14%] top-[14%];",
            },
        },
        {
            overlap: "circular",
            anchorOrigin: "top-left",
            class: {
                badge: "-translate-x-2/4 -translate-y-2/4 origin-[0%_0%] scale-100 left-[14%] top-[14%]",
            },
        },
        {
            overlap: "circular",
            anchorOrigin: "bottom-right",
            class: {
                badge: "translate-x-2/4 translate-y-2/4 origin-[100%_100%] scale-100 right-[14%] bottom-[14%]",
            },
        },
        {
            overlap: "circular",
            anchorOrigin: "bottom-left",
            class: {
                badge: "-translate-x-2/4 translate-y-2/4 origin-[0%_100%] scale-100 left-[14%] bottom-[14%]",
            },
        },
    ],
})

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badge> {
    badgeContent?: React.ReactNode
    children?: React.ReactNode
    max?: number
    showZero?: boolean
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    (
        {
            children,
            className,
            badgeContent,
            color,
            variant,
            anchorOrigin,
            overlap,
            invisible,
            max = 99,
            showZero = true,
            ...props
        },
        ref,
    ) => {
        const { base, badge } = badgeWithCompoundVariants({
            color,
            variant,
            anchorOrigin,
            overlap,
            invisible: invisible || (badgeContent === 0 && !showZero),
            showZero,
        })

        const displayValue = max && typeof badgeContent === "number" && badgeContent > max ? `${max}+` : badgeContent

        return (
            <span ref={ref} className={base({ className })} {...props}>
        {children}
                <span className={badge()}>{displayValue}</span>
      </span>
        )
    },
)

Badge.displayName = "Badge"

