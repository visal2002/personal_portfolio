import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { badgeVariants } from "./badge-variants";

import { cn } from "@/lib/utils"

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props} />
  );
}

export { Badge }
