# Panduan Mengisi Data Portofolio Kamu

Semua data pribadi dari pemilik template aslinya sudah diganti jadi
placeholder `[SEPERTI INI]`. Tinggal cari-ganti sesuai daftar di bawah. Struktur,
desain, dan animasi situs tidak diubah sama sekali.

## 1. Install & jalankan dulu
```bash
npm install
npm run dev
```
Buka http://localhost:3000 — kamu akan lihat placeholder di semua bagian.

## 2. Teks & konten (paling penting)
Edit 2 file ini untuk versi Bahasa Indonesia dan Inggris:
- `dictionaries/id.json`
- `dictionaries/en.json`

Isi bagian:
- `hero` → role & tagline singkat kamu
- `about` → nama, role, dan bio (2 paragraf)
- `experience.list` → daftar pengalaman kerja/organisasi (boleh tambah/hapus objek di array)

## 3. Foto & identitas di komponen Hero
File: `components/Hero.tsx`
- Ganti `[NAMA]` dan `[NAMA BELAKANG]` di judul besar
- Ganti 3 link sosial media: `USERNAME-GITHUB-KAMU`, `USERNAME-IG-KAMU`, `USERNAME-LINKEDIN-KAMU`
- Ganti `@username-kamu` (handle kecil di foto)
- Ganti foto: `public/images/hero.webp` dan `public/images/hero2.webp` dengan fotomu

## 4. Email kontak
File: `components/Contact.tsx` → cari `email@kamu.com`, ganti dengan emailmu.

## 5. CV
- Taruh file CV kamu di `public/CV-NAMA-KAMU.pdf` (boleh ganti nama file, tapi
  sesuaikan juga referensinya di `components/About.tsx` dan `middleware.ts`)

## 6. Skills (keahlian teknis)
File: `components/Skills.tsx` → ganti `topRowSkills` dan `bottomRowSkills`.
Cari ikon teknologi di https://devicon.dev/ dan pakai format URL yang sama.

## 7. Sertifikat
File: `components/Certificates.tsx`
- Taruh gambar sertifikatmu di `public/images/certificate/`, timpa file `certificate-1.webp` s.d. `certificate-6.webp` (atau ganti nama file & sesuaikan di kode)
- Update `alt` text di array `certificates` sesuai nama sertifikat aslinya

## 8. Proyek / karya
Ada 8 file MDX (4 Indonesia, 4 Inggris) — satu file MDX = satu proyek:
- `content/id/project-1.mdx` s.d. `project-4.mdx`
- `content/en/project-1.mdx` s.d. `project-4.mdx`
(nomor file yang sama = proyek yang sama, cuma beda bahasa)

Setiap file punya frontmatter:
```
title: "Nama Proyek"
description: "Deskripsi proyek"
image: "images/projects/project-1.webp"
tags: ["Tag1", "Tag2"]
link: "https://demo-proyek.com"
github: "https://github.com/kamu/proyek"
```
- Ganti gambar placeholder di `public/images/projects/project-1.webp` dst dengan screenshot proyekmu sendiri (ukuran asli 1280x720)
- Mau nambah proyek ke-5? Duplikat salah satu file `.mdx` di kedua folder (id & en) dengan nama baru, misal `project-5.mdx`.
- Mau kurang dari 4 proyek? Hapus file `.mdx`-nya (di kedua folder).

## 9. Judul tab browser & SEO
File: `app/[locale]/layout.tsx` — sudah otomatis terisi placeholder nama kamu
dari langkah sebelumnya, tapi cek lagi bagian `description` dan `siteName` biar pas.

## 10. Terakhir
- Ganti favicon: `app/favicon.ico`
- Ganti thumbnail share (Open Graph): tetap pakai `public/images/hero.webp` atau buat gambar 1200x630 khusus
- Deploy gratis ke Vercel: `vercel.com/new` → import repo ini

---
Cari cepat semua placeholder yang masih tersisa dengan:
```bash
grep -rn "\[.*KAMU\|\[NAMA\|\[Nama Proyek\|\[Nama Sertifikat\|Tag1\|Skill 1" --include="*.tsx" --include="*.json" --include="*.mdx" .
```
