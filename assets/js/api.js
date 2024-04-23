const url = "https://vit.vivacollege.in/OTRS_API/OTRS/issuesolved";
var headers = {}

fetch(url, {
    method: "GET",
    mode: 'cors',
    headers: headers
})
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.error)
        }
        return response.json();
    })
    .then(data => {
        const paragraph = document.getElementById('issuesolved');
        paragraph.setAttribute('data-purecounter-end', data);

        getElementById('issuesolved').classList.replace('count1','count2');
        
        const element = document.getElementById("issueplus");
        element.remove();
    })
    .catch(function (error) {
        const paragraph = document.getElementById('issuesolved');
        paragraph.setAttribute('data-purecounter-end', '2407');
    });

const url2 = "https://vit.vivacollege.in/OTRS_API/OTRS/project";
var headers = {}

fetch(url2, {
    method: "GET",
    mode: 'cors',
    headers: headers
})
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.error)
        }
        return response.json();
    })
    .then(data => {        
        const paragraph = document.getElementById('project');
        paragraph.setAttribute('data-purecounter-end', data);

        getElementById('project').classList.replace('count1','count2');
        
        const element1 = document.getElementById("proplus");
        element1.remove();
    })
    .catch(function (error) {
        const paragraph = document.getElementById('project');
        paragraph.setAttribute('data-purecounter-end', '73');
    });