import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    material: '',
    description: ''
  });

  const materials = [
    {
      title: "Металл",
      description: "Сталь, алюминий, нержавейка, титан",
      icon: "Zap",
      features: ["Высокая точность", "Чистый рез", "Без деформации"]
    },
    {
      title: "Цветные металлы",
      description: "Медь, латунь, бронза",
      icon: "Palette",
      features: ["Идеальная кромка", "Минимальные отходы", "Сложные формы"]
    },
    {
      title: "Тугоплавкие металлы",
      description: "Вольфрам, молибден, тантал",
      icon: "Flame",
      features: ["Высокие температуры", "Прецизионная обработка", "Качество"]
    },
    {
      title: "Дерево",
      description: "Фанера, МДФ, массив дерева",
      icon: "TreePine",
      features: ["Гладкие края", "Быстрая резка", "Художественные изделия"]
    },
    {
      title: "Керамика",
      description: "Техническая и художественная керамика",
      icon: "CircleDot",
      features: ["Точные отверстия", "Сложная геометрия", "Без сколов"]
    },
    {
      title: "Стекло",
      description: "Закаленное, органическое стекло",
      icon: "Square",
      features: ["Ровный срез", "Полированные края", "Любая толщина"]
    },
    {
      title: "Полимеры",
      description: "Акрил, поликарбонат, пластик",
      icon: "Layers",
      features: ["Герметичный рез", "Сложные детали", "Серийное производство"]
    }
  ];

  const advantages = [
    {
      icon: "Target",
      title: "Высокая точность",
      description: "Точность резки до ±0.05 мм"
    },
    {
      icon: "Gauge",
      title: "Любая сложность",
      description: "Выполняем изделия любой геометрии"
    },
    {
      icon: "Clock",
      title: "Быстрые сроки",
      description: "Изготовление от 1 дня"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "100% контроль качества продукции"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заказ отправлен:', formData);
    // Здесь будет отправка формы
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                ЛАЗЕРНАЯ РЕЗКА
                <span className="block text-blue-400">ВЫСОКОЙ ТОЧНОСТИ</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Профессиональная лазерная резка металла, дерева, керамики, стекла и полимеров. 
                Высокое качество, точность и скорость выполнения заказов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  ЗАКАЗАТЬ РЕЗКУ
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3">
                  СМОТРЕТЬ РАБОТЫ
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={120} className="text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={32} className="text-slate-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">МАТЕРИАЛЫ ДЛЯ РЕЗКИ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Работаем с широким спектром материалов, обеспечивая высокое качество резки для каждого типа
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
                    <Icon name={material.icon as any} size={32} className="text-blue-600 group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{material.title}</CardTitle>
                  <CardDescription className="text-gray-600">{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {material.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">НАШИ ПРЕИМУЩЕСТВА</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Современное оборудование и опытные специалисты гарантируют отличный результат
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
                  <Icon name={advantage.icon as any} size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">НАШИ РАБОТЫ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Примеры выполненных проектов различной сложности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all">
                  <Icon name="Image" size={48} className="text-gray-400 group-hover:text-blue-600" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-slate-900 mb-2">Проект №{item}</h3>
                  <p className="text-gray-600 text-sm">Лазерная резка металлических деталей сложной геометрии</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">ЗАКАЗАТЬ РЕЗКУ</h2>
              <p className="text-gray-600 mb-8">
                Опишите ваш проект, и мы свяжемся с вами для обсуждения деталей и расчета стоимости
              </p>
              
              <Card className="border-2">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-slate-900 font-medium">Имя *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="mt-1"
                          placeholder="Ваше имя"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-slate-900 font-medium">Телефон *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="mt-1"
                          placeholder="+7 (999) 123-45-67"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-slate-900 font-medium">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="mt-1"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="material" className="text-slate-900 font-medium">Материал *</Label>
                      <Input
                        id="material"
                        value={formData.material}
                        onChange={(e) => setFormData({...formData, material: e.target.value})}
                        className="mt-1"
                        placeholder="Сталь 3мм, фанера 10мм, акрил 5мм..."
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="description" className="text-slate-900 font-medium">Описание проекта *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        className="mt-1 min-h-24"
                        placeholder="Опишите что нужно изготовить, размеры, количество..."
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      ОТПРАВИТЬ ЗАЯВКУ
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">КОНТАКТЫ</h2>
              
              <div className="space-y-8">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon name="Phone" size={24} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">Телефон</h3>
                        <p className="text-gray-600">+7 (999) 123-45-67</p>
                        <p className="text-gray-600">+7 (999) 123-45-68</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon name="Mail" size={24} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                        <p className="text-gray-600">info@lasercut.ru</p>
                        <p className="text-gray-600">order@lasercut.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon name="MapPin" size={24} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">Адрес</h3>
                        <p className="text-gray-600">г. Москва, ул. Промышленная, 15</p>
                        <p className="text-gray-600">Производственный комплекс</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon name="Clock" size={24} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">Режим работы</h3>
                        <p className="text-gray-600">Пн-Пт: 8:00 - 20:00</p>
                        <p className="text-gray-600">Сб-Вс: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ЛАЗЕРНАЯ РЕЗКА</h3>
              <p className="text-gray-300">
                Профессиональные услуги лазерной резки с гарантией качества и соблюдением сроков
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">УСЛУГИ</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Резка металла</li>
                <li>Резка дерева</li>
                <li>Резка керамики</li>
                <li>Резка стекла</li>
                <li>Резка полимеров</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">КОНТАКТЫ</h3>
              <div className="space-y-2 text-gray-300">
                <p>📞 +7 (999) 123-45-67</p>
                <p>✉️ info@lasercut.ru</p>
                <p>📍 г. Москва, ул. Промышленная, 15</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Лазерная резка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;