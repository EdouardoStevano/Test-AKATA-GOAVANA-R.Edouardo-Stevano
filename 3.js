function pairProgramming(experiences, mostExperienced){
    pairValid  = experiences.length /2 == Number.isInteger ? "true" : "false";

    if(pairValid == "true" && experiences != null &&  mostExperienced == true){
        // Prendre le deux nombres les plus élevés du tableau "experiences"
        return ["Deux nombres les plus élévés du tableau"];
    }else if(pairValid == "false"){
        return ["Ce tableau doit toujours être pair"];
    };
    else{
        // Prendre le deux nombres les moins élevés du tableau "experiences"
        return ["Deux nombre les moins élévés du tableau"];
    };
    return [];
};

pairProgramming([1,2,2,4,5] , false);