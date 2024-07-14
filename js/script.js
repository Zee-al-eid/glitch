$(document).ready(function () {
    const glitchChannelId = 'UCn_FAXem2-e3HQvmK-mOH4g';
    const smg4ChannelId = 'UC8LcA3grYZg0GNpxlXh8owg';
    const apiKey = 'AIzaSyC1VtdNogFcCtQhUQmUExk52BUqwQPyYNo';
    let currentPageToken = '';
    let currentTab = 'glitch';


    // Banner cross-fade effect
    setTimeout(() => {
        $('.banner1').css('opacity', '0');
        $('.banner2').css('opacity', '1').css('z-index', '1');
        $('#playButton img').css('opacity', '1').css('z-index', '1');
        updateSubscriberCount();
    }, 5000);

    // Function to get data from local storage
    function getFromCache(key) {
        const cached = localStorage.getItem(key);
        if (cached) {
            const data = JSON.parse(cached);
            const now = new Date().getTime();
            if (now - data.timestamp < 3600000) { // Cache for 1 hour
                return data.value;
            } else {
                localStorage.removeItem(key);
            }
        }
        return null;
    }

    // Function to save data to local storage
    function saveToCache(key, value) {
        const data = {
            value: value,
            timestamp: new Date().getTime()
        };
        localStorage.setItem(key, JSON.stringify(data));
    }

    // Fetch and update YouTube subscriber count
    function updateSubscriberCount() {
        const cacheKey = 'subscriberCount';
        const cachedData = getFromCache(cacheKey);
        if (cachedData) {
            // $('#subscriberCount').text(cachedData);
            animateSubscriberCount(cachedData);
            console.log(cachedData);
        } else {
            const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${glitchChannelId}&key=${apiKey}`;
            $.get(url)
                .done(function (data) {
                    const subscriberCount = data.items[0].statistics.subscriberCount;
                    saveToCache(cacheKey, subscriberCount);
                    animateSubscriberCount(subscriberCount);
                    console.log(data);
                })
                .fail(function (jqXHR) {
                    console.error('Error fetching subscriber count:', jqXHR);
                    $('#subscriberCount').text('Error');
                });

            // const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${glitchChannelId}&key=${apiKey}`;
            // $.get(url)
            //     .done(function(data) {
            //         const subscriberCount = data.items[0].statistics.subscriberCount;
            //         $('#subscriberCount').text(subscriberCount);
            //         saveToCache(cacheKey, subscriberCount);
            //     })
            //     .fail(function(jqXHR) {
            //         console.error('Error fetching subscriber count:', jqXHR);
            //         $('#subscriberCount').text('Error');
            //     });
        }
    }
    function animateSubscriberCount(subscriberCount) {
        $({ countNum: 0 }).animate({ countNum: subscriberCount }, {
            duration: 3000,
            easing: 'linear',
            step: function () {
                $('#subscriberCount').text(Math.floor(this.countNum));
            },
            complete: function () {
                $('#subscriberCount').text(this.countNum);
            }
        });
    }


    // Tabs functionality
    $('#glitchTab').click(function () {
        $('#glitchTab').addClass('active');
        $('#smg4Tab').removeClass('active');
        $('#glitchVideos').show();
        $('#smg4Videos').hide();
        currentTab = 'glitch';
        loadVideos('', currentTab);
    });

    $('#smg4Tab').click(function () {
        $('#glitchTab').removeClass('active');
        $('#smg4Tab').addClass('active');
        $('#glitchVideos').hide();
        $('#smg4Videos').show();
        currentTab = 'smg4';
        loadVideos('', currentTab);
    });

    // Fetch videos from YouTube API
    function loadVideos(pageToken, tab) {
        const channelId = tab === 'glitch' ? glitchChannelId : smg4ChannelId;
        const cacheKey = `${tab}Videos-${pageToken}`;
        const cachedData = getFromCache(cacheKey);
        if (cachedData) {
            displayVideos(cachedData, tab);
        } else {
            const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=8&pageToken=${pageToken}`;

            $.get(url)
                .done(function (data) {
                    saveToCache(cacheKey, data);
                    displayVideos(data, tab);
                })
                .fail(function (jqXHR) {
                    console.error('Error fetching videos:', jqXHR);
                    $(`#${tab}Videos`).html('<p>Error loading videos</p>');
                });
        }
    }
    // <div class="video-tile">
    //     <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
    //     <p>${video.snippet.title}</p>
    // </div>
    function displayVideos(data, tab) {
        currentPageToken = data.nextPageToken || '';
        $(`#${tab}Videos`).empty();
        data.items.forEach(video => {
            if (video.id.videoId) {
                $(`#${tab}Videos`).append(`
                    <div class="video-tile" data-video-id="${video.id.videoId}">
     <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
     <p>${video.snippet.title}</p>
 </div>

                `);
            }
        });
    }

    loadVideos('', 'glitch');
    loadVideos('', 'smg4');

    $('#next').click(function () {
        loadVideos(currentPageToken, currentTab);
    });

    $('#prev').click(function () {
        // Note: This implementation is for demonstration purposes.
        // For proper pagination, you may need to manage a history of page tokens.
        loadVideos('', currentTab);
    });


    // Video tile click event to open popup
    $(document).on('click', '.video-tile', function () {
        const videoId = $(this).data('video-id');
        $('#youtubePlayer').attr('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
        $('#videoPopup').fadeIn();
    });

    // Close popup
    $('#closePopup').click(function () {
        $('#youtubePlayer').attr('src', '');
        $('#videoPopup').fadeOut();
    });

    var limits = 15.0;

    $(".card").mousemove(function (e) {
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top; //y position within the element.
        var offsetX = x / rect.width;
        var offsetY = y / rect.height;

        var rotateY = (offsetX) * (limits * 2) - limits;
        var rotateX = (offsetY) * (limits * 2) - limits;

        var shadowOffsetX = (offsetX) * 32 - 16;
        var shadowOffsetY = (offsetY) * 32 - 16;

        $(this).css({
            "box-shadow": (1 / 6) * -shadowOffsetX + "px " + (1 / 6) * -shadowOffsetY + "px 2px rgba(0, 0, 0, 0.051), " +
                (2 / 6) * -shadowOffsetX + "px " + (2 / 6) * -shadowOffsetY + "px 3.2px rgba(0, 0, 0, 0.073), " +
                (3 / 6) * -shadowOffsetX + "px " + (3 / 6) * -shadowOffsetY + "px 7.6px rgba(0, 0, 0, 0.09), " +
                (4 / 6) * -shadowOffsetX + "px " + (4 / 6) * -shadowOffsetY + "px 12.3px rgba(0, 0, 0, 0.107), " +
                (5 / 6) * -shadowOffsetX + "px " + (5 / 6) * -shadowOffsetY + "px 22.5px rgba(0, 0, 0, 0.129), " +
                -shadowOffsetX + "px " + -shadowOffsetY + "px 65px rgba(0, 0, 0, 0.1)",
            transform: "perspective(1000px) rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)"
        });

        var glarePos = rotateX + rotateY + 90;
        $(this)
            .children()
            .children()
            .css("left", glarePos + "%");
    });

    $(".card").mouseleave(function (e) {
        $(".card").css({ "box-shadow": "0px 0px 2px rgba(0, 0, 0, 0.051), 0px 0px 6.2px rgba(0, 0, 0, 0.073), 0px 0px 7.6px rgba(0, 0, 0, 0.09), 0px 0px 12.3px rgba(0, 0, 0, 0.107), 0px 0px 23.5px rgba(0, 0, 0, 0.129)", "transform": "scale(1.0)" });
        $(".glare").css("left", "90%");
    });
});






