import IUserDataJson from "../../types/IUserDataJson";

export default function ProfileInfo({ userData }: { userData: IUserDataJson | undefined }) {


    const { avatar_url, login, created_at, public_repos, followers, following, html_url } = userData ?? {}

    return (
        <>
            <img src={avatar_url} alt="profile image of user" />
            <ul>
                <li>
                    <p>Name: {login}</p>
                </li>
                <li>
                    <p>On GitHub since: {created_at?.slice(0, 10).replaceAll("-", "/")}</p>
                </li>
                <li>
                    <p>Number of repos: {public_repos}</p>
                </li>
                <li>
                    <p>Number of followers: {followers}</p>
                </li>
                <li>
                    <p>Following {following} other dev(s)</p>
                </li>
                <li>
                    <a href={html_url}>Visit profile</a>
                </li>
            </ul>
        </>
    )
}