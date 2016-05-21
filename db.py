import json
import time

def readDB(file):
    with open(file, 'r') as f:
        data = json.load(f)
    return data

def writeDB(file,new_data):
	with open(file, 'r') as f:
		documents = json.load(f)
	documents["documents"].append(new_data)
	# print documents
	with open(file, 'w') as f:
		json.dump(documents, f)

def updateDB(file,new_document):
	with open(file, 'r') as f:
		documents = json.load(f)

	# Rewriting old document
	for old_document in documents["documents"]:
		if old_document["id"] == new_document["id"]:
			doc_id = old_document["id"]
			documents["documents"].remove(old_document)
			documents["documents"].append(new_document)
	print documents
	with open(file, 'w') as f:
		json.dump(documents,f)

# new_data = {"status": "Created", "major": "computer Engineering", "task": "Be the best", "name": "2016 TA Assistantship Request", "advisor": "Nayda Santiago", "project": "Capstone Course", "requester": "Student: Jessica Cotrina", "faculty": "Electrical Engineering", "date": time.strftime("%d/%m/%Y %H:%M:%S"), "progress": 0, "type": "Assistantship Request", "id": 624699556}
# writeDB("data/student_documents.json",new_data)


# date = (time.strftime("%d/%m/%Y %H:%M:%S"))

# print type(date)

# new_data = {u'status': 'Sent', u'major': u'computer Engineering', u'task': u'Assist in everyday course activities', u'name': u'2016 TA Assistantship Request', u'faculty': u'Electrical Engineering', u'requester': 'Student: Jessica Cotrina', u'project': u'Capstone Course', u'advisor': u'Nayda Santiago', u'date': u'Today', u'progress': 0, u'type': u'Assistantship Request', u'id': 426312594}
# updateDB('data/student_documents.json',new_data)

# print readDB('data/document_history.json')