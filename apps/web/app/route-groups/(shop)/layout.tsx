import { Boundary } from 'components/Boundary'
import ClickCounter from 'components/ClickCounter'
import React, { use } from 'react'
import CategoryNav from '../CategoryNav'
import { fetchCategories } from '@/lib/getCategories'

export default function Layout({ children }: { children: React.ReactNode }) {
  const categories = use(fetchCategories())
  return (
    <Boundary labels={['shop layout']} color="cyan" animateRerendering={false}>
      <div className="space-y-9">
        <div className="flex items-center justify-between">
          <CategoryNav categories={categories} />
          <ClickCounter />
        </div>

        <div>{children}</div>
      </div>
    </Boundary>
  )
}
