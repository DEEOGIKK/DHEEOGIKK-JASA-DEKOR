function sp_gyr_1() {
    document.getElementById("p_gyr_1").style.animation = "buttonDown 0.3s forwards"
}



function selectPanel(category, panelId, imgpath) {
    document.querySelectorAll(`.container.${category} .panel`).forEach(panel => {
        panel.classList.remove('active');
        panel.classList.add('inactive');
    });

    document.getElementById(panelId).classList.remove('inactive');
    document.getElementById(panelId).classList.add('active');
    sessionStorage.setItem(category, imgpath);
}



function paketweddingbaliback() {
    document.getElementById("page").style.animation = "fadingOut 1s forwards";
    document.getElementById("page").addEventListener("animationend", function() {
        document.getElementById("page").style.opacity = 0;
        window.location.href = "/pages/weding/styles/s_wding bali.html";
        
        sessionStorage.removeItem("gayor");
        sessionStorage.removeItem("pelaminan");
        sessionStorage.removeItem("meja_tamu");
        sessionStorage.removeItem("stand");
    });
}
function paketweddingcasualback() {
    document.getElementById("page").style.animation = "fadingOut 1s forwards";
    document.getElementById("page").addEventListener("animationend", function() {
        document.getElementById("page").style.opacity = 0;
        window.location.href = "/pages/weding/styles/s_wding casual.html";

        sessionStorage.removeItem("depan");
        sessionStorage.removeItem("pelaminan");
        sessionStorage.removeItem("meja_tamu");
        sessionStorage.removeItem("prasmanan");
    });
}
function paketweddingcinaback() {
    document.getElementById("page").style.animation = "fadingOut 1s forwards";
    document.getElementById("page").addEventListener("animationend", function() {
        document.getElementById("page").style.opacity = 0;
        window.location.href = "/pages/weding/styles/s_wding cina.html";

        sessionStorage.removeItem("backdrop");
        sessionStorage.removeItem("pelaminan");
        sessionStorage.removeItem("meja_tamu");
        sessionStorage.removeItem("lampion");
    });
}



//PAKET
function paketweddingbalisubmit() {
    if(sessionStorage.getItem("gayor") != null && sessionStorage.getItem("pelaminan" ) != null && sessionStorage.getItem("meja_tamu") != null && sessionStorage.getItem("stand") != null) {
        document.getElementById("page").style.animation = "fadingOut 1s forwards";
        document.getElementById("page").addEventListener("animationend", function() {
            document.getElementById("page").style.opacity = 0;
                sessionStorage.removeItem("paketCustom");
                window.location.href = "/strukpesanan.html";
        });
    }
    else {
        alert("PILIH STYLE TIAP KATEGORI!");
    }
}

function paketweddingcasualsubmit() {
    if(sessionStorage.getItem("depan") != null && sessionStorage.getItem("pelaminan" ) != null && sessionStorage.getItem("meja_tamu") != null && sessionStorage.getItem("prasmanan") != null) {
        document.getElementById("page").style.animation = "fadingOut 1s forwards";
        document.getElementById("page").addEventListener("animationend", function() {
            document.getElementById("page").style.opacity = 0;
                sessionStorage.removeItem("paketCustom");
                window.location.href = "/strukpesanan.html";
        });
    }
    else {
        alert("PILIH STYLE TIAP KATEGORI!");
    }
}

function paketweddingcinasubmit() {
    if(sessionStorage.getItem("backdrop") != null && sessionStorage.getItem("pelaminan" ) != null && sessionStorage.getItem("meja_tamu") != null && sessionStorage.getItem("lampion") != null) {
        document.getElementById("page").style.animation = "fadingOut 1s forwards";
        document.getElementById("page").addEventListener("animationend", function() {
            document.getElementById("page").style.opacity = 0;
                sessionStorage.removeItem("paketCustom");
                window.location.href = "/strukpesanan.html";
        });
    }
    else {
        alert("PILIH STYLE TIAP KATEGORI!");
    }
}



//PAKET CUSTOM
function customWeddingbali() {
    if(document.getElementById("teksCustomBali").value != null) {
        document.getElementById("page").style.animation = "fadingOut 1s forwards";
        document.getElementById("page").addEventListener("animationend", function() {
            document.getElementById("page").style.opacity = 0;
            window.location.href = "/strukpesanan.html";
            sessionStorage.setItem("paketCustom", true);

            sessionStorage.setItem("pcbali", document.getElementById("teksCustomBali").value);
            sessionStorage.removeItem("pccasual");
            sessionStorage.removeItem("pccina");
        });
    }else {
        alert("INPUT TIDAK BOLE KOSONG!");
    }
}

function customWeddingcasual() {
    if(document.getElementById("teksCustomCasual").value != null) {
        document.getElementById("page").style.animation = "fadingOut 1s forwards";
        document.getElementById("page").addEventListener("animationend", function() {
            document.getElementById("page").style.opacity = 0;
            window.location.href = "/strukpesanan.html";
            sessionStorage.setItem("paketCustom", true);
            
            sessionStorage.setItem("pccasual", document.getElementById("teksCustomCasual").value);
            sessionStorage.removeItem("pcbali");
            sessionStorage.removeItem("pccina");
        });
    }else {
        alert("INPUT TIDAK BOLE KOSONG!");
    }
}

function customWeddingcina() {
    if(document.getElementById("teksCustomCina").value != null) {
        document.getElementById("page").style.animation = "fadingOut 1s forwards";
        document.getElementById("page").addEventListener("animationend", function() {
            document.getElementById("page").style.opacity = 0;
            window.location.href = "/strukpesanan.html";
            sessionStorage.setItem("paketCustom", true);
    
            sessionStorage.setItem("pccina", document.getElementById("teksCustomCina").value);
            sessionStorage.removeItem("pccasual");
            sessionStorage.removeItem("pcbali");
        });
    }else {
        alert("INPUT TIDAK BOLE KOSONG!");
    }
}

function paketbdayback() {
    document.getElementById("page").style.animation = "fadingOut 1s forwards";
    document.getElementById("page").addEventListener("animationend", function() {
        document.getElementById("page").style.opacity = 0;
            sessionStorage.removeItem("paketCustom");
            window.location.href = "/pages/birthday/birthday.html";
    });
}

function paketgvback() {
    document.getElementById("page").style.animation = "fadingOut 1s forwards";
    document.getElementById("page").addEventListener("animationend", function() {
        document.getElementById("page").style.opacity = 0;
            sessionStorage.removeItem("paketCustom");
            window.location.href = "/pages/genderreveal/genderreveal.html";
    });
}