# GitHub'a Projenizi Push Etme Adimlari

Bu rehber, PEKCON web sitesi projesini GitHub'a nasil push edeceginizi aciklar.

## 1. GitHub Personal Access Token (PAT) Olusturma

1. [GitHub](https://github.com) hesabiniza giris yapin
2. Sag ustteki profil fotografiniza tiklayin → **Settings**
3. Sol menunun en altinda **Developer settings** secenegine tiklayin
4. **Personal access tokens** → **Tokens (classic)** secin
5. **Generate new token** → **Generate new token (classic)** tiklayin
6. Token'a bir isim verin (orn: "PEKCON Website")
7. Izinler kisminda **repo** secenegini isaretleyin (tum repo izinlerini secer)
8. **Generate token** butonuna tiklayin
9. Olusturulan tokeni kopyalayin ve guvenli bir yerde saklayin

## 2. Git Komutlari ile Push Etme

```bash
# Git kullanici adinizi ayarlayin
git config --global user.name "egehelvacidev"

# Git email adresinizi ayarlayin (GitHub hesabi ile ayni olmali)
git config --global user.email "github-email-adresiniz@example.com"

# Repo URL'sini ayarlayin (HTTPS kullanarak)
git remote set-url origin https://github.com/egehelvacidev/pekcon.git

# Push yapin ve kimlik bilgilerini girin
# - Kullanici adi: GitHub kullanici adiniz
# - Parola: Olusturdugunuz Personal Access Token
git push -u origin main
```

## 3. GitHub Desktop Uygulamasi ile Push Etme (En Kolay Yontem)

1. [GitHub Desktop](https://desktop.github.com/) uygulamasini indirin ve kurun
2. GitHub hesabinizla giris yapin
3. **File** → **Add local repository** secin
4. Projenizin bulundugu klasoru secin
5. Repository olusturma ekraninda:
   - Repo adi: "pekcon" olarak girin
   - Aciklama (istege bagli) ekleyin
   - "Push to GitHub" secenegini isaretleyin
6. "Publish Repository" butonuna tiklayin

## 4. GitHub CLI ile Push Etme

1. [GitHub CLI](https://cli.github.com/)'i indirin ve kurun
2. Terminal/Komut Istemcisinde su komutlari calistirin:

```bash
# GitHub hesabiniza giris yapin
gh auth login

# Mevcut projeyi GitHub'a push edin
gh repo create egehelvacidev/pekcon --public --source=. --push
```

## Sorun Giderme

Eger "Permission denied" hatasi aliyorsaniz:
1. GitHub hesabinizdaki kullanici adi ve e-posta adresinin dogru oldugundan emin olun
2. Personal Access Token'inizin dogru ve gecerli oldugundan emin olun
3. `egehelvacidev/pekcon` reposunda duzenleme izinlerinizin oldugundan emin olun 