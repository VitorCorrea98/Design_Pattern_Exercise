## **Otimização de Rotas de Entrega**

### **Introdução**

Este repositório demonstra a implementação do padrão de projeto Observer em TypeScript para monitorar e reagir a mudanças em rotas de entrega. Ao aplicar este padrão, conseguimos criar um sistema mais reativo e escalável, permitindo que diferentes componentes da aplicação sejam notificados automaticamente quando uma rota é alterada.

### **Problema**

Em um sistema de logística, diversas partes da aplicação podem estar interessadas em saber quando uma rota de entrega é modificada. Por exemplo:
* **Motoristas:** Precisam ser notificados sobre novas rotas ou alterações em rotas existentes.
* **Clientes:** Podem querer acompanhar o status de suas entregas em tempo real.
* **Sistemas de gerenciamento:** Necessitam atualizar seus dados com as novas informações das rotas.


### **Objetivo**

O objetivo deste projeto é implementar o padrão **Observer** para:
* **Desacoplar componentes:** Separar a lógica de atualização de rotas da lógica dos componentes que precisam ser notificados.
* **Melhorar a escabilidade:** Adicionar novos observadores sem impactar o código existente.
* **Aumentar a reatividade:** Garantir que as mudanças em rotas sejam refletidas rapidamente em toda a aplicação.

### **Solução Proposta**

**Padrão Observer:**
* **Sujeito (Rota):** Representa uma rota de entrega e mantém uma lista de observadores.
* **Observador (Motorista, Cliente Sistema de Gerenciamento):** Define a interface para objetos que desejam ser notificados quando uma rota é alterada.

**Benefícios:**
* **Flexibilidade:** Facilidade para adicionar novos tipos de observadores.
* **Manutenção:** Código mais organizado e fácil de entender.
* **Reutilização:** O padrão Observer pode ser aplicado em diversos outros cenários.
