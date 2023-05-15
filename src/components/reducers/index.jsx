import { combineReducers } from "redux";
let initialNotes = [];

if (localStorage.getItem("notes") === null) {
    initialNotes = [
        {
            id: 1,
            head: "How to make money online",
            desc: `Find freelance work. Freelance work is when you work for yourself and complete projects on a contract basis. ...
                Start a YouTube channel. ...
                Start a dropshipping business. ...
                Take online surveys. ...
                Create a blog. ...
                Write and publish an ebook. ...
                Develop an app. ...
                Become a virtual tutor.
                `,
        },
        {
            id: 2,
            head: "6 ways to find a job",
            desc: `Ask your network for referrals. If you are looking for a job, you should tell all your contacts to help them help you find mutual career contacts. ...
                Contact companies directly. ...
                Use job search platforms. ...
                Go to job fairs. ...
                Leverage social media. ...
                Inquire at staffing agencies.
                `,
        },
        {
            id: 3,
            head: "How to Learn Python (Step-By-Step) in 2023",
            desc: `Step 1: Understand Why Most Fail. ...
                Step 2: Identify What Motivates You. ...
                Step 3: Learn the Basic Syntax, Quickly. ...
                Step 4: Make Structured Projects. ...
                Step 5: Work on Python Projects on Your Own. ...
                Step 6: Keep Working on Harder (and Harder) Projects.
                `,
        },
        {
            id: 4,
            head: "How to Make Coffee",
            desc: `Using a coffee maker. This is a simple and convenient way to brew coffee by using a filter, ground coffee and water. You can adjust the amount of coffee and water to suit your taste. You can also use different types of filters and grinds to change the flavor and strength of your coffee.
                `,
        },
        {
            id: 5,
            head: "Here are our top tips on how to learn English quickly",
            desc: `Read everything you can get your hands on. ...
                Actively take note of new vocabulary. ...
                Talk with real live humans. ...
                Subscribe to podcasts or Youtube channels (in English) ...
                Go abroad. ...
                Use your friends. ...
                Ask a lot of questions. ...
                Take a lead from the stars.
                `,
        },
    ];
    const jsonData = JSON.stringify(initialNotes);
    localStorage.setItem("notes", jsonData);
} else {
    initialNotes = JSON.parse(localStorage.getItem("notes"));
}

const showModal = {
    open: false,
    id: "",
};

const updNotes = (state = initialNotes, action) => {
    switch (action.type) {
        case "ADD":
            state = [...state, action.payload];
            localStorage.setItem("notes", JSON.stringify(state));
            return state;
        case "DEL":
            state = state.filter((item) => item.id !== action.payload);
            localStorage.setItem("notes", JSON.stringify(state));
            return state;
        case "UPD":
            const note = state.find((item) => item.id == action.payload.id);
            note.head = action.payload.updNote.head;
            note.desc = action.payload.updNote.desc;
            localStorage.setItem("notes", JSON.stringify(state));
            return state;
        default:
            localStorage.setItem("notes", JSON.stringify(state));
            return state;
    }
};

const updModal = (state = showModal, action) => {
    switch (action.type) {
        case "CHNGE":
            let newState = {
                open: !state.open,
                id: action.payload ? action.payload : "",
            };
            return newState;
        default:
            return state;
    }
};

export const rootReducers = combineReducers({ updNotes, updModal });
