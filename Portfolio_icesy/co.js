// ------------ ข้อมูลโปรเจกต์ (แก้ตรงนี้) ------------
const projects = [
  {
    id: "p1",
    title: "ได้เข้ารวมวันถวายพระพรชัยมงคล ในโอกาสวันเฉลิมพระชนมพรรษา",
    cover: "2.jpg.jfif",
    desc: "เข้ารวมทำกิจกรรมถวายพระพรชัยมงคล",
    category: "website",
    tags: ["HTML","CSS","JS","Responsive"],
    demo: "https://example.com/coffee-landing",
    repo: "https://github.com/yourname/coffee-landing"
  },
  {
    id: "p2",
    title: "ได้เข้ารวม บริษัท แอดไวซ์ ไอที สอนประกอบคอมพิวเตอร์เบื้องต้น",
    cover: "3.jpg.jfif",
    desc: "มีสอนประกอบคอมและให้ความรู้เบื้องต้น",
    category: "ui",
    tags: ["UI","Prototype"],
    demo: "https://example.com/finance-ui",
    repo: "https://github.com/yourname/finance-ui"
  },
  {
    id: "p3",
    title: "งานทำวิดีโอ",
    cover: "4.jpg.jfif",
    desc: "ยังตัดไม่ดีแต่จะพายามตัดให้ดีขึ้นค่ะ",
    category: "tool",
    tags: ["JavaScript","Canvas","Performance"],
    demo: "https://example.com/image-mini",
    repo: "https://github.com/yourname/image-mini"
  }
];

// ------------ เรนเดอร์โปรเจกต์ลงกริด ------------
const grid = document.getElementById("projectGrid");
function renderProjects(list){
  grid.innerHTML = "";
  list.forEach(p=>{
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.cover}" alt="ภาพปก: ${p.title}">
      <div class="card-body">
        <h3 class="title">${p.title}</h3>
        <p class="desc">${p.desc}</p>
        <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      </div>
    `;
    card.addEventListener("click", ()=> openProject(p));
    grid.appendChild(card);
  });
}
renderProjects(projects);

// ------------ ฟิลเตอร์ ------------
const filterBtns = document.querySelectorAll(".filter");
filterBtns.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    filterBtns.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const type = btn.dataset.filter;
    if(type==="all") return renderProjects(projects);
    renderProjects(projects.filter(p=>p.category===type));
  });
});

// ------------ โมดัล ------------
const modal = document.getElementById("projectModal");
const modalCover = document.getElementById("modalCover");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const demoLink = document.getElementById("demoLink");
const repoLink = document.getElementById("repoLink");

function openProject(p){
  modalCover.src = p.cover;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  demoLink.href = p.demo;
  repoLink.href = p.repo;
  if(typeof modal.showModal === "function") modal.showModal();
  else modal.setAttribute("open","true"); // fallback
}
modal.addEventListener("click",(e)=>{
  const rect = modal.querySelector(".modal-body").getBoundingClientRect();
  const inDialog = e.clientX >= rect.left && e.clientX <= rect.right &&
                   e.clientY >= rect.top  && e.clientY <= rect.bottom;
  if(!inDialog) modal.close();
});

// ------------ ปุ่มทักทาย + ธีม ------------
function sayHi(){ alert("ยินดีที่ได้รู้จัก! 🙌"); }
window.sayHi = sayHi;

const themeToggle = document.getElementById("themeToggle");
let light = false;
themeToggle.addEventListener("click", ()=>{
  light = !light;
  document.documentElement.style.setProperty("--bg", light ? "#f7f8fd" : "#0f1220");
  document.documentElement.style.setProperty("--card", light ? "#ffffff" : "#151a2e");
  document.documentElement.style.setProperty("--text", light ? "#1a1a1a" : "#e8ebff");
  document.documentElement.style.setProperty("--muted", light ? "#4b5563" : "#aab2d5");
  document.body.style.background = light
    ? "#f3f5ff"
    : 'radial-gradient(1200px 600px at 20% -10%, #1a1f3b 0%, transparent 60%),radial-gradient(1200px 800px at 120% 10%, #231b47 0%, transparent 60%),var(--bg)';
});
