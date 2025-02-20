"use client";

import * as React from "react";
import { Code2 } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigation = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction to TypeScript",
        href: "/intro",
        description: "Learn what TypeScript is and why you should use it",
      },
      {
        title: "Installation",
        href: "/install",
        description: "Set up TypeScript in your project",
      },
      {
        title: "TypeScript Configuration",
        href: "/config",
        description: "Configure TypeScript for your needs",
        badge: "Essential",
      },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      {
        title: "Basic Types",
        href: "/types",
        description: "Understanding TypeScript's basic types",
        isActive: true,
      },
      {
        title: "Interfaces",
        href: "/interfaces",
        description: "Define complex type structures",
      },
      {
        title: "Functions",
        href: "/functions",
        description: "Type-safe function declarations",
      },
      {
        title: "Classes",
        href: "/classes",
        description: "Object-oriented programming with TypeScript",
      },
      {
        title: "Generics",
        href: "/generics",
        description: "Write reusable, type-safe code",
        badge: "Advanced",
      },
    ],
  },
];

function TypeScriptDocs({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem style={{ listStyleType: "none" }}>
              <SidebarMenuButton
                size="sm"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-500 text-white">
                  <Code2 className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">
                    Hitchhiker's Guide to TypeScript
                  </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          {navigation.map((section) => (
            <SidebarGroup key={section.title}>
              <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <Link href={item.href}>
                          <div className="flex flex-col gap-0.5">
                            <span>{item.title}</span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                          {item.badge && (
                            <Badge
                              variant={
                                item.badge === "Advanced"
                                  ? "destructive"
                                  : "default"
                              }
                              className="ml-auto"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarRail />
      </Sidebar>

      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}

export default TypeScriptDocs;
