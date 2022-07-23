function generateMarkdown(data) {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <title>Team Profile</title>
    </head>
    <body>
        <header>My Team</header>
        
        <article class="team">
            <div class="employees">
                <h1>${data.name}</h1>
                <h2><span class="material-icons md-36">face</span>${data.role}</h2>
                <div class="employee-info">
                    <table>
                        <tr>
                            <td>Id:</td>
                            <td>${data.id}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><a href="${data.email}">${data.email}</a></td>
                        </tr>
                        <tr>
                            <td>Office Number:</td>
                            <td>${data.officeNumber}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </article>
    
    `
}


module.exports = generateMarkdown;