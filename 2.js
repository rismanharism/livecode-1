let applicant = "Opi";
let code = "abdFmjn";
let experience = 3;
let scoreTest = 75;

let jobdesk = "";
let gaji = 0;

for (i = 0; i < code.length; i++) {

    if (code[i] === "B") {
        jobdesk += "Backend Developer";
    }
    else if (code[i] === "F") {
        jobdesk += "Frontend Developer";
    }
}
if (jobdesk === "Backend Developer") {
    gaji = gaji + 10000000
    if (scoreTest >= 85) {
        gaji = gaji + 1000000
        if (experience >= 4) {
            gaji = gaji + 1000000
            console.log("Selamat " +applicant+" kamu diterima menjadi Sr. " + jobdesk + " dengan gaji pokok sebesar " + gaji + ".")
        }
        else if (experience < 4) {
            console.log("Selamat " +applicant+" kamu diterima menjadi Jr. " + jobdesk + " dengan gaji pokok sebesar " + gaji + ".")

        }
    }
    
}
else if (jobdesk === "Frontend Developer") {
    gaji = gaji + 11000000
    if (scoreTest >= 90) {
        gaji = gaji + 1000000
        if (experience >= 4) {
            gaji = gaji + 1000000
            console.log("Selamat " +applicant+" kamu diterima menjadi Sr. " + jobdesk + " dengan gaji pokok sebesar " + gaji + ".")
        }
        else if (experience < 4) {
            console.log("Selamat " +applicant+" kamu diterima menjadi Jr. " + jobdesk + " dengan gaji pokok sebesar " + gaji + ".")

        }
    }
}