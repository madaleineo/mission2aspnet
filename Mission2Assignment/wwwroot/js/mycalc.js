$("#btnGrade").click(function () {
    finalGrade = ($('#assignments').val() * .55 + $('#groupProjects').val() * .05 + $('#quizzes').val() * .1 +
        $('#exams').val() * .2 + $('#intex').val() * .1)
    finalGrade = finalGrade.toFixed(2)
    letterGrade = ""
    if (finalGrade >= 94) {
        letterGrade = "A"
    }
    else if (finalGrade >= 90) {
        letterGrade = "A-"
    }
    else if (finalGrade >= 87) {
        letterGrade = "B+"
    }
    else if (finalGrade >= 84) {
        letterGrade = "B"
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-"
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+"
    }
    else if (finalGrade >= 74) {
        letterGrade = "C"
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-"
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+"
    }
    else if (finalGrade >= 64) {
        letterGrade = "D"
    }
    else if (finalGrade >= 60) {
        letterGrade = "D-"
    }
    else {
        letterGrade = "E"
    }

    alert("This is your projected final grade: " + finalGrade + "% which translates to a(n) " + letterGrade) 
})




