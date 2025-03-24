# Thusitha ICT
## Database Structure

### 1. Student Table
Stores student details.
- **studentID** (Primary Key)
- **studentName**
- **studentNIC**
- **studentDateofBirth**
- **studentEmailAddress**
- **studentAddress**
- **studentSchool**
- **studentGardianName**
- **studentPhoneNumber**
- **studentGuardianTP**
- **studentPassword**

### 2. Course Table
Stores course details.
- **courseID** (Primary Key)
- **courseName**
- **teahcerID** (Foreign Key referencing Teacher)

### 3. Class Table
Manages class records and student payments.
- **classID** (Primary Key)
- **courseID** (Foreign Key referencing Course)
- **monthName**
- **studentID** (Foreign Key referencing Student)
- **classFees**
- **paymentStatus** (Paid, Not Paid, Free)
- **approvalStatus** (Pending, Approved, Rejected)

### 4. Unit-For-Month Table
Stores learning materials for classes.
- **unitID** (Primary Key)
- **classID** (Foreign Key referencing Class)
- **dayInMonth**
- **youtubeLink**
- **youtubeLink2**

### 5. Teacher Table
Stores teacher details.
- **teahcerID** (Primary Key)
- **teahcerName**
- **teacherNIC**
- **teahcerSubject**
- **teacherEmailAddress**
- **teacherPassword**

### 6. Admin Table
Stores admin details.
- **adminID** (Primary Key)
- **adminName**
- **adminUsername**
- **adminPassword**
