document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('student-modal');
    const modalContent = document.querySelector('.modal-content');
    const closeButton = document.querySelector('.close-button');
    const studentPhoto = document.getElementById('student-photo');
    const studentName = document.getElementById('student-name');
    const studentBirthdate = document.getElementById('student-birthdate');
    const studentHobbies = document.getElementById('student-hobbies');
    const studentMotto = document.getElementById('student-motto');

    document.querySelectorAll('.student img').forEach(img => {
        img.addEventListener('click', () => {
            studentPhoto.src = img.src;
            studentName.textContent = img.alt;
            studentBirthdate.textContent = img.dataset.birthdate;
            studentHobbies.textContent = img.dataset.hobbies;
            studentMotto.textContent = img.dataset.motto;

            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
