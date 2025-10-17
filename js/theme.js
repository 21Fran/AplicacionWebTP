const toggleButton = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  rootElement.classList.add('dark');
  toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', () => {
  rootElement.classList.toggle('dark');

  if (rootElement.classList.contains('dark')) {
    toggleButton.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});