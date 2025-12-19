import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Стол River',
      category: 'tables',
      image: 'https://cdn.poehali.dev/projects/b36eeb0d-1e82-41ad-b9f9-74898f02ef21/files/8a0e69e4-9697-46a1-ab69-768e4a400a5b.jpg',
      description: 'Эпоксидный стол с эффектом реки, деревянные края и янтарная смола'
    },
    {
      id: 2,
      title: 'Декоративная панель',
      category: 'panels',
      image: 'https://cdn.poehali.dev/projects/b36eeb0d-1e82-41ad-b9f9-74898f02ef21/files/e48242f4-641a-4a69-99cb-ef9e4811fc55.jpg',
      description: 'Настенная панель с абстрактными узорами из смолы и золотыми акцентами'
    },
    {
      id: 3,
      title: 'Набор подставок',
      category: 'coasters',
      image: 'https://cdn.poehali.dev/projects/b36eeb0d-1e82-41ad-b9f9-74898f02ef21/files/d874fbe5-d324-420d-a9a7-6bf09c83ce80.jpg',
      description: 'Элегантные подставки с мраморным эффектом и золотыми вкраплениями'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">RESIN CRAFT</h1>
          <div className="hidden md:flex gap-8">
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О мастере</a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors">Процесс</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Изделия из смолы,<br />созданные с душой
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Уникальные предметы интерьера, которые преображают пространство
          </p>
          <Button size="lg" className="animate-scale-in">
            <Icon name="Mail" className="mr-2" size={20} />
            Заказать изделие
          </Button>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Галерея работ</h2>
          
          <Tabs defaultValue="all" className="w-full mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 bg-muted">
              <TabsTrigger value="all" onClick={() => setSelectedCategory('all')}>Все</TabsTrigger>
              <TabsTrigger value="tables" onClick={() => setSelectedCategory('tables')}>Столы</TabsTrigger>
              <TabsTrigger value="panels" onClick={() => setSelectedCategory('panels')}>Панели</TabsTrigger>
              <TabsTrigger value="coasters" onClick={() => setSelectedCategory('coasters')}>Подставки</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">О мастере</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Более 5 лет создаю уникальные предметы интерьера из эпоксидной смолы. 
                Каждое изделие — это результат тщательной работы и внимания к деталям.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Моя философия — соединить природную красоту дерева с современными материалами, 
                создавая произведения, которые станут центром внимания в любом пространстве.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="font-semibold">5+ лет опыта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Sparkles" className="text-primary" size={24} />
                  <span className="font-semibold">100+ изделий</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-16">Процесс создания</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Pencil" className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold">1. Эскиз и планирование</h3>
              <p className="text-muted-foreground">
                Обсуждаем концепцию, размеры и цветовую гамму будущего изделия
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Hammer" className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold">2. Подготовка материалов</h3>
              <p className="text-muted-foreground">
                Выбор древесины, подготовка формы и смешивание смолы с пигментами
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Sparkles" className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold">3. Заливка и финиш</h3>
              <p className="text-muted-foreground">
                Послойная заливка, полировка и нанесение защитного покрытия
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы заказать уникальное изделие?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Свяжитесь со мной для обсуждения вашего проекта. Каждое изделие создаётся индивидуально под ваши пожелания.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="w-full sm:w-auto">
              <Icon name="Mail" className="mr-2" size={20} />
              info@resincraft.ru
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (999) 123-45-67
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={28} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Send" size={28} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Facebook" size={28} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Resin Craft. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
