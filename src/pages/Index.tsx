import CourierForm from "@/components/courier-form";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Шапка */}
      <header className="bg-primary py-4 px-6 md:px-8 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-8 h-8 mr-2 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 17l-5-5 5-5"/>
              <path d="M20 17l-5-5 5-5"/>
            </svg>
            <span className="text-2xl font-bold text-accent">Яндекс Еда</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="text-accent hover:underline">О работе</a>
            <a href="#application" className="text-accent hover:underline">Подать заявку</a>
            <a href="#faq" className="text-accent hover:underline">Вопросы</a>
          </div>
        </div>
      </header>

      {/* Главная секция */}
      <main className="flex-grow">
        {/* Герой-секция */}
        <section className="bg-gradient-to-b from-primary to-white py-16 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">Стань курьером Яндекс Еды</h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto">
              Свободный график, достойный доход и быстрая регистрация — начни зарабатывать уже сегодня
            </p>
            <a 
              href="#application"
              className="inline-block bg-accent text-accent-foreground font-medium py-3 px-8 rounded-full text-lg transition-transform hover:scale-105"
            >
              Подать заявку
            </a>
          </div>
        </section>

        {/* Преимущества */}
        <section id="about" className="py-16 px-6 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Почему стоит работать с нами</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Гибкий график</h3>
                <p className="text-gray-600">Работайте в удобное для вас время. Сами выбирайте часы и дни работы.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Стабильный доход</h3>
                <p className="text-gray-600">Еженедельные выплаты. Чем больше заказов — тем выше заработок.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <line x1="20" y1="8" x2="20" y2="14"/>
                    <line x1="23" y1="11" x2="17" y2="11"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Быстрое начало</h3>
                <p className="text-gray-600">Простая регистрация и быстрый старт работы. Необходимо только заполнить форму.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Форма заявки */}
        <section id="application" className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-center mb-8">Заполните анкету курьера</h2>
              <CourierForm />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 px-6 bg-gray-50">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Какие документы нужны для начала работы?</h3>
                <p className="text-gray-600">Для начала работы вам понадобится паспорт и документы на транспортное средство (если вы планируете работать на автомобиле или мотоцикле).</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Как происходит оплата?</h3>
                <p className="text-gray-600">Оплата происходит еженедельно на вашу банковскую карту. Размер заработка зависит от количества выполненных заказов.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Нужен ли опыт работы?</h3>
                <p className="text-gray-600">Опыт работы не требуется. После регистрации вы пройдете короткое обучение, и сможете начать доставлять заказы.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-accent text-accent-foreground py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2023 Яндекс Еда. Все права защищены.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-accent-foreground hover:underline">Условия использования</a>
              <a href="#" className="text-accent-foreground hover:underline">Политика конфиденциальности</a>
              <a href="#" className="text-accent-foreground hover:underline">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
