import React, { use } from 'react'
import { Boundary } from 'components/Boundary'
import ClickCounter from 'components/ClickCounter'
import HooksClient from 'components/HooksClient'
import CategoryNav from './CategoryNav'
// These are not yet implemented in Next.js v13 w/Turbopack
// import HooksServer from '@/ui/HooksServer';
import { fetchCategories } from '@/lib/getCategories'

export default function Layout({ children }: { children: React.ReactNode }) {
  const categories = use(fetchCategories())
  if (!categories)
    return null
  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <CategoryNav categories={categories} />
        <ClickCounter />
      </div>

      <Boundary labels={['Client Component Hooks']}>
        <HooksClient />
      </Boundary>
      {/* Not yet implemented with Next.js v13 with Turbopack */}
      {/* <Boundary labels={['Server Component Hooks']}>
        <HooksServer />
      </Boundary> */}
      <div>{children}</div>
    </div>
  )
}
