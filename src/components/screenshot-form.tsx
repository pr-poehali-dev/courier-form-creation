import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать не менее 2 символов",
  }),
  phone: z.string().min(10, {
    message: "Введите корректный номер телефона",
  }),
  orderCount: z.string().min(1, {
    message: "Выберите количество заказов",
  }),
  screenshot: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Скриншот обязателен")
    .refine(
      (files) => files[0]?.size <= MAX_FILE_SIZE,
      "Максимальный размер файла 5MB"
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      "Только файлы форматов .jpg, .jpeg, .png и .webp"
    ),
});

type FormValues = z.infer<typeof formSchema>;

const ScreenshotForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      orderCount: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Имитация отправки данных на сервер
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Форма отправлена!",
      description: "Ваша заявка на получение бонуса принята.",
    });
    
    console.log(data);
    form.reset();
    setPreviewUrl(null);
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input placeholder="Иванов Иван" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Телефон</FormLabel>
              <FormControl>
                <Input placeholder="+7 (900) 123-45-67" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="orderCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Количество выполненных заказов</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите количество заказов" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="30">30 заказов (бонус 500₽)</SelectItem>
                  <SelectItem value="60">60 заказов (бонус 1500₽)</SelectItem>
                  <SelectItem value="100">100 заказов (бонус 3000₽)</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Выберите уровень для получения соответствующего бонуса
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="screenshot"
          render={({ field: { onChange, value, ...rest } }) => (
            <FormItem>
              <FormLabel>Загрузите скриншот</FormLabel>
              <FormControl>
                <div className="grid w-full gap-1.5">
                  <Input
                    id="screenshot"
                    type="file"
                    accept=".jpg,.jpeg,.png,.webp"
                    onChange={(e) => {
                      onChange(e.target.files);
                      handleFileChange(e);
                    }}
                    {...rest}
                  />
                  
                  {previewUrl && (
                    <div className="mt-2">
                      <p className="text-xs text-gray-500 mb-1">Предпросмотр:</p>
                      <img 
                        src={previewUrl} 
                        alt="Предпросмотр" 
                        className="max-h-40 rounded-md border" 
                      />
                    </div>
                  )}
                </div>
              </FormControl>
              <FormDescription>
                Сделайте скриншот экрана со статистикой заказов из приложения
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправка..." : "Отправить заявку"}
        </Button>
      </form>
    </Form>
  );
};

export default ScreenshotForm;
