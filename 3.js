function pairProgramming(experiences, mostExperienced) {
    const pairValid = experiences.length % 2 === 0;

    if (pairValid && experiences !== null) {
        if (mostExperienced) {
            const sortedExperiences = experiences.sort((a, b) => b - a);
            return [sortedExperiences[0], sortedExperiences[1]];
        } else {
            const sortedExperiences = experiences.sort((a, b) => a - b);
            return [sortedExperiences[0], sortedExperiences[1]];
        }
    } else if (!pairValid) {
        return ["Ce tableau doit toujours être pair"];
    } else {
        return ["Erreur inattendue"];
    }
}

console.log(pairProgramming([1, 2, 3, 4, 5, 6], true)); 
console.log(pairProgramming([1, 2, 3, 4, 5, 6], false));
console.log(pairProgramming([1, 2, 3, 4, 5], false));
console.log(pairProgramming([10, 20, 30, 40], true));
console.log(pairProgramming([10, 20, 30, 40], false));
