# Node_project
## Mi primer acercamiento a Node

<p align="center">
    <a href="#">
        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="Javascript" />
    </a>
    <a href="#">
        <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express" />
    </a>
    <a href="#">
        <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres" />
    </a>
</p>
El proyecto consiste en una rest API con FastAPI implementando autenticacion con JWT, esta consta de varias rutas:




El proyecto consiste en una rest API con node js. Esta consta de varias rutas:
<table style="width:100%">
    <tr>
        <th>Metodo</th>
        <th>Ruta</th>
        <th>Nombre</th>
        <th>Funcion</th>
    </tr>
    <tr>
        <td><em>GET</em></td>
        <td>getUsers</td>
        <td>/users</td>
        <td>Obtiene todos los usuarios registrados</td>
    </tr>
    <tr>
        <td><em>GET</em></td>
        <td>getUserbyId</td>
        <td>/users/id</td>
        <td>Obtiene el usuario con el id especificado</td>
    </tr>
    <tr>
        <td><em>POST</em></td>
        <td>createUser</td>
        <td>/users</td>
        <td>Crea un usuario</td>
    </tr>
    <tr>
        <td><em>DELETE</em></td>
        <td>deleteUser</td>
        <td>/users/id</td>
        <td>Elimina el usuario con el especificado</td>
    </tr>
    <tr>
        <td><em>PUT</em></td>
        <td>updateUser</td>
        <td>/users/id</td>
        <td>Actualiza el usuario con el especificado</td>
    </tr>
</table>