<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Resume – Erpolat</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">

  <!-- TIL TAŃLAW-->
  <div class="lang">
     <button onclick="showLang('en')">English</button>
    <button onclick="showLang('kk')">Qaraqalpaq</button>
    <button onclick="showLang('uz')">O‘zbek</button>
    <button onclick="showLang('ru')">Русский</button>
    <button onclick="showLang('tr')">Türkçe</button>
  </div>

  <!-- RASM -->
  <img src="ERPO.jpg" class="profile" alt="Meni,>
       class="profile" alt="Mening rasmim">

  <!-- QARAQALPAQ -->
  <div id="kk" class="content">
    <h1>Erpolat Qazaxbaev</h1>
    <p class="job">Kasbi:Bag‘darlamashi</p>

    <p><b>Ákesiniń ati:</b> Paraxat uli</p>
    <p><b>Tuwılǵan kúni:</b> 09.01.2002</p>
    <p><b>Bilimi:</b> INNOVATSION Texnologiyalar Universiteti</p>
    <p><b> Biletugin Tiller:</b> Turk, O‘zbek, Qazaq,Ingliz</p>
    <p><b>Biletugin Dasturiy Tilleri:</b> JavaScript, Python, C++, HTML/CSS</p>
    <p><b>Telefon:</b> 93-156-82-23</p>
    <p><b>Email-adressi:</b> qaraqalpaqerpolat@gmail.com</p>
  </div>

  <!-- O‘ZBEK -->
  <div id="uz" class="content hide" style="display:none;">
    <h1>Erpolat Qazaxbaev</h1>
    <p class="job">Kasbi:Dasturchi</p>
    <p><b>Otasi ismi:</b> Paraxat o‘g‘li</p>
    <p><b>Tug‘ilgan sana:</b> 09.01.2002</p>
    <p><b>Ta’lim:</b> Innovatsion Texnologiyalar Universiteti</p>
    <p><b>Biladigan Tillar:</b> Turk, O‘zbek, Qozoq,Ingliz</p>

    <p><b>Telefon:</b> 93-156-82-23</p>
    <p><b>Email-adressi:</b> qaraqalpaqerpolat@gmail.com</p>
    <p><b>BILADIGAN DASTURIY TIL:</b> JavaScript, Python, C++, HTML/CSS</p>
  </div>

  <!-- RUS -->
  <div id="ru" class="content hide" style="display:none;">
    <h1>Eрполат Казахбаев</h1>
    <p class="job">профессия:Программист</p>

    <p><b>Отчество:</b> Парахат улы</p>
    <p><b>Дата рождения:</b> 09.01.2002</p>
    <p><b>Образование:</b> Университет инновационных технологий</p>
    <p><b>Языки, на которых говорят:</b> Турецкий, Узбекский, Казахский,Английский</p>
    <p><b>знакомый программный язык:</b> JavaScript, Python, C++, HTML/CSS</p>
    <p><b>Телефон:</b> 93-156-82-23</p>
    <p><b>Email:</b> qaraqalpaqerpolat@gmail.com</p>
  </div>
  <!-- ENGLISH -->
<div id="en" class="content hide" style="display:none;">
  <h1>Erpolat Kazakhbaev</h1>
  <p class="job">Profession: Programmer</p>

  <p><b>Father’s name:</b> Paraxat uli</p>
  <p><b>Date of birth:</b> 09.01.2002</p>
  <p><b>Education:</b> University of Innovative Technologies</p>
  <p><b>Languages:</b> Turkish, Uzbek, Kazakh,English</p>
  <p><b>Familiar program language:</b> JavaScript, Python, C++, HTML/CSS</p>
  <p><b>Phone:</b> 93-156-82-23</p>
  <p><b>Email:</b> qaraqalpaqerpolat@gmail.com</p>
</div>
<!-- TURK -->
<div id="tr" class="content hide" style="display:none;">
  <h1>Erpolat Kazahbayev</h1>
  <p class="job">Meslek: Yazılımcı</p>

  <p><b>Baba adı:</b> Parahat oğlu</p>
  <p><b>Doğum tarihi:</b> 09.01.2002</p>
  <p><b>Eğitim:</b> İnovasyon Teknolojileri Üniversitesi</p>
  <p><b>Bildiği diller:</b> Türkçe, Özbekçe, Kazakça,  İngilizce</p>

  <p><b>Telefon:</b> 93-156-82-23</p>
  <p><b>E-posta:</b> qaraqalpaqerpolat@gmail.com</p>
</div>


  <p id="time"></p>

</div>

<script src="script.js"></script>
</body>
</html>
