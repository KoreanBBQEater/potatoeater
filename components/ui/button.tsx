import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide",
  {
    variants: {
      variant: {
        locked: "bg-neutral-700 text-neutral-300 hover:bg-neutral-600 border-neutral-600 border-b-4 active:border-b-0",
        default: "bg-[#1E1E1E] text-neutral-300 border-neutral-700 border-2 border-b-4 active:border-b-2 hover:bg-neutral-800",
        primary: "bg-[#7E57C2] text-white hover:bg-[#7E57C2]/90 border-[#6A46B0] border-b-4 active:border-b-0",
        primaryOutline: "bg-[#1E1E1E] text-[#7E57C2] hover:bg-neutral-800 border-[#7E57C2] border-2",
        secondary: "bg-[#26A69A] text-white hover:bg-[#26A69A]/90 border-[#1E8E82] border-b-4 active:border-b-0",
        secondaryOutline: "bg-[#1E1E1E] text-[#26A69A] hover:bg-neutral-800 border-[#26A69A] border-2",
        danger: "bg-[#EF5350] text-white hover:bg-[#EF5350]/90 border-[#D32F2F] border-b-4 active:border-b-0",
        dangerOutline: "bg-[#1E1E1E] text-[#EF5350] hover:bg-neutral-800 border-[#EF5350] border-2",
        super: "bg-[#7B61FF] text-white hover:bg-[#7B61FF]/90 border-[#6A52E5] border-b-4 active:border-b-0",
        superOutline: "bg-[#1E1E1E] text-[#7B61FF] hover:bg-neutral-800 border-[#7B61FF] border-2",
        ghost: "bg-transparent text-neutral-300 border-transparent border-0 hover:bg-neutral-800",
        sidebar: "bg-transparent text-neutral-300 border-2 border-transparent hover:bg-neutral-800 transition-none",
        sidebarOutline: "bg-[#7E57C2]/15 text-[#7E57C2] border-[#7E57C2]/50 border-2 hover:bg-[#7E57C2]/20 transition-none"
      },
      size: {
        default: "h-11 px-4 py-2 has-[>svg]:px-3",
        sm: "h-9 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 px-6 has-[>svg]:px-4",
        icon: "size-9",
        rounded: "rounded-full"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }