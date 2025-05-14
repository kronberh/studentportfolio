import { TbBrandGithubFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiRender, SiVercel } from "react-icons/si";
import { CodingCard } from "../datatypes/CodingCard";

const codingCards: CodingCard[] = [
    {
        title: "Arcade Hub",
        description: "A web game browser consisting of separatedly hosted front and back, where users are planned to be able to code and publish games for others to play. The original concept was to create a \"snake\" controller interface for future \"modifications\" to implement, hovewer, during development it has been discoreved that said interface is suitable for all 2D pixel games with WASD controls. Currently, creating new games is an under-development feature. As of now, registered users are able to host a precoded classic Snake game and play it online with other users. A lot of things is to be added and fixed. MSQL was chosen as a development database, and PostgreSQL is a production database.",
        imagePaths: [
            "/arcade_hub_play.png",
            "/arcade_hub_sessions.png",
            "/arcade_hub_login.png",
            "/arcade_hub_browse.png",
            "/arcade_hub_host.png"
        ],
        links: [
            { icon: <TbBrandGithubFilled />, href: "https://github.com/kronberh/ArcadeHub" },
            { icon: <TbBrandGithubFilled />, href: "https://github.com/kronberh/ArcadeHubServer" },
            { icon: <SiRender />, href: "https://arcadehub.onrender.com/" }
        ]
    },
    {
        title: "Console Vocabulary",
        description: "A console app originally made for a C# exam. Create a vocabulary, add translations, browse translations, view word usages and similar words. Admin acces is required to modify data (granted by entering the correct password in the title screen). Supports AD and arrows navogation. Local XML file is used as a data storage. App is best experienced in full screen mode.",
        imagePaths: [
            "/console_vocabulary_title_screen.png",
            "/console_vocabulary_user_pov.png",
            "/console_vocabulary_similars.png",
            "/console_vocabulary_admin_pov.png",
            "/console_vocabulary_modify_translations.png"
        ],
        links: [
            { icon: <TbBrandGithubFilled />, href: "https://github.com/kronberh/Console-Vocabulary" }
        ]
    },
    {
        title: "Painterest",
        description: "A dark-mode copy of Pinterest made for a React exam. Browse images, like images, search by title, add and edit images: no login needed (yet). JSON server is used as a database; a sample database is published alongside project itself.",
        imagePaths: [
            "/painterest_main.png",
            "/painterest_add_image.png",
            "/painterest_image_details.png",
            "/painterest_edit_image.png",
            "/painterest_search.png"
        ],
        links: [
            { icon: <TbBrandGithubFilled />, href: "https://github.com/kronberh/Painterest" }
        ]
    },
    {
        title: "Chategory",
        description: "A community social media made for Django exam, where users can create categories or discover existing ones, make posts, comment and reply, and like units they want to, as well as personalize website's view by dynamically changing light/dark mode. To post, comment and like, user is required to be registered. MySQL is used as database.",
        imagePaths: [
            "/chategory_main.png",
            "/chategory_registration.png",
            "/chategory_profile.png",
            "/chategory_add_category.png",
            "/chategory_add_post.png",
            "/chategory_category_details.png",
            "/chategory_1_comment.png",
            "/chategory_add_reply.png",
            "/chategory_2_comments.png"
        ],
        links: [
            { icon: <TbBrandGithubFilled />, href: "https://github.com/kronberh/Chategory" }
        ]
    },
    {
        title: "BusFor Clone",
        description: "A clone of a popular ticket booking service made for a course work ina  team with two talented classmates (their GitHub profiles are included in reference list below). The app simulates full booking process (except payment): passwordless registration, filtering available races, creating subprofiles within a single account, and finally sending an email booking confirmation letter. App unfortunately does not support localization, so a web translator service might be needed",
        imagePaths: [
            "/busfor_main.png",
            "/busfor_races_query.png",
            "/busfor_login_register.png",
            "/busfor_race.png",
            "/busfor_booking.png"
        ],
        links: [
            { icon: <TbBrandGithubFilled />, href: "https://github.com/DominickUAODS/BusForProject" },
            { icon: <FaGithub />, href: "https://github.com/taisiiamokroguz" },
            { icon: <FaGithub />, href: "https://github.com/DominickUAODS" },
            { icon: <SiVercel />, href: "https://bus-for-web.vercel.app/" }
        ]
    },
    {
        title: "This website",
        description: "While browsing portfolio ideas and trying various online website creators, I have decided to make one on my own to truly demonstrate my persistence and creativity. COnsidering my current programming level, I like how it turned out. Taking things in own hands is a fun journey!",
        imagePaths: [
            "/portfolio_minigames.png",
            "/portfolio_coding_experience.png",
            "/portfolio_about.png",
            "/portfolio_gaming_experience.png"
        ],
        links: [
            { icon: <TbBrandGithubFilled />, href: "https://github.com/kronberh/studentportfolio" },
            { icon: <SiRender />, href: "https://yelyzavetakronberhstudentportfolio.onrender.com/" }
        ]
    },
    {
        title: "Mind Unlocker",
        description: "An in-development mobile app with a concept similar to App Lock, but instead of securing apps with a password, it locks them behing a randomly generated math equation. Being tested on emulator, app is currently capable of customizing equations to user's needs and giving them choice on which app they want to lock. Equation customization and app design is being actively worked on.",
        imagePaths: [
            "/mind_unlocker_equation_true.png",
            "/mind_unlocker_equation_customization.png",
            "/mind_unlocker_apps.png",
            "/mind_unlocker_permissions.png",
            "/mind_unlocker_equation_false.png"
        ],
        links: [
            { icon: <TbBrandGithubFilled />, href: "https://github.com/kronberh/MindUnlocker" }
        ]
    }
];

export { codingCards }
