// 1.Looping-for/for in/for of/forEach/

const persons=[
    {
        name:"Arun",
        place:"chennai",
        age:25,
        degree:"Engg"
    },
    {
        name:"Bala",
        place:"coimbatore",
        age:27,
        degree:"Diplamo"
    },
    {
        name:"Chandran",
        place:"Erode",
        age:30,
        degree:"B.com"
    }
]
// a.For Loop

for(let i=0;i<persons.length;i++){
    console.log("Name :",persons[i].name);
    console.log("Place:",persons[i].place);
    console.log("Age:",persons[i].age);
    console.log("Degree:",persons[i].degree);
    console.log("-------------");
}

// a.For in Loop

   for(let key in persons){
    console.log('Name  :',persons[key].name);
    console.log('Place :',persons[key].place);
    console.log('Age   :',persons[key].age);
    console.log('Degree:',persons[key].degree);

   }

// For-of Loop:

for (const x of persons) {
    console.log("Name   :",x.name);
    console.log("Place  :",x.place);
    console.log("Age    :",x.age);
    console.log("Degree :",x.degree);
    
}

// ForEach Loop:

persons.forEach((obj)=>{
   console.log("Name   :",obj.name);
   console.log("Place  :",obj.place);
   console.log("Age    :",obj.age);
   console.log("Degree :",obj.degree);
})

// Output 
/*
    Name  : Arun
    Place : chennai
    Age   : 25
    Degree: Engg
    -------------
    Name : Bala
    Place: coimbatore
    Age: 27
    Degree: Diplamo
    -------------
    Name : Chandran
    Place: Erode
    Age: 30
    Degree: B.com */

    // 2.Resume Data

    const resumeData=[
        {
            "name":"Venkatachalam",
            "age":"35",
            "place":"chennai",
            "schooling":"Govt Higher secondary school",
            "college":"VSA Group Of Institutions",
            "Degree":"B.E",
            "passed":"2013",
            "project":"Automatic Transformer Controller using Zigbee Communication",
            "language":"Tamil"
        }
    ]