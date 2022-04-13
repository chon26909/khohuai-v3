import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

//loading 
import LoadingPage from "./components/Loading/LoadingPage";

//layout 
import DefaultLayout from "./layouts/DefaultLayout";

//routes
import routes from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        
        <Routes>

          <Route element={<DefaultLayout />}>
            {routes.map((route, key) => {
              return (
                <Route
                  key={key}
                  path={route.path}
                  element={<route.element />}
                />
              );
            })}
          </Route>

        </Routes>

      </Suspense>
    </BrowserRouter>
  );
}

export default App;
