### 1. API to create mentor:
        
        /API/mentor

        Body: 
        {   
            "mentorName": "Ragav kumarr",
            "department":"full stack development",
            "time": "weekday",
            "students": ["kalaiselvan", "sundarrajan", "vinothkumar", "kalaiselvi", "kalaivani"]
        }

### 2. API to create student: 

        /API/student

        Body:
        {   
            "studentName": "kalaivani",
            "department":"full stack development",
            "time": "weekday",
            "mentorName": "Ragav kumar",
            "batch": "b39wdtamil"
        }
### 3. API to assign a student to mentor:

        /API/assign-student

        Body:
        {   
            "mentorName": "Ragav kumar",
            "students": ["kalaiselvan", "sundarrajan", "vinothkumar", "kalaiselvi", "kalaivani", "kalai", "selvan", "sel"]
        }
### 4. API to assign or change mentor for particular student:

        /API/assign-mentor

        Body:
        {   
            "studentName": "kalai",
            "mentorName": "Ragav"
        }
### 5. API to show all students for a particular mentor:

        /API/show-students

        Body:
        {   
            "mentorName": "Ragav kumar"
        }