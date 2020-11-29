// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Direct", "Referral"],
        datasets: [{
            data: [95, 5],
            backgroundColor: ['#1cc88a', '#858796'],
            hoverBackgroundColor: ['#17a673', '#858796'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: false
        },
        cutoutPercentage: 80,
    },
});

//Second Pie Chart Example
var ctx2 = document.getElementById("mySecondPieChart");
var myPieChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ["Horas frente al monitor", "Horas de descanso"],
        datasets: [{
            data: [85, 15],
            backgroundColor: ['#e74a3b', '#858796'],
            hoverBackgroundColor: ['#e74a3b', '#858796'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: false
        },
        cutoutPercentage: 80,
    },
});

// Third Pie Chart Example
var ctx3 = document.getElementById("myThirdPieChart");
var myPieChart = new Chart(ctx3, {

    type: 'doughnut',
    data: {
        labels: ["Litros de agua consumidos", "Litros de agua sin consumir"],
        datasets: [{
            data: [65, 35],
            backgroundColor: ['#36b9cc', '#858796'],
            hoverBackgroundColor: ['#36b9cc', '#858796'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: false
        },
        cutoutPercentage: 80,
    },

});

// Four Pie Chart Example
var ctx4 = document.getElementById("myFourPieChart");
var myPieChart = new Chart(ctx4, {

    type: 'doughnut',
    data: {
        labels: ["Tareas completadas", "Tareas sin completar"],
        datasets: [{
            data: [65, 35],
            backgroundColor: ['#4e73df', '#858796'],
            hoverBackgroundColor: ['#4e73df', '#858796'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: false
        },
        cutoutPercentage: 80,
    },

});


// Five Pie Chart Example
var ctx5 = document.getElementById("myFivePieChart");
var myPieChart = new Chart(ctx5, {

    type: 'doughnut',
    data: {
        labels: ["Herramientas de gestion", "Otra"],
        datasets: [{
            data: [50, 50],
            backgroundColor: ['#f6c23e', '#858796'],
            hoverBackgroundColor: ['#f6c23e', '#858796'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: false
        },
        cutoutPercentage: 80,
    },

});


// Third Pie Chart Example
var ctx3 = document.getElementById("mySixPieChart");
var myPieChart = new Chart(ctx3, {

    type: 'doughnut',
    data: {
        labels: ["Horas trabajadas", "Horas restantes"],
        datasets: [{
            data: [100],
            backgroundColor: ['#1cc88a'],
            hoverBackgroundColor: ['#5a5c69'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: false
        },
        cutoutPercentage: 80,
    },

});