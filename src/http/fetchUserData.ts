import IUserDataJson from "../types/IUserDataJson"


export default async function fetchUserData(userName: string) {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}`)
        let data: IUserDataJson = await response.json()

        if (response.ok) {
            const reposResponse = await fetch(data.repos_url)
            data.repos_list = await reposResponse.json()
            
            if (reposResponse.ok) {
                return data
            }
        }
    } catch (error) {
        console.log(error)
    }
}