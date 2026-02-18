import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { AgendamentoType } from "../types/AgendamentoType";
// import { Field, FieldGroup } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

type TabelaProps = {
  agendamento: AgendamentoType;
  visibleChange: boolean;
  onVisibleChange?: (visible: boolean) => void;
};

export function CardDialog({
  agendamento,
  visibleChange,
  onVisibleChange,
}: TabelaProps) {
  return (
    <Dialog
      open={visibleChange}
      onOpenChange={(open: boolean) => onVisibleChange?.(open)}
    >
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Cancelar Agendamento</DialogTitle>
            <DialogDescription>
              Você tem certeza que deseja cancelar?
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="agendamento">O agendamento para o dia:</Label>
              <Input
                id="agendamento"
                name="agendamento"
                defaultValue={`${agendamento?.data} às ${agendamento?.hora}`}
                value={`${agendamento?.data} às ${agendamento?.hora}`}
                disabled
              />
            </Field>
            <Field>
              <Label htmlFor="motivo">Motivo do Cancelamento:</Label>
              <Textarea
                className="w-full max-h-20 resize-none overflow-y-auto"
                id="motivo"
                name="motivo"
                maxLength={100}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button type="submit" variant="outline">
              Sim
            </Button>
            <DialogClose asChild>
              <Button variant="destructive">Não</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
