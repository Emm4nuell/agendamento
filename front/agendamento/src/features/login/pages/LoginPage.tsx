import { LoginForm } from "../components/form-login";

export default function LoginPage() {
  return (
    <div
      className="relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.unimedjp.com.br/painel/uploads/institucional/841d1096ac20200203024025.jpg?t=2026021713')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  );
}
