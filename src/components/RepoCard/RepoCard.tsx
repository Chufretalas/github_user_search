import { IRepoInfo } from "../../types/IUserDataJson";
import style from "./RepoCard.module.scss"

export default function RepoCard({ repo }: { repo: IRepoInfo }) {

    const { id, name, description, language, license, html_url } = repo

    return (
        <li key={id} className={style.cardWrapper}>
            <a href={html_url} target="blank">
                <ul>
                    <li>
                        <b>Name:</b> {name ?? "No name"}
                    </li>
                    <li>
                        <b>Description:</b> {description}
                    </li>
                    <li>
                        <b>Main language:</b> {language}
                    </li>
                    <li>
                        <b>Licence type:</b> {license ? license.name : "No license"}
                    </li>
                </ul>
            </a>
        </li>
    )
}