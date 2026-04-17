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
    if (token) navigate("/opcao-agendamento", { replace: true });
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

      <section className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1440px] lg:grid-cols-[minmax(460px,0.9fr)_minmax(390px,0.7fr)] xl:grid-cols-[minmax(520px,0.92fr)_minmax(420px,0.68fr)]">
        <aside className="hidden min-h-screen items-center justify-end px-8 py-8 lg:flex xl:px-10 2xl:px-12">
          <div className="flex w-full max-w-[620px] flex-col gap-[clamp(1.25rem,3vh,2.25rem)]">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Agendamento"
                className="h-[clamp(3rem,4vw,3.75rem)] w-[clamp(3rem,4vw,3.75rem)] rounded-2xl bg-white/80 p-2 shadow-[0_18px_45px_rgba(2,78,74,0.14)]"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00985d] xl:text-sm">
                  Portal seguro
                </p>
                <h1 className="text-xl font-semibold text-[#024e4a] xl:text-2xl">
                  Agendamento
                </h1>
              </div>
            </div>

            <div className="max-w-[560px]">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#00985d] xl:text-sm">
                Gestão de atendimentos
              </p>
              <h2 className="max-w-[530px] text-[clamp(2rem,3.2vw,3.15rem)] font-semibold leading-[1.06] text-[#024e4a]">
                Acesse sua central de agenda com clareza e velocidade.
              </h2>
              <p className="mt-4 max-w-[490px] text-sm leading-6 text-[#3b6f68] xl:text-base xl:leading-7">
                Organize solicitações, acompanhe horários e mantenha a rotina de
                atendimento sob controle em um ambiente protegido.
              </p>
            </div>

            <div className="relative h-[clamp(180px,26vh,285px)] w-full max-w-[600px] overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/40 shadow-[0_24px_64px_rgba(2,78,74,0.16)] xl:rounded-[1.75rem]">
              <img
                src={header}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,78,74,0.02),rgba(2,78,74,0.24))]" />
            </div>
          </div>
        </aside>

        <div className="relative flex min-h-screen items-center justify-center px-5 py-6 sm:px-8 lg:justify-start lg:px-8 xl:px-10 2xl:px-12">
          <div className="w-full max-w-[min(440px,100%)]">
            <div className="mb-6 flex items-center justify-center gap-3 lg:hidden">
              <img
                src={logo}
                alt="Agendamento"
                className="h-12 w-12 rounded-2xl bg-white p-2 shadow-[0_14px_36px_rgba(2,78,74,0.16)] sm:h-14 sm:w-14"
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
