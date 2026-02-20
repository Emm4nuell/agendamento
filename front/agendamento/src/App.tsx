import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AgendamentoPage from "./features/agendamento/pages/AgendamentoPage";
import LoginPage from "./features/login/pages/LoginPage";
import ListarAgendamento from "./features/agendamento/components/listar-agendamento";
import PrivateRoute from "./features/security/PrivateRouter";
import FormConsulta from "./features/agendamento/components/consulta";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="home" element={<AgendamentoPage />}>
            <Route
              index
              element={<Navigate to="listar-agendamento" replace />}
            />
            <Route path="listar-agendamento" element={<ListarAgendamento />} />
            <Route path="consulta" element={<FormConsulta />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
