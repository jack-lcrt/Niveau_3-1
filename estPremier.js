var estPremier = function(n){
	if (n<0){return false;
	} else {
		for (var i = 2;n>i;i++){
			if (n%i==0){
				return (false);
			}
		}
	return(true);
	}
};

var listePremier = function(n){
	var liste = [];
	var nint=Math.floor(n);
	for (var i=2;i<nint;i++){
		if (estPremier(i)){
			liste.push(i);
		}
	}
	return (liste);
};

module.exports = listePremier;
