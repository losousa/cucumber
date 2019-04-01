$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Captcha.feature");
formatter.feature({
  "line": 1,
  "name": "Login para Producao",
  "description": "\r\nEm ordem do processo de Login para Producao\r\nSeja um usuario\r\nEu quero o usuario e senha completa",
  "id": "login-para-producao",
  "keyword": "Feature"
});
formatter.before({
  "duration": 279466,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Em ordem de verificacao de Login producao",
  "description": "",
  "id": "login-para-producao;em-ordem-de-verificacao-de-login-producao",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "usuario um navegador para o facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "usuario validacao de pagina principal",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "usuario entrar \"valid\" usuario",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "usuario entrar \"valid\" senha",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "usuario validar o captcha imagem",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "usuario \"logar\" com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "PassoLogin.usuario_um_navegador_para_o_facebook()"
});
formatter.result({
  "duration": 174880203,
  "status": "passed"
});
formatter.match({
  "location": "PassoLogin.usuario_validacao_de_pagina_principal()"
});
formatter.result({
  "duration": 251307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 16
    }
  ],
  "location": "PassoLogin.usuario_entrar_valido_usuario(String)"
});
formatter.result({
  "duration": 3649275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 16
    }
  ],
  "location": "PassoLogin.usuario_entrar_valido_senha(String)"
});
formatter.result({
  "duration": 288853,
  "status": "passed"
});
formatter.match({
  "location": "PassoLoginCaptcha.usuario_validar_o_captcha_imagem()"
});
formatter.result({
  "duration": 218453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logar",
      "offset": 9
    }
  ],
  "location": "PassoLogin.usuario_logar_com_sucesso(String)"
});
formatter.result({
  "duration": 200959,
  "status": "passed"
});
formatter.after({
  "duration": 204373,
  "status": "passed"
});
formatter.before({
  "duration": 104960,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Em ordem de verificacao de Login producao",
  "description": "",
  "id": "login-para-producao;em-ordem-de-verificacao-de-login-producao",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "usuario um navegador para o facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "usuario validacao de pagina principal",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "usuario entrar \"invalid\" usuario",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "usuario entrar \"invalid\" senha",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "usuario validar o captcha imagem",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "usuario \"naologar\" com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "PassoLogin.usuario_um_navegador_para_o_facebook()"
});
formatter.result({
  "duration": 69547,
  "status": "passed"
});
formatter.match({
  "location": "PassoLogin.usuario_validacao_de_pagina_principal()"
});
formatter.result({
  "duration": 86613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 16
    }
  ],
  "location": "PassoLogin.usuario_entrar_valido_usuario(String)"
});
formatter.result({
  "duration": 116479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 16
    }
  ],
  "location": "PassoLogin.usuario_entrar_valido_senha(String)"
});
formatter.result({
  "duration": 424533,
  "status": "passed"
});
formatter.match({
  "location": "PassoLoginCaptcha.usuario_validar_o_captcha_imagem()"
});
formatter.result({
  "duration": 207360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naologar",
      "offset": 9
    }
  ],
  "location": "PassoLogin.usuario_logar_com_sucesso(String)"
});
formatter.result({
  "duration": 255573,
  "status": "passed"
});
formatter.after({
  "duration": 61440,
  "status": "passed"
});
formatter.uri("Loogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "\nEm ordem do processo de Login\nSeja um usuario\nEu quero o usuario e senha completa",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Em ordem de verificacao de Login",
  "description": "",
  "id": "login;em-ordem-de-verificacao-de-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "usuario um navegador para o facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "usuario validacao de pagina principal",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "usuario entrar \"\u003cusuario\u003e\" usuario",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "usuario entrar \"\u003csenha\u003e\" senha",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "usuario \"\u003ctipoLogin\u003e\" com sucesso",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login;em-ordem-de-verificacao-de-login;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha",
        "tipoLogin"
      ],
      "line": 15,
      "id": "login;em-ordem-de-verificacao-de-login;;1"
    },
    {
      "cells": [
        "valid",
        "valid",
        "logar"
      ],
      "line": 16,
      "id": "login;em-ordem-de-verificacao-de-login;;2"
    },
    {
      "cells": [
        "invalid",
        "invalid",
        "naologar"
      ],
      "line": 17,
      "id": "login;em-ordem-de-verificacao-de-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 75093,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Em ordem de verificacao de Login",
  "description": "",
  "id": "login;em-ordem-de-verificacao-de-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "usuario um navegador para o facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "usuario validacao de pagina principal",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "usuario entrar \"valid\" usuario",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "usuario entrar \"valid\" senha",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "usuario \"logar\" com sucesso",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PassoLogin.usuario_um_navegador_para_o_facebook()"
});
formatter.result({
  "duration": 71680,
  "status": "passed"
});
formatter.match({
  "location": "PassoLogin.usuario_validacao_de_pagina_principal()"
});
formatter.result({
  "duration": 53760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 16
    }
  ],
  "location": "PassoLogin.usuario_entrar_valido_usuario(String)"
});
formatter.result({
  "duration": 114773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 16
    }
  ],
  "location": "PassoLogin.usuario_entrar_valido_senha(String)"
});
formatter.result({
  "duration": 81920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logar",
      "offset": 9
    }
  ],
  "location": "PassoLogin.usuario_logar_com_sucesso(String)"
});
formatter.result({
  "duration": 414293,
  "status": "passed"
});
formatter.after({
  "duration": 46507,
  "status": "passed"
});
formatter.before({
  "duration": 50346,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Em ordem de verificacao de Login",
  "description": "",
  "id": "login;em-ordem-de-verificacao-de-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "usuario um navegador para o facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "usuario validacao de pagina principal",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "usuario entrar \"invalid\" usuario",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "usuario entrar \"invalid\" senha",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "usuario \"naologar\" com sucesso",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PassoLogin.usuario_um_navegador_para_o_facebook()"
});
formatter.result({
  "duration": 162987,
  "status": "passed"
});
formatter.match({
  "location": "PassoLogin.usuario_validacao_de_pagina_principal()"
});
formatter.result({
  "duration": 181760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 16
    }
  ],
  "location": "PassoLogin.usuario_entrar_valido_usuario(String)"
});
formatter.result({
  "duration": 208640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 16
    }
  ],
  "location": "PassoLogin.usuario_entrar_valido_senha(String)"
});
formatter.result({
  "duration": 514986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naologar",
      "offset": 9
    }
  ],
  "location": "PassoLogin.usuario_logar_com_sucesso(String)"
});
formatter.result({
  "duration": 237226,
  "status": "passed"
});
formatter.after({
  "duration": 179200,
  "status": "passed"
});
});