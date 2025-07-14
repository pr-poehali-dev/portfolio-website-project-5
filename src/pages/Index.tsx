import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full py-4 px-6 fixed top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-montserrat font-bold text-xl text-secondary">
            Мария Козлова
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              <Icon name="Bot" size={14} className="mr-2" />
              Использую ИИ в работе
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-secondary mb-6">
            Козлова Мария Юрьевна
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-open-sans">
            Фрилансер с 10-летним опытом. Разрабатываю документы для государственных учреждений,
            чат-боты, выполняю студенческие работы по широкому спектру дисциплин.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="font-medium">
              <Icon name="FileText" size={20} className="mr-2" />
              Посмотреть услуги
            </Button>
            <Button variant="outline" size="lg" className="font-medium">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать резюме
            </Button>
          </div>
          <div className="flex justify-center space-x-8 text-center">
            <div className="animate-slide-up">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">лет опыта</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-2xl font-bold text-primary">1-5</div>
              <div className="text-sm text-muted-foreground">дней срок</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">гарантия</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-secondary mb-4">
              Обо мне
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-open-sans">
              Профессиональный подход к каждому проекту с использованием современных технологий
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Icon name="Brain" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Инновационный подход</h3>
                    <p className="text-muted-foreground">
                      Применяю искусственный интеллект для повышения качества и скорости работы
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Индивидуальный подход</h3>
                    <p className="text-muted-foreground">
                      К каждому клиенту имею персональный подход, учитывая специфику задач
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Гарантии качества</h3>
                    <p className="text-muted-foreground">
                      Предоставляю гарантии качества и полную конфиденциальность
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="mb-8">
                <img 
                  src="/img/a17d187d-61d6-4e2b-8e25-6a1c031a045b.jpg" 
                  alt="Мария Козлова - профессиональный фрилансер"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <Card className="p-8 bg-primary/5 border-primary/20">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Calendar" size={20} className="text-primary" />
                    <span className="font-medium">Опыт работы: 10+ лет</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span className="font-medium">Сроки выполнения: 1-5 дней</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Building" size={20} className="text-primary" />
                    <span className="font-medium">Специализация: Госучреждения</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="GraduationCap" size={20} className="text-primary" />
                    <span className="font-medium">Академические работы</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-secondary mb-4">
              Мои услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-open-sans">
              Полный спектр услуг для государственных учреждений и частных клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <Icon name="FileText" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Документооборот</h3>
                <p className="text-muted-foreground mb-4">
                  Инструкции, положения, регламенты для государственных и бюджетных учреждений
                </p>
                <Button variant="outline" size="sm">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <Icon name="Bot" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Чат-боты</h3>
                <p className="text-muted-foreground mb-4">
                  Разработка чат-ботов без программирования на современных конструкторах
                </p>
                <Button variant="outline" size="sm">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <Icon name="GraduationCap" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Учебные работы</h3>
                <p className="text-muted-foreground mb-4">
                  Домашние задания для школьников и студентов по различным дисциплинам
                </p>
                <Button variant="outline" size="sm">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <Icon name="BarChart" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Бизнес-планы</h3>
                <p className="text-muted-foreground mb-4">
                  Разработка бизнес-планов, маркетинговых стратегий, управленческих решений
                </p>
                <Button variant="outline" size="sm">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Социология</h3>
                <p className="text-muted-foreground mb-4">
                  Разработка социологических опросов для населения и анализ результатов
                </p>
                <Button variant="outline" size="sm">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <Icon name="Package" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Комплексные решения</h3>
                <p className="text-muted-foreground mb-4">
                  Выполнение под ключ всех необходимых дисциплин в рамках одного проекта
                </p>
                <Button variant="outline" size="sm">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-secondary mb-4">
              Дисциплины
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-open-sans">
              Широкий спектр академических дисциплин для студентов и школьников
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Психология', icon: 'Brain' },
              { name: 'Педагогика', icon: 'BookOpen' },
              { name: 'Юриспруденция', icon: 'Scale' },
              { name: 'Маркетинг', icon: 'TrendingUp' },
              { name: 'Менеджмент', icon: 'Users' },
              { name: 'Социальная реклама', icon: 'Megaphone' },
              { name: 'Бизнес-планирование', icon: 'BarChart' },
              { name: 'Социология', icon: 'Users2' },
            ].map((discipline, index) => (
              <Card key={discipline.name} className="p-4 text-center hover:shadow-md transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-2">
                  <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-2">
                    <Icon name={discipline.icon as any} size={20} className="text-primary" />
                  </div>
                  <h3 className="font-medium text-sm">{discipline.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-secondary mb-4">
              Портфолио
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-open-sans">
              Примеры выполненных проектов и довольных клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/img/5d6b9845-82c5-4d84-8cb8-8bbd5c43498d.jpg" 
                  alt="Документооборот для госучреждений"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">Документооборот</Badge>
                <h3 className="font-semibold text-lg mb-2">Положение о персонале</h3>
                <p className="text-muted-foreground text-sm">
                  Разработка внутренних положений для государственного учреждения
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="h-48 overflow-hidden">
                <img 
                  src="/img/b461e65c-d031-42f8-8bc2-12692ed02a47.jpg" 
                  alt="Чат-бот для консультаций"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">Чат-бот</Badge>
                <h3 className="font-semibold text-lg mb-2">Бот для консультаций</h3>
                <p className="text-muted-foreground text-sm">
                  Автоматизация консультаций граждан в государственном учреждении
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Icon name="GraduationCap" size={48} className="text-primary" />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">Диплом</Badge>
                <h3 className="font-semibold text-lg mb-2">Дипломная работа</h3>
                <p className="text-muted-foreground text-sm">
                  Комплексная дипломная работа по психологии для студента ВУЗа
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-secondary mb-4">
              Контакты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-open-sans">
              Свяжитесь со мной для обсуждения вашего проекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Telegram</h3>
                  <p className="text-muted-foreground mb-2">
                    Быстрая связь и обсуждение проекта
                  </p>
                  <Button variant="outline" size="sm">
                    <Icon name="Send" size={16} className="mr-2" />
                    Написать в Telegram
                  </Button>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground mb-2">
                    Подробное описание задачи
                  </p>
                  <Button variant="outline" size="sm">
                    <Icon name="Mail" size={16} className="mr-2" />
                    Отправить письмо
                  </Button>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                  <p className="text-muted-foreground mb-2">
                    Звонок для срочных вопросов
                  </p>
                  <Button variant="outline" size="sm">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Позвонить
                  </Button>
                </div>
              </div>
            </div>
            <Card className="p-8 animate-scale-in">
              <CardContent className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="font-semibold text-lg mb-2">Быстрый расчет стоимости</h3>
                  <p className="text-sm text-muted-foreground">
                    Опишите вашу задачу и получите предварительную стоимость
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Тип работы</label>
                    <select className="w-full p-2 border rounded-md mt-1">
                      <option>Выберите тип работы</option>
                      <option>Документооборот</option>
                      <option>Чат-бот</option>
                      <option>Учебная работа</option>
                      <option>Бизнес-план</option>
                      <option>Социологический опрос</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Срочность</label>
                    <select className="w-full p-2 border rounded-md mt-1">
                      <option>Обычная (3-5 дней)</option>
                      <option>Срочная (1-2 дня)</option>
                      <option>Очень срочная (в день)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Описание задачи</label>
                    <textarea 
                      className="w-full p-2 border rounded-md mt-1 h-20 resize-none"
                      placeholder="Опишите вашу задачу..."
                    />
                  </div>
                  <Button className="w-full">
                    <Icon name="Calculator" size={16} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="font-montserrat font-bold text-2xl mb-2">Козлова Мария Юрьевна</h3>
            <p className="text-white/70">
              Профессиональный фрилансер с 10-летним опытом
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Telegram
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20">
              <Icon name="Mail" size={16} className="mr-2" />
              Email
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20">
              <Icon name="Phone" size={16} className="mr-2" />
              Телефон
            </Button>
          </div>
          <div className="border-t border-white/20 pt-8 text-sm text-white/70">
            <p>© 2024 Козлова Мария Юрьевна. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;