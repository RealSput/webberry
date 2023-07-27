const login = async (username, password) => {
    let req = await fetch('/auth', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username, password
        })
    });
    req = await req.json();
    sessionStorage.setItem('auth', req.success + 0);
    return req.success;
}
document.querySelector('#loginButton').onclick = async () => {
    let is_correct = await login(document.querySelector('#username').value, document.querySelector('#password').value);
    console.log(is_correct);
    if (is_correct) {
        location.href += 'interface.html';
    } else {
        alert("Wrong username or password! Please try again.");
    }
}
