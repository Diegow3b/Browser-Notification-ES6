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
35
                if (this.settings.icon === ""){
36
                    switch (status){
37
                    case 1:
38
                        this.settings.icon = "/static/admin/plugins/notificacao/images/ICON_CHECK.png";
39
                        break;
40
                    case 2:
41
                        this.settings.icon = "/static/admin/plugins/notificacao/images/ICON_ERROR.png";
42
                    default:
43
                        this.settings.icon = "/static/admin/plugins/notificacao/images/ICON_CHECK.png";
44
                    }
45
                }
46
            }
47
​
48
            pedirPermissao(){
49
                if (Notification.permission !== "granted")
50
                    Notification.requestPermission();
51
            }
52
​
53
            verificaPermissao(){
54
                if (!Notification){
55
                    alert('Não é possivel utilizar notificações no seu navegador. Tente Google Chrome.');
56
                    return false;
57
                }
58
​
59
                if (Notification.permission !== "granted"){
60
                    Notification.requestPermission();
61
                    return false;
62
                }else{
63
                    return true;
64
                }
65
            }Google Notificati
66
​
67
            callAction(notification){
68
                if (this.settings.action){
69
                    notification.onclick = function () {
70
                        window.open(this.settings.action);
71
                    }
72
                }
73
            }
74
​
75
            notificar(){
76
                if (this.verificaPermissao()) {
77
                    let notification = new Notification(this.settings.titulo, {
78
                        icon: this.settings.icon,
79
                        body: this.settings.body,
80
                    });
81
​
82
                    this.callAction(notification);
83
                }else{
84
                    console.log('Permissões não foram ativadas')
85
                }
86
            }

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
