import css from '@/app/notes/filter/LayoutNotes.module.css'

export default function NotesLayout({
  children,
  sidebar
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return <div className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <div className={css.notesWrapper}>{children}</div>
    </div>
}