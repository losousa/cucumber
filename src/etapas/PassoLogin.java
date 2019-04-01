package etapas;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class PassoLogin{
	
	@Before
	public void antes(){
		System.out.println("Lançando no navegador");
	}
	@After
	public void depois(){
		System.out.println("Parou \n");
	}
@Given("^usuario um navegador para o facebook$")
public void usuario_um_navegador_para_o_facebook() throws Throwable {
   System.out.println("@Given -- usuario um navegador para o facebook");
}

@When("^usuario validacao de pagina principal$")
public void usuario_validacao_de_pagina_principal() throws Throwable {
	System.out.println("When -- usuario validacao de pagina principal");
}

@Then("^usuario entrar \"([^\"]*)\" usuario$")
public void usuario_entrar_valido_usuario(String usuario) throws Throwable {
   System.out.println("@Then - usuario entrar "+usuario+" usuario");
}

@And("^usuario entrar \"([^\"]*)\" senha$")
public void usuario_entrar_valido_senha(String senha) throws Throwable {
   System.out.println("@And - usuario entrar "+senha+" senha");
}

@Then("^usuario \"([^\"]*)\" com sucesso$")
public void usuario_logar_com_sucesso(String logar) throws Throwable {
    System.out.println("@Then - usuario "+logar+" com sucesso");
}
}