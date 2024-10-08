export interface Service {
    id: number,
    name: string,
    developer: string,
    rate_per_hour: number,
    description: string,
}

const services:Service[] = [
    {
        "id": 1,
        "name": "Api Development",
        "developer": "Arsalan Mughal",
        "rate_per_hour": 400,
        "description": "Develop Api's for the Application on PHP OR NodeJs"
    },
    {
        "id": 2,
        "name": "Api Integration",
        "developer": "Arsalan Mughal",
        "rate_per_hour": 400,
        "description": "Integrate Api's on Frontend Application"
    },
    {
        "id": 3,
        "name": "Design ERD",
        "developer": "Arsalan Mughal",
        "rate_per_hour": 400,
        "description": "Design Entity Relationship Diagrams"
    }
];

export default services
