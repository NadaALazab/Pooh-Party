// Define variables for notifications and polling data
var newNotifications = [];
var readNotifications = [];
var awaitingNotifications = 0;

// Initialize function
function init() {
    // Check local storage for existing notifications
    var storedNewNotifications = JSON.parse(localStorage.getItem('newNotifications'));
    var storedReadNotifications = JSON.parse(localStorage.getItem('readNotifications'));
    var storedAwaitingNotifications = JSON.parse(localStorage.getItem('awaitingNotifications'));

    // Populate notifications if stored data exists, otherwise use default values
    newNotifications = storedNewNotifications || [{
        user: pollingData.users[1],
        action: pollingData.actions[0],
        target: pollingData.actionTargets[2],
        timestamp: new Date()
    }];
    readNotifications = storedReadNotifications || [{
        user: pollingData.users[2],
        action: pollingData.actions[1],
        target: pollingData.actionTargets[0],
        timestamp: new Date()
    }];
    awaitingNotifications = storedAwaitingNotifications || 1;

    // Show notifications count if new notifications are received
    setInterval(function () {
        if (awaitingNotifications > 0 && (document.getElementById('notifications-count').style.opacity === '0' || document.getElementById('notifications-count').style.display === 'none')) {
            document.getElementById('notifications-count').style.opacity = '1';
        }
    }, 400);

    // Call dummy polling
    dummyPolling();
}

// Hide dropdown function
function hideDropdown(targetdd) {
    targetdd.style.display = 'none';
    awaitingNotifications = 0;
    newNotifications.forEach(function (notification) {
        readNotifications.push(notification);
    });
    newNotifications = [];
    localStorage.setItem('readNotifications', JSON.stringify(readNotifications));
    localStorage.setItem('newNotifications', JSON.stringify(newNotifications));
    localStorage.setItem('awaitingNotifications', JSON.stringify(awaitingNotifications));
    if (awaitingNotifications > 0) {
        document.getElementById('notifications-count').style.opacity = '1';
    }
}

// New notification function
function getNewNotification() {
    var userIndex = getRandomNumber();
    var actionIndex = getRandomNumber();
    var actionTargetIndex = getRandomNumber();
    var newNotification = {
        user: pollingData.users[userIndex],
        action: pollingData.actions[actionIndex],
        target: pollingData.actionTargets[actionTargetIndex],
        timestamp: new Date()
    };
    return newNotification;
}

// Dummy polling function
function dummyPolling() {
    var randomInterval = 2 * Math.round(Math.random() * (3000 - 500)) + 1000;
    setTimeout(function () {
        newNotifications.push(getNewNotification());
        awaitingNotifications++;
        localStorage.setItem('newNotifications', JSON.stringify(newNotifications));
        localStorage.setItem('awaitingNotifications', JSON.stringify(awaitingNotifications));
        console.log("dummy poll called after " + randomInterval + "ms");
        dummyPolling();
    }, randomInterval);
}

// Event listener for window click
window.onclick = function (event) {
    var clickedElement = event.target;
    var clickedDdTrigger = clickedElement.closest('.dd-trigger');
    var clickedDdContainer = clickedElement.closest('.dropdown-menu');
    if (opendd !== null && clickedDdTrigger === null && clickedDdContainer === null) {
        hideDropdown(opendd);
    }
};

// Event listener for window beforeunload
window.onbeforeunload = function () {
    if (opendd !== null) {
        console.log('closingdd');
        hideDropdown(opendd);
    }
};

// Initialize the application
init();
