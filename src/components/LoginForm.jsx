import { useState } from "react";

function LoginForm() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(""); // Clear error when user types
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userAge = parseInt(formData.age, 10);

        if (!formData.name || !formData.email || !formData.age) {
            setError("All fields are required!");
            return;
        }

        if (isNaN(userAge) || userAge < 18) {
            setError("You must be at least 18 years old to log in.");
            return;
        }

        alert("Login Successful!");
        // Here you can add further logic (e.g., send data to backend)
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Login Form</h2>

            {error && <p className="text-red-500 mb-3">{error}</p>}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
