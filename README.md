<h1>Compte rendu du projet e_banking (Frontend)</h1>
<p>Aprés avoir réalisé le backend je me suis attaquée au frontend 
en utilisant Angular </p>

<h2>Components</h2>
<p>J'ai créé cinq components: </p>
<ul>
<li>Accounts: ce component affiche un formulaire où l'utilisateur doit saisir l'id du compte
puis affiche le détail du compte et la possibilté d'effectuer differentes operations</li>
<li>Customers: pour afficher les differents clients de la banque avec la possibilité de rechercher un clinet et de supprimer
 ou de consulter les comptes de chaque client</li>
<li>customer-account: afficher les compte d'un client</li>
<li>navbar </li>
<li>New-customer: pour afficher le formulaire de l'ajout d'un client</li>
</ul>

<h2>Services</h2>
<p>J'ai créé deux services : </p>
<ul>
<li>account: ce service contient les differentes fonctionnalités et operations 
que l'on peut effectuer sur un compte débit, crédit, transfer et consultation</li>
<li>customer: ce service contient les differentes fonctionnalités et operations 
que l'on peut effectuer sur un customer </li>
</ul>
<p>puis j'ai fais l'injection des dependances dans les components </p>

<h2>Models</h2>
<p>J'ai créé deux models : </p>
<ul>
<li>customer</li>
<li>accounts</li>
</ul>
<p>que j'ai utilisé pour afficher les données</p>

<h2>Customers</h2>
<img src="./captures/img.png" width="500"/>

<h3>Rechercher un customer à partir d'un mot clé:</h3>
<img src="./captures/img_1.png" width="500"/>

<h3>Consulter les comptes d'un customer</h3>
<img src="./captures/img_2.png" width="500"/>

<h2>Accounts</h2>
<img src="./captures/img_3.png" width="500"/>

<h3>Details d'un compte recherché</h3>
<img src="./captures/img_4.png" width="500"/>

<h3>Opération de crédit </h3>
<img src="./captures/img_5.png" width="500"/>
<img src="./captures/img_6.png" width="500"/>


