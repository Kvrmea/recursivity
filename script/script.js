/* const dossierPrincipal = {
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
  } */

    import { dossierPrincipal } from './dossier.js';

    export function afficherDossier() {
        console.log(dossierPrincipal.nom);
    }
    
    export function afficherDossierIteratif(dossier) {
        for (const element of dossier.contenu) {
            console.log(element.nom);
        }
    }
    
    export function afficherDossierRecursif(dossier) {
        if (dossier.contenu === undefined) {
            return;
        }
        for (const element of dossier.contenu) {
            console.log(element.nom);
            afficherDossierRecursif(element);
        }
    }

    function createFolderStructure(dossier) {
      const ul = document.createElement('ul');
      ul.classList.add("folder");

      for (const element of dossier.contenu) {
        const li = document.createElement('li');
        li.textContent = element.nom;

        if (element.contenu) {
          li.classList.add('folder-item');
          const nestedUl = createFolderStructure(element);
          nestedUl.style.display = "none";
          li.appendChild(nestedUl);

          li.addEventListener('click', (e) => {
            e.stopPropagation();
            const isVisible = nestedUl.style.display === 'block';
            nestedUl.style.display = isVisible ? 'none' : 'block';
          });
        } else {
          li.classList.add('file-item');
        }

        ul.appendChild(li);
      }
      return ul;
    }

    function renderFolderStructure() {
      const rootElement = document.getElementById('folder-container');
      rootElement.appendChild(createFolderStructure(dossierPrincipal));
    }

    renderFolderStructure();