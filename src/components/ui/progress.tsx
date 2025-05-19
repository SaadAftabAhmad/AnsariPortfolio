"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    animationDuration?: number
  }
>(({ className, value = 0, animationDuration = 3000, ...props }, ref) => {
  const [internalValue, setInternalValue] = React.useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setInternalValue(typeof value === "number" ? value : 0);
    }, 100);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-[5px] w-full overflow-hidden bg-gray-200",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full flex-1 bg-[#8e6ffa]"
        style={{
          transform: `translateX(-${100 - internalValue}%)`,
          transition: `transform ${animationDuration}ms ease-in-out`,
        }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }