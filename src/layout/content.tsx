import { FC, ReactNode } from 'react'


type ContentProps = {
  children: ReactNode
}
export const Content: FC<ContentProps> = ({ children }) => {

  return (
    <div className='min-h-dvh bg-default overflow-x-hidden'>
      <div className='backface-hidden transform-gpu'>
        {children}
      </div>
    </div>
  )
}


