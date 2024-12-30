# Surprise Test 1B - MongoDB

1. `db.courses.find({currentEnrollment:{ $lt: 40}},{title:1,_id:0})`
2. `db.faculty.find({joinDate:{$lt:"2020-01-01"}},{ name: 1, _id: 0 });`
3. `db.courses.find({languages: "Python"},{title:1,_id:0});`
4. `db.courses.find({credits:{$gt: 3}},{title:1,_id:0});`
5. `db.courses.find({"schedule.days":"Monday"},{title:1,_id:0});`
6. `db.faculty.find({"officeHours.day":"Tuesday"},{name:1,_id:0});`
7. `db.courses.find({"schedule.room":"Tech-401"},{title:1,_id:0});`
8. `db.courses.find({languages:{$all:["Python", "JavaScript"]}},{title:1,_id:0});`
9. `db.courses.find({prerequisites:{$size:2}},{title:1,_id:0});`
10. `db.faculty.find({researchAreas:{$in:["AI", "Machine Learning"]}},{name:1,_id:0});`
11. `db.courses.updateOne({courseId:"CS101"},{$addToSet:{languages:"C"}});`
12. `db.faculty.updateOne({facultyId:"PROF001"},{$set:{"officeHours.time":"10:00-12:00"}});`
13. `db.courses.updateOne({courseId:"CS401"},{$inc:{currentEnrollment: 2 }});`
14. `db.faculty.updateOne({facultyId:"PROF003"},{$set:{isActive:false}});`
15. `db.courses.deleteMany({isActive: false});`
16. `db.courses.deleteMany({currentEnrollment: 0});`
17. `db.courses.updateOne({courseId:"CS201"},{$pull:{languages:"Java"}});`