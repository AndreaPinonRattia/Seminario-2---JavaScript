//Pedir los datos JSON de un usuario con la API fake
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

//URL de los posts con filtrado userId=1
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => response.json())
      .then(json => console.log(json))

//Funciones de alto nivel: map todos los titulos, filter los de mas de 20 letras y comparar para obtener orden alfabetico
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => response.json())
      .then(combined => {
            const result = combined
            .map(post => post.title)
            .filter(post => post.length >= 20)
            .sort((a, b) => a.localeCompare(b));

            console.log(result);
      }
      )