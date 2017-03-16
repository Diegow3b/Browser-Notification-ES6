'use strict';

	class Notificacao {

	    constructor(options = {}) {

	        let defaults = {
	            titulo:     "Titulo Padrão",
	            body:       "Mensagem Padrão",
	            icon:       "https://pbs.twimg.com/profile_images/686359431664238592/VEc23RGt.png",
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
	    }

	    pedirPermissao(){
	        if (Notification.permission !== "granted"){
	            Notification.requestPermission();
                }
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
	    }

	    callAction(notification){
	        if (this.settings.action){
	            notification.onclick = function () {
		        window.open(this.settings.action);
	            }
	        }
	    }

	    notificar(body="", icon=""){
	        if (this.verificaPermissao()) {            
	            let notification = new Notification(this.settings.titulo, {
		        icon: (icon ? icon : this.settings.icon),
		        body: (body ? body : this.settings.body),
	            });

                    this.callAction(notification);
	        }else{
	            console.log('Permissões não foram ativadas')
	        }
	    }
	}
