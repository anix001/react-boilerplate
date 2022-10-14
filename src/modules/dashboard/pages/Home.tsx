import { toast } from "react-toastify";
import { errorToast } from "../../common/toast";

const Home = () => {
  const showToast = () => {
    toast("error", errorToast);
  };

  return (
    <div>
      <p>home</p>
      <button onClick={showToast}>Show Toast</button>
    </div>
  );
};

export default Home;
