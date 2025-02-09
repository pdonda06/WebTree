import { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!user) {
    return <div className="text-center text-gray-600 mt-10">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg flex">
        <img
          src={user.picture.large}
          alt="Profile"
          className="w-32 h-32 rounded border-2 border-black mr-6"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold">{`${user.name.first} ${user.name.last}`}</h2>
          <p className="text-gray-600">Gender: {user.gender}</p>
          <p className="text-gray-600">Phone: {user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;