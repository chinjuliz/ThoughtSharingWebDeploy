$(function () {

    Parse.$ = jQuery;

    // Initialize Parse with your Parse application javascript keys
    Parse.initialize("79g13wz1IMydk6CquGfFWO59rWb1AS0rJ31YSReO", "v9PfWEK1bbszImsH4YWLCzB8dHEeQyNvlCgw6GPP");
    var currentUser = Parse.User.current();
    if (!currentUser) {
        location.href = "/index.html";
    }

    $("#btnSignOut").click(function () {
        Parse.User.logOut();
        location.href = "/index.html";
    });
});