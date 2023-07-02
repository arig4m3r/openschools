import { NewHomeworkCard } from "@/components/NewHomeworkCard";
import { TextEditor } from "@/components/TextEditor";
import { Homework } from "@prisma/client";
import React from "react";

type Props = { params: { id: string } };

async function getData(id: string): Promise<Homework> {
  return {
    id: "728ed52f",
    classroomId: "1",
    description: "Fazer o exercício 1 da página 10",
    dueDate: new Date(),
    title: "Exercício 1",
  };
}

export default async function page({ params: { id } }: Props) {
  const data = await getData(id);
  return (
    <div className="flex justify-center w-screen">
      <NewHomeworkCard />
    </div>
  );
}
