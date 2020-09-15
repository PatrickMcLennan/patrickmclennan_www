export const PROJECTS_QUERY = `
    query ($from: Int!, $to: Int!) { 
        projects (from: $from, to: $to) { 
            id
            name
            description
            languagesUsed
            updatedAt 
        } 
    }
`;

export const SEARCH_PROJECTS = `
    query ($text: String, $languages: [String], $from: Int!, $to: Int!) {
        projects (text: $text, languages: $languages, from: $from, to: $to) {
            id
            name
            description
            languagesUsed
            updatedAt
        }
    }
`;
