/**
 * GitHub MCP Integration Demo Script
 * Created with Cursor IDE
 */

// Simple counter function
function startCounter() {
    let count = 0;
    const counterElement = document.getElementById('counter');
    
    // Update the counter every second
    setInterval(() => {
        count++;
        if (counterElement) {
            counterElement.textContent = count;
        }
    }, 1000);
}

// Feature detection function
function detectMCPFeatures() {
    const features = {
        githubMCP: true,
        cursorIDE: true,
        fileManagement: true,
        issueTracking: true
    };
    
    return features;
}

// Log features to console
function logFeatures() {
    console.log('MCP Features:');
    const features = detectMCPFeatures();
    
    for (const [key, value] of Object.entries(features)) {
        console.log(`- ${key}: ${value ? 'Available' : 'Unavailable'}`);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('GitHub MCP Demo Initialized');
    logFeatures();
    
    // Setup counter if element exists
    if (document.getElementById('counter')) {
        startCounter();
    }
});