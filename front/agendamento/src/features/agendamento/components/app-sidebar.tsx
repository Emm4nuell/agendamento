"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Consultas",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Médico Referência",
          url: "consulta",
        },
        {
          title: "Especialidades Centro Médico Unimed (CMU)",
          url: "#",
        },
        {
          title: "Agendamento Ginecologia (CMU)",
          url: "#",
        },
        {
          title: "Clínica médica e pediatria - Acesso Avançado",
          url: "#",
        },
        {
          title: "Unidade Guarabira",
          url: "#",
        },
        {
          title: "Teleconsulta",
          url: "#",
        },
        {
          title: "Dia a Dia",
          url: "#",
        },
        {
          title: "Centro Médico Pediátrico - Bessa",
          url: "#",
        },
      ],
    },
    {
      title: "Exames",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genético",
          url: "#",
        },
        {
          title: "Citologia",
          url: "#",
        },
      ],
    },
    {
      title: "Terapia",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Fisioterapia",
          url: "#",
        },
        {
          title: "Psicologia",
          url: "#",
        },
      ],
    },
    {
      title: "Terapias Holísticas",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <img
          src="https://atuarios.org.br/wp-content/uploads/2024/10/Unimedjp.jpg"
          alt="Unimed"
          className="h-20"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <h1>Alguma mensagem</h1>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
