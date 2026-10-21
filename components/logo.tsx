import { useId } from 'react'
import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  const id = useId()
  const fade = `${id}-fade`
  const wash = `${id}-wash`
  const ink = `${id}-ink`

  return (
    <svg viewBox="0 0 40 40" className={cn('size-10', className)} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={fade} x1="2" y1="32" x2="38" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--primary)" />
          <stop offset="0.45" stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--sky)" />
        </linearGradient>
        <linearGradient id={wash} x1="8" y1="8" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--sky)" />
          <stop offset="0.5" stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--primary)" />
        </linearGradient>
        <filter id={ink} x="-20%" y="-20%" width="140%" height="145%">
          <feGaussianBlur stdDeviation="0.18" />
        </filter>
      </defs>

      <g filter={`url(#${ink})`} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M4.4 31.2 C 6.8 11.6, 34.6 10.4, 36.4 27.2"
          stroke={`url(#${fade})`}
          strokeWidth="4.2"
          opacity="0.48"
        />
        <path
          d="M6.6 29.6 C 9.4 15.2, 31.8 14, 34.2 30.8"
          stroke={`url(#${wash})`}
          strokeWidth="3.6"
          opacity="0.7"
        />
        <path
          d="M9.2 27.2 C 12.2 17.4, 28.8 16.2, 31.4 26.4"
          stroke={`url(#${fade})`}
          strokeWidth="3.1"
          opacity="0.82"
        />
        <path
          d="M12.2 28.6 C 14.4 20.2, 25.8 18.8, 27.8 25.6"
          stroke={`url(#${wash})`}
          strokeWidth="2.6"
          opacity="0.92"
        />
        <path
          d="M15.2 25.2 C 16.8 21.2, 23.4 20.4, 24.6 24.8"
          stroke="var(--accent)"
          strokeWidth="2"
        />
      </g>

      <path
        d="M33.6 29.2 C 35.2 30.8, 34.2 34.4, 31.8 34 C 30 33.6, 30.2 31.4, 31.8 30.6 C 32.6 30.2, 33.1 29.6, 33.6 29.2 Z"
        fill="var(--accent)"
        opacity="0.78"
      />
      <circle cx="6.2" cy="31.4" r="0.85" fill="var(--primary)" opacity="0.55" />
    </svg>
  )
}

type LogoProps = {
  className?: string
  wordmarkClassName?: string
  accentClassName?: string
}

export function Logo({ className, wordmarkClassName, accentClassName }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <LogoMark />
      <span className={cn('font-heading text-xl font-extrabold tracking-tight', wordmarkClassName)}>
        Toner<span className={accentClassName}>Landia</span>
      </span>
    </span>
  )
}
