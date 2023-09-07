import { ReactNode } from 'react'

interface BoxInfoRootProps {
  children: ReactNode
}

interface BoxInfoTextProps {
  children: ReactNode
}

function BoxInfoRoot({ children }: BoxInfoRootProps) {
  return (
    <div className="mt-4 flex items-center flex-col justify-center py-3 px-4 max-h-24 w-full rounded-xl border-[1px] bg-purple-100 border-purple-300">
      {children}
    </div>
  )
}

function BoxInfoText({ children }: BoxInfoTextProps) {
  return (
    <span className="text-center text-gray-600 font-body text-sm leading-relaxed">
      {children}
    </span>
  )
}

export const BoxInfo = {
  Root: BoxInfoRoot,
  Text: BoxInfoText,
}
