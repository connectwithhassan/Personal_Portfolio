document.getElementById('home_nav').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('home_sec').scrollIntoView({behavior: 'smooth'});
});



document.getElementById('contact_nav').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contacts_sec').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('about_nav').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('about_sec').scrollIntoView({behavior: 'smooth'});
    // const customcolor='#2d3748';
    // document.navbar.style.backgroundColor = customcolor;
});

document.getElementById('education_nav').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('education_sec').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('projects_nav').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('projects_sec').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('skills_nav').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('skills_sec').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('aboutbutton').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('about_sec').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('contactbutton').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contacts_sec').scrollIntoView({behavior: 'smooth'});
});



document.getElementById('homemob').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('home_sec').scrollIntoView({behavior:'smooth'});
});

document.getElementById('aboutmob').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('about_sec').scrollIntoView({behavior:'smooth'});
});

document.getElementById('edumob').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('education_sec').scrollIntoView({behavior:'smooth'});
});

document.getElementById('projmob').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('projects_sec').scrollIntoView({behavior:'smooth'});
});

document.getElementById('skillsmob').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('skills_sec').scrollIntoView({behavior:'smooth'});
});

document.getElementById('contmob').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contacts_sec').scrollIntoView({behavior:'smooth'});
});

