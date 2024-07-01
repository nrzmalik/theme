window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const themeLink = document.createElement("link");
    themeLink.setAttribute("rel", "stylesheet");
    themeLink.setAttribute("id", "theme-stylesheet");

    // Append the new link element to the body as the last child
    document.body.appendChild(themeLink);

    // Function to set the theme based on user's preference
    const setTheme = () => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        themeLink.href = prefersDark ? "dark.css" : "light.css";
    };

    // Initial theme setting
    setTheme();

    // Listen for changes in the color scheme preference
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setTheme);
}

window.Script2 = function()
{
  const themeStylesheet = document.getElementById("theme-stylesheet");
 if (themeStylesheet.getAttribute("href") === "light.css") {
                themeStylesheet.setAttribute("href", "dark.css");
            } else {
                themeStylesheet.setAttribute("href", "light.css");
            }
}

};
