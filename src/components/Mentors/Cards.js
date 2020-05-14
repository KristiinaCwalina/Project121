import React from "react";




function Cards() {
    return (
      

        <div className="container-fluid padding">
        <div className="row text-center padding">
            <div className="col-12">
                <h3 className="display-4">Meet our Mentors</h3>
            </div>
        </div>
       
        <div className="row padding">
       
            <div className="col-md-4">
           
                <div className="card">
                    <div className="img-top" style={{display: "flex", justifyContent:"center"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf2PNJRuzk7SnUuq7OuOq77LQXU28j1YmyHS7FmgdYRfMg85rK&usqp=CAU" alt="default profile holder" className="profile-pic"/>
                    </div>
                    <a className="mentorslink" href="http://localhost:3000/profile">
                    <h5 className="card-title">Mentor One</h5>
                    </a>
                    <p className="card-text-small"><small className="text-muted">Teaches Javascript</small></p>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae minus quo suscipit, ab asperiores, dolores, autem consectetur dolorum cumque eius modi. Unde impedit magnam ratione incidunt laborum provident nemo!</p>
                    
                </div>
               
            </div>
           
            <div className="col-md-4">
                <div className="card">
                    <div className="img-top" style={{display: "flex", justifyContent:"center"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf2PNJRuzk7SnUuq7OuOq77LQXU28j1YmyHS7FmgdYRfMg85rK&usqp=CAU" alt="default profile holder" className="profile-pic"/>
                    </div>
                    <a className="mentorslink" href="http://localhost:3000/profile">
                    <h5 className="card-title">Mentor Two</h5>
                    </a>
                    <p className="card-text-small"><small className="text-muted">Teaches HTML</small></p>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae minus quo suscipit, ab asperiores, dolores, autem consectetur dolorum cumque eius modi. Unde impedit magnam ratione incidunt laborum provident nemo!</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="img-top" style={{display: "flex", justifyContent:"center"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf2PNJRuzk7SnUuq7OuOq77LQXU28j1YmyHS7FmgdYRfMg85rK&usqp=CAU" alt="default profile holder" className="profile-pic"/>
                    </div>
                    <a className="mentorslink" href="http://localhost:3000/profile">
                    <h5 className="card-title">Mentor Three</h5>
                    </a>
                    <p className="card-text-small"><small className="text-muted">Teaches React</small></p>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae minus quo suscipit, ab asperiores, dolores, autem consectetur dolorum cumque eius modi. Unde impedit magnam ratione incidunt laborum provident nemo!</p>
                </div>
            </div>
        </div>
    </div>
    
   );
}
  export default Cards;