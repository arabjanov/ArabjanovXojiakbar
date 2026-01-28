document.addEventListener("DOMContentLoaded", () => {

      const projects = [
        {
          img: "https://raw.githubusercontent.com/arabjanov/ArabjanovXojiakbar/main/images/shorts-1.jpg",
          youtube: "https://youtube.com/shorts/Rfsu5or6Tko",
          title: "Podcastdan Backstage"
        },
        {
          img: "https://raw.githubusercontent.com/arabjanov/arabjanov_xojiakbar/main/images/cub.jpg",
          youtube: "https://www.youtube.com/watch?v=VIDEO_ID_2",
          title: "3D Motion Graphics"
        },
        {
          img: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Video+3",
          youtube: "https://www.youtube.com/watch?v=VIDEO_ID_3",
          title: "Reklama Montaj"
        },
        {
          img: "https://via.placeholder.com/300x300/2a2a2a/ffffff?text=Video+4",
          youtube: "https://www.youtube.com/watch?v=VIDEO_ID_4",
          title: "Musiqa Video"
        },
        {
          img: "https://via.placeholder.com/300x300/2a2a2a/ffffff?text=Video+4",
          youtube: "https://www.youtube.com/watch?v=VIDEO_ID_4",
          title: "Musiqa Video lakhsdl alshdla shld daslk dsalomo"
        },
        {
          img: "https://via.placeholder.com/300x300/2a2a2a/ffffff?text=Video+4",
          youtube: "https://www.youtube.com/watch?v=VIDEO_ID_4",
          title: "Musiqa Video lakhsdl alshdla shld daslk dsalomo"
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