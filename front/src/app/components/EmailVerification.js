import React, { useState } from "react";

function EmailVerification() {
  const [verificationCode, setVerificationCode] = useState("");

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier le code de vérification ici
    if (verificationCode === "123456") {
      console.log("Code de vérification correct !");
      // Effectuer une action supplémentaire si le code est valide
    } else {
      console.log("Code de vérification incorrect !");
      // Afficher un message d'erreur ou effectuer une autre action en cas de code incorrect
    }
  };

  return (
	<div className="content-body">
	<div class="container-fluid">
		<center>
      <h1>Entrer le code de vérification</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Code de vérification :
          <input
            type="text"
            value={verificationCode}
            onChange={handleVerificationCodeChange}
			className=
				"form-control"
          />
        </label>
        <br />
        <button type="submit">Vérifier</button>
      </form>
	  </center>
    </div></div>
  );
}

export default EmailVerification;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          