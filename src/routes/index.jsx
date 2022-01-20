import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { Loading } from "../pages/Loading";
import { CreateChar } from "../pages/CreateChar";
import { CreateBuild } from "../pages/CreateBuild";
import { AnimatePresence } from "framer-motion";

const MyRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Loading />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/classes" element={<CreateChar />} />
        <Route exact path="/build" element={<CreateBuild />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MyRoutes;
