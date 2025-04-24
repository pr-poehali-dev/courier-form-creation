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
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CitySelect from "./city-select";

const formSchema = z.object({
  fullName: z.string().min(5, {
    message: "ФИО должно содержать не менее 5 символов",
  }),
  phone: z.string().min(10, {
    message: "Введите корректный номер телефона",
  }),
  email: z.string().email({
    message: "Введите корректный email",
  }),
  city: z.string().min(1, {
    message: "Пожалуйста, выберите город",
  }),
  transportType: z.enum(["foot", "bicycle", "car", "scooter"], {
    required_error: "Выберите тип транспорта",
  }),
  experience: z.boolean().default(false).optional(),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "Необходимо согласиться с условиями" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const CourierForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      city: "",
      transportType: "foot",
      experience: false,
      agreeTerms: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Имитация отправки данных на сервер
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    console.log(data);
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ФИО</FormLabel>
                <FormControl>
                  <Input placeholder="Иванов Иван Иванович" {...field} />
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.ru" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Город</FormLabel>
                <CitySelect value={field.value} onChange={field.onChange} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="transportType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Тип транспорта</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="foot" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Пеший курьер
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="bicycle" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Велокурьер
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="scooter" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Самокат
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="car" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Автомобиль
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  У меня есть опыт работы курьером
                </FormLabel>
                <FormDescription>
                  Отметьте, если вы уже работали курьером
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agreeTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Я согласен с условиями сотрудничества
                </FormLabel>
                <FormDescription>
                  Я прочитал и согласен с условиями <a href="#" className="text-primary underline">пользовательского соглашения</a>
                </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправка..." : "Стать курьером"}
        </Button>
      </form>
    </Form>
  );
};

export default CourierForm;
