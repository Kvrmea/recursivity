const dossierPrincipal = {
    nom: 'Ada',
    contenu: [{
        nom: 'Projets collectifs Ada',
        contenu: [{
            nom: 'Pico8',
            contenu: [{
              nom: 'mariokart.p8'
            }]
          },
          {
            nom: 'Dataviz',
            contenu: [{
                nom: 'index.html'
              },
              {
                nom: 'script.js'
              }
            ]
          }
        ]
      },
      {nom: 'CV.pdf'},
      {
        nom: 'Projets persos',
        contenu: [{
          nom: 'Portfolio',
          contenu: [{
              nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }]
      },
    ],
  }

  function afficherDossier() {
    console.log(dossierPrincipal.nom);
  }

  afficherDossier();

  let contenu = dossierPrincipal.contenu;

  function afficherDossierIteratif(dossier) {
    for (const element of dossier.contenu) {
        console.log(element.nom);
    }
  }

  afficherDossierIteratif(dossierPrincipal);

  function afficherDossierRecursif(dossier) {
    if (dossier.contenu === undefined) {
        return;
    }
    for (const element of dossier.contenu) {
        console.log(element.nom);
        afficherDossierRecursif(element)
    }
  }

  afficherDossierRecursif(dossierPrincipal);