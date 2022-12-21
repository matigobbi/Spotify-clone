/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
import { loader } from "../assets"

const Loader = ({ title }) => (
  <div className="w-full flex  justify-center items-center flex-col">
    <img src={loader} alt="loade" className="w-32 h-32 object-contain" />
    <h2 className="font-bold text-2xl text-white mt-2"> 
      {title || "Loading..."}
    </h2>
  </div>
);

export default Loader;
