$(document).ready(function() {

    /**
     * @param request
     * @returns {boolean}
     */
    function CheckRequest(request) {
        return (request.readyState === 4) && (request.status === 200);
    }

    function Ex1()
    {
        $('#btn-ajax').click(function() {
            var request = new XMLHttpRequest();
            request.open('POST', 'data.txt');
            request.onreadystatechange = function() {
                if(CheckRequest(request)) {
                    $('#content').append(request.responseText);
                    console.log(request);
                }
            };
            request.send();
        });
    }

    function Ex2()
    {
        $('#btn-ajax').click(function() {
            var request = new XMLHttpRequest();
            request.open('POST', 'data.txt');
            request.onreadystatechange = function() {
                if(CheckRequest(request)) {
                    $('li').html(request.responseText);
                }
            };
            request.send();
        });
    }

    function Xml()
    {
        var request = new XMLHttpRequest();
        request.open('GET', 'data.xml');
        request.onreadystatechange = function() {
            if(CheckRequest(request)) {
                var content = $('#content');
                var names = request.responseXML.getElementsByTagName('name');
                var ages = request.responseXML.getElementsByTagName('age');
                for(var i=0; i<names.length; i++) {
                    content.append('<ul>');
                    content.append('<li> Name: ' + names[i].firstChild.nodeValue + '</li>');
                    content.append('<li> Age: ' + ages[i].firstChild.nodeValue + '</li>');
                    content.append('</ul>');
                }
            }
        };
        request.send();
    }

    function Json()
    {
        var request = new XMLHttpRequest();
        request.open('GET', 'data.xml');
        request.onreadystatechange = function() {
            if (CheckRequest(request)) {
                var students = JSON.parse(request.responseText);
                var content = $('#content');
                for (var key in students) {
                    content.append('<ul>');
                    content.append('<li> Name: ' + students[key].name + '</li>');
                    content.append('</ul>');
                }
            }
        };
    }

    //Ex1();
    //Ex2();
    //Xml();
    Json();

});