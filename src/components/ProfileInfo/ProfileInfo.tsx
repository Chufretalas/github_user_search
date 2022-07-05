import IUserDataJson from "../../types/IUserDataJson";
import style from "./ProfileInfo.module.scss"

export default function ProfileInfo({ userData }: { userData: IUserDataJson | undefined }) {


    const { avatar_url, login, created_at, public_repos, followers, following, html_url } = userData ?? {}

    return (
        <div className={style.profileInfoWrapper}>
            <img src={avatar_url} alt="profile picture of user" />
            <ul className={style.infoText}>
                <li>
                    <p>Name:  {login}</p>
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
                    <p>Following {following} other dev{following! > 1 && <span>(s)</span>}</p>
                </li>
                <li>
                    <a href={html_url} target="blank">Visit profile</a>
                </li>
            </ul>
        </div>
    )
}