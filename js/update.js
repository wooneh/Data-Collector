var CLIENT_ID = "";
var API_KEY = "";
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES = "https://www.googleapis.com/auth/spreadsheets";
var submit = document.getElementById('submit');

/**
*  On load, called to load the auth2 library and API client library.
*/
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        submit.onclick = handleAuthClick;
    }, function (error) {
        console.log(error);
    });
}

/**
 *  Authorize the user if not authorized, otherwise submit the data.
 */
function handleAuthClick(event) {
    if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
        var params = {
            spreadsheetId: '',
            range: 'Sheet1!A:A',
            valueInputOption: 'USER_ENTERED'
        };

        var contents = {
            values: [[document.getElementById('date').innerHTML,
            document.getElementById('temp').innerHTML,
            document.getElementById('weather').innerHTML,
            document.getElementById('walking').children[1].innerHTML,
            document.getElementById('running').children[1].innerHTML,
            document.getElementById('dog').children[1].innerHTML,
            document.getElementById('lime').children[1].innerHTML
            ]]
        };

        var request = gapi.client.sheets.spreadsheets.values.append(params, contents);
        request.then(function (response) {
            console.log(response.result);
        }, function (reason) {
            console.error('error: ' + reason.result.error.message);
        });

    } else {
        gapi.auth2.getAuthInstance().signIn();
    }
}

/**
 *  Take the data collected to be sent to the spreadsheet
 */
function getData() {
    var data = [document.getElementById('date').innerHTML,
        document.getElementById('temp').innerHTML,
        document.getElementById('weather').innerHTML,
        document.getElementById('walking').children[1].innerHTML,
        document.getElementById('running').children[1].innerHTML,
        document.getElementById('dog').children[1].innerHTML,
        document.getElementById('lime').children[1].innerHTML
    ];
}