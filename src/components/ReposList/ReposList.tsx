import { IRepoInfo } from "../../types/IUserDataJson";
import RepoCard from "../RepoCard/RepoCard";
import style from "./ReposList.module.scss"

export default function ReposList({ reposList }: { reposList: IRepoInfo[] | undefined }) {

    return (
        <div className={style.reposWrapper}>
            <h2>Public repos:</h2>
            <br />
            <ul className={style.listWrapper}>
                {reposList?.length !== 0
                    ? <>

                        {reposList?.map((repo) => (
                            <RepoCard repo={repo} />
                        ))}
                    </>
                    : <span className={style.noRepos}>No public repos found :(</span>}
            </ul>
        </div>
    )
}