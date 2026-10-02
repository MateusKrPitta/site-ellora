# Clínica Ellora Estética & Saúde 🌟

Projeto desenvolvido com **React 18 + TypeScript + Tailwind CSS + Vite**, baseado na modelagem oficial e diretrizes visuais do **Projeto Stitch** da Clínica Ellora (Dra. Silvana Leite - Nova Andradina, MS).

---

## 🎨 Identidade Visual & Design System
- **Paleta de Luxo Boutique:** Terracota nobre (`#855238` / `#803E26`), Champagne Gold (`#B9926D`), Nude Alabaster / Rosé (`#E6B3A1`), Bege Quente (`#FFDDBF`) e Espresso Charcoal (`#2C201C`).
- **Tipografia Editorial:** `Playfair Display` para títulos imponentes e `Plus Jakarta Sans` / `DM Sans` para leitura técnica e fluida.
- **Micro-interações:** Sombras quentes multicamadas, efeito de vidro (*glassmorphism*), transições suaves e botões com pulso elegante.

---

## ✨ Principais Funcionalidades Implementadas
1. **Catálogo Interativo dos 8 Procedimentos Oficiais:**
   - 01. Toxina Botulínica (Botox)
   - 02. Preenchimento & Harmonização Facial
   - 03. Bioestimulador de Colágeno
   - 04. Fios de Sustentação (PDO)
   - 05. Limpeza de Pele Profunda
   - 06. Gerenciamento de Pele Personalizado
   - 07. Consultoria de Skincare (Home Care)
   - 08. Gerenciamento do Peso & Firmeza
2. **Filtro por Categorias:** Harmonização & Face, Saúde da Pele & Skincare, Corporal & Firmeza.
3. **Modal de Detalhes do Procedimento:** Visão profunda com indicações, benefícios, durabilidade e botão de agendamento personalizado via WhatsApp.
4. **Simulador / Quiz de Protocolo Ideal:** Avaliação interativa em etapas que calcula o protocolo sob medida para os objetivos da paciente e gera mensagem formatada para WhatsApp.
5. **Seção de Diferenciais / Comparativo de Método:** Estética Padronizada de Mercado vs. O Método Ellora.
6. **Depoimentos Humanizados:** Avaliações 5.0 com selo de verificação e procedimentos realizados.
7. **Accordion de FAQ Interativo:** Esclarecimento das principais dúvidas clínicas dos pacientes.
8. **Formulário de Agendamento Prioritário:** Integração dinâmica e direta com a API do WhatsApp.
9. **Botão Flutuante de WhatsApp:** Acesso rápido permanente em dispositivos móveis e desktop.
10. **Menu Mobile Responsivo:** Drawer com navegação suave para todas as seções.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (v18+)

### Instalar dependências
```bash
npm install
```

### Rodar o servidor de desenvolvimento
```bash
npm run dev
```
O projeto estará disponível em `http://localhost:3000`.

### Gerar bundle de produção
```bash
npm run build
```

---

## 📁 Estrutura de Pastas
```
├── src/
│   ├── components/       # Componentes modulares (Hero, Header, Treatments, Quiz, etc.)
│   ├── data/             # Dados tipados (tratamentos, depoimentos, FAQs, quiz)
│   ├── types/            # Definições TypeScript
│   ├── App.tsx           # Componente raiz
│   ├── main.tsx          # Bootstrap React
│   └── index.css         # Configurações do Tailwind e classes utilitárias
├── stitch_landing_page_cl_nica_ellora/ # Modelagem de referência (DESIGN.md, code.html)
├── tailwind.config.js    # Configuração de temas, cores e fontes
├── vite.config.ts        # Configuração do Vite
└── tsconfig.json         # Configuração do TypeScript
```
