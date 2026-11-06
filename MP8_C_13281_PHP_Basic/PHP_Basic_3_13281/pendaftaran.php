<?php 
    $message2 = "";
    $nama = $_POST['nama'];
        $penyakit = $_POST['penyakit'] ?? '';
        $sesi = $_POST['sesi'] ?? '';

    echo "<h1>Pendaftaran Konsultasi</h1>";
    echo '<form method="POST" action="">
            <p>Nama      : <br /><input type="text" name="nama"</p>
            <p>Penyakit  : <br /><input type="text" name="penyakit"</p>
            <p>Sesi      : <br /><input type="select" name="sesi"</p>
            <button type="submit">Kirim</button>
         </form>';

    if (empty($nama) || empty($penyakit) || empty($sesi)){
        $message[] = "Silahkan lengkapi semua data.";
    }

    if (!preg_match("/^[a-zA-Z]*$/" , $nama)) {
        $message[] = "Nama hanya boleh mengandung huruf.";
    }
    
    if(!empty($message)){
        foreach($message as $msg){
            echo "<p style='color:red;' > !!" . htmlspecialchars($msg). " !!</p>";
        } else {
        function sesi($sesi){
            switch(strtolower($sesi)) {
                case 1 :
                    $lokasi = "Ruang dr. Jung di Lantai 3";
                    break;

                case 2 :
                    $lokasi = "Online Meeting (Zoom)";
                    break;

                default :
                    $lokasi = "Belum Tersedia";
                    break;
            }
            return $lokasi;
        }
    }
    
?>

