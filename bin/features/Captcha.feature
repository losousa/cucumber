Feature: Login para Producao

Em ordem do processo de Login para Producao
Seja um usuario
Eu quero o usuario e senha completa

Scenario: Em ordem de verificacao de Login producao
	Given usuario um navegador para o facebook
	When usuario validacao de pagina principal
	Then usuario entrar "valid" usuario
	And usuario entrar "valid" senha
	And usuario validar o captcha imagem
	Then usuario "logar" com sucesso

Scenario: Em ordem de verificacao de Login producao
	Given usuario um navegador para o facebook
	When usuario validacao de pagina principal
	Then usuario entrar "invalid" usuario
	And usuario entrar "invalid" senha
	And usuario validar o captcha imagem
	Then usuario "naologar" com sucesso