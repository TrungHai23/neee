onload = () => {
    const text = `8/3 vui vẻ nhe :))) 💐`;
    const container = document.getElementById("text-container");
  
    text.split("").forEach((char, index) => {
        let span = document.createElement("span");
        span.textContent = char;
        span.classList.add("letter");
        span.style.animationDelay = `${index * 0.1}s`; // Delay mỗi chữ một chút
        container.appendChild(span);
    });
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  