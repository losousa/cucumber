Feature: Login

Em ordem do processo de Login
Seja um usuario
Eu quero o usuario e senha completa

Scenario Outline: Em ordem de verificacao de Login
	Given usuario um navegador para o facebook
	When usuario validacao de pagina principal
	Then usuario entrar "<usuario>" usuario
	And usuario entrar "<senha>" senha
	Then usuario "<tipoLogin>" com sucesso

Examples:
|usuario | senha   | tipoLogin |
|valid   | valid   | logar     |
|invalid | invalid | naologar  |