import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AgendamentoPage from "./features/agendamento/pages/AgendamentoPage";
import LoginPage from "./features/login/pages/LoginPage";
import PrivateRoute from "./features/security/PrivateRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route
          path="home"
          element={
            <PrivateRoute>
              <AgendamentoPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
