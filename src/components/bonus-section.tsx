import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ScreenshotForm from "./screenshot-form";

const BonusSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Бонусная программа</h2>
        <p className="text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Выполняйте больше заказов и получайте дополнительные бонусы к своему заработку!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 rounded-lg p-6 shadow-md border-t-4 border-yellow-400">
            <h3 className="text-xl font-semibold mb-4">Начальный уровень</h3>
            <div className="text-3xl font-bold text-yellow-500 mb-2">500 ₽</div>
            <p className="text-gray-600 mb-4">Бонус при выполнении 30 заказов за неделю</p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>30 заказов в неделю</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Бонус 500 ₽</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow-md border-t-4 border-yellow-500 transform md:scale-105">
            <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              ПОПУЛЯРНО
            </div>
            <h3 className="text-xl font-semibold mb-4">Продвинутый уровень</h3>
            <div className="text-3xl font-bold text-yellow-500 mb-2">1 500 ₽</div>
            <p className="text-gray-600 mb-4">Бонус при выполнении 60 заказов за неделю</p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>60 заказов в неделю</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Бонус 1 500 ₽</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Приоритет в получении заказов</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow-md border-t-4 border-yellow-600">
            <h3 className="text-xl font-semibold mb-4">Профессиональный уровень</h3>
            <div className="text-3xl font-bold text-yellow-500 mb-2">3 000 ₽</div>
            <p className="text-gray-600 mb-4">Бонус при выполнении 100 заказов за неделю</p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>100 заказов в неделю</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Бонус 3 000 ₽</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Статус "Проверенный курьер"</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-accent text-accent-foreground font-medium py-3 px-8 rounded-full text-lg transition-transform hover:scale-105">
                Отправить подтверждение выполненных заказов
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
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
    </section>
  );
};

export default BonusSection;
