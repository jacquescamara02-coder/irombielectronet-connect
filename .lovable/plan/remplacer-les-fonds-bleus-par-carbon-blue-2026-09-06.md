# Remplacer les fonds bleus par « Carbon Blue »

## Résultat attendu
- Remplacer les grands aplats bleu marine du héros, de la section Valeurs, des pages de prestations et du pied de page par le fond atmosphérique Carbon Blue fourni.
- Conserver la photo du héros en la fondant dans cette nouvelle ambiance, sans modifier les contenus ni les cartes claires.
- Supprimer le quadrillage bleu visible afin que le grain analogique devienne la texture commune.

## Mise en œuvre
- Créer un composant de fond réutilisable avec les deux couches de dégradé, le flou adaptatif et le grain SVG décoratif accessible.
- Poser la couleur carbone de base au niveau de la page, garder chaque conteneur transparent et placer le contenu au-dessus des couches.
- Appliquer ce composant à tous les fonds actuellement basés sur `surface-navy`, avec des identifiants de filtre SVG uniques pour éviter les conflits.
- Préserver les animations existantes et désactiver les traitements coûteux lorsque la réduction des mouvements est demandée.

## Vérification
- Contrôler le rendu et l'absence de débordements à 375, 768, 1024 et 1440 px.
- Vérifier les pages d'accueil et de prestation, ainsi que le journal de compilation.
