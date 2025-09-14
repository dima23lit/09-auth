import css from "@/components/SearchBox/SearchBox.module.css"

interface SearchBoxProps {
  text: string;
  onSearch: (newSearchQuery: string) => void;
}

export default function SearchBox({ text, onSearch }: SearchBoxProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(event.target.value);
  };

    return (
        <input
            className={css.input}
            type="text"
            placeholder="Search notes"
            defaultValue={text}
            onChange={handleChange}
        />
    )
}