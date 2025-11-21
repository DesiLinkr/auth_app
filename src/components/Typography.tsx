import React from "react"
interface TypographyProps {
    text :string
    className:string
}

export function TypographyH2({text,className}:TypographyProps) {
    return (
      <h2 className={`scroll-m-20  text-3xl font-semibold tracking-tight  `+ className}>
        {text}
      </h2>
    )
  }

  export function TypographyP({text,className}:TypographyProps) {
    return (
      <p className={"leading-7 [&:not(:first-child)] "+className}>
        {text}
      </p>
    )
  }

  export function TypographySmall({text,className}:TypographyProps) {
    return (
      <small className={`text-sm font-medium leading-none `+ className}>{text}</small>
    )
  }