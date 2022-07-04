import { IRepoInfo } from "../../types/IUserDataJson";

export default function RepoCard({ repo }: { repo: IRepoInfo }) {

    const { name, description, language, license, html_url} = repo

    return (
        <>
            <a href={html_url} target="blank">
                <ul>
                    <li>
                        {name}
                    </li>
                    <li>
                        {description}
                    </li>
                    <li>
                        {language}
                    </li>
                    <li>
                        {license ? license.name : "No license"}
                    </li>
                </ul>
            </a>
        </>
    )
}