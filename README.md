# Nina Carducci

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![](https://camo.githubusercontent.com/c402bd25609922ab7160b91524aeb125a2e664070816aeb6dd66af9c41f70087/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f426f6f7473747261702d3536334437433f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465)
![](https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white")
![](https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)

## Contexte
## _Vous êtes développeur freelance et vous décidez de proposer vos services d’optimisation SEO à de nouveaux clients. Parmi vos prospects, il y a le site de Nina Carducci, une photographe dont vous a parlé l’un de vos amis._
### 
###
## Mission
- Faire une optimisation globale du site, tant sur les performances que sur le SEO
- Mettre en place le référencement local en utilisant [Schema.org](https://validator.schema.org/)
- Ajouter les metas pour les réseaux sociaux
- Faire les modifications liées à l’accessibilité du site
- Produire un rapport d’optimisation présentant toutes vos actions et leur impact
- Ajouter le référencement local :
    _"Mon adresse : 68 avenue Alsace-Lorraine, 33200 Bordeaux."_
    _"Mon numéro de téléphone : 05 56 67 78 89."_
    _"Je réponds au téléphone du lundi au vendredi de 10 h à 19 h."_
- Corriger les bugs :
    _"La navigation dans la modale de la galerie entre images précédente et suivante ne fonctionne pas._
    _Lorsque l’on change de filtre pour afficher les images, on ne voit pas quelle catégorie est sélectionnée. Normalement, la catégorie devrait avoir la couleur dorée en fond. Comme pour le filtre par défaut."_



### 
###
## Objectifs pédagogiques
- Optimiser les performances d’un site web
- Débugger un site web grâce aux Chrome DevTools
- Rédiger un cahier de recette pour tester un site


### 
###
## Technologies utilisées

![Google Lighthouse](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRk2E2KKeR9JbdleoB9Y72qF3x9Izqp4514VEyDejI9w&s)
![GT Metrix](https://www.agence-ocelot.com/wp-content/uploads/2023/03/gtmetrix.jpg)
![WAVE Evaluation Tool](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
![Axe Dev Tools](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
![Headings Map](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)
![NVDA](https://www.nvaccess.org/download/)



### 
###
## Projet de base

- URL du repository : https://github.com/nina-carducci/nina-carducci.github.io
- Site Nina Carducci : https://nina-carducci.github.io/





### 
###
## Installation

```sh
# Création du répertoire
mkdir projet4
cd projet4

# Récupération du projet
git clone https://github.com/nina-carducci/nina-carducci.github.io.git
cd nina-carducci.github.io/
git remote set-url origin git@github.com:nicolasmorvant/projet4.git
git add .
git commit -m "Création du projet"
git push -u origin master
```

### 
###
## Ressources
- [Modèle de rapport d'intervention](https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/DW_P5+Optimisation+%26+debug/DW+P5+Optimisation-debug+-+Modele+rapport+intervention.odt)
- [PDF de l'audit du site de Nina Carducci](https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/IW_P9+Optimisation/Audit+lighthouse+Desktop.pdf)
- [10 conseils pour améliorer votre référencement local](https://www.codeur.com/blog/conseils-referencement-local/)
- [Qu’est-ce que Google Lighthouse ? ](https://www.ionos.fr/digitalguide/web-marketing/search-engine-marketing/google-lighthouse/)
- [7 astuces pour optimiser vos images façon SEO](https://fr.oncrawl.com/referencement/7-astuces-pour-optimiser-vos-images-facon-seo/)
- [Les balises meta indispensables pour les réseaux sociaux : Facebook, Twitter, Pinterest, LinkedIn](https://www.skyminds.net/balises-meta-reseaux-sociaux-facebook-twitter-pinterest/)


### 
###
## Cours

- [Augmentez votre traffic grâce au référencement naturel SEO](https://openclassrooms.com/fr/courses/5561431-augmentez-votre-trafic-grace-au-referencement-naturel-seo) 
- [Optimisez le référencement de votre site (SEO) en améliorant ses performances techniques](https://openclassrooms.com/fr/courses/5922626-optimisez-le-referencement-de-votre-site-seo-en-ameliorant-ses-performances-techniques)
- [Concevez un site web accessible](https://openclassrooms.com/fr/courses/6691346-concevez-un-contenu-web-accessible)

### 
###
## Réalisation

| Date | Réalisation |
| ------ | ------ |
| 16/04/2024| Création du projet|
|19/04/2024| Analyse du code source avec Google Lighthouse et GTMetrix|
|| Débogage des fonctionnalités liéés à la navigation de la modale et du style de la galerie sélectionnée|
|| Dans ```maugallery.js``` :|
|| Ajout de la classe active |
|| ```$(".active-tag").removeClass("active active-tag");```|
|| ```$(this).addClass("active active-tag");```|
|||
|| Modification des index|
|| ```prev = imagesCollection[index - 1]```|
|| ```next = imagesCollection[index + 1]```|
|||

