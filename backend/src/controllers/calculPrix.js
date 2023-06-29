const calculPrix = (ecran, reseau, etat, stockage, ram, chargeur_cable) => {

    let note = 0
    if (ecran >= 7) { note += 10 }
    else if (ecran > 6) { note += 6 }
    else if (ecran > 5) { note += 4 }
    else if (ecran > 4) { note += 2 }
    else { note += 0 }
    if (reseau === "4G") { note += 5 }
    else if (reseau === "5G") { note += 10 }
    else { note += 0 }
    if (stockage >= 1000) { note += 10 }
    else if (stockage >= 512) { note += 8 }
    else if (stockage >= 256) { note += 6 }
    else if (stockage >= 128) { note += 4 }
    else if (stockage >= 64) { note += 2 }
    else { note += 0 }
    if (ram >= 12) { note += 10 }
    else if (ram >= 8) { note += 8 }
    else if (ram >= 6) { note += 6 }
    else if (ram >= 4) { note += 4 }
    else if (stockage >= 3) { note += 2 }
    else { note += 0 }
    if (chargeur_cable) { note += 10 }
    if (etat !== "reconditionne") { note = 0 }
    if (note >= 48) { return 5 }
    else if (note >= 36) { return 4 }
    else if (note >= 24) { return 3 }
    else if (note >= 12) { return 2 }
    else { return 1 }




}
module.exports = { calculPrix }