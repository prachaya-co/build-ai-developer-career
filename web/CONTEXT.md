# Domain Glossary

## Roadmap
- Definition: เส้นทางการเรียนรู้ที่เรียงลำดับจากพื้นฐานไปขั้นสูงเพื่อพัฒนาทักษะการใช้ AI Agent ในงานจริง
- Boundaries: ครอบคลุมโครงสร้างการเรียนและลำดับเนื้อหา ไม่รวมรายละเอียดการพัฒนาเว็บหรือสถาปัตยกรรมระบบ
- Synonyms to avoid: curriculum, course map
- Related terms: Basic, Intermediate, Advanced
- Example: ผู้เรียนเริ่มจาก Roadmap เดียวกันก่อน แล้วค่อยแตกไปตามความต้องการเฉพาะทาง

## Basic
- Definition: ระดับเริ่มต้นของเนื้อหาที่ปูพื้นฐานแนวคิดหลักและคำศัพท์สำคัญ
- Boundaries: ครอบคลุมเฉพาะแนวคิดพื้นฐาน ไม่รวม orchestration หรือ production concerns
- Synonyms to avoid: beginner, intro
- Related terms: Intermediate, Advanced
- Example: บทเรียน Basic อธิบายว่า agent ต่างจาก prompt ธรรมดาอย่างไร

## Intermediate
- Definition: ระดับกลางที่ต่อยอดจากพื้นฐานไปสู่การใช้งานในงานจริงและ mini project
- Boundaries: ครอบคลุม workflow และการประยุกต์ใช้ แต่ยังไม่ลงลึกระดับ production
- Synonyms to avoid: middle, mid-level
- Related terms: Basic, Advanced
- Example: บทเรียน Intermediate สอนการใช้เครื่องมือและการประเมินผลเบื้องต้น

## Advanced
- Definition: ระดับสูงที่มุ่งสู่การใช้งานใน production และการออกแบบระบบที่ซับซ้อน
- Boundaries: ครอบคลุม multi-agent, evaluation, guardrails และ observability
- Synonyms to avoid: expert, pro
- Related terms: Intermediate, production
- Example: บทเรียน Advanced ครอบคลุมการออกแบบ multi-agent workflow พร้อม eval harness

## Public content
- Definition: เนื้อหาหลักที่ทุกคนเข้าถึงและอ่านได้โดยไม่ต้องล็อกอิน
- Boundaries: ครอบคลุมบทเรียนและหน้า roadmap ที่เปิดให้สาธารณะ ไม่รวมข้อมูลส่วนตัวหรือ progress ของผู้ใช้
- Synonyms to avoid: public site, open content
- Related terms: Optional account
- Example: หน้า Lesson เปิดให้อ่านได้แบบ public content

## Optional account
- Definition: บัญชีผู้ใช้ที่สมัครเฉพาะเมื่ออยากบันทึกความคืบหน้า ส่งงาน หรือรับฟีเจอร์ส่วนตัว
- Boundaries: เป็นตัวเลือกเสริม ไม่ใช่เงื่อนไขสำหรับการอ่านเนื้อหาสาธารณะ
- Synonyms to avoid: required login, mandatory account
- Related terms: Public content, Progress tracking
- Example: ผู้ใช้ยังอ่านเนื้อหาได้โดยไม่ล็อกอิน แต่ต้องมี optional account เพื่อเก็บ progress

## Progress tracking
- Definition: การบันทึกสถานะการเรียน ความคืบหน้า และผลลัพธ์ของผู้เรียนแต่ละคน
- Boundaries: ครอบคลุมข้อมูลการเรียนของผู้ใช้ ไม่ใช่เนื้อหาบทเรียนเอง
- Synonyms to avoid: scorekeeping, history
- Related terms: Optional account, assignment
- Example: ผู้ใช้ที่ล็อกอินสามารถเห็น progress tracking ของตัวเองในแต่ละบท

## Assignment
- Definition: งานฝึกปฏิบัติที่ผู้เรียนส่งเพื่อแสดงความเข้าใจและการนำไปใช้จริง
- Boundaries: เป็นกิจกรรมการประเมิน ไม่ใช่บทเรียนหรือ quiz
- Synonyms to avoid: task, homework
- Related terms: quiz, progress tracking
- Example: หลังเรียน Intermediate ผู้เรียนส่ง assignment สั้น ๆ เพื่อทดสอบการใช้งานจริง

## Quiz
- Definition: แบบทดสอบสั้นเพื่อวัดความเข้าใจของผู้เรียนในแต่ละบทหรือระดับ
- Boundaries: เน้นการตรวจสอบความเข้าใจเร็ว ไม่ใช่การประเมินผลงานเชิงลึก
- Synonyms to avoid: test, exam
- Related terms: assignment, progress tracking
- Example: ทุกบท Basic อาจมี quiz สั้นท้ายบท

## AI Q&A assistant
- Definition: ผู้ช่วยตอบคำถามที่อ้างอิงจากเนื้อหาในเว็บไซต์เป็นหลัก
- Boundaries: ตอบจากคลังความรู้ของเว็บ ไม่ใช่แชตทั่วไปที่เดาสุ่มจากภายนอก
- Synonyms to avoid: chatbot, generic assistant
- Related terms: Public content, roadmap
- Example: ผู้ใช้ถามเรื่อง multi-agent แล้ว AI Q&A assistant ตอบโดยอ้างอิงบท Advanced
