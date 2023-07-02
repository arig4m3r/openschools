import dynamic from 'next/dynamic';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { TextEditor } from "./TextEditor";
import Link from "next/link";

export function NewHomeworkCard() {
  return (
    <Card className="m-4 md:mx-0 w-full max-w-[45rem]">
      <CardHeader>
        <CardTitle>Nova atividade</CardTitle>
        <CardDescription>Crie uma nova atividade para a turma.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Título</Label>
              <Input id="name" placeholder="Título da atividade" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Descrição</Label>
              <TextEditor />
              {/* <Textarea id="name" placeholder="Descrição da atividade" /> */}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Classe</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecionar" />
                  <SelectContent position="popper">
                    <SelectItem value="1">1° Ano</SelectItem>
                    <SelectItem value="2">2° Ano</SelectItem>
                    <SelectItem value="3">3° Ano</SelectItem>
                    <SelectItem value="4">4° Ano</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/teacher/homework"}>
          <Button variant="outline">Cancelar</Button>
        </Link>
        <Button>Postar</Button>
      </CardFooter>
    </Card>
  );
}
