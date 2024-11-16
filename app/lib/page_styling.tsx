export function StyledPage({ children }: { children: React.ReactNode }) {
    return (
      <article className="py-6 prose dark:prose-invert">
        {children}
      </article>
    )
  }
  