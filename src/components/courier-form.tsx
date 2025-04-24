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
import { Bike, Car, CheckCircle, HelpCircle, Loader2, User, UserPlus } from "lucide-react";

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

  const getTransportIcon = (type: string) => {
    switch (type) {
      case 'foot':
        return <User className="h-5 w-5" />;
      case 'bicycle':
        return <Bike className="h-5 w-5" />;
      case 'car':
        return <Car className="h-5 w-5" />;
      case 'scooter':
        return <Bike className="h-5 w-5" rotate={20} />;
      default:
        return null;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="animate-fade-in" style={{animationDelay: '100ms'}}>
                <FormLabel>ФИО</FormLabel>
                <FormControl>
                  <Input placeholder="Иванов Иван Иванович" {...field} className="rounded-md elevation-1" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="animate-fade-in" style={{animationDelay: '200ms'}}>
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <Input placeholder="+7 (900) 123-45-67" {...field} className="rounded-md elevation-1" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="animate-fade-in" style={{animationDelay: '300ms'}}>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.ru" {...field} className="rounded-md elevation-1" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="animate-fade-in" style={{animationDelay: '400ms'}}>
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
            <FormItem className="space-y-3 animate-fade-in" style={{animationDelay: '500ms'}}>
              <FormLabel>Тип транспорта</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-1 md:grid-cols-4 gap-3"
                >
                  {['foot', 'bicycle', 'scooter', 'car'].map((type) => (
                    <FormItem key={type} className="flex-1">
                      <FormControl>
                        <div className="transport-option">
                          <label 
                            htmlFor={`transport-${type}`} 
                            className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all duration-300 border-2 ${field.value === type ? 'border-primary bg-primary/5 elevation-2' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                          >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${field.value === type ? 'bg-primary/20 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                              {getTransportIcon(type)}
                            </div>
                            <RadioGroupItem value={type} id={`transport-${type}`} className="sr-only" />
                            <span className="font-medium">
                              {type === 'foot' && 'Пеший курьер'}
                              {type === 'bicycle' && 'Велокурьер'}
                              {type === 'scooter' && 'Самокат'}
                              {type === 'car' && 'Автомобиль'}
                            </span>
                          </label>
                        </div>
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4 bg-gray-50 p-4 rounded-lg animate-fade-in" style={{animationDelay: '600ms'}}>
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className={field.value ? "data-[state=checked]:bg-primary" : ""}
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
                    className={field.value ? "data-[state=checked]:bg-primary" : ""}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Я согласен с условиями сотрудничества
                  </FormLabel>
                  <FormDescription>
                    Я прочитал и согласен с условиями <a href="#" className="text-primary underline hover:text-primary/80 transition-colors">пользовательского соглашения</a>
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-center animate-fade-in" style={{animationDelay: '700ms'}}>
          <Button 
            type="submit" 
            className="material-button ripple w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                Отправка...
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-4 w-4" /> 
                Стать курьером
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CourierForm;
