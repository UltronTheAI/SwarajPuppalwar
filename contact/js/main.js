async function post() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var text = document.getElementById('text').value;
    fetch(`https://formspree.io/f/myyawyvy`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            text: text
        })
    });
    .then(response => {
         document.querySelector('.a3').style.display="none";document.querySelector('.a2').style.display="none";document.querySelector('.a1').style.display="none";document.querySelector('.a4').style.display="none";document.querySelector('.abc').style.display="flex";
        fetch(`/contact/result/index.html`)
        .then(response => response.text())
        .then(data => {
            if (response.ok) {
                document.documentElement.innerHTML = data.replace('@$title', 'Email sended!').replace('@$text', 'Your email was sended sucessfully, we will reply you with in 2 days, with our email `epicdeveloper14@gmail.com`!')
            } else {
                document.documentElement.innerHTML = data.replace('@$title', 'Failed to send email!').replace('@$text', 'Your email was not sended sucessfully, try again!')
            }
        })
    })
}
