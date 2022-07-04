import IUserDataJson from "../../types/IUserDataJson";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ReposList from "../ReposList/ReposList";

export default function ResultsWrapper({ userData }: { userData: IUserDataJson | undefined }) {

    return (
        <>
        <ProfileInfo userData={userData}  />
        <ReposList reposList={userData?.repos_list}/>
        </>
    )

}