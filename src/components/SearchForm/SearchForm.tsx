import { useRef } from "react"

interface Props {
    handleSubmit: (event: React.FormEvent,
        userNameRef: React.RefObject<HTMLInputElement>) => any
}

export default function SearchForm({ handleSubmit }: Props) {

    const userInputRef = useRef<HTMLInputElement>(null)

    return (
        <>
            <form onSubmit={event => handleSubmit(event, userInputRef)}>
                <input type="text" ref={userInputRef} />
                <button formAction="submit">Search</button>
            </form>
        </>
    )
}