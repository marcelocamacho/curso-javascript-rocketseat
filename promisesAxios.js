// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
axios.get('https://api.github.com/users/marcelocamacho')
    .then(function(response) {
        console.log(response)
    }).catch(function(error) {
        console.warn(error)
    });