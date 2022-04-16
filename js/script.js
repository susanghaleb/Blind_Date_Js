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

window.addEventListener('load', function() {
    
    function search() {
        
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        
        //get gender
        var genderField = document.getElementById('gender');
        var selected = genderField.selectedIndex;
        var gender = genderField.options[selected].value;
        console.log(gender);
        function handleChange(event){
            console.log(event.target.value)


        
        }

        function renderResult(avatar, name, hobby){
            return(
                '<div class="person-row">\
                                   <img src="images/' + avatar + '" />\
                                   <div class="person-info">\
                                   <div>' + name + '</div>\
                                   <div>' + hobby + '</div></div>\
                                    <button>Add as friend</button></div>'

            )
        }
        function filterUsers(){
            var resultsHTML = '';
            var numUsers = users.length;
            
            for(var i = 0; i < numUsers; i++) {
                
                if (gender == 'A' || gender == users[i].gender) {             
                    if (hobby == '' || hobby == users[i].hobby) {
                        resultsHTML += renderResult(users[i].avatar, users[i].name, users[i].hobby)
                    }
                }
            }
        return resultsHTML;    
            
        }
        genderField.addEventListener('change',handleChange)
       
     
        
        results.innerHTML = filterUsers();  
    };
    
    var results = document.getElementById('results');
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
    search();
});