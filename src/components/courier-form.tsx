import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bike, Car, Check, User } from 'lucide-react';
import CitySelect from './city-select';

// Схема валидации
const FormSchema = z.object({
  fullName: z.string().min(5, { message: 'Введите полное имя' }),
  phone: z.string().min(10, { message: 'Введите корректный номер телефона' }),
  email: z.string().email({ message: 'Введите корректный email' }),
  city: z.string().min(1, { message: 'Выберите город' }),
  transportType: z.enum(['foot', 'bike', 'car'], { required_error: 'Выберите тип транспорта' }),
  experience: z.string().optional(),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

const CourierForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      city: '',
      transportType: 'foot',
      experience: '',
      additionalInfo: '',
    },
  });
  
  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data);
    // Здесь будет отправка данных на сервер
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };
  
  // Функция для получения иконки транспорта
  const getTransportIcon = (type: string) => {
    switch (type) {
      case 'foot':
        return <User className="h-6 w-6" />;
      case 'bike':
        return <Bike className="h-6 w-6" />;
      case 'car':
        return <Car className="h-6 w-6" />;
      default:
        return null;
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6 bg-gray-50 rounded-lg max-w-md mx-auto animate-fade-in">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Заявка отправлена!</h3>
        <p className="text-gray-600 mb-6">
          Спасибо за интерес к работе курьером в Яндекс Еде! Мы свяжемся с вами в ближайшее время для уточнения деталей.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Отправить еще заявку
        </Button>
      </div>
    );
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ФИО <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Иванов Иван Иванович" {...field} className="bg-gray-50" />
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
                <FormLabel>Телефон <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="+7 (___) ___-__-__" {...field} className="bg-gray-50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.ru" {...field} className="bg-gray-50" />
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
                <FormLabel>Город <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <CitySelect onValueChange={field.onChange} value={field.value} />
                </FormControl>
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
              <FormLabel>Выберите тип транспорта <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-3 gap-4"
                >
                  <div>
                    <RadioGroupItem
                      value="foot"
                      id="foot"
                      className="peer sr-only"
                    />
                    <label
                      htmlFor="foot"
                      className="flex flex-col items-center justify-between rounded-lg border-2 border-gray-200 bg-gray-50 p-4 hover:border-primary hover:bg-primary/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                    >
                      <User className="h-6 w-6 mb-2" />
                      <div className="text-sm font-medium">Пешком</div>
                    </label>
                  </div>
                  
                  <div>
                    <RadioGroupItem
                      value="bike"
                      id="bike"
                      className="peer sr-only"
                    />
                    <label
                      htmlFor="bike"
                      className="flex flex-col items-center justify-between rounded-lg border-2 border-gray-200 bg-gray-50 p-4 hover:border-primary hover:bg-primary/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                    >
                      <Bike className="h-6 w-6 mb-2" />
                      <div className="text-sm font-medium">Велосипед</div>
                    </label>
                  </div>
                  
                  <div>
                    <RadioGroupItem
                      value="car"
                      id="car"
                      className="peer sr-only"
                    />
                    <label
                      htmlFor="car"
                      className="flex flex-col items-center justify-between rounded-lg border-2 border-gray-200 bg-gray-50 p-4 hover:border-primary hover:bg-primary/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                    >
                      <Car className="h-6 w-6 mb-2" />
                      <div className="text-sm font-medium">Автомобиль</div>
                    </label>
                  </div>
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
            <FormItem>
              <FormLabel>Опыт работы курьером</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-gray-50">
                    <SelectValue placeholder="Выберите ваш опыт" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="no">Нет опыта</SelectItem>
                  <SelectItem value="less-than-year">Менее 1 года</SelectItem>
                  <SelectItem value="1-3">1-3 года</SelectItem>
                  <SelectItem value="more-than-3">Более 3 лет</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="additionalInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Дополнительная информация</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Укажите дополнительную информацию, которая может быть полезна"
                  className="resize-none bg-gray-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="pt-4 flex justify-center">
          <Button type="submit" className="material-button ripple w-full md:w-auto px-8">
            Отправить заявку
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CourierForm;
