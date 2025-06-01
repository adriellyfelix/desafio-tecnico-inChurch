# Adição de Produtos ao Carrinho

## Objetivo
Automatizar o fluxo de adição de produtos ao carrinho, garantindo que os produtos sejam adicionados corretamente e que as validações necessárias sejam realizadas.

## Pré-condições
- Acessar a página de inventário (/v1/inventory.html)
- Lista de produtos deve estar carregada

## Fluxo Principal

### 1. Adicionar Produto Individual
- Verificar se a lista de produtos está visível
- Localizar o botão "ADD TO CART" do primeiro produto
- Clicar no botão "ADD TO CART"
- Validar mudança do botão para "REMOVE"
- Verificar contador do carrinho (deve mostrar "1")
- Acessar carrinho e validar URL (/cart.html)

### 2. Adicionar Múltiplos Produtos
- Verificar botão "ADD TO CART" do primeiro produto
- Clicar no botão do primeiro produto
- Verificar botão "ADD TO CART" do segundo produto
- Clicar no botão do segundo produto
- Verificar botão "ADD TO CART" do terceiro produto
- Clicar no botão do terceiro produto
- Validar contador do carrinho (deve mostrar "3")

## Validações

### Lista de Produtos
- Lista deve estar visível
- Botões "ADD TO CART" devem estar presentes
- Produtos devem estar listados corretamente

### Carrinho
- Contador deve atualizar após adição
- Botão deve mudar de "ADD TO CART" para "REMOVE"
- URL deve mudar para /cart.html ao acessar carrinho

## Pós-condições
- Produto(s) adicionado(s) ao carrinho
- Contador do carrinho atualizado
- Botões atualizados corretamente
- Carrinho acessível

## Observações
- Testar adição de produto individual
- Testar adição de múltiplos produtos
- Validar contadores
- Verificar mudança de estado dos botões 