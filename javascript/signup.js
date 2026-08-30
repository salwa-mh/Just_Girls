var all_usernames = ["admin", "zia", "zeinab"]; //This is predefined accounts just for testing.
var all_passwords = ["12345", "2006", "1997"];
var users_counter = 3; //The next position to save in + num of users.

var entered_username, entered_password;

function sign_up()
{
    var usernamePattern = /^[a-zA-Z0-9]{3,}$/;
    var passwordPattern = /^.{6,}$/;

    entered_username = document.getElementById("username").value;
    entered_password = document.getElementById("password").value;

    //First, Check empty fields.
    if (entered_username == "" || entered_password == "")
    {
        alert("All fields here is required.");
        return;
    }
    
    //Second, Username validation.
    if (!usernamePattern.test(entered_username))
    {
        alert("Username must be at least 3 characters (letters or numbers only).");
        return;
    }

    //Third, Password validation.
    if (!passwordPattern.test(entered_password))
    {
        alert("Password must be at least 6 characters.");
        return;
    }

    for (var counter = 0; counter < users_counter; counter++)
    {
        //Fourth, Check username availability.
        if (all_usernames[counter] == entered_username && all_passwords[counter] != entered_password)
        {
            alert("This username is taken.");
            return;
        }
        //Fifth, Check saved accounts.
        else if (all_usernames[counter] == entered_username && all_passwords[counter] == entered_password)
        {
            alert("You are part of our planet already, please sign in.");
            return;
        }
        
    }

    //If passed, Save user data.
    all_usernames[users_counter] = entered_username;
    all_passwords[users_counter] = entered_password;
    users_counter++;
    alert("You joined our planet successfully.");
    window.location.href = "home.html"; //Change link later to redirect to Home Page.
}