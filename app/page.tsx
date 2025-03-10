"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, Star, CheckCircle2, X, Shield, Clock, Users, Zap, Award, Gift } from "lucide-react";
import YouTube from "react-youtube";

const plans = [
  {
    name: "Básico",
    price: "R$ 29,90",
    features: [
      "Auto Farm Level",
      "Auto Farm Beli",
      "Auto Farm Fragmentos",
      "Suporte básico",
    ],
    icon: Shield,
  },
  {
    name: "Premium",
    price: "R$ 49,90",
    features: [
      "Todas as features do plano Básico",
      "Auto Farm Raid",
      "Auto Farm Boss",
      "Auto Farm Fruit",
      "Suporte prioritário 24/7",
      "Atualizações antecipadas",
    ],
    icon: Award,
    badge: "MAIS POPULAR",
    savings: "Economize 40%",
  },
];

const stats = [
  { number: "15k+", label: "Usuários ativos", icon: Users },
  { number: "24/7", label: "Suporte online", icon: Clock },
  { number: "99.9%", label: "Uptime garantido", icon: Zap },
];

const faqs = [
  {
    question: "O script é seguro?",
    answer: "Sim, nosso script é 100% seguro e testado por milhares de usuários. Utilizamos as mais avançadas técnicas anti-detecção do mercado e atualizamos constantemente para garantir sua segurança.",
  },
  {
    question: "Como funciona o processo de compra?",
    answer: "Após a compra, você receberá o script instantaneamente por email junto com um guia detalhado de instalação. Nosso suporte está disponível 24/7 para ajudar com qualquer dúvida.",
  },
  {
    question: "O script funciona em qual executor?",
    answer: "Nosso script é compatível com os principais executores do mercado, incluindo Synapse X, KRNL, e outros. Fornecemos suporte completo para configuração em qualquer executor.",
  },
  {
    question: "Tem garantia?",
    answer: "Oferecemos 7 dias de garantia com reembolso total caso não goste. Sem perguntas, sem complicações - sua satisfação é nossa prioridade.",
  },
];

const testimonials = [
  {
    name: "Pedro Silva",
    text: "Melhor script que já usei! Upei do nível 1 ao 2400 em apenas 3 dias! O suporte é incrível e sempre me ajuda quando preciso.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=200&h=200&fit=crop",
    title: "Jogador Verificado",
    date: "Há 2 dias",
  },
  {
    name: "Lucas Santos",
    text: "Muito bom! O suporte é excelente e o script funciona perfeitamente. Já farmei mais de 50 frutas raras usando o auto-farm.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&h=200&fit=crop",
    title: "Cliente Premium",
    date: "Há 1 semana",
  },
  {
    name: "João Paulo",
    text: "Vale cada centavo! Farmei todas as frutas que queria e o sistema anti-detecção é realmente eficaz. Recomendo muito!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=200&h=200&fit=crop",
    title: "Usuário Verificado",
    date: "Há 3 dias",
  },
];

const features = [
  {
    name: "Auto Farm Level",
    description: "Sistema inteligente que escolhe as melhores quests e mobs baseado no seu nível atual, garantindo o máximo de XP por hora.",
    icon: "⚔️",
  },
  {
    name: "Auto Farm Beli",
    description: "Automatiza a coleta de Beli através de quests lucrativas e farming otimizado de mobs que dropam mais dinheiro.",
    icon: "💰",
  },
  {
    name: "Auto Farm Raid",
    description: "Participa automaticamente de raids, derrotando todos os inimigos e coletando fragmentos com estratégias avançadas.",
    icon: "🏰",
  },
  {
    name: "Auto Farm Boss",
    description: "Derrota bosses automaticamente quando eles spawnam, usando as melhores combinações de ataques para cada situação.",
    icon: "👑",
  },
  {
    name: "Auto Farm Fruit",
    description: "Sistema de detecção e coleta automática de frutas que aparecem no mapa, com notificação instantânea.",
    icon: "🍎",
  },
  {
    name: "Auto Farm Fragmentos",
    description: "Coleta fragmentos de forma eficiente através de raids e dungeons, maximizando seus ganhos por hora.",
    icon: "💎",
  },
];

const benefits = [
  {
    title: "Automação Inteligente",
    description: "Sistema avançado de farm que adapta as melhores estratégias para seu nível, usando inteligência artificial para tomar decisões em tempo real e maximizar seus ganhos.",
    icon: "🤖",
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "100% Seguro",
    description: "Desenvolvido com as mais avançadas técnicas anti-detecção do mercado, nosso script passa por atualizações constantes para garantir sua segurança.",
    icon: "🛡️",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Suporte Premium",
    description: "Nossa equipe especializada está disponível 24/7 para ajudar você com qualquer dúvida ou problema, garantindo a melhor experiência possível.",
    icon: "💬",
    color: "from-yellow-500 to-orange-600",
  },
];

export default function Home() {
  const [count, setCount] = useState(0);
  const targetCount = 1821;
  const duration = 2000;
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);
  const increment = targetCount / totalFrames;

  useEffect(() => {
    if (count < targetCount) {
      const timer = setTimeout(() => {
        setCount(Math.min(count + increment, targetCount));
      }, frameRate);
      return () => clearTimeout(timer);
    }
  }, [count]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#0a0a0a] text-white overflow-x-hidden cursor-custom">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <YouTube
            videoId="BtES9LdTfBA"
            opts={{
              playerVars: {
                autoplay: 1,
                controls: 0,
                rel: 0,
                showinfo: 0,
                mute: 1,
                loop: 1,
              },
              width: "100%",
              height: "100%",
            }}
            className="absolute w-full h-full object-cover"
            onEnd={(e) => e.target.playVideo()}
          />
        </div>

        <div className="container mx-auto px-4 z-20 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-blue-400 mb-4">
                <Star className="w-5 h-5" />
                <span className="font-bold">{Math.round(count)} avaliações</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-left">
                Evolua sua conta no
                <span className="text-blue-500"> Blox Fruits</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 text-left">
                Automatize sua jornada e alcance o máximo nível com nosso script
                premium. Farm inteligente, seguro e eficiente.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => scrollToSection("plans")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
                >
                  Começar Agora
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-8 py-4 rounded-lg font-bold transition-all"
                >
                  Ver Recursos
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-lg overflow-hidden shadow-2xl"
            >
              <YouTube
                videoId="BtES9LdTfBA"
                opts={{
                  width: "100%",
                  height: "100%",
                }}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex items-center justify-center gap-4 bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <Icon className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="text-2xl font-bold">{stat.number}</p>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          onClick={() => scrollToSection("benefits")}
        >
          <ChevronDown className="w-8 h-8 text-blue-500" />
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-medium mb-2 block">
              Por que escolher nosso script?
            </span>
            <h2 className="text-4xl font-bold mb-4">Benefícios Exclusivos</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-[#1a1a1a] p-8 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-medium mb-2 block">
              Veja todas as funcionalidades
            </span>
            <h2 className="text-4xl font-bold mb-4">Funcionalidades Principais</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-8 rounded-lg hover:bg-[#222] transition-colors duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.name}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed pl-12">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-medium mb-2 block">
              O que dizem nossos usuários
            </span>
            <h2 className="text-4xl font-bold mb-4">Depoimentos</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-8 rounded-lg hover:bg-[#222] transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-blue-500 text-sm mb-1">{testimonial.title}</p>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="text-gray-500 text-sm">{testimonial.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-medium mb-2 block">
              Escolha seu plano
            </span>
            <h2 className="text-4xl font-bold mb-4">Planos e Preços</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative bg-[#1a1a1a] p-8 rounded-lg border-2 ${
                    index === 1
                      ? "border-blue-500 transform scale-105 shadow-xl shadow-blue-500/20"
                      : "border-gray-800"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-8 h-8 ${index === 1 ? 'text-blue-500' : 'text-gray-400'}`} />
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                  <div className="flex items-baseline mb-2">
                    <p className="text-4xl font-bold">{plan.price}</p>
                    <span className="text-lg text-gray-400 ml-2">/mês</span>
                  </div>
                  {plan.savings && (
                    <div className="flex items-center gap-2 mb-6">
                      <Gift className="w-4 h-4 text-green-500" />
                      <span className="text-green-500 font-medium">{plan.savings}</span>
                    </div>
                  )}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-5 h-5 ${index === 1 ? 'text-blue-500' : 'text-gray-400'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full ${
                    index === 1
                      ? "bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/20"
                      : "bg-gray-700 hover:bg-gray-600"
                  } text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105`}>
                    Escolher Plano
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-8 mt-12 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>7 Dias de Garantia</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Suporte 24/7</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-medium mb-2 block">
              Tire suas dúvidas
            </span>
            <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-6 rounded-lg hover:bg-[#222] transition-colors duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Blox Fruits
              <span className="text-blue-500"> Script</span>
            </h3>
            <p className="text-gray-400 mb-6">
              O melhor script para evoluir sua conta
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                Suporte
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}