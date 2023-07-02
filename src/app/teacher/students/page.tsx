import StudentsTable from "@/components/StudentsTable";

import React from "react";

type Props = {};

export type Student = {
  id: string;
  name: string;
  email: string;
  note: number;
};

async function getData(): Promise<Student[]> {
  return [
    {
      id: "728ed52f",
      name: "Maria",
      email: "m@example.com",
      note: 6,
    },
  ];
}

export default async function Page({}: Props) {
  const data = await getData();

  return (
    <div>
      <h1 className="text-center text-2xl py-4 font-semibold">Seus alunos</h1>
      <div className="flex justify-center">
        <div className="w-8/12">
          <StudentsTable data={data} />
        </div>
      </div>
    </div>
  );
}
