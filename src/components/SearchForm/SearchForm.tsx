import { useRef } from "react"
import style from "./SearchForm.module.scss"

interface Props {
    handleSubmit: (event: React.FormEvent,
        userNameRef: React.RefObject<HTMLInputElement>) => any
}

export default function SearchForm({ handleSubmit }: Props) {

    const userInputRef = useRef<HTMLInputElement>(null)

    return (
        <form onSubmit={event => handleSubmit(event, userInputRef)} className={style.form}>
            <input type="text" ref={userInputRef} />
            <button formAction="submit">Search</button>
        </form>
    )
}