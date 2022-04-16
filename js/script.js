(() => {
    'use strict';
    var users = [
        {
            name: 'Lucy',
            gender: 'F',
            hobby: 'pets',
            avatar: 'avatar1.png'
        },
        {
            name: 'Betty',
            gender: 'F',
            hobby: 'pets',
            avatar: 'avatar2.png'
        },
        {
            name: 'Ronald',
            gender: 'M',
            hobby: 'music',
            avatar: 'avatar3.png'
        },
        {
            name: 'Christopher',
            gender: 'M',
            hobby: 'sports',
            avatar: 'avatar4.png'
        },
        {
            name: 'Ximena',
            gender: 'F',
            hobby: 'reading',
            avatar: 'avatar5.png'
        },
        {
            name: 'Paul',
            gender: 'M',
            hobby: 'shopping',
            avatar: 'avatar6.png'
        },
        {
            name: 'Charlie',
            gender: 'M',
            hobby: 'pets',
            avatar: 'avatar7.png'
        },
    ];




    function render(filterUsers) {
        document.getElementById('results').innerHTML = filterUsers();

    }

    function load() {
        console.log("load")

        // Variables globales

        var genderField = document.getElementById('gender');
        var hobbyField = document.getElementById('hobby');
        var searchBtn = document.getElementById('searchBtn');
        var selected = genderField.selectedIndex;
        var gender = genderField.options[selected].value;
        var hobby = hobbyField.value;

        var search = () => {
            render(filterUsers)
        }

        // Listener
        searchBtn.addEventListener('click', search);
        genderField.addEventListener('change', handleChangeGender)


        // Métodos

        function filterUsers() {
            var resultsHTML = '';
            var numUsers = users.length;
            for (let index = 0; index < numUsers; index++) {
                const element = users[index];
                if (gender == 'A' || gender == element.gender) {
                    if (hobby == '' || hobby == element.hobby) {
                        resultsHTML += renderItem(element.avatar, element.name, element.hobby)
                    }
                }

            }

            return resultsHTML
        }

        function renderItem(avatar, name, hobby) {
            return (
                `
                <div class="person-row">
                    <img src="images/${avatar}" />
                    <div class="person-info">
                        <p>${name}</p>
                        <p>${hobby}</p>
                    </div>
                    <button>Add as friend</button></div>
                </div>
                `
            )
        }

        function handleChangeGender(event) {

            gender = event.target.value
            render(filterUsers)
        }

        render(filterUsers)

    }



    window.addEventListener('load', load)


})()
