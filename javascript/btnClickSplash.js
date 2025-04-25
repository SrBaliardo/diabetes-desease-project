function createCursorSplash(e) {
  const numberOfDashes = 7;
  const animationDuration = 500;

  for (let i = 0; i < numberOfDashes; i++) {
    const dash = document.createElement("div");
    dash.className = "cursor-splash-dash";
    dash.style.left = e.pageX + "px";
    dash.style.top = e.pageY + "px";
    let angle = i * (360 / numberOfDashes);
    dash.style.setProperty("--dash-angle", angle + "deg");
    document.body.appendChild(dash);

    setTimeout(() => {
      dash.remove();
    }, animationDuration);
  }
}

document.addEventListener("click", createCursorSplash);
