import { useState, useEffect } from "react";
import CourierForm from "@/components/courier-form";
import BonusSection from "@/components/bonus-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Bike, Car, Clock, DollarSign, HelpCircle, Menu, Package, Phone, ShieldCheck, X, User } from "lucide-react";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col transport-bg">
      {/* Шапка */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm elevation-2' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 18H5C3.89543 18 3 17.1046 3 16V8C3 6.89543 3.89543 6 5 6H19C20.1046 6 21 6.89543 21 8V16C21 17.1046 20.1046 18 19 18H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 18V12M12 12L15 15M12 12L9 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-primary">Яндекс Еда</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О работе</a>
            <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
            <a href="#bonuses" className="text-gray-700 hover:text-primary transition-colors">Бонусы</a>
            <a href="#application" className="text-gray-700 hover:text-primary transition-colors">Подать заявку</a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">Вопросы</a>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden material-button w-auto h-auto p-2 bg-transparent shadow-none text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 elevation-1 animate-slide-down">
            <nav className="flex flex-col space-y-3">
              <a onClick={() => setIsMobileMenuOpen(false)} href="#about" className="text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">О работе</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="#benefits" className="text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">Преимущества</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="#bonuses" className="text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">Бонусы</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="#application" className="text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">Подать заявку</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="#faq" className="text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">Вопросы</a>
            </nav>
          </div>
        )}
      </header>

      {/* Главная секция */}
      <main className="flex-grow">
        {/* Герой-секция */}
        <section className="relative overflow-hidden py-20 px-6">
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-primary">Доставляй</span> с нами. <br />
                  <span className="text-primary">Зарабатывай</span> с нами.
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
                  Стань курьером Яндекс Еды — работай свободно, получай бонусы и зарабатывай тогда, когда удобно тебе!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="#application"
                    className="material-button ripple"
                  >
                    Подать заявку
                  </a>
                  <a 
                    href="#about"
                    className="px-6 py-2 rounded-full bg-white border-2 border-primary/20 text-primary uppercase font-medium tracking-wide transition-all hover:bg-primary/5 hover:border-primary/30 ripple"
                  >
                    Узнать больше
                  </a>
                </div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '200ms'}}>
                <div className="relative mx-auto max-w-md lg:ml-auto">
                  <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-10">
                    <img src="/placeholder.svg" alt="Яндекс Еда курьер" className="rounded-lg w-full h-64 object-cover mb-4" />
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-center">
                        <div className="text-primary font-bold text-xl">30+</div>
                        <div className="text-gray-600 text-sm">городов</div>
                      </div>
                      <div className="p-3 bg-primary/10 rounded-lg text-center">
                        <div className="text-primary font-bold text-xl">5000+</div>
                        <div className="text-gray-600 text-sm">курьеров</div>
                      </div>
                      <div className="p-3 bg-primary/10 rounded-lg text-center">
                        <div className="text-primary font-bold text-xl">24/7</div>
                        <div className="text-gray-600 text-sm">поддержка</div>
                      </div>
                    </div>
                    <Button className="material-button ripple w-full">Присоединиться</Button>
                  </div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full"></div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* О работе */}
        <section id="about" className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Стань курьером Яндекс Еды</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Доставляй еду из ресторанов и продукты из магазинов. Работай когда хочешь и сколько хочешь.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 animate-fade-in" style={{animationDelay: '100ms'}}>
                <h3 className="text-xl font-bold mb-4">Кого мы ищем</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span>Граждан РФ и лиц с разрешением на работу</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span>Лиц старше 18 лет</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span>Порядочных и ответственных людей</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 animate-fade-in" style={{animationDelay: '200ms'}}>
                <h3 className="text-xl font-bold mb-4">Что необходимо для работы</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span>Смартфон на iOS или Android</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span>Паспорт гражданина РФ или разрешение на работу</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span>Средство передвижения (для соответствующего типа доставки)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section id="benefits" className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему курьеры выбирают нас</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Работа с Яндекс Едой - это не просто доставка, это удобное и выгодное сотрудничество
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="material-card animate-fade-in" style={{animationDelay: '100ms'}}>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Гибкий график</h3>
                <p className="text-gray-600">Работайте в любое удобное время. Вы сами планируете свой день и решаете, сколько часов хотите работать.</p>
              </div>
              
              <div className="material-card animate-fade-in" style={{animationDelay: '200ms'}}>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Стабильный доход</h3>
                <p className="text-gray-600">Еженедельные выплаты без задержек. Возможность зарабатывать больше благодаря бонусам за количество доставок.</p>
              </div>
              
              <div className="material-card animate-fade-in" style={{animationDelay: '300ms'}}>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Package className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Быстрое начало</h3>
                <p className="text-gray-600">Простая регистрация и оформление. Начните зарабатывать уже через несколько дней после подачи заявки.</p>
              </div>
            </div>

            <div className="mt-12 flex justify-center animate-fade-in" style={{animationDelay: '400ms'}}>
              <div className="bg-white p-6 rounded-lg max-w-2xl elevation-2">
                <div className="mb-4 flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">С нами безопасно</h3>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Корпоративная поддержка и обучение</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Официальное оформление с соблюдением трудового законодательства</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Страхование от несчастных случаев на период работы</span>
                  </li>
                </ul>
                <div className="flex justify-end">
                  <a href="#application" className="text-primary font-medium hover:text-primary/80 transition-colors">Подробнее →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Бонусная программа */}
        <section id="bonuses">
          <BonusSection />
        </section>

        {/* Форма заявки */}
        <section id="application" className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="material-card relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/10 rounded-full"></div>
              <div className="relative z-10">
                <div className="text-center mb-8 animate-fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Заполните анкету курьера</h2>
                  <p className="text-gray-700">
                    Заполните форму и станьте частью команды Яндекс Еды уже сегодня!
                  </p>
                </div>
                <CourierForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 px-6 bg-gray-50">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-10 animate-fade-in">
              <div className="inline-block p-2 bg-primary/10 rounded-full mb-4">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-gray-700">
                Ответы на популярные вопросы о работе в Яндекс Еде
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md animate-fade-in" style={{animationDelay: '100ms'}}>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-100 py-2">
                  <AccordionTrigger className="hover:text-primary transition-colors text-left font-semibold">
                    Какие документы нужны для начала работы?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Для начала работы вам понадобится паспорт и документы на транспортное средство (если вы планируете работать на автомобиле или мотоцикле). Также потребуется наличие смартфона с доступом в интернет для установки приложения курьера.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b border-gray-100 py-2">
                  <AccordionTrigger className="hover:text-primary transition-colors text-left font-semibold">
                    Как происходит оплата?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Оплата происходит еженедельно на вашу банковскую карту. Размер заработка зависит от количества выполненных заказов, а также от региона и типа доставки. Вы сможете отслеживать свой заработок в приложении в режиме реального времени.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-b border-gray-100 py-2">
                  <AccordionTrigger className="hover:text-primary transition-colors text-left font-semibold">
                    Как получить бонус за выполненные заказы?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Выполните необходимое количество заказов (30, 60 или 100) за неделю, сделайте скриншот из приложения и загрузите его через форму на нашем сайте в разделе Бонусы. После проверки бонус будет начислен вам с ближайшей выплатой.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-b border-gray-100 py-2">
                  <AccordionTrigger className="hover:text-primary transition-colors text-left font-semibold">
                    Нужен ли опыт работы?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Опыт работы не требуется. После регистрации вы пройдете короткое обучение, и сможете начать доставлять заказы. Мы предоставляем всю необходимую информацию и поддержку для успешной работы.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="py-2">
                  <AccordionTrigger className="hover:text-primary transition-colors text-left font-semibold">
                    Могу ли я выбирать район для доставки?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Да, в приложении вы можете выбрать предпочтительные районы для работы. Система будет стараться предлагать вам заказы в выбранных районах, но в периоды высокого спроса могут поступать заказы и из соседних районов.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="mt-12 text-center animate-fade-in" style={{animationDelay: '200ms'}}>
              <p className="text-gray-700 mb-4">Остались вопросы?</p>
              <div className="inline-flex items-center justify-center rounded-full bg-white p-3 elevation-1">
                <a href="tel:+78001234567" className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                  <Phone className="w-5 h-5 mr-2" /> 
                  8 800 123-45-67
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-white pt-12 pb-6 px-6 border-t border-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 18H5C3.89543 18 3 17.1046 3 16V8C3 6.89543 3.89543 6 5 6H19C20.1046 6 21 6.89543 21 8V16C21 17.1046 20.1046 18 19 18H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 18V12M12 12L15 15M12 12L9 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xl font-bold text-primary">Яндекс Еда</span>
              </div>
              <p className="text-gray-600 mb-4">
                Заказывайте еду и продукты, становитесь курьером, сотрудничайте с нами
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">О компании</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Связаться с нами</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>8 800 123-45-67</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>support@yandexeda.ru</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Москва, ул. Льва Толстого, 16</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-6 text-center text-gray-500 text-sm">
            <p>© 2023 Яндекс Еда. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
