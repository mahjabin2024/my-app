import { useState } from "react";

function UserProfile() {
    const [user, setUser] = useState({
        name: "John Doe",
        age: 30,
        email: "johndoe@example.com",
        isActive: true
    });

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Status: {user.isActive ? "Active" : "Inactive"}</p>
        </div>
    );
}

export default UserProfile;
