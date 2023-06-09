 function calcularInteres() {
    
    const mInicial = parseFloat(document.getElementById("m_inicial").value);
    const interesMensual = 0.0125;
    let interesAnual = mInicial * (1 + interesMensual) ** 12 - mInicial;
    let mFinal = mInicial + (250.00 * 11) + interesAnual;
    mFinal = mFinal.toFixed(2);
    
    const resultados = document.getElementById("resultados");
    resultados.innerHTML = `
      <p>El interés anual es: ${interesAnual.toFixed(2)}</p>
      <p>El monto final de la cuenta es: ${mFinal} Bs.</p>
    `;
}
