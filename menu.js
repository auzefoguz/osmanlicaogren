// Menüleri hem navbar hem mobil menüye dinamik olarak ekler

// Menü verisi: dropdown olanlar children, dış linkler external:true ile işaretli
const menuData = [
  { label: "Hat Sanatı", href: "hat-sanati.html" },
  { label: "Sözlük", href: "https://www.osmanlicagazeteler.org/Sozluk.php", external: true },
  { label: "Gazeteler", href: "https://www.osmanlicagazeteler.org/", external: true },
  {
    label: "Testler", dropdown: true, children: [
      { label: "1. Kur", href: "https://osmanlicaogren.com/1-kur-sorulari/", external: true },
      { label: "2. Kur", href: "https://osmanlicaogren.com/ikinci-kur-osmanlica-testler/", external: true }
    ]
  },
  {
    label: "Etkinlikler", dropdown: true, children: [
      { label: "Oyun", href: "game_page.html", icon: "bi-controller" },
      { label: "Quiz", href: "quiz_page.html", icon: "bi-patch-question" },
      { label: "Dedektif", href: "dedektif.html", icon: "bi-search" },
      { label: "ocr tanıma", href: "ocr.html", icon: "bi-search" },
      { label: "Osmanlıca Klavye", href: "klavye.html", icon: "bi-keyboard" }
    ]
  },
  {
    label: "Kaynaklar", dropdown: true, children: [
      { label: "Matbu Hat", href: "https://osmanlicaogren.com/matbu-hat/", external: true },
      { label: "Rika Hattı", href: "https://osmanlicaogren.com/rika-hatti/", external: true },
      { label: "Rika & Matbu", href: "https://osmanlicaogren.com/rika-matbu-karsilastirmali/", external: true },
      { label: "Kitabeler", href: "https://osmanlicaogren.com/category/kitabeler/", external: true },
      { label: "Mezar Taşları", href: "https://osmanlicaogren.com/mezar-taslari/", external: true },
      { label: "Hüsn-ü Hat", href: "https://osmanlicaogren.com/husnu-hat/", external: true },
      { label: "Mesajlar", href: "https://osmanlicaogren.com/osmanlica-cuma-mesajlari-ve-tebrik-mesajlari/", external: true }
    ]
  },
  {
    label: "Bilgi", dropdown: true, children: [
      { label: "Hakkımızda", href: "hakkimizda.html" },
      { label: "SSS", href: "sss.html" },
      { label: "Gizlilik", href: "gizlilik.html" },
      { label: "Destek", href: "destek.html" }
    ]
  },
  { label: "Profil", href: "profile.html" },
  { label: "Premium", href: "premium.html" },
  { label: "İstatistik", href: "analytics.html" }
];

// Navbar için
function renderMainMenu() {
  const mainMenu = document.getElementById('mainMenu');
  if (!mainMenu) return;
  mainMenu.innerHTML = '';
  menuData.forEach(item => {
    if (!item.dropdown) {
      const li = document.createElement('li');
      li.className = 'nav-item';
      const a = document.createElement('a');
      a.className = 'nav-link';
      a.href = item.href;
      a.textContent = item.label;
      if (item.external) a.target = "_blank";
      if (item.icon) {
        a.innerHTML = `<i class="bi ${item.icon}"></i> ${item.label}`;
      }
      li.appendChild(a);
      mainMenu.appendChild(li);
    } else {
      // dropdown
      const li = document.createElement('li');
      li.className = 'nav-item dropdown';
      const a = document.createElement('a');
      a.className = 'nav-link dropdown-toggle';
      a.href = "#";
      a.setAttribute('role', 'button');
      a.setAttribute('data-bs-toggle', 'dropdown');
      a.setAttribute('aria-expanded', 'false');
      a.textContent = item.label;
      li.appendChild(a);

      const ul = document.createElement('ul');
      ul.className = 'dropdown-menu';
      item.children.forEach(child => {
        const childLi = document.createElement('li');
        const childA = document.createElement('a');
        childA.className = 'dropdown-item';
        childA.href = child.href;
        childA.textContent = child.label;
        if (child.icon) childA.innerHTML = `<i class="bi ${child.icon}"></i> ${child.label}`;
        if (child.external) childA.target = "_blank";
        childLi.appendChild(childA);
        ul.appendChild(childLi);
      });
      li.appendChild(ul);
      mainMenu.appendChild(li);
    }
  });
}

// Mobil menü için
function renderMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenuList');
  if (!mobileMenu) return;
  mobileMenu.innerHTML = '';
  menuData.forEach(item => {
    if (!item.dropdown) {
      const a = document.createElement('a');
      a.className = 'btn btn-outline-secondary w-100 mb-1';
      a.href = item.href;
      a.textContent = item.label;
      if (item.external) a.target = "_blank";
      if (item.icon) {
        a.innerHTML = `<i class="bi ${item.icon}"></i> ${item.label}`;
      }
      mobileMenu.appendChild(a);
    } else {
      // dropdown
      const div = document.createElement('div');
      div.className = 'dropdown mb-1';
      const btn = document.createElement('button');
      btn.className = 'btn btn-outline-secondary dropdown-toggle w-100';
      btn.type = 'button';
      btn.setAttribute('data-bs-toggle', 'dropdown');
      btn.textContent = item.label;
      div.appendChild(btn);

      const ul = document.createElement('ul');
      ul.className = 'dropdown-menu w-100';
      item.children.forEach(child => {
        const childLi = document.createElement('li');
        const childA = document.createElement('a');
        childA.className = 'dropdown-item';
        childA.href = child.href;
        childA.textContent = child.label;
        if (child.icon) childA.innerHTML = `<i class="bi ${child.icon}"></i> ${child.label}`;
        if (child.external) childA.target = "_blank";
        childLi.appendChild(childA);
        ul.appendChild(childLi);
      });
      div.appendChild(ul);
      mobileMenu.appendChild(div);
    }
  });
}

// Sayfa yüklendiğinde menüleri üret
window.addEventListener('DOMContentLoaded', () => {
  renderMainMenu();
  renderMobileMenu();
});