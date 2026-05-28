# AI Agent Developer Roadmap

เว็บไซต์ภาษาไทยสำหรับเรียนรู้การพัฒนา software ด้วย AI Agent ตั้งแต่พื้นฐานจนถึง production

## เริ่มใช้งาน

โปรเจกต์จริงอยู่ในโฟลเดอร์ `web/` ดังนั้นให้เปิด terminal แล้วเข้าโฟลเดอร์นั้นก่อน

```powershell
Set-Location .\web
```

จากนั้นคัดลอก `.env.example` เป็น `.env.local` และใส่ค่า `DATABASE_URL`, `NEXTAUTH_SECRET` และ API keys ที่เกี่ยวข้อง

เริ่ม development server ด้วย:

```powershell
npm run dev
```

ถ้า PowerShell หา `npm` ไม่เจอ ให้ใช้ `npm.cmd` แทน:

```powershell
npm.cmd run dev
```

ถ้ายังเจอปัญหา PATH ให้รัน helper script นี้แทน:

```powershell
.\run-dev.ps1
```

หรือใช้ไฟล์ batch นี้:

```powershell
.\run-dev.bat
```

## Scripts

- `npm run dev` - เริ่ม development server
- `npm run build` - build production
- `npm run lint` - ตรวจโค้ด
- `npm run db:generate` - สร้าง Prisma client
- `npm run db:migrate` - รัน database migration
