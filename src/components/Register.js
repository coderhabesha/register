function Register() {
    async function handleSubmit(event) {
        event.preventDefault();
        
        const myFormData = new FormData(event.target);

        console.log(myFormData);

        const formDataObj = {};
        myFormData.forEach((value, key) => (formDataObj[key] = value));

        console.log(formDataObj);

        await fetch("http://localhost:8080/user/", {
            headers: new Headers({'content-type': 'application/json'}),    
            method: "POST",
            body: JSON.stringify(formDataObj),
        });
    }



    return (
        <div className="App">
        <h5>Create your personal account</h5>
        <form onSubmit={handleSubmit}>
            <p>
                <label>Username</label><br/>
                <input type="text" name="username" required />
            </p>
            <p>
                <label>Email address</label><br/>
                <input type="email" name="email" required />
            </p>
            <p>
                <button id="sub_btn" type="submit">Register</button>
            </p>
        </form>
        </div>
    )
}

export default Register;