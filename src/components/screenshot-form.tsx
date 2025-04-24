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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать не менее 2 символов",
  }),
  phone: z.string().min(10, {
    message: "Введите корректный номер телефона",
  }),
  orderCount: z.string({
    required_error: "Выберите количество заказов",
  }),
  screenshot: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Скриншот обязателен")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Максимальный размер файла 5MB"
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Допустимые форматы: .jpg, .jpeg, .png и .webp"
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

  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Имитация отправки данных на сервер
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Скриншот отправлен!",
      description: "Ваш бонус будет начислен после проверки.",
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
                <Input placeholder="Иван Иванов" {...field} className="rounded-md" />
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
                <Input placeholder="+7 (900) 123-45-67" {...field} className="rounded-md" />
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
                  <SelectTrigger className="rounded-md elevation-1">
                    <SelectValue placeholder="Выберите количество заказов" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="30">30 заказов (бонус 500₽)</SelectItem>
                  <SelectItem value="60">60 заказов (бонус 1500₽)</SelectItem>
                  <SelectItem value="100">100 заказов (бонус 3000₽)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="screenshot"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>Скриншот из приложения</FormLabel>
              <FormControl>
                <div className="grid w-full gap-2">
                  <div 
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-border hover:bg-gray-50 transition-colors"
                    onClick={() => document.getElementById('screenshot-upload')?.click()}
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                      <p className="mb-1 text-sm text-gray-600">
                        <span className="font-semibold">Нажмите для загрузки</span> или перетащите файл
                      </p>
                      <p className="text-xs text-gray-500">SVG, PNG, JPG (MAX. 5MB)</p>
                    </div>
                    <input 
                      id="screenshot-upload" 
                      type="file" 
                      accept=".jpg,.jpeg,.png,.webp" 
                      className="hidden" 
                      onChange={(e) => {
                        handleFileChange(e.target.files);
                        onChange(e.target.files);
                      }} 
                      {...fieldProps} 
                    />
                  </div>
                  
                  {previewUrl && (
                    <div className="relative mt-2 material-card p-2">
                      <img 
                        src={previewUrl} 
                        alt="Предпросмотр скриншота" 
                        className="rounded max-h-40 mx-auto"
                      />
                      <button
                        type="button"
                        className="absolute top-2 right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center"
                        onClick={() => {
                          setPreviewUrl(null);
                          onChange(null);
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>
              </FormControl>
              <FormDescription>
                Загрузите скриншот из приложения курьера, показывающий количество выполненных заказов
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full md:w-auto material-button ripple"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправка..." : "Отправить скриншот"}
        </Button>
      </form>
    </Form>
  );
};

export default ScreenshotForm;
