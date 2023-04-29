var names = new Array();

names[0] = "Jacob";
names[1] = "John";
names[2] = "Alfred";
names[3] = "Nancy";
names[4] = "Sara";
names[5] = "Alexander";
names[6] = "Jamie";
names[7] = "Mike";
names[8] = "Jade";
names[8] = "Ali";

for (var i =0 ; i<names.length; i++) {
    if(names[i].charAt(0) === "J" || names[i].charAt(0) === 'j') {
        console.log("Good Bye " + names[i]);
    }

    else{
        console.log("Hello " + names[i]);
    }
}