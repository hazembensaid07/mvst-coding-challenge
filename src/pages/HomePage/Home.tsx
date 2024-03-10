import { FC } from "react";
import Navbar from "../../components/NavBar/NavBar";
import SearchUserForm from "../../components/SearchUserForm/SearchUserForm";

/**
 * The HomePage component serves as the welcome page for the application.
 * The component's layout includes a top navigation bar (Navbar component), followed by Search github user form (SearchUserForm component)
 * @returns {React.ReactElement} The TSX code for the HomePage component, integrating
 *          the Navbar and SearchUserForm components to create a cohesive user interface.
 */
const HomePage: FC = () => {
  return (
    <div>
      <Navbar />
      <SearchUserForm />
    </div>
  );
};

export default HomePage;
