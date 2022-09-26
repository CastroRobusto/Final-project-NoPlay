$(document).ready(function () {
    // MODIFICA DIPENDENTI ======================================================
    function aggiungiDipendenteModificato(dipendenteMod) {
        $.ajax({
            contentType: "application/json;charset=utf-8",
            url: 'personale',
            type: 'PUT',
            data: JSON.stringify(dipendenteMod),
            success: function (res) {
                if (res == true) {
                    $('#lista-personale').html('');
                    $('#lista-dipendenti-mod').html('');
                    $('#azienda-dipendente-mod').html('');
                    $('#ruolo-dipendente-mod').html('');
                    getPersonale();
                } else {
                    alert('Non è stato possibile modificare il dipendente');
                }
            }
        })
    }
    
    // CARICA I DIPENDENTI PER LA MODIFICA ============================================
    function caricaModificaPersonale(idDipendente){
        console.log(idDipendente);
        $.get(`personale/${idDipendente}`, function(res){
            $(` <input type="hidden" id="id-dipendente-mod" value="${res.object.id}">
                <h2>Nome</h2>
                <input type="text" id="nome-dipendente-mod" value="${res.object.nome}">
                <h2>Cognome</h2>
                <input type="text" id="cognome-dipendente-mod" value="${res.object.cognome}">
                <h2>Data di nascita</h2>
                <input type="date" id="ddn-dipendente-mod" value="${res.object.ddn}">
                <h2>Stipendio</h2>
                <input type="number" id="stipendio-dipendente-mod" value="${res.object.stipendio}"><span>€</span>
                <h2>Data assunzione</h2>
                <input type="date" id="dd-assunzione-dipendente-mod" value="${res.object.dataAssunzione}">
                <h2>Azienda</h2>
                <select id="azienda-dipendente-mod"">
                    <option value="${res.object.idAzienda}" selected>Mantieni stessa azienda</option>
                </select>
                <h2>Ruolo</h2>
                <select id="ruolo-dipendente-mod">
                    <option value="${res.object.idRuolo}" selected>Mantieni stesso ruolo</option>
                </select>
                <div class="field button-field">
                    <button id="invia-modifica-personale">Invio</button>
                </div>`).appendTo($('#modifica-personale'));
            
            getRuoli('#ruolo-dipendente-mod');
            getAziende('#azienda-dipendente-mod');
            caricaPersonale();
        })
    }

    // CARICA I DIPENDENTI PER L'AGGIUNTA ============================================
    function caricaPersonale(){
        $('#invia-modifica-personale').click(function(){
            const id = $('#id-dipendente-mod').val();
            const nome = $('#nome-dipendente-mod').val();
            const cognome = $('#cognome-dipendente-mod').val();
            const ddn = $('#ddn-dipendente-mod').val();
            const stipendio = +$('#stipendio-dipendente-mod').val();
            const dataAssunzione = $('#dd-assunzione-dipendente-mod').val();
            const idAzienda = +$('#azienda-dipendente-mod').val();
            const idRuolo = +$('#ruolo-dipendente-mod').val();
            const dipendenteMod = {id, nome, cognome, ddn, stipendio, dataAssunzione, idAzienda, idRuolo};

            modalModifica.style.display = "none";

            aggiungiDipendenteModificato(dipendenteMod);
        })
    }

    // LISTA DEI RUOLI E DELLE AZIENDE ===================================================
    function getRuoli(string){
        $.get(`ruoli`, function(res){
            $(`<option value="0">Nessun ruolo</option>`).appendTo($(string));
            for(let i = 0; i < res.object.length; i++){
                $(`<option value="${res.object[i].id}">${res.object[i].ruolo}</option>`)
                    .appendTo($(string));
            }
        })
    }
    
    function getAziende(string){
        $.get(`aziende`, function(res){
            $(`<option value="0">Disponibile</option>`).appendTo($(string));
            for(let i = 0; i < res.object.length; i++){
                $(`<option value="${res.object[i].id}">${res.object[i].ragioneSociale}</option>`)
                    .appendTo($(string));
            }
        })
    }
    
    // LISTA DEL PERSONALE ==========================================================
    function getPersonale(){
        $.get('personale', function(res){
            for(let i = 0; i < res.object.length; i++){
                $(` <tr>
                        <td>${res.object[i].nome}</td>
                        <td>${res.object[i].cognome}</td>
                        <td>${res.object[i].ddn}</td>
                        <td>
                            <button class='btn-dettagli-personale' id="open-dettagli-personale" data-id='${res.object[i].id}'>Dettagli</button>
                            <button class='btn-modifica-personale' id="open-modifica-personale" data-id='${res.object[i].id}'>Modifica</button>
                            <button class='btn-elimina-personale' data-id='${res.object[i].id}'>&times;</button>
                        </td>
                    </tr>`).hide().appendTo($('#lista-personale')).fadeIn(i*500);
            }
        })
    }
    
    getPersonale();

    // AGGIUNGI DIPENDENTI =====================================
    $('#btn-aggiungi-personale').click(function(){
        console.log('aggiungi');

        const nome = $('#nome-dipendente').val();
        const cognome = $('#cognome-dipendente').val();
        const ddn = $('#ddn-dipendente').val();
        const stipendio = +$('#stipendio-dipendente').val();
        const dataAssunzione = $('#dd-assunzione-dipendente').val();
        const idAzienda =+$('#azienda-dipendente').val();
        const idRuolo = +$('#ruolo-dipendente').val();

        const dipendente = {nome, cognome, ddn, stipendio, dataAssunzione, idAzienda, idRuolo};

        modalAggiungi.style.display = "none";

        aggiungiPersonale(dipendente);

        $('#nome-dipendente').val('');
        $('#cognome-dipendente').val('');
        $('#ddn-dipendente').val('');
        $('#stipendio-dipendente').val('');
        $('#dd-assunzione-dipendente').val('');
        $('#azienda-dipendente').val('');
        $('#ruolo-dipendente').val('');
    })

    function aggiungiPersonale(dipendente){
        console.log(dipendente);
        $.ajax({
            contentType: "application/json;charset=utf-8",
			url: 'personale',
			type: 'POST',
			data: JSON.stringify(dipendente),
			success: function(res) {
                if (res == true) {
					$('#lista-personale').html('');
                    $('#azienda-dipendente').html('');
                    $('#ruolo-dipendente').html('');
					getPersonale();
				} else {
					alert('Qualcosa è andato storto');
				}
			}
		})
    }

    // DETTAGLI DIPENDENTI =====================================
    $('#lista-personale').on('click', '.btn-dettagli-personale', function(){
        $('#dettagli-personale').html('');
        dettagliPersonale(+$(this).attr('data-id'));
    })

    function dettagliPersonale(id){
        console.log(id);
        $.get(`personale/${id}`, function(res){
            $(` <p><b>Nome</b>: ${res.object.nome}</p>
                <p><b>Cognome</b>: ${res.object.cognome}</p>
                <p><b>Data di nascita</b>: ${res.object.ddn}</p>`).appendTo($('#dettagli-personale'));
            
            $.get(`aziende/${res.object.idAzienda}`, function(resA){
                if(res.object.idAzienda > 0){
                    $(`<p><b>Azienda</b>: ${resA.object.ragioneSociale}</p>`).appendTo($('#dettagli-personale'));
                } else {
                    $(`<p><b>Azienda</b>: Disponibile</p>`).appendTo($('#dettagli-personale'));
                }
            })
            
            $.get(`ruoli/${res.object.idRuolo}`, function(resR){
                console.log(res.object.idRuolo);
                if(res.object.idRuolo > 0){
                    $(`<p><b>Ruolo</b>: ${resR.object.ruolo}</p>`).appendTo($('#dettagli-personale'));
                }else{
                    $(`<p><b>Ruolo</b>: Nessuno</p>`).appendTo($('#dettagli-personale'));
                }
            })

            $(` <p><b>Data di assunzione</b>: ${res.object.dataAssunzione}</p>
                <p><b>Stipendio</b>: ${res.object.stipendio}€</p>`).appendTo($('#dettagli-personale'));
        })
    }

    // MODIFICA DIPENDENTI =====================================
    $('#lista-personale').on('click', '.btn-modifica-personale', function() {
        $('#modifica-personale').html('');
        caricaModificaPersonale(+$(this).attr('data-id'));
    })
        
    // ELIMINA DIPENDENTI ======================================
    $('#lista-personale').on('click', '.btn-elimina-personale', function() {
        eliminaPersonale(+$(this).attr('data-id'));
    })

    function eliminaPersonale(id){
        console.log(id);
        $.ajax({
			url: `personale/${id}`,
			type: 'DELETE',
			success: function(res) {
				if (res == true) {
					$('#lista-personale').html('');
                    $('#azienda-dipendente').html('');
                    $('#ruolo-dipendente').html('');
					getPersonale();
				} else {
					alert('Qualcosa è andato storto');
				}
			}
		})
    }

    // GESTIONE LISTE RUOLI e AZIENDE =========================
    $('#open-aggiungi-personale').click(function(){
        $('#azienda-dipendente').html('');
        $('#ruolo-dipendente').html('');
        getRuoli('#ruolo-dipendente');
        getAziende('#azienda-dipendente');
    })

    // GESTIONE RUOLI =========================================
    function gestioneRuoli(){
        $.get('ruoli', function(res){
            for(let i = 0; i < res.object.length; i++){
                $(` <tr>
                        <td>${res.object[i].ruolo}</td>
                        <td><button class="btn-elimina-ruolo" data-id='${res.object[i].id}' >&times;</button></td>
                    </tr>`).appendTo($('#gestione-ruoli'));
            }
        })
    }

    $('#gestione-ruoli').on('click', '.btn-elimina-ruolo', function() {
        eliminaRuolo(+$(this).attr('data-id'));
    })

    function eliminaRuolo(id){
        console.log('ruolo n°' + id);
        $.ajax({
			url: `ruoli/${id}`,
			type: 'DELETE',
			success: function(res) {
				if (res == true) {
                    $('#gestione-ruoli').html('');
                    getRuoli('#ruolo-dipendente');
                    getRuoli('#ruolo-dipendente-mod');
                    gestioneRuoli()
				} else {
					alert('Impossibile eliminare il ruolo');
				}
			}
		})
    }

    $('#aggiunta-ruoli').click(function(){
        const ruolo = $('#nuovo-ruolo').val();
        aggiuntaRuolo(ruolo);
    })
    
    function aggiuntaRuolo(ruolo){
        $.ajax({
            contentType: "application/json;charset=utf-8",
			url: 'ruoli',
			type: 'POST',
			data: JSON.stringify(ruolo),
			success: function(res) {
                if (res == true) {
					$('#nuovo-ruolo').val('');
					$('#gestione-ruoli').html('');
                    getRuoli('#ruolo-dipendente');
                    getRuoli('#ruolo-dipendente-mod');
                    gestioneRuoli();
				} else {
					alert('Impossibile aggiungere il ruolo');
				}
			}
		})
    }
    

    // GESTIONE MODALE ========================================
    var modalAggiungi = document.getElementById("modale-aggiungi-personale");
    var modalDettagli = document.getElementById("modale-dettagli-personale");
    var modalModifica = document.getElementById("modale-modifica-personale");
    var modalRuoli = document.getElementById("modale-gestione-ruoli");

    var btn = document.getElementById("open-aggiungi-personale");

    var spanAggiungi = document.getElementsByClassName("closeA")[0];
    var spanDettagli = document.getElementsByClassName("closeD")[0];
    var spanModifica = document.getElementsByClassName("closeM")[0];
    var spanRuoli = document.getElementsByClassName("closeR")[0];

    btn.onclick = function () {
        modalAggiungi.style.display = "block";
    };

    $('#lista-personale').on('click', '#open-dettagli-personale', function(){
        modalDettagli.style.display = "block";
    })

    $('#lista-personale').on('click', '#open-modifica-personale', function(){
        modalModifica.style.display = "block";
    })

    $('.open-gestione-ruoli').click(function(){
        modalRuoli.style.display = "block";
        gestioneRuoli();
    })

    spanAggiungi.onclick = function () {
        modalAggiungi.style.display = "none";
    };

    spanDettagli.onclick = function () {
        modalDettagli.style.display = "none";
    };

    spanModifica.onclick = function () {
        modalModifica.style.display = "none";
    };

    spanRuoli.onclick = function () {
        modalRuoli.style.display = "none";
        $('#gestione-ruoli').html('');
    };

    window.onclick = function (event) {
        if (event.target == modalAggiungi) {
            modalAggiungi.style.display = "none";
        } else if (event.target == modalDettagli){
            modalDettagli.style.display = "none";
        } else if (event.target == modalModifica){
            modalModifica.style.display = "none";
        } else if (event.target == modalRuoli){
            modalRuoli.style.display = "none";
            $('#gestione-ruoli').html('');
        }
    };

});