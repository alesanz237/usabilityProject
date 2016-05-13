console.log('entra a db.js');

var db = {
	users: [
		{"id":0,"email":"jessica.cotrina@upr.edu","first":"Jessica","last":"Cotrina","type":0,"password":"student"},
        {"id":1,"email":"nestor.rodriguez@upr.edu","first":"Nestor","last":"Rodriguez","type":1,"password":"professor"},
        {"id":2,"email":"alida.minguela@upr.edu","first":"Alida","last":"Minguela","type":2,"password":"assistant"},
        {"id":3,"email":"jose.colom@upr.edu","first":"Jose","last":"Colom","type":3,"password":"director"}  
	],
    documents: [
    	{"id":0,"name":"TA Assistantship","type":"Assistantship","date":"28/Apr/2016, 03:05:03 PM","status":"Waiting for endorsement","progress":60,"faculty":"Electrical Engineering","major":"Computer Engineering","advisor":"Manuel Rodriguez","project":"RISC","task":"code"},
        {"id":1,"name":"Tapia Conference","type":"Travel Request","date":"28/Apr/2016, 03:05:03 PM","status":"Completed","progress":100},
        {"id":3,"name":"Tapia Conference","type":"Travel Request","date":"20/Apr/2016, 04:40:03 PM","status":"Completed","progress":100},
        {"id":4,"name":"Macbook Pro 2016","type":"Purchase Order","date":"01/May/2016, 09:00:00 AM","status":"Completed","progress":100},
    ],
    student_documents: [
        {"id":0,"name":"TA Assistantship","type":"Assistantship","date":"28/Apr/2016, 03:05:03 PM","status":"Waiting for endorsement","progress":60,"faculty":"Electrical Engineering","major":"Computer Engineering","advisor":"Manuel Rodriguez","project":"RISC","task":"code"},
        {"id":1,"name":"Tapia Conference","type":"Travel Request","date":"28/Apr/2016, 03:05:03 PM","status":"Completed","progress":100},
        {"id":3,"name":"Tapia Conference","type":"Travel Request","date":"20/Apr/2016, 04:40:03 PM","status":"Completed","progress":100},
        {"id":4,"name":"Macbook Pro 2016","type":"Purchase Order","date":"01/May/2016, 09:00:00 AM","status":"Completed","progress":100},
    ],
	assistantship_information: [
    	{"id":0,"name":"TA Assistantship","status":"Application Created","date":"17/Jan/2016, 03:05:03 PM","user":"Sandra Montalvo Solorzano","location":"Ingenieria Electrica"},
        {"id":0,"name":"TA Assistantship","status":"Application In Transit","date":"17/Jan/2016, 03:15:12 PM","user":"Sandra Montalvo Solorzano","location":"Ingenieria Electrica"},
        {"id":0,"name":"TA Assistantship","status":"Application Completed","date":"18/Jan/2016, 09:05:45 AM","user":"Sandra Montalvo Solorzano","location":"Ingenieria Electrica"},
        {"id":2,"name":"TA Assistantship","status":"Application Solicited","date":"today","user":"Jessica Cotrina Revilla","location":"Ingenieria Electrica"},
        {"id":3,"name":"Research Assistantship","status":"Application Solicited","date":"today","user":"Jessica Cotrina Revilla","location":"Ingenieria Electrica"}
    ],
    travel_information: [
    	{"id":1,"name":"Tapia Conference","status":"Application Created","date":"15/Nov/2015, 09:05:03 PM","user":"Sandra Montalvo Solorzano","location":"Ingenieria Electrica"},
        {"id":1,"name":"Tapia Conference","status":"Application In Transit","date":"15/Nov/2015, 10:15:12 PM","user":"Sandra Montalvo Solorzano","location":"Ingenieria Electrica"},
        {"id":1,"name":"Tapia Conference","status":"Application Completed","date":"20/Nov/2016, 04:05:45 PM","user":"Sandra Montalvo Solorzano","location":"Ingenieria Electrica"},
        {"id":1,"name":"Tapia Conference","status":"Department Endorsement","date":"01/Dec/2016, 11:35:53 AM","user":"Jose Colom","location":"Ingenieria Electrica"},
        {"id":2,"name":"Grace Hoper Conference","status":"Travel Requested","date":"Today","user":"Jessica Cotrina Revilla","location":"Ingenieria Electrica"},
        {"id":3,"name":"Tapia Conference","status":"Travel Requested","date":"Today","user":"Nestor Rodriguez","location":"Ingenieria Electrica"}
    ],
    purchase_information: [
        {"id":4,"name":"Macbook Pro 2016","status":"Application Created","date":"today","user":"Nestor Rodriguez","location":"Ingenieria Electrica"},
        {"id":5,"name":"Macbook 2016","status":"Application Created","date":"today","user":"Nestor Rodriguez","location":"Ingenieria Electrica"}
    ],
    insertDocument:function(){
    	documents.push({"id":2,"name":"name","type":"Assistantship","date":"28/Apr/2016, 03:05:03 PM","status":"Application Started","progress":0,"faculty":"Elctrical Engineering","major":"Computer Engineering","advisor":"advisor","project":"project","task":"task"})
    }

};