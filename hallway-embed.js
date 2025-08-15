// Hallway.ai embed loader
// This script loads the Hallway embed globally across all documentation pages

// Create and append the Hallway embed script
const hallwayScript = document.createElement('script');
hallwayScript.src = 'https://hallway.ai/embed-loader.js';
hallwayScript.async = true;
hallwayScript.type = 'text/javascript';
document.head.appendChild(hallwayScript);

// Create the Hallway embed element
function addHallwayEmbed() {
  // Check if the embed already exists to avoid duplicates
  if (document.querySelector('hallway-embed')) {
    return;
  }
  
  // Create the embed element
  const hallwayEmbed = document.createElement('hallway-embed');
  hallwayEmbed.setAttribute('character-id', 'character_ec3371926414494a');
  
  // Add the embed to the page (you can customize where it appears)
  // This adds it to the end of the content area
  const contentArea = document.getElementById('content-area') || document.body;
  contentArea.appendChild(hallwayEmbed);
}

// Wait for the page to load before adding the embed
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addHallwayEmbed);
} else {
  addHallwayEmbed();
}

// For single-page applications, also listen for route changes
// This ensures the embed appears on dynamically loaded pages
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    // Small delay to allow page content to load
    setTimeout(addHallwayEmbed, 100);
  }
}).observe(document, { subtree: true, childList: true });
