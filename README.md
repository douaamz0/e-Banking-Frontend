<h1>Compte rendu du projet e_banking (Frontend)</h1>
<p>Aprés avoir réalisé le backend je me suis attaquée au frontend 
en utilisant Angular </p>

<h2>Components</h2>
<p>J'ai créé les components suivants: </p>
<ul>
<li>Accounts: ce component affiche un formulaire où l'utilisateur doit saisir l'id du compte
puis affiche le détail du compte et la possibilté d'effectuer differentes operations</li>
<li>Customers: pour afficher les differents clients de la banque avec la possibilité de rechercher un clinet et de supprimer
 ou de consulter les comptes de chaque client</li>
<li>customer-account: afficher les compte d'un client</li>
<li>navbar </li>
<li>New-customer: pour afficher le formulaire de l'ajout d'un client</li>
<li>login: formulaire du login</li>
<li>AdminTemplate et NotAuthorized: des composants auxquels le user sera redirigé </li>
</ul>

<h2>Services</h2>
<p>J'ai créé trois services : </p>
<ul>
<li>account: ce service contient les differentes fonctionnalités et operations 
que l'on peut effectuer sur un compte débit, crédit, transfer et consultation</li>
<li>customer: ce service contient les differentes fonctionnalités et operations 
que l'on peut effectuer sur un customer </li>
</ul>
<p>puis j'ai fais l'injection des dependances dans les components </p>
<li>authentication: ce service gère l'authentification login, logout, chargement du profil, chargement du token depuis le local storage</li>
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

<h3>Login</h3>
<img src="./captures/img_7.png" width="500"/>


<h2>Partie sécurité frontend:</h2>
<h4>Intercepteur</h4>
<p>AppHttp: Cet interceptateur est utilisé pour assurer que toutes les requêtes HTTP (à l'exception des requêtes de connexion) contiennent un token d'autorisation JWT, et pour gérer les erreurs 
d'authentification de manière centralisée.</p>

<h4>Guards</h4>
<p>j'ai créé deux guards un pour l'authentification et l'un pour l'authorisation</p>
<ul>
<li>AuthenticationGuard : empêche l'accès à certaines routes si l'utilisateur n'est pas authentifié en vérifiant l'état d'authentification via AuthService. Si l'utilisateur n'est pas authentifié, il est redirigé vers la page de login.</li>
<li>AuthorizationGuard : empêche l'accès à certaines routes en vérifiant si l'utilisateur a le rôle  "ADMIN". Si l'utilisateur n'a pas le rôle requis, il est redirigé vers une page de non-autorisation.</li>
</ul>

