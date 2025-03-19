"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#1E1E1E] group-[.toaster]:text-white group-[.toaster]:border-[#303030] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[#B0B0B0]",
          actionButton:
            "group-[.toast]:bg-[#7E57C2] group-[.toast]:text-white font-medium",
          cancelButton:
            "group-[.toast]:bg-[#2D2D2D] group-[.toast]:text-[#B0B0B0] font-medium",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }