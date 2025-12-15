CREATE VIEW vw_top_students AS
SELECT s.student_name, m.marks
FROM students s
JOIN marks m ON s.student_id = m.student_id
WHERE m.marks > 80;
