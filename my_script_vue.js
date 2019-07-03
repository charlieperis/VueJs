var app = new Vue({
    el: '#app',
    data: {
        titulo: 'La Verdulería de Charlitos',
        mensaje: 'Stock de Frutas',
        mss: '',
        frutas: [
            { nombre: 'Naranjas', cantidad: 5 },
            { nombre: 'Peras', cantidad: 0 },
            { nombre: 'Sandías', cantidad: 7 }
        ],
        nuevaFruta: '',
    },

    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta = ''
        }
    }
});