import { RingLoader } from "react-spinners";

const MainLoader = (props) => {
    const {isLoading} = props
  return (
      <RingLoader color="#ffffff" loading={isLoading} size={150} />
  );
};

export default MainLoader;