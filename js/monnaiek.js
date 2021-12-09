function validerTicket() {

    let ticket = document.getElementById("ticketMontant").value;
    let montant = document.getElementById("montantRecu").value;
    console.log(ticket, montant)

    let remboursement = montant - ticket;
    console.log(remboursement)

    let nbreBilletDix = Math.floor(remboursement / 10)
    console.log("nb billet de 10", nbreBilletDix);

    let nbreBilletCinq = Math.floor((remboursement - (10 * nbreBilletDix)) / 5)
    console.log("nb billet de 5", nbreBilletCinq)

    let piece = (remboursement - (10 * nbreBilletDix)) % 5
    console.log(piece)

    document.getElementById("textMonaie").textContent = "Vous devez rendre " + remboursement + " €";

    let rendu = document.getElementById("monnaie")
    rendu.innerHTML = ""
    for (i = 0; i < nbreBilletDix; i++) {
        let monImage = document.createElement("img")
        monImage.src = "images/dix.jpeg"
        monImage.classList.add("billetM")
        rendu.appendChild(monImage)

    }
    for (i = 0; i < nbreBilletCinq; i++) {
        let monImage = document.createElement("img")
        monImage.src = "images/cinq.jpeg"
        monImage.classList.add("billetM")
        rendu.appendChild(monImage)
    }
    for (i = 0; i < piece; i++) {
        let monImage = document.createElement("img")
        monImage.src = "images/piecedeun.jpeg"
        monImage.classList.add("pieceM")
        rendu.appendChild(monImage)
    }








};