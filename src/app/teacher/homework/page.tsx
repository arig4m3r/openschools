import HomeworksTable from "@/components/HomeworksTable";
import { Homework } from "@prisma/client";
import React from "react";

type Props = {};

async function getData(): Promise<Homework[]> {
  return [
    {
      id: "728ed52f",
      classroomId: "1",
      description: "Fazer o exercício 1 da página 10",
      dueDate: new Date(),
      title: "Exercício 1",
    },
  ];
}

export default async function page({}: Props) {
  const data = await getData();

  return (
    <div>
      <h1 className="text-center text-2xl py-4 font-semibold">Seus alunos</h1>
      <div className="flex justify-center">
        <div className="w-8/12">
          <HomeworksTable data={data} />
        </div>
      </div>
    </div>
  );
}
