"use client";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EyeIcon, MoreHorizontal, Pen, Trash } from "lucide-react";
import { DataTable } from "./ui/DataTable";
import { Homework } from "@prisma/client";

type Props = { data: Homework[] };

export const columns: ColumnDef<Homework>[] = [
  {
    accessorKey: "title",
    header: "Nome",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem>
              <EyeIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              <span>Visualizar</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Pen className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              <span>Editar</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              <span>Remover</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function HomeworksTable({ data }: Props) {
  return <DataTable columns={columns} data={data} />;
}
