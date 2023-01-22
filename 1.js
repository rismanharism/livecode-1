let gerbangKeluar = "IC Caruban"
let golonganKendaraan = "I"
let saldo = 8000
let tarif


if(gerbangKeluar === "IC Caruban"){
    if(golonganKendaraan === "I" && saldo >= 8500){
    saldo -= 8500
    console.log("Sisa saldo anda adalah Rp " + saldo + ",00. Semoga selamat sampai tujuan.")
    }
    else if(golonganKendaraan === "I" && saldo < 8500){
        saldo = 8500 - saldo
        console.log("Saldo anda kurang Rp " + saldo + ",00. Tidak cukup untuk transaksi.")
    }
    else if(golonganKendaraan === "II" && saldo >= 12500 ){
        saldo -= 12500
        console.log("Sisa saldo anda adalah Rp " + saldo + ",00. Semoga selamat sampai tujuan.")
        }
        else if(golonganKendaraan === "I" && saldo >= 8500 && saldo < 12500){
            saldo = 12500 - saldo
            console.log("Saldo anda kurang Rp " + saldo + ",00. Tidak cukup untuk transaksi.")
        }
    else if(golonganKendaraan === "III" && saldo >= 12500 ){
            saldo -= 12500
            console.log("Sisa saldo anda adalah Rp " + saldo + ",00. Semoga selamat sampai tujuan.")
            }
    else if(golonganKendaraan === "I" && saldo < 8500){
                saldo = 12500 - saldo
                console.log("Saldo anda kurang Rp " + saldo + ",00. Tidak cukup untuk transaksi.")
            }
    else{
        console.log("Tarif tidak ditemukan!")
    }
}
else if(gerbangKeluar === "IC Nganjuk" && saldo >= 43500){
    if(golonganKendaraan === "I"){
    saldo -= 43500
    console.log("Sisa saldo anda adalah Rp " + saldo + ",00. Semoga selamat sampai tujuan.")
    }
    else if(golonganKendaraan === "I" && saldo < 43500){
        saldo = 43500 - saldo
        console.log("Saldo anda kurang Rp " + saldo + ",00. Tidak cukup untuk transaksi.")
    }
    else if(golonganKendaraan === "II"&& saldo >= 65500){
        saldo -= 65500
        console.log("Sisa saldo anda adalah Rp " + saldo + ",00. Semoga selamat sampai tujuan.")
        }
    else if(golonganKendaraan === "I" && saldo < 65500){
            saldo = 65500 - saldo
            console.log("Saldo anda kurang Rp " + saldo + ",00. Tidak cukup untuk transaksi.")
        }
    else if(golonganKendaraan === "III"&& saldo >= 6550){
            saldo -= 65500
            console.log("Sisa saldo anda adalah Rp " + saldo + ",00. Semoga selamat sampai tujuan.")
            }
    else if(golonganKendaraan === "I" && saldo < 65500){
                saldo = 65500 - saldo
                console.log("Saldo anda kurang Rp " + saldo + ",00. Tidak cukup untuk transaksi.")
    } 
    else{
        console.log("Tarif tidak ditemukan!")
    }      
}
else{
    console.log("Tarif tidak ditemukan!")
}     

