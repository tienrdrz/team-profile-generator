function generateEngineer(data) {
    return `
        <article class="team">
            <div class="employees">
                <h1>${data.name}</h1>
                <h2><span class="material-icons md-36">engineering</span>${data.role}</h2>
                <div class="employee-info">
                    <table>
                        <tr>
                            <td>Id:</td>
                            <td>${data.id}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><a href="mailto:${data.email}">${data.email}</a></td>
                        </tr>
                        <tr>
                            <td>Github:</td>
                            <td><a href='https://github.com/${data.github}'>${data.github}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </article>
    
    `
}


module.exports = generateEngineer;