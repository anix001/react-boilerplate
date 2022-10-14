// import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { RoleLayoutHandler } from "../hoc/RoleLayout.handler";

const PrivateRoute = () => {
  // const [loading, setLoading] = useState<Boolean>(true);

  return (
    <>
      {
        // loading ? <div className='grid place-items-center w-full' style={{height:'100vh'}}><Loader variant='dots'/> </div>:
        <Routes>
          <Route path="/*" element={<RoleLayoutHandler role={1} />} />
          <Route
            path="*"
            element={
              <p style={{ fontSize: "5rem", fontWeight: "bold" }}>
                Page Not Found
              </p>
            }
          />
        </Routes>
      }
    </>
  );
};

export default PrivateRoute;
