const app = new Vue({
		el: "#app",
		data: {
			nuevaTarea: '',
			tareas: [],
			isVisible: true, // Mostrar aviso Lista Vacia, por defecto
		},
		methods: {
			guardarTarea(){
				if(this.nuevaTarea != ""){
					this.tareas.push(this.nuevaTarea);
					this.nuevaTarea = "";
					this.isVisible = false;
				}
			},
			eliminarTarea(index){
				this.tareas.splice(index, 1);
				if( this.tareas.length < 1 ){
					this.isVisible = true;
				}
			},
		},
});