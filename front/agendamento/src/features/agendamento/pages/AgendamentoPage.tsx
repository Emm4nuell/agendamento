import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Outlet } from "react-router-dom";

export default function AgendamentoPage() {
  return (
    <SidebarProvider className="z-0 relative">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        className="grayscale"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbPage>Eduardo Emmanuel Sil...</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex justify-center">
          <Outlet />
        </div>
        <footer className="grid gap-4 text-center text-[12px] p-6 md:flex md:items-center md:justify-between md:text-[14px]">
          <div className="flex gap-10">
            <img
              src="https://www.unimedjp.com.br/imagens/logo-somoscoop.webp"
              alt="somoscoop"
            />
            <div className="flex-col">
              <img
                src="https://www.unimedjp.com.br/imagens/img_ans.png"
                alt="img ans"
                className="mb-2"
              />
              <img
                src="https://www.unimedjp.com.br/imagens/btn_ans.png"
                alt="ans"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <span>Todos os direitos reservados à Unimed João Pessoa</span>
            <span>CNPJ: 08.680.639/0001-77</span>
            <span>
              Responsável técnico: Dr. Ricardo Wanderley Queiroga - CRM-PB 4149
            </span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <span>Serviço de Atendimento ao Cliente - SAC</span>
            <span className="text-3xl text-[#129353] font-bold">
              0800 725 1200
            </span>
          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}
