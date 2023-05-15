import React from 'react'

export default function Member() {
    return (
        <div>
            
            <div className="text-danger">
                <h1>Member Table</h1>
            </div>
            <div class="container mt-3">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <img src='./images/02.jpg' class="img-thumbnail" alt="Cinque Terre" width="50" high="50" /></td>
                            <td>Jai Sai Pendant</td>
                            <td>092-459-2159</td>
                            <td><a href="#" class="btn btn-primary">Read more</a></td>

                        </tr>
                        <tr>
                            <td>
                                <img src='./images/03.jpg' class="img-thumbnail" alt="Cinque Terre" width="50" high="50" /></td>
                            <td>Jai Sai Pendant</td>
                            <td>098-267-1274</td>
                            <td><a href="#" class="btn btn-primary">Read more</a></td>
                        </tr>
                        <tr>
                            <td>
                                <img src='./images/04.jpg' class="img-thumbnail" alt="Cinque Terre" width="50" high="50" /></td>
                            <td>Jai Sai Pendant</td>
                            <td>084-367-4952</td>
                            <td><a href="#" class="btn btn-primary">Read more</a></td>
                        </tr>
                        <tr>
                            <td>
                                <img src='./images/05.jpg' class="img-thumbnail" alt="Cinque Terre" width="50" high="50" /></td>
                            <td>Jai Sai Pendant</td>
                            <td>086-297-5973</td>
                            <td><a href="#" class="btn btn-primary">Read more</a></td>
                        </tr>
                        <tr>
                            <td>
                                <img src='./images/07.jpg' class="img-thumbnail" alt="Cinque Terre" width="50" high="50" /></td>
                            <td>Jai Sai Pendant</td>
                            <td>088-267-1597</td>
                            <td><a href="#" class="btn btn-primary">Read more</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}