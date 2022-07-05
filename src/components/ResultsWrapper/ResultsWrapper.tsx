import IUserDataJson from "../../types/IUserDataJson";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ReposList from "../ReposList/ReposList";
import style from "./ResultsWrapper.module.scss"

export default function ResultsWrapper({ userData }: { userData: IUserDataJson | undefined }) {

    return (
        <div className={style.results}>
        <ProfileInfo userData={userData} />
        <ReposList reposList={userData?.repos_list}/>
        </div>
    )

}