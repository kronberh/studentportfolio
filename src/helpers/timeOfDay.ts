const date: Date = new Date();
const hours: number = date.getHours();
let timeOfDay: string;

switch (hours) {
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        timeOfDay = "morning";
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        timeOfDay = "afternoon";
        break;
    case 17:
    case 18:
    case 19:
    case 20:
        timeOfDay = "evening";
        break;
    default:
        timeOfDay = "night";
        break;
};

export { timeOfDay }
