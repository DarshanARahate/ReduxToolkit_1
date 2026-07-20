import { useGetUsersQuery } from "../services/jsonApi";

function Users() {
    const { data, error, isLoading } = useGetUsersQuery();

    if (isLoading) return <h2>Loading Users...</h2>

    if (error) return <h2>Error Loading Users</h2>

    return (
        <div>
            <h2>Users</h2>
            {
                data.map((user) => (
                    <div key={user.id}>
                        <strong>{user.name}</strong>
                        <br />
                        {user.email}
                        <hr />
                    </div>
                ))
            }
        </div>
    );
}

export default Users;
