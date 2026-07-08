function changeLanguage(lang) {

    if (lang === "am") {

        document.documentElement.lang = "am";

        document.getElementById("subtitle").innerText =
            "ሙያዊ የእንስሳት ሕክምና አገልግሎት";

        document.getElementById("welcome").innerText =
            "እንኳን በደህና መጡ";

        document.getElementById("homeText").innerText =
            "ለቤት እንስሳትና ለእርሻ እንስሳት ዘመናዊ የሕክምና አገልግሎት እንሰጣለን።";

        document.getElementById("aboutText").innerText =
            "ክሊኒካችን ምርመራ፣ ሕክምና፣ ክትባት፣ ቀዶ ጥገና፣ የእርግዝና ምርመራ፣ የትል መድሀኒት እና ድንገተኛ ሕክምና ይሰጣል።";

    } else {

        document.documentElement.lang = "en";

        document.getElementById("subtitle").innerText =
            "Professional Veterinary Services";

        document.getElementById("welcome").innerText =
            "Welcome";

        document.getElementById("homeText").innerText =
            "We provide professional veterinary services for livestock and pets.";

        document.getElementById("aboutText").innerText =
            "Our clinic provides diagnosis, treatment, vaccination, surgery, pregnancy diagnosis, deworming and emergency veterinary care.";
    }

}
