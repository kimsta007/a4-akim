export default function Login() {   
    
    const submit = async () => {
        let json = {username: "Akim", password: "1234"}; 
      
        await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(json),
        }).then(async function (response) {
            let result = await response.json();
            if (result.success) {
                window.location.href = result.redirectUrl; 
            } else {
                console.error(result.message); 
            }
        });
      };

    return (
        <div>
        <h1>Login</h1>
        <form onSubmit={submit}>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}