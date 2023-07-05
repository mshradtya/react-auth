import { useNavigate, useLocation, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthProvider";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Home = () => {
  const { auth } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const role = auth.role;

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        const response = await axiosPrivate.get("/users", {
          signal: controller.signal,
        });
        // console.log(response.data);
        isMounted && setUsers(response.data.users);
      } catch (error) {
        console.log(error.message);
        navigate("/login", { state: location, replace: true });
      }
    };

    if (role === "SuperAdmin") {
      fetchUsers();
    }

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <section>
      {role === "SuperAdmin" ? (
        <>
          <div>hello admin {auth.username}</div>
          <ul>
            {users.map((user) => (
              <li key={user._id}>{user.username}</li>
            ))}
          </ul>
        </>
      ) : (
        <div>hello peasant {auth.username}</div>
      )}
    </section>
  );
};

export default Home;
