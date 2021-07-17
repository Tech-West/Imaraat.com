import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-2xl mb-5">Home</h1>
      <Link className="p-3 border mb-3" to="/register">
        Register
      </Link>
      <Link className="p-3 border mb-3" to="/login">
        Login
      </Link>
    </div>
  );
};

export default Home;
