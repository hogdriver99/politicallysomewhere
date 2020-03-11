var questionbank = [];
var rawquestions = ["It is important that society follows a religiously based morality",
                "We have free will",
                "Morality is objective",
                "Following a moral code is important to me",
                "Technological progress is generally good for society"];

var hasProblemList = [0, 1, 4];

var hasFollowUpList = [2, 3];

var issueFixes = [[
    ["I disagree with the use of the word society", "I would rather it say humanity", "I would rather it say my country",
        "I would rather it say the world", "I would rather it say something else", "I don't know what I would replace it with"],
    ["Society should follow a non-religiously based morality"],
    ["Society should not be bound by a moral code"],
    ["I have another issue with this problem"]
],[
    ["Free will and determinism/predestination are not mutually exclusive"],
    ["I don not believe we have a 'will'"],
    ["I have another issue with this problem"]
],[
    ["I disagree with how vague the word technology is"],
    ["I disagree with the use of the word society", "I would rather it say humanity", "I would rather it say my country",
        "I would rather it say the world", "I would rather it say something else", "I don't know what I would replace it with"],
    ["I have another issue with this problem"]
]];

var followUps = []

for (let i = 0; i < rawquestions.length; i++) {
    questionbank[i] = {
        question: rawquestions[i],
        hasIssue: false,
        hasFollowUp: false,
        issuefixes: [],
        followUpAddr: -1
    };
    if (hasProblemList.includes(i)) {
        questionbank[i].hasIssue = true;
        var temp = issueFixes[hasProblemList.indexOf(i)];
        for (item in temp) {
            questionbank[i].issuefixes.push(temp[item]);
        }
    }
    if (hasFollowUpList.includes(i)) {
        questionbank[i].followUpAddr = hasFollowUpList.indexOf(i);
    }
}