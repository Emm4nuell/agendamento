import { useEffect } from "react";
import { LoginForm } from "../components/form-login";
import { useNavigate } from "react-router-dom";
import header from "@/assets/header.png";
import bg from "@/assets/background.png";
import logo from "@/assets/icon.png";

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/home/listar-agendamento", { replace: true });
  }, [navigate]);

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#eaf7f1] text-[#024e4a]">
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 w-full object-cover object-top opacity-15"
      />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.74)_45%,rgba(229,243,237,0.54)_100%)]" />

      <section className="relative z-10 grid min-h-screen w-full lg:grid-cols-[1.08fr_0.92fr]">
        <aside className="hidden min-h-screen flex-col justify-between px-10 py-9 lg:flex xl:px-16">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Agendamento"
              className="h-16 w-16 rounded-2xl bg-white/80 p-2 shadow-[0_18px_45px_rgba(2,78,74,0.14)]"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00985d]">
                Portal seguro
              </p>
              <h1 className="text-2xl font-semibold text-[#024e4a]">
                Agendamento
              </h1>
            </div>
          </div>

          <div className="max-w-[620px]">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#00985d]">
              Gestão de atendimentos
            </p>
            <h2 className="max-w-[560px] text-5xl font-semibold leading-[1.05] text-[#024e4a]">
              Acesse sua central de agenda com clareza e velocidade.
            </h2>
            <p className="mt-6 max-w-[520px] text-base leading-7 text-[#3b6f68]">
              Organize solicitações, acompanhe horários e mantenha a rotina de
              atendimento sob controle em um ambiente protegido.
            </p>
          </div>

          <div className="relative h-[34vh] min-h-[260px] max-w-[760px] overflow-hidden rounded-[2rem] border border-white/70 bg-white/40 shadow-[0_28px_80px_rgba(2,78,74,0.18)]">
            <img
              src={header}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,78,74,0.02),rgba(2,78,74,0.24))]" />
          </div>
        </aside>

        <div className="relative flex min-h-screen items-center justify-center px-5 py-8 sm:px-8 lg:px-10">
          <div className="w-full max-w-[440px]">
            <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
              <img
                src={logo}
                alt="Agendamento"
                className="h-14 w-14 rounded-2xl bg-white p-2 shadow-[0_14px_36px_rgba(2,78,74,0.16)]"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00985d]">
                  Portal seguro
                </p>
                <h1 className="text-xl font-semibold text-[#024e4a]">
                  Agendamento
                </h1>
              </div>
            </div>

            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}
