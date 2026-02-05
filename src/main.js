import './style.css'

console.log('SELLANA: Crypto Crash Imminent');

// Simple interaction or logic can go here
const caButton = document.querySelector('.contract-box button');
const caText = document.querySelector('#contract-address');

if (caButton && caText) {
  caButton.addEventListener('click', () => {
    navigator.clipboard.writeText(caText.innerText);
    const originalText = caButton.innerText;
    caButton.innerText = 'COPIED!';
    caButton.style.color = '#34c759'; // manual green for JS
    setTimeout(() => {
      caButton.innerText = originalText;
      caButton.style.color = '';
    }, 2000);
    console.log('Copied CA');
  });
}
