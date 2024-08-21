
alert(" Bonjour utilisateur bienvenue dans notre site web!");

// Supposons que vous ayez un formulaire avec l'ID "formulaire"
const formulaire = document.getElementById('formulaire');

formulaire.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    const formData = new FormData(formulaire);
    const prenom = formData.get('nom');
    const mail = formData.get('prenom');
    const age = formData.get('email');
    const sexe = formData.get('mot de passe');
    const pays = formData.get('pays');

    console.log(`Nom : ${'nom'}`);
    console.log(`Prénom : ${'prenom'}`);
    console.log(`Email : ${'email'}`);
    console.log(`Mot de passe : ${'mot de passe'}`);
    
});

    
