import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/globalComponents/footer/footer";
import Header from "./Components/globalComponents/header/Header";
import TaskList from "./Components/localComponents/toDo/taskList/taskList";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <Header />
          <TaskList />
          <Footer />
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        
      />
    </>
  );
}

export default App;
