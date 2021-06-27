var reasons = [
"2. Trees Provide Shade.", 
"3. Trees help in retaining the Rainwater.", 
"4. Trees Provide fruits.", 
"5. Trees are natural medicines.",
"Thank You For Watching"
];

var images = [
"https://images.unsplash.com/photo-1492486169476-8c5dafd9539f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUzNjAxNw&ixlib=rb-1.2.1&q=85",
"https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUzNjAxNw&ixlib=rb-1.2.1&q=85",

"https://images.unsplash.com/photo-1579728887026-6fe67a8f9165?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUzNjAxNw&ixlib=rb-1.2.1&q=85",
"https://images.unsplash.com/photo-1445711005973-54fe2a103826?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUzNjAxNw&ixlib=rb-1.2.1&q=85",
"https://motionarray.imgix.net/preview-55186tjGuOkExwA_0015.jpg?w=750&q=60&fit=max&auto=format"
];

var i = 0; 
function nextslide() { 
document.getElementById("reasontext").innerHTML = reasons[i]; document.getElementById("album").src = images[i]; i++; document.getElementById("audio").play(); 
}
