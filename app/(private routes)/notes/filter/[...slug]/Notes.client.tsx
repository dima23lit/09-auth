'use client'

import css from "@/app/(private routes)/notes/filter/[...slug]/NotesPage.module.css"
import { fetchNotes } from "@/lib/api/api"
import { useQuery, keepPreviousData  } from '@tanstack/react-query'
import NoteList from "@/components/NoteList/NoteList"
import { useState } from "react"
import Pagination from "@/components/Pagination/Pagination"
import SearchBox from "@/components/SearchBox/SearchBox"
import { useDebouncedCallback } from 'use-debounce';
import Link from "next/link"

type Props = {
  tag: string;
};

export default function NotesPage({ tag }: Props) {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const debouncedSetSearchQuery = useDebouncedCallback((query: string) => {
        setSearchQuery(query);
        setCurrentPage(1)
    }, 300);

    const { data } = useQuery({
        queryKey: ['Note', { currentPage: currentPage, searchQuery: searchQuery , tag}],
        queryFn: () => fetchNotes(currentPage, 12, searchQuery, tag),
        placeholderData: keepPreviousData,
        refetchOnMount: false
    })

    const totalPages = data?.totalPages || 0;

    const notes = data?.notes ?? [];

    const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

    console.log(notes.length);
    console.log(notes)
    
    return (
        <div className={css.app}>
            <header className={css.toolbar}>
                <SearchBox text={searchQuery}  onSearch={debouncedSetSearchQuery} />
                {notes.length > 0  && <Pagination totalPages={totalPages} onPageChange={handlePageChange} forcePage={currentPage - 1}/>}
                <button className={css.button}><Link href='/notes/action/create' className={css.btnLink}>Create Note</Link></button>
            </header>
            {notes.length > 0 && <NoteList notes={notes} />}
        </div>
    )
}