from flask import Flask, jsonify, render_template, request
from db import readDB, writeDB, updateDB
import random
import time
app = Flask(__name__)

@app.route('/_validateUser')
def getUsers():
    email =  request.args['email']
    password = request.args['password']
    users = readDB("data/users.json")["users"]
    user_type = {"type":-1}
    for user in users:
        if user["email"] == email and user["password"] == password:
            user_type = {"type":user["type"]}

    return jsonify(user_type)

@app.route('/_getStudentDocuments')
def get_StudentDocuments():
    documents = readDB('data/student_documents.json')
    return jsonify(documents)

@app.route('/_getProfessorDocuments')
def get_ProfessorDocuments():
    documents = readDB('data/professor_documents.json')
    return jsonify(documents)

@app.route('/_getAssistantDocuments')
def get_AssistantDocuments():
    documents = readDB('data/assistant_documents.json')
    return jsonify(documents)

@app.route('/_getDirectorDocuments')
def get_DirectorDocuments():
    documents = readDB('data/director_documents.json')
    return jsonify(documents)

@app.route('/_newAssistantship')
def newAssistantship():
    # documents = readDB('data/student_documents.json')
    return render_template("new_assistantship")

@app.route('/_getDocument')
def getDocument():
    doc_id = request.args["doc_id"]
    user_type = request.args["user_type"]

    if int(user_type) == 0: 
        documents = readDB('data/student_documents.json')["documents"]

    if int(user_type) == 1: 
        documents = readDB('data/professor_documents.json')["documents"]

    if int(user_type) == 2: 
        documents = readDB('data/assistant_documents.json')["documents"]

    if int(user_type) == 3: 
        documents = readDB('data/director_documents.json')["documents"]

    # print "documents",documents

    for document in documents:
        if int(document["id"]) == int(doc_id):
            doc = document

    return jsonify(doc)

@app.route('/_insertAssistantship')
def insertAssistantship():
    
    user_type = request.args['user_type']
    advisor = request.args['advisor']
    project = request.args['project']
    task = request.args['task']
    assistantship_type = request.args['a_type']
    student = request.args['student']

    print "user_type", user_type
    print "advisor", advisor
    print "project", project
    print "task", task
    print "assistantship_type", assistantship_type
    print "student", student

    # student:   student
    inserted = {'status':-1}
    # Setting values for document to be inserted
    doc_id = random.randint(1, 999999999)  
    if assistantship_type == "Research":
        name = "2016 Research Assistantship Request"
    else:
        name = "2016 TA Assistantship Request"
    # If document is being sent by student
    if int(user_type) == 0:
        document = {}
        document["id"] = doc_id
        document["name"] = name
        document["type"] = "Assistantship Request"
        document["date"] = (time.strftime("%d/%m/%Y %H:%M:%S"))
        document["status"] = "Created"
        document["faculty"] = "Electrical Engineering"
        document["major"] = "computer Engineering"
        document["progress"] = 0
        document["advisor"] = advisor
        document["project"] = project
        document["task"] = task
        document["student"] = student
        document["requester"] = "Student: Jessica Cotrina"
        document["sent_status"] = ""
        document["last_edited"] = "Student: Jessica Cotrina"
        document["student_number"] = "502-15-6168"
        print document
        writeDB('data/student_documents.json',document)
        writeDB('data/document_history.json',document)
        inserted = {'status':0,'id':doc_id,'name':name}

    if int(user_type) == 1:
        document = {}
        document["id"] = doc_id
        document["name"] = name
        document["type"] = "Assistantship Request"
        document["date"] = (time.strftime("%d/%m/%Y %H:%M:%S"))
        document["status"] = "Created"
        document["faculty"] = "Electrical Engineering"
        document["major"] = "computer Engineering"
        document["progress"] = 0
        document["advisor"] = "Nestor Rodriguez"
        document["project"] = project
        document["task"] = task
        document["student"] = student
        document["requester"] = "Professor: Nestor Rodriguez"
        document["sent_status"] = ""
        document["last_edited"] = "Professor: Nestor Rodriguez"
        print document
        writeDB('data/professor_documents.json',document)
        writeDB('data/document_history.json',document)
        inserted = {'status':0,'id':doc_id,'name':name}

    if int(user_type) == 2:
        document = {}
        document["id"] = doc_id
        document["name"] = name
        document["type"] = "Assistantship Request"
        document["date"] = (time.strftime("%d/%m/%Y %H:%M:%S"))
        document["status"] = "Created"
        document["faculty"] = "Electrical Engineering"
        document["major"] = "computer Engineering"
        document["progress"] = 0
        document["advisor"] = advisor
        document["project"] = project
        document["task"] = task
        document["student"] = student
        document["requester"] = "Assistant: Alida Minguela"
        document["sent_status"] = ""
        document["last_edited"] = "Assistant: Alida Minguela"
        print document
        writeDB('data/assistant_documents.json',document)
        writeDB('data/document_history.json',document)
        inserted = {'status':0,'id':doc_id,'name':name}

    if int(user_type) == 3:
        document = {}
        document["id"] = doc_id
        document["name"] = name
        document["type"] = "Assistantship Request"
        document["date"] = (time.strftime("%d/%m/%Y %H:%M:%S"))
        document["status"] = "Created"
        document["faculty"] = "Electrical Engineering"
        document["major"] = "computer Engineering"
        document["progress"] = 0
        document["advisor"] = advisor
        document["project"] = project
        document["task"] = task
        document["student"] = student
        document["requester"] = "Director: Jose Colom"
        document["sent_status"] = ""
        docucment["last_edited"] = "Director Jose Colom"
        print document
        writeDB('data/director_documents.json',document)
        writeDB('data/document_history.json',document)
        inserted = {'status':0,'id':doc_id,'name':name}

    return jsonify(inserted)

@app.route('/_insertAssistantAssistantship')
def insertAssistantAssistantship():
    
    user_type = request.args['user_type']
    advisor = request.args['advisor']
    project = request.args['project']
    task = request.args['task']
    assistantship_type = request.args['a_type']
    student = request.args['student']
    student_number = request.args['student_number']
    department = request.args['department']
    major = request.args['major']

    print "user_type", user_type
    print "advisor", advisor
    print "project", project
    print "task", task
    print "assistantship_type", assistantship_type
    print "student", student
    print "student_number", student_number
    print "department", department
    print "major", major

    # student:   student
    inserted = {'status':-1}
    # Setting values for document to be inserted
    doc_id = random.randint(1, 999999999)  
    if assistantship_type == "Research":
        name = "2016 Research Assistantship Request"
    else:
        name = "2016 TA Assistantship Request"
    # If document is being sent by student
    
    document = {}
    document["id"] = doc_id
    document["name"] = name
    document["type"] = "Assistantship Request"
    document["date"] = (time.strftime("%d/%m/%Y %H:%M:%S"))
    document["status"] = "Created"
    document["faculty"] = department
    document["major"] = major
    document["progress"] = 0
    document["advisor"] = advisor
    document["project"] = project
    document["task"] = task
    document["student"] = student
    document["requester"] = "Assistant: Alida Minguela"
    document["sent_status"] = ""
    document["last_edited"] = "Assistant: Alida Minguela"
    document["student number"] = student_number
    print document
    writeDB('data/assistant_documents.json',document)
    writeDB('data/document_history.json',document)
    inserted = {'status':0,'id':doc_id,'name':name}


    return jsonify(inserted)

@app.route('/_insertTravelRequest')
def insertTravelRequest():
    
    user_type = request.args['user_type']
    conference_name = request.args['conference_name']
    travel_location = request.args['travel_location']
    departure_date = request.args['departure_date']
    return_date = request.args['return_date']
    advisor = request.args['advisor']
    purpose= request.args['purpose']
    requester = request.args['requester']

    print "user_type",user_type

    inserted = {'status':-1}
    # Setting values for document to be inserted
    doc_id = random.randint(1, 999999999)

    # If document is being sent by student
    if int(user_type) == 0:
        document = {}
        document["id"] = doc_id
        document["name"] = conference_name + " Travel Request"
        document["type"] = "Travel Request"
        document["date"] = (time.strftime("%d/%m/%Y %H:%M:%S"))
        document["status"] = "Created"
        document["faculty"] = "Electrical Engineering"
        document["major"] = "computer Engineering"
        document["progress"] = 0
        document["advisor"] = advisor
        document["travel_location"] = travel_location
        document["departure_date"] = departure_date
        document["return_date"] = return_date
        document["purpose"] = purpose
        document["requester"] = "Student: Jessica Cotrina"
        document["sent_status"] = ""
        document["last_edited"] = "Student: Jessica Cotrina"
        print document
        writeDB('data/student_documents.json',document)
        writeDB('data/document_history.json',document)
        inserted = {'status':0,'id':doc_id,'name':conference_name}

    # If document is being sent by professor
    if int(user_type) == 1:
        document = {}
        document["id"] = doc_id
        document["name"] = conference_name + " Travel Request"
        document["type"] = "Travel Request"
        document["date"] = (time.strftime("%d/%m/%Y %H:%M:%S"))
        document["status"] = "Created"
        document["faculty"] = "Electrical Engineering"
        document["major"] = "computer Engineering"
        document["progress"] = 0
        document["advisor"] = advisor
        document["travel_location"] = travel_location
        document["departure_date"] = departure_date
        document["return_date"] = return_date
        document["purpose"] = purpose
        document["requester"] = "Professor: Nestor Rodriguez"
        document["sent_status"] = ""
        document["last_edited"] = "Professor: Nestor Rodriguez"
        print document
        writeDB('data/professor_documents.json',document)
        writeDB('data/document_history.json',document)
        inserted = {'status':0,'id':doc_id,'name':conference_name}

    if int(user_type) == 2:
        document = {}
        document["id"] = doc_id
        document["name"] = conference_name + " Travel Request"
        document["type"] = "Travel Request"
        document["date"] = (time.strftime("%d/%m/%Y %H:%M:%S"))
        document["status"] = "Created"
        document["faculty"] = "Electrical Engineering"
        document["major"] = "computer Engineering"
        document["progress"] = 0
        document["advisor"] = advisor
        document["travel_location"] = travel_location
        document["departure_date"] = departure_date
        document["return_date"] = return_date
        document["purpose"] = purpose
        document["requester"] =  "Assistant: Alida Minguela"
        document["sent_status"] = ""
        document["last_edited"] = "Assistant: Alida Minguela"
        print document
        writeDB('data/assistant_documents.json',document)
        writeDB('data/document_history.json',document)
        inserted = {'status':0,'id':doc_id,'name':conference_name}

    if int(user_type) == 3:
        document = {}
        document["id"] = doc_id
        document["name"] = conference_name + " Travel Request"
        document["type"] = "Travel Request"
        document["date"] = (time.strftime("%d/%m/%Y %H:%M:%S"))
        document["status"] = "Created"
        document["faculty"] = "Electrical Engineering"
        document["major"] = "computer Engineering"
        document["progress"] = 0
        document["advisor"] = advisor
        document["travel_location"] = travel_location
        document["departure_date"] = departure_date
        document["return_date"] = return_date
        document["purpose"] = purpose
        document["requester"] = "Director: Jose Colom"
        document["sent_status"] = ""
        document["last_edited"] = "Director: Jose Colom"
        print document
        writeDB('data/director_documents.json',document)
        writeDB('data/document_history.json',document)
        inserted = {'status':0,'id':doc_id,'name':conference_name}

    return jsonify(inserted)

@app.route('/_saveAssistantship')
def saveAssistantship():

    user_type = request.args['user_type']
    doc_id    = request.args['doc_id']
    project   = request.args['project']
    advisor   = request.args['advisor']
    student   = request.args['student']
    task      = request.args['task']

    saved = {'status':-1}

    if int(user_type) == 0:
        documents = readDB('data/student_documents.json')["documents"]
        for document in documents:
            if int(document["id"]) == int(doc_id):
                doc = document
        doc["project"] = project
        doc["advisor"] = advisor
        doc["student"] = student
        doc["task"]    = task
        doc["last_edited"] = "Student: Jessica Cotrina"
        print "doc", doc
        updateDB('data/student_documents.json',doc)
        writeDB('data/document_history.json',doc)
        saved = {'status':0,'doc_id':doc_id}

    if int(user_type) == 1:
        documents = readDB('data/professor_documents.json')["documents"]
        for document in documents:
            if int(document["id"]) == int(doc_id):
                doc = document
        doc["project"] = project
        doc["advisor"] = advisor
        doc["student"] = student
        doc["task"]    = task
        doc["last_edited"] = "Professor: Nestor Rodriguez"
        updateDB('data/profssor_documents.json',doc)
        writeDB('data/document_history.json',doc)
        saved = {'status':0,'doc_id':doc_id}


    if int(user_type) == 2:
        documents = readDB('data/assistant_documents.json')["documents"]
        for document in documents:
            if int(document["id"]) == int(doc_id):
                doc = document
        doc["project"] = project
        doc["advisor"] = advisor
        doc["student"] = student
        doc["task"]    = task
        doc["last_edited"] = "Assistant: Alida Minguela"
        updateDB('data/assistant_documents.json',doc)
        writeDB('data/document_history.json',doc)
        saved = {'status':0,'doc_id':doc_id}

    if int(user_type) == 3:
        documents = readDB('data/director_documents.json')["documents"]
        for document in documents:
            if int(document["id"]) == int(doc_id):
                doc = document
        doc["project"] = project
        doc["advisor"] = advisor
        doc["student"] = student
        doc["task"]    = task
        doc["last_edited"] = "Director: Jessica Cotrina"
        updateDB('data/director_documents.json',doc)
        writeDB('data/document_history.json',doc)
        saved = {'status':0,'doc_id':doc_id}

    return jsonify(saved)


@app.route('/_getStudentAssistantships')
def get_StudentAssistantships():
    print "Entre"
    documents = readDB('data/student_documents.json')["documents"]
    new_documents = {"documents":[]}
    # print documents
    for document in documents:
        print document
        if document["type"] == "Assistantship Request": 
            new_documents["documents"].append(document)
    # print "\n",new_documents
    return jsonify(new_documents)

@app.route('/_getProfessorAssistantships')
def get_ProfessorAssistantships():
    print "Entre"
    documents = readDB('data/professor_documents.json')["documents"]
    new_documents = {"documents":[]}
    # print documents
    for document in documents:
        print document
        if document["type"] == "Assistantship Request": 
            new_documents["documents"].append(document)
    # print "\n",new_documents
    return jsonify(new_documents)

@app.route('/_getStudentTravelRequests')
def get_StudentTravelRequests():
    print "Entre"
    documents = readDB('data/student_documents.json')["documents"]
    new_documents = {"documents":[]}
    # print documents
    for document in documents:
        print document
        if document["type"] == "Travel Request": 
            new_documents["documents"].append(document)
    # print "\n",new_documents
    return jsonify(new_documents)

@app.route('/_getProfessorTravelRequests')
def get_ProfessorTravelRequests():
    print "Entre"
    documents = readDB('data/professor_documents.json')["documents"]
    new_documents = {"documents":[]}
    # print documents
    for document in documents:
        print document
        if document["type"] == "Travel Request": 
            new_documents["documents"].append(document)
    # print "\n",new_documents
    return jsonify(new_documents)

@app.route('/_getAssistantAssistantships')
def get_AssistantAssistantships():
    print "Entre"
    documents = readDB('data/assistant_documents.json')["documents"]
    new_documents = {"documents":[]}
    # print documents
    for document in documents:
        print document
        if document["type"] == "Assistantship Request": 
            new_documents["documents"].append(document)
    # print "\n",new_documents
    return jsonify(new_documents)

@app.route('/_getDirectorAssistantships')
def get_DirectorAssistantships():
    print "Entre"
    documents = readDB('data/director_documents.json')["documents"]
    new_documents = {"documents":[]}
    # print documents
    for document in documents:
        print document
        if document["type"] == "Assistantship Request": 
            new_documents["documents"].append(document)
    # print "\n",new_documents
    return jsonify(new_documents)

@app.route('/_getAssistantTravelRequests')
def get_AssistantTravelRequests():
    print "Entre"
    documents = readDB('data/assistant_documents.json')["documents"]
    new_documents = {"documents":[]}
    # print documents
    for document in documents:
        print document
        if document["type"] == "Travel Request": 
            new_documents["documents"].append(document)
    # print "\n",new_documents
    return jsonify(new_documents)

@app.route('/_getDirectorTravelRequests')
def get_DirectorTravelRequests():
    print "Entre"
    documents = readDB('data/director_documents.json')["documents"]
    new_documents = {"documents":[]}
    # print documents
    for document in documents:
        print document
        if document["type"] == "Travel Request": 
            new_documents["documents"].append(document)
    # print "\n",new_documents
    return jsonify(new_documents)

@app.route("/")
def init():
    return render_template("login.html")

@app.route("/student")
def getStudents():
    return render_template("student.html")

@app.route("/professor")
def getProfessors():
    return render_template("professor.html")

@app.route("/assistant")
def getAssistant():
    return render_template("assistant.html")

@app.route("/director")
def getDirector():
    return render_template("director.html")

@app.route('/_sendDocument')
def sendAndSaveDocument():
    print "Entre"
    doc_id =  request.args['doc_id']
    user_type = request.args['user_type']
    sent_to = request.args['sent_to']
    message = request.args['message']
    action = request.args['action']
    sent = {'status':-1}
    print doc_id, user_type, sent_to, sent, action

    # If document is being sent by student
    if int(user_type) == 0:
        print "Soy estudiante"
        documents = readDB('data/student_documents.json')["documents"]
        print "documents",documents
        # Getting documment 
        for doc in documents:
            # print "Entre al doc"
            print doc["id"], doc_id
            if int(doc["id"]) == int(doc_id):
                document = doc
            # elif doc["name"] == doc_name + " Travel Request":
            #     document = doc
        document["status"] = "Sent"
        document["sent_status"] = "sent"
        document["last_edited"] = "Student: Jessica Cotrina"
        document["message"] = message
        document["action"]  = action
        updateDB('data/student_documents.json',document)

    # If document is being sent by professor 
    if int(user_type) == 1:
        print "Soy profesor"
        documents = readDB('data/professor_documents.json')["documents"]
        # Getting documment 
        for doc in documents:
            # print "Entre al doc"
            print doc["id"], doc_id
            if int(doc["id"]) == int(doc_id):
                # print "True"
                document = doc
            # elif doc["name"] == doc_name + " Travel Request":
            #     document = doc
        document["status"] = "Sent"
        document["sent_status"] = "sent"
        document["last_edited"] = "Professor: Nestor Rodriguez"
        document["message"] = message
        document["action"]  = action
        updateDB('data/professor_documents.json',document)

    # If document is being sent by assistant
    if int(user_type) == 2:
        print "Soy Asistente"
        documents = readDB('data/assistant_documents.json')["documents"]
        # Getting documment 
        for doc in documents:
            # print "Entre al doc"
            print doc["id"], doc_id
            if int(doc["id"]) == int(doc_id):
                # print "True"
                document = doc
            # elif doc["name"] == doc_name + " Travel Request":
            #     document = doc
        document["status"] = "Sent"
        document["sent_status"] = "sent"
        document["last_edited"] = "Assistant: Alida Minguela"
        document["message"] = message
        document["action"]  = action
        updateDB('data/assistant_documents.json',document)

    # If document is being sent by director 
    if int(user_type) == 3:
        print "Soy director"
        documents = readDB('data/director_documents.json')["documents"]
        # Getting documment 
        for doc in documents:
            # print "Entre al doc"
            print doc["id"], doc_id
            if int(doc["id"]) == int(doc_id):
                # print "True"
                document = doc
            # elif doc["name"] == doc_name + " Travel Request":
            #     document = doc
        document["status"] = "Sent"
        document["sent_status"] = "sent"
        document["last_edited"] = "Director: Jose Colom"
        document["message"] = message
        document["action"]  = action
        updateDB('data/director_documents.json',document)

    # If document being sent to professor
    if sent_to == "nestor.rodriguez@upr.edu":
        document["sent_status"] = "received"
        writeDB('data/professor_documents.json',document)
        writeDB('data/document_history.json',document)
        sent = {'status':0}

    # If document being set to assistant
    if sent_to == "alida.minguela@upr.edu":
        document["sent_status"] = "received"
        writeDB('data/assistant_documents.json',document)
        writeDB('data/document_history.json',document)
        sent = {'status':0}

    # If document being sent to director
    if sent_to == "jose.colom@upr.edu":
        document["sent_status"] = "received"
        writeDB('data/director_documents.json',document)
        writeDB('data/document_history.json',document)
        sent = {'status':0}

    # If document being sent to student
    if sent_to == "jessica.cotrina@upr.edu":
        document["sent_status"] = "received"
        writeDB('data/student_documents.json',document)
        writeDB('data/document_history.json',document)
        sent = {'status':0}
    
    return jsonify(sent)

@app.route("/doc_info",methods=['GET'])
def getDocumentInfo():
    doc_id = request.args['id']
    documents = readDB('data/document_history.json')['documents']
    for document in documents:
        if int(document["id"]) == int(doc_id):
            doc = document
    return render_template("doc_info.html",document_id=doc["id"])

@app.route("/_getDocumentHistory",methods=['GET'])
def getInfo():
    document_id = request.args['document_id']
    documents = readDB('data/document_history.json')['documents']
    document_history = {"history":[]}
    for document in documents:
        if int(document["id"]) == int(document_id):
            document_history["history"].append(document)
    return jsonify(document_history)

if __name__ == "__main__":
    app.run()