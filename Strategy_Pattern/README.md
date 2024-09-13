## **Otimização de Rotas de Entrega**

### **Introdução**

Este projeto visa desenvolver uma solução flexível e escalável para otimizar as rotas de entrega de uma empresa de logística. Atualmente, a empresa utiliza diversos algoritmos para calcular rotas, o que dificulta a manutenção e atualização do sistema.

### **Problema**

A necessidade de adaptar o sistema a diferentes cenários, como tipos de veículos, cargas e condições das estradas, exige uma solução mais dinâmica. Atualmente, cada alteração nos algoritmos requer modificações no código principal, tornando o processo lento e propenso a erros.

### **Objetivo**

O objetivo principal é implementar o padrão de projeto **Strategy** para:
* **Aumentar a flexibilidade:** Permitir a troca de algoritmos sem alterar o código principal.
* **Melhorar a reutilização:** Facilitar a reutilização dos algoritmos em diferentes partes da aplicação.
* **Simplificar a manutenção:** Tornar o código mais fácil de entender e manter.

### **Solução Proposta**

**Padrão Strategy:**
Encapsulamos os diferentes algoritmos de cálculo de rota em classes separadas. Isso permite que a aplicação escolha o algoritmo mais adequado em tempo de execução.

**Benefícios:**
* **Flexibilidade:** Facilidade para adicionar novos algoritmos ou modificar os existentes.
* **Manutenção:** Código mais organizado e fácil de entender.
* **Reutilização:** Algoritmos podem ser reutilizados em diferentes contextos.
