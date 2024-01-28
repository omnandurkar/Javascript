let greet = () => {
    console.log("Hello Guys");
}

greet();

let greet1 = () => console.log("What is Up guys?");

greet1();

let obj1= {
    greetings : "Jevlis ka_",
    names : ["Purush", "Saani", "Naari"],

    call(){
        this.names.forEach((students)  => {
            console.log(this.greetings + "Kemchoo " + students);
        })
    }
}

obj1.call();