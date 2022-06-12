var getUserRepos = function (user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });
};


// https://courses.bootcampspot.com/courses/2193/pages/6-dot-2-3-add-the-search-form?module_item_id=567592
getUserRepos();