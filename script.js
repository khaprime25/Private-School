// Navbar Section
const nav = document.querySelector('.nav');
const loginForm = document.querySelector('.login-form');
const menuBtn = document.querySelector('#menu-btn');
const loginBtn = document.querySelector('#login-btn');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
    loginForm.classList.remove('active');

    if (window.scrollY > 0) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
});

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
});

loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
});

// About Section
const studentGrid = document.getElementById("studentGrid");
const showMoreBtn = document.getElementById("showMoreBtn");
const showLessBtn = document.getElementById("showLessBtn");
const yearBtns = document.querySelectorAll(".year-btn");

let currentYear = "2025";
let visibleCount = 4;

const studentData = {

    2025: {
        stats: {
            sixD: 6,
            fiveD: 11,
            fourD: 18,
            threeD: 24,
            twoD: 31,
            oneD: 42,
            successRate: "84%"
        },

        students: [
            {
                name: "Aung Min Htet",
                exam: "SDM 765",
                img: "../Images/male1.jpg"
            },
            {
                name: "Su Myat Mon",
                exam: "SDM 1126",
                img: "../Images/female1.jpg"
            },
            {
                name: "Kaung Khant",
                exam: "SDM 803",
                img: "../Images/male2.jpg"
            },
            {
                name: "Thiri Shwe",
                exam: "SDM 239",
                img: "../Images/female7.jpg"
            },
            {
                name: "Ye Yint",
                exam: "SDM 1493",
                img: "../Images/male3.jpg"
            },
            {
                name: "May Thu",
                exam: "SDM 1822",
                img: "../Images/female4.jpg"
            }
        ]
    },

    2024: {
        stats: {
            sixD: 5,
            fiveD: 9,
            fourD: 15,
            threeD: 20,
            twoD: 28,
            oneD: 39,
            successRate: "81%"
        },

        students: [
            {
                name: "Kaung Sett Thaw",
                exam: "SDM 1635",
                img: "../Images/male6.jpg"
            },
            {
                name: "Moe Satt Paing",
                exam: "SDM 143",
                img: "../Images/female2.jpg"
            },
            {
                name: "Sithu Naing",
                exam: "SDM 528",
                img: "../Images/male4.jpg"
            },
            {
                name: "Sinn Shwe Yee",
                exam: "SDM 244",
                img: "../Images/female3.jpg"
            },
            {
                name: "Min Hein Kyaw",
                exam: "SDM 798",
                img: "../Images/male5.jpg"
            },
        ]
    },

    2023: {
        stats: {
            sixD: 3,
            fiveD: 7,
            fourD: 12,
            threeD: 17,
            twoD: 25,
            oneD: 34,
            successRate: "76%"
        },

        students: [
            {
                name: "Shwe Yoon San",
                exam: "SDM 1262",
                img: "../Images/female6.jpg"
            },
            {
                name: "Kaung Kin Kyi",
                exam: "SDM 595",
                img: "../Images/male7.jpg"
            },
            {
                name: "No No",
                exam: "SDM 639",
                img: "../Images/female7.jpg"
            }
        ]
    },

    2022: {
        stats: {
            sixD: 5,
            fiveD: 7,
            fourD: 10,
            threeD: 15,
            twoD: 22,
            oneD: 30,
            successRate: "70%"
        },

        students: [
            {
                name: "Kaung Htut",
                exam: "SDM -610",
                img: "../Images/male8.jpg"
            },
            {
                name: "D Ye Linn",
                exam: "SDM 1572",
                img: "../Images/male9.jpg"
            },
            {
                name: "Aye Myat",
                exam: "SDM 1639",
                img: "../Images/female8.jpg"
            },
            {
                name: "Kaung Zaw Hein",
                exam: "SDM 2644",
                img: "../Images/male10.jpg"
            },
            {
                name: "Sabel",
                exam: "SDM 2585",
                img: "../Images/female9.jpg"
            }
        ]
    },

    2021: {
        stats: {
            sixD: 4,
            fiveD: 4,
            fourD: 8,
            threeD: 13,
            twoD: 18,
            oneD: 26,
            successRate: "65%"
        },

        students: [
            {
                name: "Bo Khant",
                exam: "SDM 823",
                img: "../Images/male11.jpg"
            },
            {
                name: "Htet Thiri",
                exam: "SDM 2378",
                img: "../Images/female10.jpg"
            },
            {
                name: "Paing Min Khant",
                exam: "SDM 1089",
                img: "../Images/male12.jpg"
            },
            {
                name: "Shin Thant Nay Chi",
                exam: "SDM 727",
                img: "../Images/female11.jpg"
            }
        ]
    }
};

function renderStudents() {

    const yearData = studentData[currentYear];

    studentGrid.innerHTML = "";

    yearData.students
        .slice(0, visibleCount)
        .forEach(student => {
            const lastSubject = Math.random() > 0.5 ? "Bio" : "Eco";
            studentGrid.innerHTML += `
                <div class="student-card">
                    <img src="${student.img}" alt="${student.name}">

                    <div class="student-info">
                        <h3>${student.name}</h3>
                        <p>Roll no - ${student.exam}</p>
                        <p>Distinctions - Myan, Eng, Math, Chem, Phys,  ${lastSubject}</p>
                    </div>
                </div>
            `;
        });

    document.querySelector(".stats").innerHTML = `
        <div class="stat-card"><h3>${yearData.stats.sixD}</h3><p>6D Students</p></div>
        <div class="stat-card"><h3>${yearData.stats.fiveD}</h3><p>5D Students</p></div>
        <div class="stat-card"><h3>${yearData.stats.fourD}</h3><p>4D Students</p></div>
        <div class="stat-card"><h3>${yearData.stats.threeD}</h3><p>3D Students</p></div>
        <div class="stat-card"><h3>${yearData.stats.twoD}</h3><p>2D Students</p></div>
        <div class="stat-card"><h3>${yearData.stats.oneD}</h3><p>1D Students</p></div>
        <div class="stat-card highlight">
            <h3>${yearData.stats.successRate}</h3>
            <p>Success Rate</p>
        </div>
    `;

    showMoreBtn.style.display =
        visibleCount >= yearData.students.length
            ? "none"
            : "inline-block";

    showLessBtn.style.display =
        visibleCount > 4
            ? "inline-block"
            : "none";
}

yearBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        yearBtns.forEach(item => item.classList.remove("active"));
        btn.classList.add("active");
        currentYear = btn.dataset.year;
        visibleCount = 4;
        renderStudents();
    });
});

showMoreBtn.addEventListener("click", () => {
    visibleCount += 4;
    renderStudents();
});

showLessBtn.addEventListener("click", () => {
    visibleCount = 4;
    renderStudents();
});

renderStudents();

const teachers = [

    {
        name: "Daw San San Tin",
        subject: "Myanmar",
        education: "B.A (Myanmar)",
        experience: "12 Years",
        personality: "Patient, Supportive",
        image: "../Images/teacher1.jpg"
    },
    {
        name: "U Aung Kyaw",
        subject: "Myanmar",
        education: "M.A (Myanmar)",
        experience: "15 Years",
        personality: "Dedicated, Motivating",
        image: "../Images/teacher2.jpg"
    },
    {
        name: "U Moe Zaw Tun",
        subject: "English",
        education: "M.A (English)",
        experience: "14 Years",
        personality: "Professional, Encouraging",
        image: "../Images/teacher3.jpg"
    },
    {
        name: "Daw Su Mon",
        subject: "English",
        education: "B.A (English)",
        experience: "10 Years",
        personality: "Friendly, Creative",
        image: "../Images/teacher4.jpg"
    },
    {
        name: "U Win Mg Mg",
        subject: "Mathematics",
        education: "B.Sc (Maths)",
        experience: "11 Years",
        personality: "Structured, Caring",
        image: "../Images/teacher5.jpg"
    },

    {
        name: "Daw Thidar Aye",
        subject: "Mathematics",
        education: "M.Sc (Maths)",
        experience: "13 Years",
        personality: "Patient, Inspiring",
        image: "../Images/teacher6.jpg"
    },

    {
        name: "U Kyaw Soe Paing",
        subject: "Chemistry",
        education: "B.Sc (Chemistry)",
        experience: "9 Years",
        personality: "Energetic, Helpful",
        image: "../Images/teacher7.jpg"
    },

    {
        name: "U Nay Lin",
        subject: "Chemistry",
        education: "M.Sc (Chemistry)",
        experience: "12 Years",
        personality: "Focused, Friendly",
        image: "../Images/teacher8.jpg"
    },

    {
        name: "U Aung Thant Sint",
        subject: "Physics",
        education: "B.Sc (Physics)",
        experience: "10 Years",
        personality: "Supportive, Calm",
        image: "../Images/teacher9.jpg"
    },

    {
        name: "Daw Shwe Yee Win",
        subject: "Physics",
        education: "M.Sc (Physics)",
        experience: "16 Years",
        personality: "Dedicated, Motivating",
        image: "../Images/teacher10.jpg"
    },

    {
        name: "Daw Ei Mon",
        subject: "Biology",
        education: "B.Sc (Biology)",
        experience: "8 Years",
        personality: "Patient, Positive",
        image: "../Images/teacher12.jpg"
    },

    {
        name: "U Ye Yint",
        subject: "Economics",
        education: "M.Econ",
        experience: "14 Years",
        personality: "Professional, Caring",
        image: "../Images/teacher11.jpg"
    },

    {
        name: "Daw Nilar",
        subject: "Office Staff",
        education: "Administration",
        experience: "9 Years",
        personality: "Organized, Friendly",
        image: "../Images/teacher14.jpg"
    },

    {
        name: "U Soe Win",
        subject: "Office Staff",
        education: "Administration",
        experience: "11 Years",
        personality: "Helpful, Responsible",
        image: "../Images/teacher13.jpg"
    }

];

const teacherGrid = document.getElementById("teacherGrid");
const nextTeacher = document.getElementById("nextTeacher");
const prevTeacher = document.getElementById("prevTeacher");

let teacherIndex = 0;

function renderTeachers() {
    const perView = window.innerWidth <= 768 ? 1 : 2;
    teacherGrid.innerHTML = "";

    for (let i = 0; i < perView; i++) {
        const teacher = teachers[(teacherIndex + i) % teachers.length];

        teacherGrid.innerHTML += `
            <div class="teacher-card">
                <img src="${teacher.image}" alt="${teacher.name}">
                <div class="teacher-info">
                    <h3>${teacher.name}</h3>
                    <span>${teacher.subject}</span>
                    <p>
                        <strong>Education : </strong>
                        ${teacher.education}
                    </p>
                    <p>
                        <strong>Experience : </strong>
                        ${teacher.experience}
                    </p>
                    <p>
                        <strong>Personality : </strong>
                        ${teacher.personality}
                    </p>
                </div>
            </div>
        `;
    }
}

nextTeacher.addEventListener("click", () => {
    teacherIndex++;
    renderTeachers();
});

prevTeacher.addEventListener("click", () => {
    teacherIndex--;
    if (teacherIndex < 0) {
        teacherIndex = teachers.length - 1;
    }
    renderTeachers();
});

window.addEventListener("resize", renderTeachers);

renderTeachers();