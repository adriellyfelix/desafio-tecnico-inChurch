# Finalização de Compra

## Objetivo
Automatizar o fluxo de finalização de compra, garantindo que todos os passos necessários sejam executados corretamente e que as validações sejam realizadas adequadamente.

## Pré-condições
- Ter produtos adicionados ao carrinho
- Estar na página do carrinho (/cart.html)

## Fluxo Principal

### 1. Verificar Carrinho
- Validar produtos adicionados
- Verificar quantidades
- Confirmar valores

### 2. Iniciar Checkout
- Clicar no botão "CHECKOUT"
- Verificar redirecionamento para página de checkout
- Validar formulário de informações

### 3. Preencher Informações
- Preencher First Name
- Preencher Last Name
- Preencher Postal Code
- Clicar em "CONTINUE"

### 4. Revisar Pedido
- Verificar resumo do pedido
- Confirmar produtos
- Validar valores
- Clicar em "FINISH"

### 5. Confirmar Compra
- Verificar mensagem de sucesso
- Validar número do pedido
- Confirmar redirecionamento para página de confirmação

## Validações

### Carrinho
- Produtos presentes
- Quantidades corretas
- Valores atualizados

### Checkout
- Campos obrigatórios preenchidos
- Formato do CEP válido
- Valores totais corretos

### Confirmação
- Mensagem de sucesso
- Número do pedido gerado
- Carrinho esvaziado

## Pós-condições
- Compra finalizada com sucesso
- Número do pedido gerado
- Carrinho esvaziado
- Página de confirmação exibida

## Observações
- Validar mensagens de erro
- Verificar cálculos de valores
- Testar campos obrigatórios
- Confirmar fluxo completo 