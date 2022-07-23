function generateIntern(data) {
    return `   
        <article class="team">
            <div class="employees">
                <h1>${data.name}</h1>
                <h2>${data.role}</h2>
                <div class="employee-info">
                    <table>
                        <tr>
                            <td>Id:</td>
                            <td>${data.id}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>${data.email}</td>
                        </tr>
                        <tr>
                            <td>University:</td>
                            <td>${data.school}</td>
                        </tr>
                        
                    </table>
    `
}


module.exports = generateIntern;