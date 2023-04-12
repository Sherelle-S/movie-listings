const { response } = require("express")
const { json } = require("express/lib/response")

$(document).ready(function () {
    $('#title').autocomplete({
        source: async function (req, res) {
            let data = await fetch(`http://localhost:8000/search?query=${request.term}`)
                .then(results => results.json())
                .then(results => results.map(results => {
                    return {
                        label: results.title,
                        value: results.title,
                        id: results._id
                    }
                    
                }))
            response(data)
        },
        minLength: 2,
        select: function (event, ui) {
            console.log()
            fetch(`http://localhost:8000/get/${ui.item.id}`)
                .then(results => json())
                .then(results => {
                    $('#cast').empty()
                    results.cast.forEach(cast => {
                        $(cast).append(`<li>$(cast)</li>`)
                    })
                    $('img').attr('src', result.poster)

            })
        }
            
    })
})