# Browser-Notification-ES6
Pure Javascript ES6 for Browser Notification

[Javascript] Utilizando o Chrome Notification ES6

## Criação / Creation
	'use strict';

	class Notificacao {

	    constructor(options = {}) {

		let defaults = {
		    titulo:     "Titulo Padrão",
		    body:       "Mensagem Padrão",
		    icon:       "/static/admin/plugins/notificacao/images/ICON_CHECK.png",
		    status:     1,
		    action:     ""
		}

		let settings = Object.assign({}, defaults, options);

		this.settings = settings;


		this.definirStatus(settings.status);
		this.pedirPermissao();
	    }

	    getAttr(){
		console.log(this.settings);
	    }

	    definirStatus(status) {
		if (this.settings.icon === ""){
		    switch (status){
		    case 1:
			this.settings.icon = "/static/admin/plugins/notificacao/images/ICON_CHECK.png";
			break;
		    case 2:
			this.settings.icon = "/static/admin/plugins/notificacao/images/ICON_ERROR.png";
		    default:
			this.settings.icon = "/static/admin/plugins/notificacao/images/ICON_CHECK.png";
		    }
		}
	    }            definirStatus(status) {         

	    pedirPermissao(){
		if (Notification.permission !== "granted")
		    Notification.requestPermission();
	    }

	    verificaPermissao(){
		if (!Notification){
		    alert('Não é possivel utilizar notificações no seu navegador. Tente Google Chrome.');
		    return false;
		}

		if (Notification.permission !== "granted"){
		    Notification.requestPermission();
		    return false;
		}else{
		    return true;
		}
	    }Google Notificati

	    callAction(notification){
		if (this.settings.action){
		    notification.onclick = function () {
			window.open(this.settings.action);
		    }
		}
	    }

	    notificar(){
		if (this.verificaPermissao()) {
		    let notification = new Notification(this.settings.titulo, {
			icon: this.settings.icon,
			body: this.settings.body,
		    });

		    this.callAction(notification);
		}else{
		    console.log('Permissões não foram ativadas')
		}
	    }
	}

## Utilização / Usage
var notificacao = new Notificacao({titulo:'App Name', 
								   body:'Mensagem Default', 
								   icon:'path_do_icone', 
								   status:1,
								   action:'url_redirecionamento_ao_clicar'});
notificacao.notificar();

// ou
var notificacao = new Notificacao();
notificacao.notificar('Nova mensagem') // *A implementar essa mensagem
notificacao.notificar('Nova mensagem', status=-1) // *A implementar essa mensagem

## Observação / Obs
### Parametros / Parameters: 
	{
			titulo: string:"Titulo da Notificacao",
			message: string:"Mensagem que ira aparecer no corpo da notificacao",
			icon: string:"Path do icone que será mostrado na notificacao",
			status: number:"Status da notificação - 1 - Sucesso, 2 - Error"
			action: string:"Url que será redirecionado caso click na notificacao"
	}

## Comentários / Comments
`
	Implementação realizada no projeto Lust, onde foi inserido no core e esta sendo
	utilizado como um reforço de informação quando alguma operação é realizada pelo
	profissional
`
