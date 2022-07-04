export default interface IUserDataJson {

    login: string,
    avatar_url: string,
    html_url: string,
    repos_url: string,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string,

    repos_list: IRepoInfo[]
}

export interface IRepoInfo {
    id: number,
    name: string,
    html_url: string,
    description: string,
    language: string,
    license: {name: string} | null,
}