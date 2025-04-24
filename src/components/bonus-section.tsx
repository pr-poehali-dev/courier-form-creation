import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ScreenshotForm from "./screenshot-form";
import { Award, Check, Star, TrendingUp } from "lucide-react";

const BonusSection = () => {
  return (
    <section className="py-16 px-6 transport-bg">
      <div className="container mx-auto max-w-6xl animate-fade-in">
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-primary/10 rounded-full mb-4">
            <Award className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Бонусная программа</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Выполняйте больше заказов и получайте дополнительные бонусы к своему заработку!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="material-card relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 w-24 h-24 bg-primary/10 rounded-full transition-all duration-300 group-hover:scale-150"></div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              Начальный уровень
            </h3>
            <div className="text-3xl font-bold text-primary mb-3">500 ₽</div>
            <p className="text-gray-600 mb-4">Бонус при выполнении 30 заказов за неделю</p>
            <div className="h-px w-full bg-gray-100 my-4"></div>
            <ul className="text-gray-700 mb-6 space-y-3">
              <li className="flex items-start">
                <div className="rounded-full bg-green-100 p-1 mr-3 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-green-600" />
                </div>
                <span>30 заказов в неделю</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-green-100 p-1 mr-3 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-green-600" />
                </div>
                <span>Бонус 500 ₽</span>
              </li>
            </ul>
          </div>

          <div className="material-card relative overflow-hidden group z-10 transform md:scale-105 md:shadow-xl">
            <div className="absolute -right-12 -top-12 w-24 h-24 bg-primary/20 rounded-full transition-all duration-300 group-hover:scale-150"></div>
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              ПОПУЛЯРНО
            </div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              Продвинутый уровень
            </h3>
            <div className="text-3xl font-bold text-primary mb-3">1 500 ₽</div>
            <p className="text-gray-600 mb-4">Бонус при выполнении 60 заказов за неделю</p>
            <div className="h-px w-full bg-gray-100 my-4"></div>
            <ul className="text-gray-700 mb-6 space-y-3">
              <li className="flex items-start">
                <div className="rounded-full bg-green-100 p-1 mr-3 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-green-600" />
                </div>
                <span>60 заказов в неделю</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-green-100 p-1 mr-3 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-green-600" />
                </div>
                <span>Бонус 1 500 ₽</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-green-100 p-1 mr-3 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-green-600" />
                </div>
                <span>Приоритет в получении заказов</span>
              </li>
            </ul>
          </div>

          <div className="material-card relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 w-24 h-24 bg-primary/10 rounded-full transition-all duration-300 group-hover:scale-150"></div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              Профессиональный уровень
            </h3>
            <div className="text-3xl font-bold text-primary mb-3">3 000 ₽</div>
            <p className="text-gray-600 mb-4">Бонус при выполнении 100 заказов за неделю</p>
            <div className="h-px w-full bg-gray-100 my-4"></div>
            <ul className="text-gray-700 mb-6 space-y-3">
              <li className="flex items-start">
                <div className="rounded-full bg-green-100 p-1 mr-3 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-green-600" />
                </div>
                <span>100 заказов в неделю</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-green-100 p-1 mr-3 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-green-600" />
                </div>
                <span>Бонус 3 000 ₽</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-green-100 p-1 mr-3 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-green-600" />
                </div>
                <span>Статус "Проверенный курьер"</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="p-5 elevation-2 bg-white rounded-xl max-w-2xl">
            <div className="flex items-start mb-4">
              <div className="p-2 rounded-full bg-primary/10 mr-4">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Как получить бонус?</h4>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Выполните необходимое количество заказов за неделю (30, 60 или 100)</li>
                  <li>Сделайте скриншот экрана с информацией о выполненных заказах</li>
                  <li>Загрузите скриншот через форму на нашем сайте</li>
                  <li>Получите бонус уже в следующем расчетном периоде!</li>
                </ol>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="material-button ripple pulse-animation w-full">
                  Отправить подтверждение выполненных заказов
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] rounded-lg elevation-3">
                <DialogHeader>
                  <DialogTitle>Получить бонус за выполненные заказы</DialogTitle>
                  <DialogDescription>
                    Загрузите скриншот из приложения с информацией о количестве выполненных заказов
                  </DialogDescription>
                </DialogHeader>
                <ScreenshotForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
