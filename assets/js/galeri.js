const btnShowAll = document.getElementById('showAll');
      const btnShowEtc = document.getElementById('showEtc');
      const all = document.getElementById('all');
      const etc = document.getElementById('etc');
      etc.style.display = 'none';

      btnShowAll.addEventListener('click', function handleClick() {
        all.style.display = 'block';
        etc.style.display = 'none';
        btnShowEtc.classList.add('button-inactive');
        btnShowAll.classList.remove('button-inactive');

        btnShowEtc.classList.remove('button');
        btnShowAll.classList.add('button');
      });

      btnShowEtc.addEventListener('click', function handleClick() {
        all.style.display = 'none';
        etc.style.display = 'block';
        btnShowEtc.classList.add('button');
        btnShowAll.classList.remove('button');

        btnShowEtc.classList.remove('button-inactive');
        btnShowAll.classList.add('button-inactive');
      });