
function fn_ValForm(){
    var email = document.getElementById("email").value;
    var nama = document.getElementById("nama").value;
    var kategori = document.getElementById("kategori").value;
    var umur = document.getElementById("umur").value;
    var sInput;
    var info;

    var check = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/ ;
    var sMsg = "";
        if (nama == "") {
            sMsg += "\n * Anda belum mengisikan nama";               
        }

        
        if(email == "" ) {
            sMsg += "\n * Anda belum mengisikan email"; 
        } else if (!check.test(email)) {
            sMsg += "\n * Mohon mengisi email dengan benar."; 
        }

        if (umur == "") {
            sMsg += "\n * Anda belum mengisikan umur";               
        }

        if (kategori == "") {
            sMsg += "\n * Anda belum mengisikan kategori";               
        }
       
        umur = prompt("Masukkan umur kamu.", 0);

        if(umur > 17){
            alert("Info : Anggota Umum");
        } else {
            alert("Info : Anggota Pelajar");
        }


        sInput = prompt("Pilih ruang: (F)iksi, (N)on-Fiksi, (J)urnal Ilmiah", "F");

        if (sMsg != "") {
                alert("Peringatan: \n" + sMsg);
                return false;               
            } 

        switch(sInput){
            
            case "F":
                info("Fiksi");
                break;

            case "N":
                info("Non-Fiksi");
                break;

            case "J":
                info("Jurnal Ilmiah");
                break;
        }

        alert("\n * Terima kasih!" + nama + "Anda terdaftar di koleksi" + kategori + info);
        return true;

}

// function finish(){

//     if(!sMsg){
//         alert("\n * Terima kasih!" + nama + "Anda terdaftar di koleksi" + kategori + info); 
//     } 

// }