import { IRepoInfo } from "../../types/IUserDataJson";
import RepoCard from "../RepoCard/RepoCard";

export default function ReposList({ reposList }: { reposList: IRepoInfo[] | undefined }) {

    return (
        <ul>
            {reposList?.map((repo, index) => (
                <li key={index}>
                    <RepoCard repo={repo}/>
                </li>
            ))}
        </ul>
    )
}