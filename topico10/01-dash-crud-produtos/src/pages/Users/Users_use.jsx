import { use, Suspense } from 'react'
import { axiosClient } from '../../utils/axios-client'


const UserDataRows = ({userFetch})=>{
    const users = use(userFetch);
    if(!users?.length>0) return <p>Erro ao carregar dados!</p>
    return users.map((user, k) =>
                            <tr key={k}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
}

const Users = () => {

    const usersData =  axiosClient.get('/users')
            .then(response => {
                const { data } = response.data;
                return data;
            });

    return (
        <div>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    <Suspense fallback={<tr><td colSpan={2}>Carregando...</td></tr>}>
                        <UserDataRows userFetch={usersData}/>
                    </Suspense>
                </tbody>
            </table>
        </div>
    )
}

export default Users
