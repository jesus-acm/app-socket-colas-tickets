
// Comando para establecer la conexion
var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('escritorio')){
    window.location = 'incex.html';
    throw new Error('El escritorio es necesario');
}

let escritorio = searchParams.get('escritorio');
let label = $('small');

console.log(escritorio);
$('h1').text('Escritorio '+escritorio);

$('button').on('click', function(){
    socket.emit('atenderTicket', {escritorio: escritorio}, function(resp){
        if(resp === 'No hay tickets'){
            label.text(resp);
            alert (resp);
            return;
        }
        label.text('Ticket '+resp.numero);
    });
});