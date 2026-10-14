// ============================================================
// HERBARIUM VALPL — IAPT PROJECT WEBSITE
// Main JavaScript file
//
// This file currently controls the EN / ES language switcher.
// You can edit the HTML and CSS without changing this file.
// ============================================================

// ------------------------------------------------------------
// 1. CHANGE THE LANGUAGE
// ------------------------------------------------------------
// The page stores both versions of the text in the HTML using
// data-en="English text" and data-es="Texto en español".
// When a language button is clicked, this function replaces
// the visible text with the selected language.
// ------------------------------------------------------------
function setLanguage(lang) {

  // Update the language attribute of the HTML document.
  // This is useful for browsers and accessibility tools.
  document.documentElement.lang = lang;

  // Find every element that has both data-en and data-es.
  document.querySelectorAll('[data-en][data-es]').forEach(function (element) {

    // Get the text for the selected language.
    var translatedText = element.getAttribute('data-' + lang);

    // Insert the translation into the page.
    // innerHTML is used because some headings contain <em> or <br>.
    element.innerHTML = translatedText;
  });

  // Highlight the currently selected language button.
  document.getElementById('enBtn').classList.toggle('active', lang === 'en');
  document.getElementById('esBtn').classList.toggle('active', lang === 'es');

  // Remember the visitor's choice in the browser.
  // The next time the page is opened, the same language will be used.
  localStorage.setItem('valpl-language', lang);
}


// ------------------------------------------------------------
// 2. INITIAL LANGUAGE
// ------------------------------------------------------------
// When the page loads, check whether the visitor has already
// selected a language. If not, English is used by default.
// ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {

  var savedLanguage = localStorage.getItem('valpl-language');

  // Use the saved language, or English if there is no saved choice.
  setLanguage(savedLanguage || 'en');
});


// ============================================================
// FUTURE FUNCTIONS
// ============================================================
// If you later want to add interactive elements, this is a good
// place to add them. For example:
//
// - a filter for Project Updates
// - a photo gallery
// - a progress bar for digitized specimens
// - expandable project milestones
//
// Keeping those functions here will make the website easier
// to maintain as the IAPT project develops.
// ============================================================
