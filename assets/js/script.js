//        function discord() {
//            fetch('https://i.joshua.dog/api/discord/status', {
//                method: 'GET',
//                headers: {
//                    'Origin': window.location.origin,
//                    'X-Requested-With': 'XMLHttpRequest'
//                }
//            })
//                .then(response => {
//                    if (!response.ok) {
//                        throw new Error('Network response was not ok');
//                    }
//                    return response.json();
//                    
//                })
//                .then(data => {
//                    console.log(data);
//                
//                    const status = data.status;
//                    document.getElementById('Discord').textContent = status;
//                    if (status === "Online") {
//                        document.getElementById('Discord').style.color = '#23a55a';
//                    } else if(status === "Offline") {
//                        document.getElementById('Discord').style.color = '#f23f43';
//                    }
//                    document.getElementById('Discord').textContent = status;
//                    
//                })
//                .catch(error => {
//                    console.error('Error fetching data:', error);
//                    document.getElementById('Discord').textContent = 'Error fetching data';
//                });
//        }
//
//        function spotify() {
//            fetch('https://i.joshua.dog/api/spotify/status', {
//                method: 'GET',
//                headers: {
//                    'Origin': window.location.origin,
//                    'X-Requested-With': 'XMLHttpRequest'
//                }
//            })
//                .then(response => {
//                    if (!response.ok) {
//                        throw new Error('Network response was not ok');
//                    }
//                    return response.json();
//                    
//                })
//                .then(data => {
//                    console.log(data);
//                        
//                    const element = document.getElementById('Spotify');
//                    const url = document.getElementById('url');
//                
//                    const status = data.success;
//                
//                    if (status === true) {
//                        element.textContent = data.name + ' - ' + data.artist + '';
//                        element.style.color = '#3db72a';
//                        url.href = data.link;
//                    } else if(status === false) {
//                        element.textContent = 'Listening To Nothing...';
//                        element.style.color = '#f23f43';
//                        url.removeAttribute('href');
//                        url.style.textDecoration = 'none';
//                    }
//                    
//                })
//                .catch(error => {
//                    console.error('Error fetching data:', error);
//                    document.getElementById('Spotify').textContent = 'Error fetching data';
//                    url.removeAttribute('href');
//                        url.style.textDecoration = 'none';
//                });
//        }
//
//
//        document.addEventListener('DOMContentLoaded', function() {
//            discord();
//            spotify();
//
//            setInterval(function() {
//                discord();
//                spotify();
//            }, 1000);
//        });


