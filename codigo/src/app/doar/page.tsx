"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { useToast } from "~/hooks/use-toast";
import { api } from "~/trpc/react";

const formSchema = z.object({
  description: z.string().min(5, {
    message: "Descrição da doação deve ter pelo menos 5 caracteres.",
  }),
  images: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: "Verifique sua imagem",
    })
    .optional(),
  lat: z
    .string()
    .refine((value) => parseFloat(value) > 0 && parseFloat(value) < 90),
  lng: z
    .string()
    .refine((value) => parseFloat(value) > 0 && parseFloat(value) < 180),
});

export default function Donate() {
  const { mutateAsync } = api.donate.createDonate.useMutation();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutateAsync({
      description: values.description,
      lat: parseFloat(values.lat),
      lng: parseFloat(values.lng),
    })
      .then(() => {
        toast({
          title: "Criado com sucesso!",
          description: "doação criada com sucesso",
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Erro ao criar doação",
          description: "Não foi possível criar a doação",
          variant: "destructive",
        });
      });
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 p-4 align-middle">
      <h1 className="text-3xl [text-shadow:_0_2px_4px_0_rgba(251,188,5,0.5)]">
        Doar
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4 lg:w-[50%]"
        >
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Escreva uma descrição para sua doação"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lat"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Digite a latitude"
                    type="number"
                    {...field}
                    onChange={(ev) => {
                      const { value } = ev.target;
                      const lat = parseFloat(value);
                      if (lat < 0 || lat > 90) {
                        ev.target.value = Math.max(
                          Math.min(lat, 80),
                          0,
                        ).toString();
                      }
                      onChange(ev);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lng"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Digite a longitude"
                    type="number"
                    {...field}
                    onChange={(ev) => {
                      const { value } = ev.target;
                      const lat = parseFloat(value);
                      if (lat < 0 || lat > 180) {
                        ev.target.value = Math.max(
                          Math.min(lat, 180),
                          0,
                        ).toString();
                      }
                      onChange(ev);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="file"
                    multiple
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center align-middle">
            <Button type="submit" className="w-32 rounded-xl bg-[#348140]">
              Enviar Doação
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
