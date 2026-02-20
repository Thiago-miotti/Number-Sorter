# Sorteador de Números

Aplicação web para sortear números aleatórios dentro de um intervalo definido. Defina a quantidade, o intervalo (de/até) e opcionalmente ative "Não repetir número" para resultados únicos.

## Demonstração

![Demonstração do Sorteador de Números](src/assets/demo.gif)

## Funcionalidades

- **Quantidade**: define quantos números serão sorteados
- **Intervalo**: define o valor inicial (DE) e final (ATÉ) do intervalo
- **Não repetir número**: opção para que todos os números sorteados sejam únicos
- **Sortear novamente**: limpa o resultado e permite um novo sorteio

## Tecnologias

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Radix UI](https://www.radix-ui.com/) (Switch)
- [Hugeicons](https://hugeicons.com/)

## Estrutura do projeto

```
src/
├── assets/          # Imagens e mídia (ex.: demo.gif)
├── components/      # Componentes React
│   ├── numbers-to-sort.tsx  # Lógica do sorteio
│   ├── ui/                  # Componentes de UI (Button, Switch, etc.)
│   └── ...
├── App.tsx
├── index.css
└── main.tsx
```
