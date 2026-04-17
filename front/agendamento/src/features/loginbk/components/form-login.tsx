import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Loader2, LockKeyhole, UserRound } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { autenticacaoService } from "../services/autenticacao.service";
import type { AutenticacaoType } from "../types/LoginType";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  const [formAutenticacao, setFormAutenticacao] = useState<AutenticacaoType>({
    login: "",
    senha: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");

  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginError("");
    setFormAutenticacao((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoginError("");

    try {
      const token = await autenticacaoService.login(formAutenticacao);

      if (!token) {
        setLoginError("Não foi possível validar suas credenciais.");
        return;
      }

      localStorage.setItem("token", token);
      await autenticacaoService.autenticacao();
      navigate("/home/listar-agendamento", { replace: true });
    } catch (error) {
      const status = (error as { response?: { status?: number } })?.response
        ?.status;

      if (status === 403 || status === 401) {
        setLoginError(
          "Usuário ou senha inválidos. Confira os dados e tente novamente.",
        );
        return;
      }

      setLoginError(
        "Não conseguimos conectar ao servidor agora. Tente novamente em instantes.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/70 bg-white/88 p-6 shadow-[0_30px_80px_rgba(2,78,74,0.18)] backdrop-blur-xl sm:p-8",
        className,
      )}
      {...props}
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#00985d]">
          Acesso restrito
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#024e4a]">
          Bem-vindo de volta
        </h2>
        <FieldDescription className="mt-3 text-[#557b75]">
          Entre com suas credenciais para continuar no painel de agendamentos.
        </FieldDescription>
      </div>

      <form className="relative z-20" onSubmit={handleSubmit}>
        <FieldGroup className="gap-5">
          <Field>
            <FieldLabel htmlFor="login" className="text-[#024e4a]">
              Usuário
            </FieldLabel>
            <div className="relative">
              <UserRound className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-[#00985d]" />
              <Input
                id="login"
                className="h-12 rounded-xl border-[#c5ddd4] bg-[#f8fcfa] pl-11 text-[#024e4a] shadow-none placeholder:text-[#8aaaa2] focus-visible:border-[#00985d] focus-visible:ring-[#00985d]/20"
                type="text"
                name="login"
                placeholder="Informe seu usuário"
                value={formAutenticacao.login}
                onChange={onchange}
                autoComplete="username"
                disabled={isSubmitting}
                required
              />
            </div>
          </Field>

          <Field>
            <FieldLabel htmlFor="senha" className="text-[#024e4a]">
              Senha
            </FieldLabel>
            <div className="relative">
              <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-[#00985d]" />
              <Input
                id="senha"
                className="h-12 rounded-xl border-[#c5ddd4] bg-[#f8fcfa] px-11 text-[#024e4a] shadow-none placeholder:text-[#8aaaa2] focus-visible:border-[#00985d] focus-visible:ring-[#00985d]/20"
                type={showPassword ? "text" : "password"}
                name="senha"
                placeholder="Informe sua senha"
                value={formAutenticacao.senha}
                onChange={onchange}
                autoComplete="current-password"
                disabled={isSubmitting}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-[#557b75] transition hover:bg-[#e5f3ed] hover:text-[#024e4a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00985d]/30"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                disabled={isSubmitting}
              >
                {showPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
          </Field>

          {loginError ? (
            <FieldError className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {loginError}
            </FieldError>
          ) : null}

          <div className="flex items-center justify-end">
            <a
              href="#"
              className="text-sm font-medium text-[#00985d] underline-offset-4 transition hover:text-[#024e4a] hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>

          <Button
            type="submit"
            className="h-12 w-full cursor-pointer rounded-xl bg-[#00985d] text-base font-semibold shadow-[0_14px_30px_rgba(0,152,93,0.28)] transition hover:bg-[#087f51] disabled:shadow-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Entrando...
              </>
            ) : (
              "Entrar"
            )}
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
}
