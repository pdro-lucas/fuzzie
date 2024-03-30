import { Infobar } from '@/components/infobar'
import { Sidebar } from '@/components/sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className="w-full">
        <Infobar />
        {children}
      </div>
    </div>
  )
}
