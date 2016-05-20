// Global variables
var documents_table = $("#documents_table")[0];

console.log(documents_table);
var received_document_table = document.getElementById("received_document_table");
var sent_document_table = document.getElementById("sent_document_table"); 
var documents_table_header = documents_table.createTHead();
var received_document_table_header = received_document_table.createTHead();
var sent_document_table_header = sent_document_table.createTHead();


// Inserting table header
function insertDocumentTableHeaders() {

    var row = documents_table_header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<strong>Document Name</strong>";
    cell = row.insertCell(1);
    cell.innerHTML = "<strong>Requester</strong>";
    cell = row.insertCell(2);
    cell.innerHTML = "<strong>Date</strong>";
    var cell = row.insertCell(3);
    cell.innerHTML = "<strong>Type</strong>";
    var cell = row.insertCell(4);
    cell.innerHTML = "<strong>Status</strong>";
    cell = row.insertCell(5);
    cell.innerHTML = "<strong>Submit</strong>"; 
    
}

function insertReceivedDocumentTableHeaders() {

    var row = received_document_table_header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<strong>Document Name</strong>";
    cell = row.insertCell(1);
    cell.innerHTML = "<strong>Requester</strong>";
    cell = row.insertCell(2);
    cell.innerHTML = "<strong>Date</strong>";
    var cell = row.insertCell(3);
    cell.innerHTML = "<strong>Type</strong>";
    var cell = row.insertCell(4);
    cell.innerHTML = "<strong>Status</strong>";
    cell = row.insertCell(5);
    cell.innerHTML = "<strong>Submit</strong>"; 
    
}

function insertSentDocumentTableHeaders() {

    var row = sent_document_table_header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<strong>Document Name</strong>";
    cell = row.insertCell(1);
    cell.innerHTML = "<strong>Requester</strong>";
    cell = row.insertCell(2);
    cell.innerHTML = "<strong>Date</strong>";
    var cell = row.insertCell(3);
    cell.innerHTML = "<strong>Type</strong>";
    var cell = row.insertCell(4);
    cell.innerHTML = "<strong>Status</strong>";
    // cell = row.insertCell(5);
    // cell.innerHTML = "<strong>Submit</strong>"; 
    
}


// Getting table values and inserting them
$.getJSON('/_getStudentDocuments',
    function (documents) {
        doc_status = ""
        
        var the_documents = documents.documents
        
        insertDocumentTableHeaders()
        // insertTableHeaders2();
        console.log(doc_status)
        console.log(the_documents)
        for (var i = 0; i < the_documents.length; i++){
            // console.log(the_documents[i]);
            doc = the_documents[i]
            
            var row = documents_table_header.insertRow(i+1);
            for (var j = 0; j < 6; j++){
                var cell = row.insertCell(j);
                if (j == 0){
                    cell.innerHTML = "<a href=\"/doc_info?name="+doc.name+"\">"+doc.name+"</a>";
                }
                if (j == 1){
                    cell.innerHTML = doc.requester;
                }
                if (j == 2){
                    cell.innerHTML = doc.date;
                }
                if (j == 3){
                    cell.innerHTML = doc.type;
                }
                if (j == 4){
                    cell.innerHTML = doc.status;
                }
                if (j == 5){
                    cell.innerHTML = 
                        "<form action=\"/send\" method=\"POST\">" +
                            "<input name=\"doc_id\" type=\"hidden\" value=\"" + i + " \"/>" + 
                            "<input name=\"user_type\" type=\"hidden\" value=\"0\"/>" + 
                            "<input type=\"submit\" value=\"Send\" class=\"btn btn-success\"/>" +
                        "</form>";

                }
            }
        }
    });

function getStudentDocuments(){
    $('#documents_button').addClass("active");
    $('#documents_sent_button').removeClass("active");
    $('#documents_received_button').removeClass("active");
    $("#all_document_row").css("display","block");
    $("#received_document_row").css("display","none");
    $("#sent_document_row").css("display","none");

    $("#documents_table tr").remove(); 
    $("#documents_table th").remove(); 

    $.getJSON('/_getStudentDocuments',
    function (documents) {
        doc_status = ""
        
        var the_documents = documents.documents
        
        insertDocumentTableHeaders()
        // insertTableHeaders2();
        console.log(doc_status)
        console.log(the_documents)
        for (var i = 0; i < the_documents.length; i++){
            // console.log(the_documents[i]);
            doc = the_documents[i]
            
            var row = documents_table_header.insertRow(i+1);
            for (var j = 0; j < 6; j++){
                var cell = row.insertCell(j);
                if (j == 0){
                    cell.innerHTML = "<a href=\"/doc_info?name="+doc.name+"\">"+doc.name+"</a>";
                }
                if (j == 1){
                    cell.innerHTML = doc.requester;
                }
                if (j == 2){
                    cell.innerHTML = doc.date;
                }
                if (j == 3){
                    cell.innerHTML = doc.type;
                }
                if (j == 4){
                    cell.innerHTML = doc.status;
                }
                if (j == 5){
                    cell.innerHTML = 
                        "<form action=\"/send\" method=\"POST\">" +
                            "<input name=\"doc_id\" type=\"hidden\" value=\"" + i + " \"/>" + 
                            "<input name=\"user_type\" type=\"hidden\" value=\"0\"/>" + 
                            "<input type=\"submit\" value=\"Send\" class=\"btn btn-success\"/>" +
                        "</form>";

                }
            }
        }
    });
}

function getSentDocuments(){
    $('#documents_received_button').removeClass("active");
    $('#documents_sent_button').addClass("active");
    $('#documents_button').removeClass("active");
    $("#all_document_row").css("display","none");
    $("#received_document_row").css("display","none");
    $("#sent_document_row").css("display","block");

    $("#sent_document_table tr").remove(); 
    $("#sent_document_table th").remove(); 

    $.getJSON('/_getStudentDocuments',
    function (documents) {
        doc_status = ""
        
        var the_documents = documents.documents
        
        insertSentDocumentTableHeaders();
        // insertTableHeaders2();
        console.log(doc_status)
        console.log(the_documents)
        var counter = 0 // Counter used to determined if there are any sent documents
        for (var i = 0; i < the_documents.length; i++){
            // console.log(the_documents[i]);
            doc = the_documents[i]
            
            if (doc.sent_status == "sent"){
                var row = sent_document_table_header.insertRow(i+1);
                for (var j = 0; j < 5; j++){
                    var cell = row.insertCell(j);
                    if (j == 0){
                        cell.innerHTML = "<a href=\"/doc_info?name="+doc.name+"\">"+doc.name+"</a>";
                    }
                    if (j == 1){
                        cell.innerHTML = doc.requester;
                    }
                    if (j == 2){
                        cell.innerHTML = doc.date;
                    }
                    if (j == 3){
                        cell.innerHTML = doc.type;
                    }
                    if (j == 4){
                        cell.innerHTML = doc.status;
                    }
                    // if (j == 5){
                    //     cell.innerHTML = 
                    //         "<form action=\"/send\" method=\"POST\">" +
                    //             "<input name=\"doc_id\" type=\"hidden\" value=\"" + i + " \"/>" + 
                    //             "<input name=\"user_type\" type=\"hidden\" value=\"0\"/>" + 
                    //             "<input type=\"submit\" value=\"Send\" class=\"btn btn-success\"/>" +
                    //         "</form>";

                    // }
                }
            }
            else{
                counter +=1;
            }
        }
        if (counter == the_documents.length) {
            $("#no_received_documents").text("No Sent Documents");
        } 
    });
        
}

function getReceivedDocuments(){
    $('#documents_received_button').addClass("active");
    $('#documents_sent_button').removeClass("active");
    $('#documents_button').removeClass("active");
    $("#all_document_row").css("display","none");
    $("#received_document_row").css("display","block");
    $("#sent_document_row").css("display","none");

    $("#received_document_table tr").remove(); 
    $("#received_document_table th").remove(); 

    $.getJSON('/_getStudentDocuments',
    function (documents) {
        doc_status = ""
        
        var the_documents = documents.documents
        
        // insertReceivedDocumentTableHeaders()
        // insertTableHeaders2();
        console.log(doc_status)
        console.log(the_documents)
        var counter = 0 // Counter used to determined if there are any sent documents
        for (var i = 0; i < the_documents.length; i++){
            // console.log(the_documents[i]);
            doc = the_documents[i]
            
            if (doc.sent_status == "received"){
                var row = received_document_table_header.insertRow(i+1);
                for (var j = 0; j < 6; j++){
                    var cell = row.insertCell(j);
                    if (j == 0){
                        cell.innerHTML = "<a href=\"/doc_info?name="+doc.name+"\">"+doc.name+"</a>";
                    }
                    if (j == 1){
                        cell.innerHTML = doc.requester;
                    }
                    if (j == 2){
                        cell.innerHTML = doc.date;
                    }
                    if (j == 3){
                        cell.innerHTML = doc.type;
                    }
                    if (j == 4){
                        cell.innerHTML = doc.status;
                    }
                    if (j == 5){
                        cell.innerHTML = 
                            "<form action=\"/send\" method=\"POST\">" +
                                "<input name=\"doc_id\" type=\"hidden\" value=\"" + i + " \"/>" + 
                                "<input name=\"user_type\" type=\"hidden\" value=\"0\"/>" + 
                                "<input type=\"submit\" value=\"Send\" class=\"btn btn-success\"/>" +
                            "</form>";

                    }
                }
            }
            else{
                counter +=1;
            }
        }
        if (counter == the_documents.length) {
            $("#no_received_documents").text("No Received Documents");
        } 
    });
        
}

function goToSend(user_type,doc_id) {
    // Function that executes when user presses the send button
   $.get('/send', 
        { user_type: user_type,
          document_id: doc_id},
        function (user) {
            console.log(user);
      });
}

function getAssistantships() {
    $('#page_header').text("My Assistantships");

    $('#documents_received_button').removeClass("active");
    $('#documents_sent_button').removeClass("active");
    $('#documents_button').addClass("active");
    $("#all_document_row").css("display","block");
    $("#received_document_row").css("display","none");
    $("#sent_document_row").css("display","none");

    $("#documents_button").attr("onclick","getAssistantships()");
    $("#documents_sent_button").attr("onclick","getSentAssistanships()");
    $("#documents_received_button").attr("onclick","getReceivedAssistantships()");
    
    $("#documents_table tr").remove(); 
    $("#documents_table th").remove(); 

    // insertTableHeaders();
    
    $.getJSON('/_getStudentAssistantships',
    function (documents) {
        
        var the_documents = documents.documents

        insertDocumentTableHeaders();
        
        console.log(doc_status)
        console.log(the_documents)
        for (var i = 0; i < the_documents.length; i++){
            // console.log(the_documents[i]);
            doc = the_documents[i]
            
            var row = documents_table_header.insertRow(i+1);
        
            for (var j = 0; j < 6; j++){
                var cell = row.insertCell(j);
                if (j == 0){
                    cell.innerHTML = "<a href=\"/doc_info?name="+doc.name+"\">"+doc.name+"</a>";
                }
                if (j == 1){
                    cell.innerHTML = doc.requester;
                }
                if (j == 2){
                    cell.innerHTML = doc.date;
                }
                if (j == 3){
                    cell.innerHTML = doc.type;
                }
                if (j == 4){
                    cell.innerHTML = doc.status;
                }
                if (j == 5){
                    cell.innerHTML = 
                        "<form action=\"/send\" method=\"POST\">" +
                            "<input name=\"doc_id\" type=\"hidden\" value=\"" + i + " \"/>" + 
                            "<input name=\"user_type\" type=\"hidden\" value=\"0\"/>" + 
                            "<input type=\"submit\" value=\"Send\" class=\"btn btn-success\"/>" +
                        "</form>";

                }
            }
        }
    });
}

function getSentAssistanships(){
    $('#documents_received_button').removeClass("active");
    $('#documents_sent_button').addClass("active");
    $('#documents_button').removeClass("active");
    $("#all_document_row").css("display","none");
    $("#received_document_row").css("display","none");
    $("#sent_document_row").css("display","block");

    $("#sent_document_table tr").remove(); 
    $("#sent_document_table th").remove(); 

    $.getJSON('/_getStudentAssistantships',
    function (documents) {
        doc_status = ""
        
        var the_documents = documents.documents
        
        insertSentDocumentTableHeaders();
        // insertTableHeaders2();
        console.log(doc_status)
        console.log(the_documents)
        var counter = 0 // Counter used to determined if there are any sent documents
        for (var i = 0; i < the_documents.length; i++){
            // console.log(the_documents[i]);
            doc = the_documents[i]
            
            if (doc.sent_status == "sent"){
                var row = sent_document_table_header.insertRow(i+1);
                for (var j = 0; j < 5; j++){
                    var cell = row.insertCell(j);
                    if (j == 0){
                        cell.innerHTML = "<a href=\"/doc_info?name="+doc.name+"\">"+doc.name+"</a>";
                    }
                    if (j == 1){
                        cell.innerHTML = doc.requester;
                    }
                    if (j == 2){
                        cell.innerHTML = doc.date;
                    }
                    if (j == 3){
                        cell.innerHTML = doc.type;
                    }
                    if (j == 4){
                        cell.innerHTML = doc.status;
                    }
                    // if (j == 5){
                    //     cell.innerHTML = 
                    //         "<form action=\"/send\" method=\"POST\">" +
                    //             "<input name=\"doc_id\" type=\"hidden\" value=\"" + i + " \"/>" + 
                    //             "<input name=\"user_type\" type=\"hidden\" value=\"0\"/>" + 
                    //             "<input type=\"submit\" value=\"Send\" class=\"btn btn-success\"/>" +
                    //         "</form>";

                    // }
                }
            }
            else{
                counter +=1;
            }
        }
        if (counter == the_documents.length) {
            $("#no_received_documents").text("No Sent Documents");
        } 
    });
        
}

function getReceivedAssistantships(){
    $('#documents_received_button').addClass("active");
    $('#documents_sent_button').removeClass("active");
    $('#documents_button').removeClass("active");
    $("#all_document_row").css("display","none");
    $("#received_document_row").css("display","block");
    $("#sent_document_row").css("display","none");

    $("#received_document_table tr").remove(); 
    $("#received_document_table th").remove(); 

    $.getJSON('/_getStudentAssistantships',
    function (documents) {
        doc_status = ""
        
        var the_documents = documents.documents
        
        // insertReceivedDocumentTableHeaders()
        // insertTableHeaders2();
        console.log(doc_status)
        console.log(the_documents)
        var counter = 0 // Counter used to determined if there are any sent documents
        for (var i = 0; i < the_documents.length; i++){
            // console.log(the_documents[i]);
            doc = the_documents[i]
            
            if (doc.sent_status == "received"){
                var row = received_document_table_header.insertRow(i+1);
                for (var j = 0; j < 6; j++){
                    var cell = row.insertCell(j);
                    if (j == 0){
                        cell.innerHTML = "<a href=\"/doc_info?name="+doc.name+"\">"+doc.name+"</a>";
                    }
                    if (j == 1){
                        cell.innerHTML = doc.requester;
                    }
                    if (j == 2){
                        cell.innerHTML = doc.date;
                    }
                    if (j == 3){
                        cell.innerHTML = doc.type;
                    }
                    if (j == 4){
                        cell.innerHTML = doc.status;
                    }
                    if (j == 5){
                        cell.innerHTML = 
                            "<form action=\"/send\" method=\"POST\">" +
                                "<input name=\"doc_id\" type=\"hidden\" value=\"" + i + " \"/>" + 
                                "<input name=\"user_type\" type=\"hidden\" value=\"0\"/>" + 
                                "<input type=\"submit\" value=\"Send\" class=\"btn btn-success\"/>" +
                            "</form>";

                    }
                }
            }
            else{
                counter +=1;
            }
        }
        if (counter == the_documents.length) {
            $("#no_received_documents").text("No Received Documents");
        } 
    });
        
}

function getTravelRequests() {
    $('#page_header').text("My Travel Requests");

    $('#documents_received_button').removeClass("active");
    $('#documents_sent_button').removeClass("active");
    $('#documents_button').addClass("active");
    $("#all_document_row").css("display","block");
    $("#received_document_row").css("display","none");
    $("#sent_document_row").css("display","none");

    $("#documents_button").attr("onclick","getTravelRequests()");
    $("#documents_sent_button").attr("onclick","getSentTravelRequests()");
    $("#documents_received_button").attr("onclick","getReceivedTravelRequests()");
    
    $("#documents_table tr").remove(); 
    $("#documents_table th").remove(); 

    // insertTableHeaders();
    
    $.getJSON('/_getStudentTravelRequests',
    function (documents) {
        
        var the_documents = documents.documents

        insertDocumentTableHeaders();
        
        console.log(doc_status)
        console.log(the_documents)
        for (var i = 0; i < the_documents.length; i++){
            // console.log(the_documents[i]);
            doc = the_documents[i]
            
            var row = documents_table_header.insertRow(i+1);
        
            for (var j = 0; j < 6; j++){
                var cell = row.insertCell(j);
                if (j == 0){
                    cell.innerHTML = "<a href=\"/doc_info?name="+doc.name+"\">"+doc.name+"</a>";
                }
                if (j == 1){
                    cell.innerHTML = doc.requester;
                }
                if (j == 2){
                    cell.innerHTML = doc.date;
                }
                if (j == 3){
                    cell.innerHTML = doc.type;
                }
                if (j == 4){
                    cell.innerHTML = doc.status;
                }
                if (j == 5){
                    cell.innerHTML = 
                        "<form action=\"/send\" method=\"POST\">" +
                            "<input name=\"doc_id\" type=\"hidden\" value=\"" + i + " \"/>" + 
                            "<input name=\"user_type\" type=\"hidden\" value=\"0\"/>" + 
                            "<input type=\"submit\" value=\"Send\" class=\"btn btn-success\"/>" +
                        "</form>";

                }
            }
        }
    });
}

function getSentTravelRequests(){
    $('#documents_received_button').removeClass("active");
    $('#documents_sent_button').addClass("active");
    $('#documents_button').removeClass("active");
    $("#all_document_row").css("display","none");
    $("#received_document_row").css("display","none");
    $("#sent_document_row").css("display","block");

    $("#sent_document_table tr").remove(); 
    $("#sent_document_table th").remove(); 

    $.getJSON('/_getStudentTravelRequests',
    function (documents) {
        doc_status = ""
        
        var the_documents = documents.documents
        
        insertSentDocumentTableHeaders();
        // insertTableHeaders2();
        console.log(doc_status)
        console.log(the_documents)
        var counter = 0 // Counter used to determined if there are any sent documents
        for (var i = 0; i < the_documents.length; i++){
            // console.log(the_documents[i]);
            doc = the_documents[i]
            
            if (doc.sent_status == "sent"){
                var row = sent_document_table_header.insertRow(i+1);
                for (var j = 0; j < 5; j++){
                    var cell = row.insertCell(j);
                    if (j == 0){
                        cell.innerHTML = "<a href=\"/doc_info?name="+doc.name+"\">"+doc.name+"</a>";
                    }
                    if (j == 1){
                        cell.innerHTML = doc.requester;
                    }
                    if (j == 2){
                        cell.innerHTML = doc.date;
                    }
                    if (j == 3){
                        cell.innerHTML = doc.type;
                    }
                    if (j == 4){
                        cell.innerHTML = doc.status;
                    }
                    // if (j == 5){
                    //     cell.innerHTML = 
                    //         "<form action=\"/send\" method=\"POST\">" +
                    //             "<input name=\"doc_id\" type=\"hidden\" value=\"" + i + " \"/>" + 
                    //             "<input name=\"user_type\" type=\"hidden\" value=\"0\"/>" + 
                    //             "<input type=\"submit\" value=\"Send\" class=\"btn btn-success\"/>" +
                    //         "</form>";

                    // }
                }
            }
            else{
                counter +=1;
            }
        }
        if (counter == the_documents.length) {
            $("#no_received_documents").text("No Sent Documents");
        } 
    });
        
}

function getReceivedTravelRequests(){
    $('#documents_received_button').addClass("active");
    $('#documents_sent_button').removeClass("active");
    $('#documents_button').removeClass("active");
    $("#all_document_row").css("display","none");
    $("#received_document_row").css("display","block");
    $("#sent_document_row").css("display","none");

    $("#received_document_table tr").remove(); 
    $("#received_document_table th").remove(); 

    $.getJSON('/_getStudentTravelRequests',
    function (documents) {
        doc_status = ""
        
        var the_documents = documents.documents
        
        // insertReceivedDocumentTableHeaders()
        // insertTableHeaders2();
        console.log(doc_status)
        console.log(the_documents)
        var counter = 0 // Counter used to determined if there are any sent documents
        for (var i = 0; i < the_documents.length; i++){
            // console.log(the_documents[i]);
            doc = the_documents[i]
            
            if (doc.sent_status == "received"){
                var row = received_document_table_header.insertRow(i+1);
                for (var j = 0; j < 6; j++){
                    var cell = row.insertCell(j);
                    if (j == 0){
                        cell.innerHTML = "<a href=\"/doc_info?name="+doc.name+"\">"+doc.name+"</a>";
                    }
                    if (j == 1){
                        cell.innerHTML = doc.requester;
                    }
                    if (j == 2){
                        cell.innerHTML = doc.date;
                    }
                    if (j == 3){
                        cell.innerHTML = doc.type;
                    }
                    if (j == 4){
                        cell.innerHTML = doc.status;
                    }
                    if (j == 5){
                        cell.innerHTML = 
                            "<form action=\"/send\" method=\"POST\">" +
                                "<input name=\"doc_id\" type=\"hidden\" value=\"" + i + " \"/>" + 
                                "<input name=\"user_type\" type=\"hidden\" value=\"0\"/>" + 
                                "<input type=\"submit\" value=\"Send\" class=\"btn btn-success\"/>" +
                            "</form>";

                    }
                }
            }
            else{
                counter +=1;
            }
        }
        if (counter == the_documents.length) {
            $("#no_received_documents").text("No Received Documents");
        } 
    });
        
}  

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    $('#myModal').css("display","none");
    $('#documents_button').css("display","block");
    $('#documents_received_button').css("display","block");
    $('#documents_sent_button').css("display","block");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        $('#myModal').css("display","none");
        $('#documents_button').css("display","block");
        $('#documents_received_button').css("display","block");
        $('#documents_sent_button').css("display","block");
    }
}

function showAssistantshipModal(){
    console.log(modal);
    $('#myModal').css("display","block");
    $('#documents_button').css("display","none");
    $('#documents_received_button').css("display","none");
    $('#documents_sent_button').css("display","none");
    // modal.css.display = "block";
    $("#modal_title").text('New Assistantship Request');
    $('#modal_body').empty();
    $('#modal_body').append(" <p>Student Name: Jessica Cotrina Revilla</p><p>Student Number: 502-15-6168</p><p>Department: Electrical Engineering</p><p>Major: Computer Engineering</p><form> <input type=\"text\" pattern=\"[A-Za-z]\" class=\"form-control\" placeholder=\"Advisor\" id=\"advisor\"   value=\"\" required> <br>  <input type=\"text\" pattern=\"[A-Za-z]\" class=\"form-control\" placeholder=\"Project/Class\" id=\"project\"  value=\"\" required> <br> <input type=\"text\" pattern=\"[A-Za-z]\" class=\"form-control\" placeholder=\"Task\" id=\"task\"   value=\"\" required> <br> <select id=\"type\" class=\"form-control\"> <option value=\"research\">Research</option> <option value=\"ta\">TA</option> </select></br> <input  value=\"Create and Send\" onclick=\"insertAssistantshipAndSend()\" class=\"btn btn-lg btn-success\" style=\"color:white; margin-left:325px; background-color: #0DE832\"><input  value=\"Create\" onclick=\"insertAssistantship()\" class=\"btn btn-lg btn-success\" style=\"color:white; display:inline-block; margin-left: 20px\"><br></form>");
}

function showTravelModal(){
    $('#myModal').css("display","block");
    $('#documents_button').css("display","none");
    $('#documents_received_button').css("display","none");
    $('#documents_sent_button').css("display","none");
    $("#modal_title").text('New Travel Request');
    $('#modal_body').empty();
    $('#modal_body').append("<p>Student Name: Jessica Cotrina Revilla</p><p>Student Number: 502-15-6168</p><p>Department: Electrical Engineering</p><p>Major: Computer Engineering</p><form><input type=\"text\" pattern=\"[A-Za-z]\"  class=\"form-control\" placeholder=\"Conference name\" id=\"name\"   value=\"\" required><br><input type=\"text\" pattern=\"[A-Za-z]\"  class=\"form-control\" placeholder=\"Travel Location\" id=\"travelLocation\"   value=\"\" required><br><input type=\"date\" pattern=\"[A-Za-z]\" class=\"form-control\" placeholder=\"Departure Date\" id=\"departureDate\"   value=\"\" required><br><input type=\"date\" pattern=\"[A-Za-z]\" class=\"form-control\" placeholder=\"Return date\" id=\"returnDate\"   value=\"\" required><br><input type=\"text\" pattern=\"[A-Za-z]\" class=\"form-control\" placeholder=\"Advisor\" id=\"advisor\"  value=\"\" required><br><input type=\"text\" pattern=\"[A-Za-z]\" class=\"form-control\" placeholder=\"Purpose\" id=\"purpose\"   value=\"\" required></br><input  value=\"Create and Send\" onclick=\"insertTravelAndSend()\" class=\"btn btn-lg btn-success\" style=\"color:white; margin-left:325px; background-color: #0DE832\"><input  value=\"Create\" onclick=\"insertTravel()\" class=\"btn btn-lg btn-success\" style=\"color:white; display:inline-block; margin-left: 20px\"><br></form>");
}

function insertAssistantship(){
    var advisor = $('#advisor').val();
    var project = $('#project').val();
    var task    = $('#task').val();
    var a_type  = $('#type option:selected').text(); 
    console.log(advisor.length)
    if (advisor.length > 1 && project.length > 1 && task.length > 1 && a_type.length > 1){
        $.getJSON('/_insertAssistantship',{
            user_type: 0,
            advisor:   advisor,
            project:   project,
            task:      task,
            a_type:    a_type
        },
        function (created) {
            if (created.status == 0){
                alert("Assistantship succesfully created!");
                modal.css.display = "none";
                window.location.assign("/student");
            }
            else{
                alert("ERROR: Could not create assistantship!");
            }

        });
    }
    else{
        alert("ERROR: Please fill al the fields!");
    }
    
}

function insertAssistantshipAndSend(){
    var advisor = $('#advisor').val();
    var project = $('#project').val();
    var task    = $('#task').val();
    var a_type  = $('#type option:selected').text(); 
    console.log(advisor.length);
    console.log(project.length);
    console.log(task.length);
    console.log(a_type.length);
    if (advisor.length >= 1 && project.length >= 1 && task.length >= 1 && a_type.length > 1){
        $.getJSON('/_insertAssistantship',{
            user_type: 0,
            advisor:   advisor,
            project:   project,
            task:      task,
            a_type:    a_type
        },
        function (created) {
            console.log(created);
            if (created.status == 0){
                alert("Assistantship succesfully created!");
                modal.css.display = "none";
                window.location.assign("/send?id="+created.id+"&name="+created.name+"&type=0");
            }
            else{
                alert("ERROR: Could not create assistantship!");
            }

        });
    }
    else{
        alert("ERROR: Please fill al the fields!");
    }
    
}

function insertTravel(){
    var name = $('#name').val();
    var travel_location = $('#travelLocation').val();
    var departure_date    = $('#departureDate').val();
    var return_date = $('#returnDate').val(); 
    var advisor    = $('#advisor').val();
    var purpose = $('#purpose').val();
    console.log(name);
    console.log(travel_location);
    console.log(departure_date);
    console.log(return_date);
    console.log(advisor);
    console.log(purpose);
    if (name.length > 1 && travel_location.length > 1 && departure_date.length > 1 && return_date.length > 1 && advisor.length > 1 && purpose.length > 1){
        $.getJSON('/_insertTravelRequest',{
            user_type: 0,
            conference_name: name,
            travel_location: travel_location,
            departure_date: departure_date,
            return_date: return_date,
            advisor: advisor,
            purpose: purpose
        },
        function (created) {
            if (created.status == 0){
                alert("Assistantship succesfully created!");
                modal.css.display = "none";
                window.location.assign("/student");
            }
            else{
                alert("ERROR: Could not create assistantship!");
            }

        });
    }
    else{
        alert("ERROR: Please fill al the fields!");
    }
    
}

function insertTravelAndSend(){
    var name = $('#name').val();
    var travel_location = $('#travelLocation').val();
    var departure_date    = $('#departureDate').val();
    var return_date = $('#returnDate').val(); 
    var advisor    = $('#advisor').val();
    var purpose = $('#purpose').val();
    console.log(name);
    console.log(travel_location);
    console.log(departure_date);
    console.log(return_date);
    console.log(advisor);
    console.log(purpose);
    if (name.length > 1 && travel_location.length > 1 && departure_date.length > 1 && return_date.length > 1 && advisor.length > 1 && purpose.length > 1){
        $.getJSON('/_insertTravelRequest',{
            user_type: 0,
            conference_name: name,
            travel_location: travel_location,
            departure_date: departure_date,
            return_date: return_date,
            advisor: advisor,
            purpose: purpose
        },
        function (created) {
            console.log(created);
            if (created.status == 0){
                alert("Assistantship succesfully created!");
                modal.css.display = "none";
                window.location.assign("/send?id="+created.id+"&name="+created.name+"&type=0");
            }
            else{
                alert("ERROR: Could not create assistantship!");
            }

        });
    }
    else{
        alert("ERROR: Please fill al the fields!");
    }
    
}