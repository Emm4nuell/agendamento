/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
import { AlertOctagonIcon, ArrowUpRightIcon } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { agendamentoService } from "../services/agendamento.service";
import type { AgendamentoType } from "../types/AgendamentoType";
import type { PageableType } from "../types/PageableType";
import { CardDialog } from "./card-dialog";
import { CaseStituacao } from "./case-situacao";

export default function TabelaAgendamento() {
  const [agendamento, setAgendamento] =
    useState<PageableType<AgendamentoType>>();
  const [agendamentoCard, setAgendamentoCard] = useState<AgendamentoType>();
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleCard, setVisibleCard] = useState<boolean>(false);

  const getPage = async (page: number) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    agendamentoService
      .listar(page)
      .then((a) => setAgendamento(a))
      .catch((error) => console.error("Erro ao carregar agendamentos:", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const cancelarAgendamento = (agendamento: AgendamentoType) => {
    setVisibleCard(!visibleCard);
    if (agendamento) {
      setAgendamentoCard(agendamento);
    }
    console.log("teste de sistema");
  };

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await agendamentoService.listar();
        if (response) setAgendamento(response);
      } catch (error) {
        console.error("Erro ao carregar agendamentos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgendamentos();
  }, []);

  return (
    <div className="overflow-hidden rounded-md border h-full relative z-0">
      {visibleCard ? (
        <div className="absolute z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <CardDialog
            agendamento={agendamentoCard!}
            visibleChange={visibleCard}
            onVisibleChange={(a) => setVisibleCard(a)}
          />
        </div>
      ) : null}
      {loading ? (
        <div className="absolute inset-0 flex justify-center items-center z-50 bg-gray-500/10">
          <Spinner className="w-20 h-20 text-green-700" />
        </div>
      ) : null}

      <Table
        className={`text-[11px] lg:text-[11px] xl:text-[13px] transition-opacity duration-1000 ${loading ? "opacity-10" : "opacity-100"} `}
      >
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Beneficiario</TableHead>
            <TableHead className="text-center hidden md:table-cell">
              Tipo do Cliente
            </TableHead>
            <TableHead className="text-center">Data</TableHead>
            <TableHead className="text-center">Hora</TableHead>
            <TableHead className="text-center hidden md:table-cell">
              Profissional
            </TableHead>
            <TableHead className="text-center hidden md:table-cell">
              Especialidade
            </TableHead>
            <TableHead className="text-center hidden md:table-cell">
              Local
            </TableHead>
            <TableHead className="text-center">Situação</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {agendamento?.content.length ? (
            agendamento.content.map((a) => (
              <TableRow>
                <TableCell>{a.paciente.toUpperCase()}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {a.tipoBeneficiario.toUpperCase()}
                </TableCell>
                <TableCell className="text-center">
                  {a.data.toUpperCase()}
                </TableCell>
                <TableCell className="text-center">
                  {a.hora.toUpperCase()}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {a.profissional.toUpperCase()}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {a.especialidade.toUpperCase()}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {a.local.toUpperCase()}
                </TableCell>
                <TableCell className="text-center">
                  {CaseStituacao(a.situacao)}
                </TableCell>
                <TableCell className="text-center">
                  {!a.situacao.search("Agendado") ? (
                    <Badge
                      asChild
                      className="bg-red-500 hover:bg-red-400 text-white hover:text-white"
                    >
                      <a
                        href="#link"
                        onClick={() => cancelarAgendamento(a)}
                        className="text-white hover:text-white no-underline"
                      >
                        <ArrowUpRightIcon
                          className="hidden md:table-cell"
                          data-icon="inline-end"
                        />
                        <AlertOctagonIcon className="inline-block md:hidden" />
                        <span className="hidden md:table-cell">Cancelar</span>
                      </a>
                    </Badge>
                  ) : (
                    ""
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="h-24 text-center">No results.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination className="flex items-end justify-end p-6">
        <PaginationContent>
          <PaginationItem className="mr-5">
            <PaginationLink href="#">Anterior </PaginationLink>
          </PaginationItem>
          {agendamento?.number != 0 ? (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          ) : null}

          {Array.from({ length: agendamento?.totalPages ?? 0 }).map(
            (_, index) => (
              <PaginationItem key={index} className="cursor-pointer">
                <PaginationLink
                  onClick={(_) => {
                    getPage(index);
                  }}
                  isActive={agendamento?.number === index}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ),
          )}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">Próximo</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
