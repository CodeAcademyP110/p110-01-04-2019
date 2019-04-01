"use strict";

//javascript objects - json
//camel-case: getUniqueLettersCount
// kebab-case get-unique-letters-count
// underscore: get_unique_letters_count 


let getUniqueLettersCount = (word) => {
    let letters = {};

    for (const letter of word) {
        if(letters[letter])
        {
            //letter already exists
            letters[letter] += 1;
        }
        else
        {
            //letter is new
            letters[letter] = 1;
        }
    }

    //a: 4, d: 3, e: 1, h: 1, i: 1, m: 1, r: 1, s: 2, z: 1
    return letters;
}

class Group
{
    constructor(groupName, startTime)
    {
        this.name = groupName;
        this.startTime = startTime;
    }

    students = [];
    addStudent = (student) => 
    {
        //check student with this id exists
        if(student.id && this.students.find(stu => stu.id === student.id) === undefined)
        {
            this.students.push(student);
        }
        else
        {
            console.error("Id was not sent or student with this id already exists.")
        }
    }

    showFullInfo = () => 
    {
        return `GroupName: ${this.name};\nStartTime: ${this.startTime};\nStudents: ${this.students}}`;
    }
}


let p110 = new Group("P110", "09:00");
let p210 = new Group("P210", "14:00");

p110.addStudent({id: 1, firstname: "Eli", lastname: "Dadash"});
p110.addStudent({id: 2, firstname: "Veli", lastname: "Dadash"});
p110.addStudent({id: 3, firstname: "Qosqar", lastname: "Eliyev"});

p210.addStudent({id: 1, firstname: "Zakir", lastname: "Qaralov"});
p210.addStudent({id: 2, firstname: "Perviz", lastname: "Muxcanov"});
