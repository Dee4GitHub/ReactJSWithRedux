function Card2(props){
    //const title ="React From the Beginning";
    //const name ="Robert Bunch";
    console.log(props);
    return (
        <div className="row">
            <div className="col s2">
                <div className="card hoverable small">
                    <div className="card-image">
                        <img src="https://picsum.photos/400/400" />
                    </div>
                    <div className="card-content">
                        {/* <p>{title}</p> */}
                        {/* <p>{name}</p> */}
                        <p>React From the Beginning</p>
                        <p>Robert Bunch</p>
                    </div>
                    <div className="card-action">
                        <a href="#">$9.99</a>
                    </div>
                </div>
            </div>	
        </div>
    )
}