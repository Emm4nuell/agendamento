import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
import {
  IconAlertCircle,
  IconCalendarEvent,
  IconCircleCheckFilled,
  IconCircleXFilled,
  IconClock,
  IconUserX,
} from "@tabler/icons-react";

export const CaseStituacao = (situacao: string) => {
  switch (situacao) {
    case "Agendado":
      return (
        <Badge variant="outline" className="bg-yellow-500 text-white">
          <IconCalendarEvent />
          <span className="hidden md:table-cell">Agendado</span>
        </Badge>
      );
    case "Aguardando":
      return (
        <Badge
          variant="outline"
          className="Lgap-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
        >
          <Spinner className="animate-spin w-3 h-3" />
          <span className="hidden md:table-cell">Aguardando</span>
        </Badge>
      );
    case "Atendido":
      return (
        <Badge variant="outline">
          <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
          <span className="hidden md:table-cell">Atendido</span>
        </Badge>
      );
    case "Cancelado":
      return (
        <Badge variant="outline" className="text-red-500">
          <IconCircleXFilled className="fill-red-500 dark:fill-red-400" />
          <span className="hidden md:table-cell">Cancelado</span>
        </Badge>
      );
    case "Marcado":
      return (
        <Badge
          variant="outline"
          className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300"
        >
          <IconClock />
          <span className="hidden md:table-cell">Marcado</span>
        </Badge>
      );
    case "Não Compareceu":
      return (
        <Badge
          variant="outline"
          className="inline-flex items-center gap-1.5 bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300"
        >
          <IconUserX />
          <span className="hidden md:table-cell">Não Compareceu</span>
        </Badge>
      );
    case "Vencido":
      return (
        <Badge
          variant="outline"
          className="inline-flex items-center gap-1.5 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
        >
          <IconAlertCircle />
          <span className="hidden md:table-cell">Vencido</span>
        </Badge>
      );
    default:
      return <Badge variant="outline">{situacao}</Badge>;
  }
};
