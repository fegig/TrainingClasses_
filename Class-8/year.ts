function getYearType(year:number) {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return "Leap Year";
    }
    return "Not a Leap Year";
}


document.getElementById("checkButton")?.addEventListener("click", (event) => {
    event.preventDefault();
    const year = parseInt((document.getElementById("year") as HTMLInputElement).value || "0");
    const result = getYearType(year);
    document.getElementById("result")!.textContent = result;
});