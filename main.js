let favourite_songs =[
    "Tiny Dancer",
    "Running Up That Hill",
    "Don't Stop Moving",
    "Tragedy",
    "Crazy Horses",
]

let doubling_penny = [1,2,4,8,16,32,64]

let friends = [
    {name: "Chris", 
     special_skill: "changing lives"
    },
    {name: "Lizzie", 
        special_skill: "being friendly"
       },
    {name: "Ben", 
     special_skill: "code rapping"
    },
    {name: "Tao", 
     special_skill: "hand raising"
    },
    {name: "Liz", 
        special_skill: "crochet"
    },
    {name: "Patrick", 
     special_skill: "Call of Duty"
    },
    {name: "Tim", 
     special_skill: "analogies"
    },
    {name: "James", 
     special_skill: "friendship"
    },
    {name: "Joseph", 
     special_skill: "being positive"
    },
    {name: "Max", 
     special_skill: "papier-mâché"
    }, 
]


let options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

console.log(options[0])
console.log(options[9])
console.log(options[5])

let englishNumbers = ["one", "two", "three", "four", "five"];

englishNumbers[3] = 0

let i = 0
while (i < englishNumbers.length) {
    console.log(englishNumbers[i])
    i++
}


i=0

for (eachIndex in englishNumbers) {
    console.log(englishNumbers[eachIndex])
}



let words = ["ben", "ha", "spla", "fa", "ca", "dra"];

for (word in words) {
    words[word] = words[word]+"t"
}

console.log(words);