import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  ClipboardList,
  Globe2,
  IdCard,
  LogOut,
  MapPin,
  Search,
  Stethoscope,
  UserPlus,
  UsersRound,
} from "lucide-react";
import type { ElementType } from "react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type OpcaoAgendamento = {
  titulo: string;
  descricao: string;
  icon: ElementType;
  badge: string;
};

type Beneficiario = {
  nome: string;
  carteira: string;
  plano: string;
};

const opcoesAgendamento: OpcaoAgendamento[] = [
  {
    titulo: "Agendamento local",
    descricao: "Atendimento presencial em uma unidade disponivel.",
    icon: MapPin,
    badge: "Presencial",
  },
  {
    titulo: "Agendamento",
    descricao: "Fluxo padrao para consultas e procedimentos.",
    icon: CalendarCheck2,
    badge: "Agenda",
  },
  {
    titulo: "Intercambio",
    descricao: "Atendimento para beneficiarios em intercambio.",
    icon: Globe2,
    badge: "Rede",
  },
];

const atalhosCadastro = [
  {
    titulo: "Cadastrar atendente",
    descricao: "Inclua um novo atendente autorizado para operar agendas.",
    icon: UserPlus,
  },
  {
    titulo: "Cadastrar especialidade",
    descricao: "Crie uma especialidade para organizar as agendas.",
    icon: Stethoscope,
  },
  {
    titulo: "Listar especialidade",
    descricao: "Consulte e acompanhe as especialidades cadastradas.",
    icon: ClipboardList,
  },
];

const beneficiarios: Beneficiario[] = [
  {
    nome: "Ana Carolina Farias",
    carteira: "0001 2345 6789 001",
    plano: "Unimed Pleno",
  },
  {
    nome: "Eduardo Emmanuel Silva",
    carteira: "0001 2345 6789 002",
    plano: "Unimed Personal",
  },
  {
    nome: "Mariana Costa Lima",
    carteira: "0001 2345 6789 003",
    plano: "Unimed Empresarial",
  },
  {
    nome: "Paulo Roberto Martins",
    carteira: "0001 2345 6789 004",
    plano: "Unimed Nacional",
  },
];

export default function OpcaoAgendamentoPage() {
  const navigate = useNavigate();
  const [opcaoSelecionada, setOpcaoSelecionada] =
    useState<OpcaoAgendamento | null>(null);
  const [carteira, setCarteira] = useState("");
  const [pesquisa, setPesquisa] = useState("");

  const beneficiariosFiltrados = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    if (!termo) {
      return beneficiarios;
    }

    return beneficiarios.filter((beneficiario) =>
      beneficiario.nome.toLowerCase().includes(termo),
    );
  }, [pesquisa]);

  const abrirSelecao = (opcao: OpcaoAgendamento) => {
    setOpcaoSelecionada(opcao);
    setCarteira("");
    setPesquisa("");
  };

  const selecionarBeneficiario = (beneficiario: Beneficiario) => {
    setCarteira(beneficiario.carteira);
    setPesquisa(beneficiario.nome);
  };

  const sair = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("carteiraSelecionada");
    navigate("/login", { replace: true });
  };

  const continuarAgendamento = () => {
    if (!carteira.trim()) {
      return;
    }

    localStorage.setItem("carteiraSelecionada", carteira.trim());
    navigate("/home/listar-agendamento", { replace: true });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f3faf7] text-[#024e4a]">
      <main className="w-full flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <section className="rounded-2xl border border-[#d7ebe3] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge className="bg-[#e5f3ed] text-[#087f51] hover:bg-[#d7ebe3]">
                Central de atendimento
              </Badge>
              <h1 className="mt-4 text-2xl font-semibold text-[#024e4a] sm:text-3xl">
                Escolha uma opcao de agendamento
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#557b75] sm:text-base">
                Selecione o tipo de atendimento para localizar o beneficiario e
                iniciar o fluxo com a carteira correta.
              </p>
            </div>
            <Button
              variant="outline"
              className="w-full gap-2 border-[#d7ebe3] text-[#024e4a] hover:bg-[#e5f3ed] md:w-auto"
              onClick={sair}
            >
              <LogOut className="size-4" />
              Sair
            </Button>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {opcoesAgendamento.map((opcao) => {
            const Icon = opcao.icon;

            return (
              <button
                key={opcao.titulo}
                type="button"
                className="group text-left"
                onClick={() => abrirSelecao(opcao)}
              >
                <Card className="h-full gap-4 rounded-2xl border-[#d7ebe3] bg-white py-5 transition hover:-translate-y-1 hover:border-[#00985d] hover:shadow-[0_20px_50px_rgba(2,78,74,0.14)]">
                  <CardHeader className="gap-4 px-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-[#e5f3ed] text-[#00985d] transition group-hover:bg-[#00985d] group-hover:text-white">
                        <Icon className="size-6" />
                      </div>
                      <Badge variant="outline" className="text-[#557b75]">
                        {opcao.badge}
                      </Badge>
                    </div>
                    <div>
                      <CardTitle className="text-xl text-[#024e4a]">
                        {opcao.titulo}
                      </CardTitle>
                      <CardDescription className="mt-2 leading-6">
                        {opcao.descricao}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between px-5 text-sm font-medium text-[#00985d]">
                    Selecionar
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </CardContent>
                </Card>
              </button>
            );
          })}
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {atalhosCadastro.map((atalho) => {
            const Icon = atalho.icon;

            return (
              <Card
                key={atalho.titulo}
                className="gap-3 rounded-2xl border-[#e1e8e5] bg-[#fbfefd] py-5 shadow-sm"
              >
                <CardHeader className="gap-3 px-5">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-white text-[#00985d] shadow-sm">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base text-[#024e4a]">
                      {atalho.titulo}
                    </CardTitle>
                    <CardDescription className="mt-2 leading-5">
                      {atalho.descricao}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="px-5">
                  <Button variant="outline" className="w-full justify-between">
                    Acessar
                    <ArrowRight className="size-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </section>
        </div>
      </main>

      <footer className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-6 text-center text-[12px] text-[#557b75] sm:px-6 md:flex md:items-center md:justify-between md:text-[14px] lg:px-8">
        <div className="flex items-center justify-center gap-8">
          <img
            src="https://www.unimedjp.com.br/imagens/logo-somoscoop.webp"
            alt="somoscoop"
            className="max-h-14 object-contain"
          />
          <div className="flex flex-col items-center gap-2">
            <img
              src="https://www.unimedjp.com.br/imagens/img_ans.png"
              alt="ans"
              className="max-h-8 object-contain"
            />
            <img
              src="https://www.unimedjp.com.br/imagens/btn_ans.png"
              alt="ans"
              className="max-h-8 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <span>Todos os direitos reservados a Unimed Joao Pessoa</span>
          <span>CNPJ: 08.680.639/0001-77</span>
          <span>
            Responsavel tecnico: Dr. Ricardo Wanderley Queiroga - CRM-PB 4149
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <span>Servico de Atendimento ao Cliente - SAC</span>
          <span className="text-3xl font-bold text-[#129353]">
            0800 725 1200
          </span>
        </div>
      </footer>

      <Dialog
        open={Boolean(opcaoSelecionada)}
        onOpenChange={(open) => {
          if (!open) {
            setOpcaoSelecionada(null);
          }
        }}
      >
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-[#024e4a]">
              {opcaoSelecionada?.titulo}
            </DialogTitle>
            <DialogDescription>
              Informe a carteira ou pesquise pelo nome para selecionar um
              beneficiario da lista.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-5">
            <Field>
              <FieldLabel htmlFor="carteira">Carteira</FieldLabel>
              <div className="relative">
                <IdCard className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-[#00985d]" />
                <Input
                  id="carteira"
                  className="h-11 pl-11"
                  value={carteira}
                  onChange={(event) => setCarteira(event.target.value)}
                  placeholder="Digite ou selecione uma carteira"
                />
              </div>
            </Field>

            <Field>
              <FieldLabel htmlFor="pesquisa">Pesquisar por nome</FieldLabel>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-[#00985d]" />
                <Input
                  id="pesquisa"
                  className="h-11 pl-11"
                  value={pesquisa}
                  onChange={(event) => setPesquisa(event.target.value)}
                  placeholder="Digite o nome do beneficiario"
                />
              </div>
            </Field>

            <div className="max-h-64 overflow-auto rounded-xl border border-[#d7ebe3]">
              {beneficiariosFiltrados.length ? (
                beneficiariosFiltrados.map((beneficiario) => (
                  <button
                    key={beneficiario.carteira}
                    type="button"
                    className="flex w-full items-center gap-3 border-b border-[#edf5f1] px-4 py-3 text-left transition last:border-b-0 hover:bg-[#f3faf7]"
                    onClick={() => selecionarBeneficiario(beneficiario)}
                  >
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#e5f3ed] text-[#00985d]">
                      <UsersRound className="size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium text-[#024e4a]">
                        {beneficiario.nome}
                      </p>
                      <p className="text-sm text-[#557b75]">
                        {beneficiario.plano} - {beneficiario.carteira}
                      </p>
                    </div>
                    {carteira === beneficiario.carteira ? (
                      <BadgeCheck className="size-5 text-[#00985d]" />
                    ) : null}
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-sm text-[#557b75]">
                  Nenhum beneficiario encontrado.
                </div>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpcaoSelecionada(null)}>
              Cancelar
            </Button>
            <Button disabled={!carteira.trim()} onClick={continuarAgendamento}>
              Continuar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
