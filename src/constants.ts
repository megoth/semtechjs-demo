import {namedNode} from "rdflib";
import namespace from "solid-namespace";
import {RatingScore} from "./components/rating";


export interface Guide {
    href: string;
    logo: string;
    logoAlt: string;
    logoPreferredHeight: number;
    name: string;
    recommendations: Array<Recommendation>;
}

export const RDF_GUIDE: Guide = {
    href: "/rdf",
    logo: "./rdf.png",
    logoAlt: "Logo of RDF",
    logoPreferredHeight: 128,
    name: "RDF",
    recommendations: [{
        title: "A brief introduction to linked data",
        href: "https://ontola.io/blog/what-is-linked-data",
        type: "URL"
    }, {
        title: "Stardog Academy Fundamentals: Getting Started with RDF & SPARQL",
        href: "https://www.youtube.com/watch?v=bDxclRhDb-o",
        type: "YouTube"
    }, {
        title: "Tim Berners-Lee: The next Web of open, linked data",
        href: "https://www.youtube.com/watch?v=OM6XIICm_qo",
        note: "Old but good",
        type: "YouTube"
    }, {
        title: "RDF Primer",
        href: "https://www.w3.org/TR/rdf-primer/",
        type: "URL"
    }, {
        title: "RDF 1.1 Concepts and Abstract Syntax",
        href: "https://www.w3.org/TR/rdf11-concepts/",
        note: "RDF specification",
        type: "URL",
    }, {
        title: "RDF 1.1 Semantics",
        href: "https://www.w3.org/TR/rdf11-mt/",
        note: "RDFS specification",
        type: "URL"
    }, {
        title: "Intro to the Semantic Web",
        href: "https://www.youtube.com/watch?v=OGg8A2zfWKg",
        note: "Old but good",
        type: "YouTube"
    }, {
        title: "What is Linked Data?",
        href: "https://www.youtube.com/watch?v=4x_xzT5eF5Q",
        note: "If you liked \"Intro to the Semantic Web\", you'll like this one too",
        type: "YouTube"
    }, {
        title: "An Introduction to the Semantic Web",
        href: "https://www.youtube.com/watch?v=V6BR9DrmUQA",
        type: "YouTube"
    }, {
        title: "What is the Resource Description Framework (RDF)?",
        href: "https://www.youtube.com/watch?v=NzzAxEPpuJQ",
        type: "YouTube"
    }, {
        title: "OWL 2 Web Ontology Language - Document Overview (Second Edition)",
        href: "https://www.w3.org/TR/owl2-overview/",
        note: "If you're into formal definitions and inferring knowledge, you'll like this",
        type: "URL"
    }],
};
export const REACT_GUIDE: Guide = {
    href: "/react",
    logo: "./react.svg",
    logoAlt: "Logo of React",
    logoPreferredHeight: 128,
    name: "React",
    recommendations: [],
};
export const SHEX_GUIDE: Guide = {
    href: "/shex",
    logo: "./shex.svg",
    logoAlt: "Logo of ShEx",
    logoPreferredHeight: 100,
    name: "ShEx",
    recommendations: [{
        title: "shex.io",
        href: "https://shex.io/",
        note: "Official website",
        type: "URL"
    }, {
        title: "Shape Expressions (ShEx) 2.1 Primer",
        href: "https://shex.io/shex-primer/",
        type: "URL"
    }, {
        title: "Shape Expressions Language 2.1",
        href: "https://shex.io/shex-semantics/",
        note: "Specification",
        type: "URL"
    }, {
        title: "Lotico Data Shapes Event",
        href: "https://www.youtube.com/watch?v=M3lpHLn__Cc",
        note: "Long, but good explanation of ShEx",
        type: "YouTube"
    }, {
        title: "Shapes Constraint Language (SHACL)",
        href: "https://www.w3.org/TR/shacl/",
        note: "The specification for SHACL, an alternative to ShEx. SHACL has more features than ShEx, but is IMHO harder to get into.",
        type: "URL"
    }],
};
export const SOLID_GUIDE: Guide = {
    href: "/solid",
    logo: "./solid.svg",
    logoAlt: "Logo of Solid",
    logoPreferredHeight: 352,
    name: "Solid",
    recommendations: [],
};
export const SPARQL_GUIDE: Guide = {
    href: "/sparql",
    logo: "./sparql.svg",
    logoAlt: "Logo of SPARQL",
    logoPreferredHeight: 128,
    name: "SPARQL",
    recommendations: [],
};
export const TYPESCRIPT_GUIDE: Guide = {
    href: "/typescript",
    logo: "./typescript.png",
    logoAlt: "Logo of TypeScript",
    logoPreferredHeight: 128,
    name: "TypeScript",
    recommendations: [],
};

export const GUIDES = [
    RDF_GUIDE,
    SHEX_GUIDE,
    SPARQL_GUIDE,
    SOLID_GUIDE,
    TYPESCRIPT_GUIDE,
    REACT_GUIDE
];

export interface Library {
    creator: string;
    creatorUrl: string;
    href: string;
    icon: string;
    iconAlt: string;
    iconPreferredHeight: number;
    name: string;
    published: boolean;
    recommendation: string;
    review: Array<RatingScore>;
    text: string;
    websiteName: string;
    websiteUrl: string;
}

export const LIBRARY_COMUNICA: Library = {
    creator: "IDLab at Ghent University",
    creatorUrl: "https://www.ugent.be/ea/idlab/en",
    href: "/comunica",
    icon: "/comunica.svg",
    iconAlt: "Logo for Comunica",
    iconPreferredHeight: 240,
    name: "Comunica",
    published: false,
    recommendation: "Large systems based on SPARQL",
    review: [2, 3, 3, 3, 2.5],
    text: "Comunica",
    websiteName: "Official website",
    websiteUrl: "https://comunica.dev/"
};
export const LIBRARY_LDO: Library = {
    creator: "Jackson Morgan",
    creatorUrl: "https://www.o.team/",
    href: "/ldo",
    icon: "/o-team.png",
    iconAlt: "Logo for O.team",
    iconPreferredHeight: 48,
    name: "Linked Data Objects",
    published: true,
    recommendation: "Experimental apps",
    review: [4, 3, 3, 2, 3.5],
    text: "LDO",
    websiteName: "GitHub repo",
    websiteUrl: "https://github.com/o-development/ldo/"
};
export const LIBRARY_INRUPT: Library = {
    creator: "Inrupt",
    creatorUrl: "https://inrupt.com",
    href: "/inrupt",
    icon: "/inrupt.webp",
    iconAlt: "Logo for Inrupt",
    iconPreferredHeight: 110,
    name: "Inrupt's JavaScript client libraries",
    published: true,
    recommendation: "Systems that need to be production-ready soon",
    review: [3, 3, 3, 3, 3],
    text: "Inrupt JS",
    websiteName: "Official documentation",
    websiteUrl: "https://docs.inrupt.com/developer-tools/javascript/client-libraries/"
};
export const LIBRARY_RDFLIB: Library = {
    creator: "rdflib.js team",
    creatorUrl: "https://github.com/linkeddata/rdflib.js/graphs/contributors",
    href: "/rdflib",
    icon: "/rdf.svg",
    iconAlt: "Logo for Read-Write Linked Data",
    iconPreferredHeight: 48,
    name: "rdflib.js",
    published: true,
    recommendation: "Low-level data management",
    review: [2, 2, 3, 4, 2.5],
    text: "rdflib.js",
    websiteName: "GitHub repo",
    websiteUrl: "https://github.com/linkeddata/rdflib.js/"
};
export const LIBRARY_SOUKAI: Library = {
    creator: "Noel De Martin",
    creatorUrl: "https://noeldemartin.com/",
    href: "/soukai",
    icon: "/soukai.svg",
    iconAlt: "Logo for Soukai ODM",
    iconPreferredHeight: 150,
    name: "Soukai ODM",
    published: false,
    recommendation: "Experimental apps",
    review: [3, 3, 3, 2, 3],
    text: "Soukai",
    websiteName: "Official website",
    websiteUrl: "https://soukai.js.org/"
};
export const LIBRARIES: Array<Library> = [
    LIBRARY_RDFLIB,
    LIBRARY_LDO,
    LIBRARY_INRUPT,
    LIBRARY_SOUKAI,
    LIBRARY_COMUNICA,
].filter(({published}) => published);

export interface Demo {
    href: string;
    icon: string;
    iconAlt: string;
    library: Library;
    slogan: string;
    subtitle?: string;
    text: string;
    title: string;
}

export const LOCAL_DEMOS: Array<Demo> = [
    {
        title: "rdflib.js",
        href: "/rdflib#local",
        icon: "/rdf.svg",
        iconAlt: "Logo for Read-Write Linked Data",
        library: LIBRARY_RDFLIB,
        slogan: "The OG JavaScript library to manage RDF data",
        text: "rdflib.js"
    },
    {
        title: "LDO",
        href: "/ldo#local",
        icon: "/o-team.png",
        iconAlt: "Logo for O.team",
        library: LIBRARY_LDO,
        slogan: "The newest kid on the block, using ShEx-shapes to ease the flow of handling RDF data",
        text: "LDO"
    },
    {
        title: "Inrupt JavaScript Client Libraries",
        href: "/inrupt#local",
        icon: "/inrupt.webp",
        iconAlt: "Logo for Inrupt",
        library: LIBRARY_INRUPT,
        slogan: "Inrupt's JS libraries can be used locally as well",
        text: "Inrupt"
    },
    {
        title: "Soukai",
        href: "/soukai#local",
        icon: "/soukai.svg",
        iconAlt: "Logo for Soukai ODM",
        library: LIBRARY_SOUKAI,
        slogan: "A JavaScript-based Object Document Mapper that also works with RDF",
        text: "Soukai"
    },
];

export const NS = namespace();
export const NAME_NODE = namedNode(NS.foaf("name"));


export const PROFILE_URI = "https://example.com/profile";
export const PROFILE_NODE = namedNode(PROFILE_URI);

export const PERSON_JSON = {
    "@id": PROFILE_URI,
    name: "Soukai Test"
};

export const PROFILE_TURTLE = `<${PROFILE_URI}> a <http://xmlns.com/foaf/0.1/Person>;
    <http://xmlns.com/foaf/0.1/name> "Test".
`;

interface Provider {
    label: string;
    logoSrc: string;
    loginIri: string;
    signupIri: string;
}

export const PROVIDERS: Array<Provider> = [
    {
        label: "Inrupt Pod Spaces",
        logoSrc: "/logos/inrupt-ps-logo.png",
        loginIri: "https://broker.pod.inrupt.com/",
        signupIri: "https://signup.pod.inrupt.com/",
    },
    {
        label: "solidweb.me",
        logoSrc: "/logos/solid-emblem.svg",
        loginIri: "https://solidweb.me",
        signupIri: "https://solidweb.me/idp/register/",
    },
    {
        label: "solidcommunity.net",
        logoSrc: "/logos/solid-emblem.svg",
        loginIri: "https://solidcommunity.net/",
        signupIri: "https://solidcommunity.net/register",
    },
    {
        label: "inrupt.net",
        logoSrc: "/logos/solid-emblem.svg",
        loginIri: "https://inrupt.net/",
        signupIri: "https://inrupt.net/register",
    },
];

export const RATING_CRITERIA: Array<[string, string]> = [
    ["developerExperience", "Developer Experience"],
    ["docs", "Documentation"],
    ["communitySupport", "Community & Support"],
    ["maturity", "Maturity"],
    ["overall", "Overall"]
];

interface BaseRecommendation {
    href: string;
    note?: string;
    title: string;
}

export interface URLRecommendation extends BaseRecommendation {
    type: "URL";
}

export interface YouTubeRecommendation extends BaseRecommendation {
    type: "YouTube";
}

export type Recommendation = URLRecommendation | YouTubeRecommendation;

export const SOLID_DEMOS: Array<Demo> = [
    {
        title: "rdflib.js",
        href: "/rdflib#solid",
        icon: "/rdf.svg",
        iconAlt: "Logo for Read-Write Linked Data",
        library: LIBRARY_RDFLIB,
        slogan: "rdflib.js serves handy helpers to handle resource communication with Solid servers",
        text: "rdflib.js"
    },
    {
        title: "@ldo/solid-react",
        href: "/ldo#solid-react",
        icon: "/o-team.png",
        iconAlt: "Logo for O.team",
        library: LIBRARY_LDO,
        slogan: "The creator behind LDO also offers a Solid/React integration",
        text: "@ldo/solid-react"
    },
    {
        title: "Inrupt JavaScript Client Libraries",
        href: "/inrupt#solid",
        icon: "/inrupt.webp",
        iconAlt: "Logo for Inrupt",
        library: LIBRARY_INRUPT,
        slogan: "Inrupt offers an impressive suite of JavaScript libraries that offer developers a lot of features",
        text: "Inrupt"
    },
    {
        title: "Soukai Solid",
        href: "/soukai#solid",
        icon: "/soukai-solid.svg",
        iconAlt: "Logo for Soukai Solid",
        library: LIBRARY_SOUKAI,
        slogan: "The creator of Soukai ODM has also created a Solid engine that allows you to use Soukai with Solid",
        text: "Soukai Solid"
    },
    {
        title: "Comunica",
        href: "/comunica#solid",
        icon: "/comunica.svg",
        iconAlt: "Logo for Comunica",
        library: LIBRARY_COMUNICA,
        slogan: "Comunica allows you to execute SPARQL queries for resources on the web",
        text: "Comunica"
    },
];

export const STORAGE_KEYS = {
    "PROFILE_INRUPT": "profileInrupt",
    "PROFILE_LDO": "profileLdo",
    "PROFILE_RDFLIB": "profileRdflib",
    "PROFILE_SOUKAI": "profileSoukai",
}