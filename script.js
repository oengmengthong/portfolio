// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Scroll Spy
const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".menu-item");

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6 // Adjust threshold to trigger at 60% of section visibility
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      menuItems.forEach(item => {
        item.classList.remove("text-blue-200");
        item.classList.remove("font-bold");
      });

      const activeMenu = document.querySelector(`a[href="#${entry.target.id}"]`);
      activeMenu.classList.add("text-blue-200", "font-bold"); // Highlight the current section in the menu
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

function toggleText(id) {
  const element = document.getElementById(id);
  if (element.classList.contains('overflow-hidden')) {
    element.classList.remove('overflow-hidden', 'overflow-ellipsis');
    element.nextElementSibling.textContent = 'Read Less';
  } else {
    element.classList.add('overflow-hidden', 'overflow-ellipsis');
    element.nextElementSibling.textContent = 'Read More';
  }
}

document.getElementById('menu-toggle').addEventListener('click', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
  } else {
    mobileMenu.classList.add('hidden');
  }
});

document.getElementById('language-switcher').addEventListener('change', function () {
  changeLanguage(this.value);
});

document.getElementById('mobile-language-switcher').addEventListener('change', function () {
  changeLanguage(this.value);
});

document.querySelectorAll('#language-options li').forEach(item => {
  item.addEventListener('click', function () {
    const language = this.dataset.lang;
    changeLanguage(language);
    updateLanguageSwitcher(language);
  });
});

function updateLanguageSwitcher(language) {
  const switcher = document.getElementById('language-switcher');
  const flag = switcher.querySelector('img');
  const text = switcher.querySelector('span');

  switch (language) {
    case 'en':
      flag.src = 'assets/english.png';
      text.textContent = 'English';
      break;
    case 'km':
      flag.src = 'assets/khmer.png';
      text.textContent = 'Khmer';
      break;
    case 'zh':
      flag.src = 'assets/chinese.png';
      text.textContent = 'Chinese';
      break;
  }
}


// Function to calculate years of experience
function calculateExperience(startYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

// Example usage: set experience years to the span in the "About" section
const experienceYears = calculateExperience(2019); // Replace with your actual start year
document.getElementById("experience-years").textContent = experienceYears;


// Header

document.getElementById('menu-toggle').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('show');
});

document.querySelectorAll('#language-options li, #mobile-language-options li').forEach(item => {
  item.addEventListener('click', function() {
    const language = this.dataset.lang;
    changeLanguage(language);
    updateLanguageSwitcher(language);
  });
});

function updateLanguageSwitcher(language) {
  const switcher = document.getElementById('language-switcher');
  const mobileSwitcher = document.getElementById('mobile-language-switcher');
  const flag = switcher.querySelector('img');
  const mobileFlag = mobileSwitcher.querySelector('img');
  const text = switcher.querySelector('span');
  const mobileText = mobileSwitcher.querySelector('span');

  switch (language) {
    case 'en':
      flag.src = 'assets/english.png';
      mobileFlag.src = 'assets/english.png';
      text.textContent = 'English';
      mobileText.textContent = 'English';
      break;
    case 'km':
      flag.src = 'assets/khmer.png';
      mobileFlag.src = 'assets/khmer.png';
      text.textContent = 'Khmer';
      mobileText.textContent = 'Khmer';
      break;
    case 'zh':
      flag.src = 'assets/chinese.png';
      mobileFlag.src = 'assets/chinese.png';
      text.textContent = 'Chinese';
      mobileText.textContent = 'Chinese';
      break;
  }
}

function changeLanguage(language) {
  // Load the language file or change the text content dynamically
  // For simplicity, we'll just change the text content here
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(element => {
    element.textContent = translations[language][element.dataset.lang];
  });
}

const translations = {
  en: {
    about: 'About Me',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    services: 'Services',
    contact: 'Contact'
  },
  km: {
    about: 'អំពីខ្ញុំ',
    skills: 'ជំនាញ',
    projects: 'គម្រោង',
    experience: 'បទពិសោធន៍',
    services: 'សេវាកម្ម',
    contact: 'ទំនាក់ទំនង'
  },
  zh: {
    about: '关于我',
    skills: '技能',
    projects: '项目',
    experience: '经验',
    services: '服务',
    contact: '联系'
  }
};

// Initialize the language based on the default value
updateLanguageSwitcher('en');
changeLanguage('en');