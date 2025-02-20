"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Code2, Search } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const versions = ["5.3.3", "5.2.2", "5.1.6", "4.9.5"];

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
  {
    title: "Advanced Topics",
    items: [
      {
        title: "Type Manipulation",
        href: "/type-manipulation",
        description: "Advanced type system features",
      },
      {
        title: "Decorators",
        href: "/decorators",
        description: "Annotate your classes and members",
      },
      {
        title: "Utility Types",
        href: "/utility-types",
        description: "Built-in type transformations",
      },
    ],
  },
];

function TypeScriptDocs({ children }: { children: React.ReactNode }) {
  const [selectedVersion, setSelectedVersion] = React.useState(versions[0]);

  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-500 text-white">
                      <Code2 className="size-4" />
                    </div>
                    <div className="flex flex-col gap-0.5 leading-none">
                      <span className="font-semibold">TypeScript</span>
                      <span className="text-xs">v{selectedVersion}</span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width]"
                  align="start"
                >
                  {versions.map((version) => (
                    <DropdownMenuItem
                      key={version}
                      onSelect={() => setSelectedVersion(version)}
                    >
                      v{version}
                      {version === selectedVersion && (
                        <Check className="ml-auto size-4" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
          <form>
            <SidebarGroup className="py-0">
              <SidebarGroupContent className="relative">
                <Label htmlFor="search" className="sr-only">
                  Search documentation
                </Label>
                <SidebarInput
                  id="search"
                  placeholder="Search documentation..."
                  className="pl-8"
                />
                <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none text-muted-foreground" />
              </SidebarGroupContent>
            </SidebarGroup>
          </form>
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
      <SidebarInset>
        <header className="sticky top-0 flex h-14 items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs">Core Concepts</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Basic Types</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex-1 p-6">{children}</div>
      </SidebarInset>
    </>
  );
}

export default TypeScriptDocs;
