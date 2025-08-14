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
  hallwayEmbed.setAttribute('character-id', 'a0a6b76d-9237-4114-9623-d8ee86de1233');
  
  // Add the embed to the page (you can customize where it appears)
  // This adds it to the end of the content area
  const contentArea = document.getElementById('content-area') || document.body;
  contentArea.appendChild(hallwayEmbed);
}


addHallwayEmbed();

