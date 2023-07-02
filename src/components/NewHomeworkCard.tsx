"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TextEditor } from "./TextEditor";
import Link from "next/link";

const FormSchema = z.object({
  title: z.string({
    required_error: "O título é obrigatório.",
  }),
  description: z.string({
    required_error: "A descrição é obrigatória.",
  }),
  classroom: z.string({
    required_error: "A classe é obrigatória.",
  }),
});

export default function NewHomeworkCard() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    // console.log({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 flex justify-center"
      >
        <Card className="m-5 w-[80vw] max-w-[45rem]">
          <CardHeader>
            <CardTitle>Nova atividade</CardTitle>
            <CardDescription>
              Crie uma nova atividade para a turma.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título</FormLabel>
                    <FormControl>
                      <Input placeholder="Título da atividade" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <TextEditor
                        onChange={field.onChange}
                        value={field.value}
                      />
                      {/* <Input placeholder="Descrição da atividade" {...field} /> */}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Descrição</Label>
                <TextEditor />
              </div> */}
              <FormField
                control={form.control}
                name="classroom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Classe</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
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
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <CardFooter className="flex justify-between py-2 px-0">
              <Link href={"/teacher/homework"}>
                <Button variant="outline">Cancelar</Button>
              </Link>
              <Button type="submit">Postar</Button>
            </CardFooter>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
