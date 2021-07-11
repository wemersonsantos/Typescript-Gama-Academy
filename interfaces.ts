//?Só existe no typescript

interface Usuario {//! Usar interface ao inves de type alias
    nome: string;
    email: string;
    address?: string;
}

function getUsers(): Usuario{
    return{
        nome: 'Vitor',
        email: 'vitor@vitor.com'
    }
}

function setUsers(usuario: Usuario){
    //* ...
}