interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-scroll rounded-l-3xl border-l border-t border-muted-foreground/20 pb-20">
      {children}
    </div>
  )
}
