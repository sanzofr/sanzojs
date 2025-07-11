(function (global) {
    function previewCursor({
        width = 200,
        height = 200,
        offset = 20,
        target = ".card",
        images = []
    } = {}) {
        const cards = document.querySelectorAll(target);

        cards.forEach((card, index) => {
            if (images[index]) {
                card.setAttribute("data-img", images[index]);
            }
        });

        // Create the preview cursor
        const cursor = document.createElement("div");
        cursor.className = "preview-cursor";
        Object.assign(cursor.style, {
            width: `${width}px`,
            height: `${height}px`,
            position: "fixed",
            left: "0",
            top: "0",
            transform: "translate(-50%, -50%)",
            display: "none",
            pointerEvents: "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: "9999",
            transition: "transform 0.1s ease-out"
        });
        document.body.appendChild(cursor);

        cards.forEach(card => {
            card.addEventListener("mouseenter", () => {
                const img = card.getAttribute("data-img");
                cursor.style.backgroundImage = `url(${img})`;
                cursor.style.display = "block";
            });

            card.addEventListener("mousemove", e => {
                cursor.style.transform = `translate(${e.clientX + offset}px, ${e.clientY + offset}px)`;
            });

            card.addEventListener("mouseleave", () => {
                cursor.style.display = "none";
            });
        });
    }

   function mousefollow({
  width = "20px",
  height = "20px",
  color = "#000",
  style = 1,
  wrapper = "body",
} = {}) {
  if (document.querySelector(".cursor")) return;

  const cursor = document.createElement("div");
  cursor.className = "cursor";

  const stylePresets = {
    1: {
      borderRadius: "50%",
      backgroundColor: color,
      mixBlendMode: "difference",
      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    },
    2: {
      borderRadius: "50%",
      backgroundColor: "transparent",
      border: `1px solid ${color}`,
      backdropFilter: "blur(2px)",
    },
    3: {
      borderRadius: "50%",
      backgroundImage: `radial-gradient(${color} 30%, transparent 70%)`,
    },
  };

  Object.assign(cursor.style, {
    width,
    height,
    position: "fixed",
    zIndex: 9999,
    pointerEvents: "none",
    left: "0px",
    top: "0px",
    transform: "translate(-50%, -50%)",
  });

  if (stylePresets[style]) {
    Object.assign(cursor.style, stylePresets[style]);
  }

  document.body.prepend(cursor);

  const container = document.querySelector(wrapper);
  if (!container) return console.warn(`[mousefollow] wrapper "${wrapper}" not found.`);

  let mouse = { x: 0, y: 0 };
  let pos = { x: 0, y: 0 };

  container.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Animate smoothly toward target
  gsap.ticker.add(() => {
    pos.x += (mouse.x - pos.x) * 0.15;
    pos.y += (mouse.y - pos.y) * 0.15;

    gsap.set(cursor, {
      x: pos.x,
      y: pos.y,
    });
  });
}



    function magnetbutton(a) {
        const button = document.querySelectorAll(a);

        document.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();

            const btnX = rect.left + rect.width / 2;
            const btnY = rect.top + rect.height / 2;

            const distX = e.clientX - btnX;
            const distY = e.clientY - btnY;

            const maxDist = 100;

            if (Math.abs(distX) < maxDist && Math.abs(distY) < maxDist) {
                button.style.transform = `translate(${distX * 0.3}px, ${distY * 0.3}px)`;
            } else {
                button.style.transform = `translate(0px, 0px)`;
            }
        });
    }


    global.sanzo = global.sanzo || {};
    global.sanzo.mousefollow = mousefollow;
    global.sanzo.magnetbutton = magnetbutton;
    global.sanzo.previewCursor = previewCursor;

})(typeof window !== "undefined" ? window : this);
