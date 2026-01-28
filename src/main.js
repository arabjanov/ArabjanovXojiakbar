document.addEventListener("DOMContentLoaded", () => {

      const projects = [
        {
          img: "https://raw.githubusercontent.com/arabjanov/ArabjanovXojiakbar/main/images/video-1.jpg",
          youtube: "https://youtube.com/shorts/Rfsu5or6Tko",
          title: "Ish turi: syomka va montaj birga"
        },
        {
          img: "https://raw.githubusercontent.com/arabjanov/ArabjanovXojiakbar/main/images/video-2.jpg",
          youtube: "https://youtube.com/shorts/W7rXqq1pH6Q",
          title: "Ish turi: faqat montaj"
        },
        {
          img: "https://raw.githubusercontent.com/arabjanov/ArabjanovXojiakbar/main/images/video-3.jpg",
          youtube: "https://youtu.be/8cu5yn57bsE",
          title: "Ish turi: faqat montaj"
        },
        {
          img: "https://raw.githubusercontent.com/arabjanov/ArabjanovXojiakbar/main/images/video-4.jpg",
          youtube: "https://youtube.com/shorts/aapVDkIDtk0",
          title: "Ish turi: faqat montaj, rang bilan ishlash"
        },
        {
          img: "https://raw.githubusercontent.com/arabjanov/ArabjanovXojiakbar/main/images/video-5.jpg",
          youtube: "https://youtube.com/shorts/jQrwF5pbZV4",
          title: "Ish turi: faqat montaj, rang bilan ishlash"
        }
      ];

      const container = document.getElementById("projects");

      projects.forEach(p => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.onclick = () => window.open(p.youtube, "_blank");

        const imageDiv = document.createElement("div");
        imageDiv.className = "project-image";
        imageDiv.style.backgroundImage = `url(${p.img})`;

        const titleDiv = document.createElement("div");
        titleDiv.className = "project-title";
        titleDiv.textContent = p.title;

        projectDiv.appendChild(imageDiv);
        projectDiv.appendChild(titleDiv);
        container.appendChild(projectDiv);
      });

    });