"use client";

import * as React from "react";
import { Code2 } from "lucide-react";
import Link from "next/link";
import Header from "./Header";
import Intro from "./intro/page";
import Home from "./generics/page";
import Installation from "./install/page"; // Add import for Installation page
import Configuration from "./config/page"; // Add import for Configuration page
import BasicTypes from "./types/page"; // Add import for Basic Types page
import Interfaces from "./interfaces/page"; // Add import for Interfaces page
import Functions from "./functions/page"; // Add import for Functions page
import Classes from "./classes/page"; // Add import for Classes page

import { Badge } from "@/components/ui/badge";
import {
  Sidebar as UISidebar,
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
        href: "#intro",
        description: "Learn what TypeScript is and why you should use it",
      },
      {
        title: "Installation",
        href: "#install",
        description: "Set up TypeScript in your project",
      },
      {
        title: "TypeScript Configuration",
        href: "#config",
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
        href: "#types",
        description: "Understanding TypeScript's basic types",
        isActive: true,
      },
      {
        title: "Interfaces",
        href: "#interfaces",
        description: "Define complex type structures",
      },
      {
        title: "Functions",
        href: "#functions",
        description: "Type-safe function declarations",
      },
      {
        title: "Classes",
        href: "#classes",
        description: "Object-oriented programming with TypeScript",
      },
      {
        title: "Generics",
        href: "#generics",
        description: "Write reusable, type-safe code",
        badge: "Advanced",
      },
    ],
  },
];

export default function TypeScriptDocs({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentSection, setCurrentSection] = React.useState("");
  const [currentItem, setCurrentItem] = React.useState("");

  const handleLinkClick = (sectionTitle: string, itemTitle: string) => {
    setCurrentSection(sectionTitle);
    setCurrentItem(itemTitle);
  };

  const renderContent = () => {
    switch (currentItem) {
      case "Introduction to TypeScript":
        return <Intro />;
      case "Generics":
        return <Home />;
      case "Installation":
        return <Installation />;
      case "TypeScript Configuration":
        return <Configuration />;
      case "Basic Types":
        return <BasicTypes />;
      case "Interfaces":
        return <Interfaces />;
      case "Functions":
        return <Functions />;
      case "Classes":
        return <Classes />;
      default:
        return (
          <div>
            Select a topic from the sidebar to begin learning TypeScript.
          </div>
        );
    }
  };

  return (
    <div>
      <Header sectionTitle={currentSection} itemTitle={currentItem} />
      <div className="flex">
        <UISidebar>
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
                        <SidebarMenuButton
                          asChild
                          isActive={item.isActive}
                          onClick={() =>
                            handleLinkClick(section.title, item.title)
                          }
                        >
                          <Link href={item.href}>
                            <div className="flex flex-col gap-0.5">
                              <span>{item.title}</span>
                              <span className="text-xs text-muted-foreground">
                                {item.description}
                              </span>
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
                            </div>
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
        </UISidebar>

        <div className="flex-1 p-6">{renderContent()}</div>
      </div>
    </div>
  );
}
