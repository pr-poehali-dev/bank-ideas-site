import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Idea {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  votes: number;
  status: 'new' | 'review' | 'approved' | 'rejected';
}

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newIdea, setNewIdea] = useState({
    title: '',
    description: '',
    author: '',
    category: ''
  });

  const [ideas, setIdeas] = useState<Idea[]>([
    {
      id: 1,
      title: "Мобильное приложение для учета времени",
      description: "Создать простое приложение для трекинга времени работы сотрудников с возможностью экспорта отчетов",
      author: "Анна К.",
      category: "Технологии",
      votes: 12,
      status: 'approved'
    },
    {
      id: 2,
      title: "Система внутренних коммуникаций",
      description: "Внедрить платформу для улучшения коммуникации между отделами компании",
      author: "Михаил С.",
      category: "Процессы",
      votes: 8,
      status: 'review'
    },
    {
      id: 3,
      title: "Программа корпоративного обучения",
      description: "Запустить программу внутреннего обучения сотрудников новым технологиям",
      author: "Елена В.",
      category: "HR",
      votes: 15,
      status: 'new'
    }
  ]);

  const filteredIdeas = ideas.filter(idea =>
    idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    idea.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmitIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (newIdea.title && newIdea.description && newIdea.author) {
      const idea: Idea = {
        id: ideas.length + 1,
        ...newIdea,
        votes: 0,
        status: 'new'
      };
      setIdeas([idea, ...ideas]);
      setNewIdea({ title: '', description: '', author: '', category: '' });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'border-gray-200 bg-gray-50';
      case 'review': return 'border-yellow-200 bg-yellow-50';
      case 'approved': return 'border-green-200 bg-green-50';
      case 'rejected': return 'border-red-200 bg-red-50';
      default: return 'border-gray-200 bg-white';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new': return 'Новая';
      case 'review': return 'На рассмотрении';
      case 'approved': return 'Одобрена';
      case 'rejected': return 'Отклонена';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black">БАНК ИДЕЙ</h1>
              <p className="text-gray-600 mt-1">Платформа для сбора и развития инновационных предложений</p>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="Lightbulb" size={32} className="text-black" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form Section */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-black bg-white">
              <CardHeader className="bg-black text-white">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Plus" size={20} />
                  НОВАЯ ИДЕЯ
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Поделитесь своим предложением
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmitIdea} className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-black font-medium">Название</Label>
                    <Input
                      id="title"
                      value={newIdea.title}
                      onChange={(e) => setNewIdea({...newIdea, title: e.target.value})}
                      className="mt-1 border-gray-300 focus:border-black"
                      placeholder="Краткое описание идеи"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description" className="text-black font-medium">Описание</Label>
                    <Textarea
                      id="description"
                      value={newIdea.description}
                      onChange={(e) => setNewIdea({...newIdea, description: e.target.value})}
                      className="mt-1 border-gray-300 focus:border-black min-h-24"
                      placeholder="Подробное описание вашей идеи"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="author" className="text-black font-medium">Автор</Label>
                      <Input
                        id="author"
                        value={newIdea.author}
                        onChange={(e) => setNewIdea({...newIdea, author: e.target.value})}
                        className="mt-1 border-gray-300 focus:border-black"
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="category" className="text-black font-medium">Категория</Label>
                      <Input
                        id="category"
                        value={newIdea.category}
                        onChange={(e) => setNewIdea({...newIdea, category: e.target.value})}
                        className="mt-1 border-gray-300 focus:border-black"
                        placeholder="Тема"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                    ОТПРАВИТЬ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Ideas Section */}
          <div className="lg:col-span-2">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-black"
                  placeholder="Поиск идей..."
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <Card className="border border-gray-200">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-black">{ideas.length}</div>
                  <div className="text-sm text-gray-600">Всего идей</div>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-black">{ideas.filter(i => i.status === 'approved').length}</div>
                  <div className="text-sm text-gray-600">Одобрено</div>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-black">{ideas.filter(i => i.status === 'new').length}</div>
                  <div className="text-sm text-gray-600">Новых</div>
                </CardContent>
              </Card>
            </div>

            {/* Ideas List */}
            <div className="space-y-4">
              {filteredIdeas.map((idea) => (
                <Card key={idea.id} className={`border-2 ${getStatusColor(idea.status)} hover:shadow-md transition-shadow`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-black leading-tight">{idea.title}</h3>
                      <Badge variant="outline" className="border-gray-300 text-gray-700">
                        {getStatusText(idea.status)}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{idea.description}</p>
                    
                    <Separator className="my-4" />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Icon name="User" size={16} className="text-gray-500" />
                          <span className="text-sm text-gray-600">{idea.author}</span>
                        </div>
                        {idea.category && (
                          <div className="flex items-center gap-2">
                            <Icon name="Tag" size={16} className="text-gray-500" />
                            <span className="text-sm text-gray-600">{idea.category}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50">
                          <Icon name="Heart" size={14} className="mr-1" />
                          {idea.votes}
                        </Button>
                        <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50">
                          <Icon name="Archive" size={14} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredIdeas.length === 0 && (
              <Card className="border-2 border-dashed border-gray-300">
                <CardContent className="p-12 text-center">
                  <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">Идеи не найдены</h3>
                  <p className="text-gray-500">Попробуйте изменить критерии поиска</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;