# WarGa (Warung Gaming)

# Git Branching

## 1. Membuat Branch Baru

- Setiap fitur baru harus dikerjakan pada branch baru yang dibuat dari develop dengan menggunakan command berikut: <br>
  `git checkout -b <branch_name> develop`
- Pastikan branch baru Anda tersebut merupakan branch yang paling update dengan menggunakan command berikut: <br>
  `git rebase origin/develop`
 
## 2. Merge Request
- Sebelum melakukan merge request, pastikan branch Anda merupakan branch terupdate dengan menggunakan command berikut: <br>
  `git fetch --prune` <br>
  `git rebase origin/develop`
- Biasanya akan terjadi conflict apabila branch develop telah dimerge terlebih dahulu dengan branch lain sebelum branch Anda. <br>
  Selesaikan conflict terlebih dahulu pada kode Anda dan cek lagi menggunakan command berikut: <br>
  `git add .` <br>
  `git rebase --continue`
- Lakukan step `git add.` dan `git rebase --continue` terus menerus hingga muncul bacaan <b>"no rebase in progress?"</b>
- Jika `git rebase --continue` tidak melanjutkan rebasenya, gunakan command berikut: <br>
  `git rebase --skip`
- Jika sudah tidak terdapat conflict (no rebase in progress), silahkan commit dan langsung push secara paksa menggunakan command berikut: <br>
  `git push -f origin <branch_name>`
- Setelah branch Anda dimerge ke develop, Anda <b>harus</b> membuat branch baru lagi sesuai poin nomor 1 agar proses rebase tidak mulai dari awal lagi.
