import IUserDataJson from "../types/IUserDataJson"


export default async function fetchUserData(userName: string) {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}`)
        let data: IUserDataJson = await response.json()
        if (response.ok) {
            const reposResponse = await fetch(data.repos_url)
            data.repos_list = await reposResponse.json()
            data.repos_list = data.repos_list.map(repo => {
                return {
                    id: repo.id,
                    name: repo.name,
                    html_url: repo.html_url,
                    description: repo.description,
                    language: repo.language,
                    license: repo.license
                }
            })
            if (reposResponse.ok) {
                data = {
                    login: data.login,
                    avatar_url: data.avatar_url,
                    html_url: data.html_url,
                    repos_url: data.repos_url,
                    public_repos: data.public_repos,
                    followers: data.followers,
                    following: data.following,
                    created_at: data.created_at,

                    repos_list: data.repos_list
                }
                console.log(data);
                data.repos_list.forEach(repo => console.log(repo))
                return data
            }
        }
    } catch (error) {
        console.log(error)
    }
}