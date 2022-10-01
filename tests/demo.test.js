describe('Pruebas iniciales', () => {
  test('No falla strings', () => {
    // AAAA
    // A => Acelerar / inicializar
    const message = 'Hola test';
    // AA => Actuar / estimulo
    const messageTwo = message.trim();
    // AAA => Asercion / comportamiento
    expect(message).toBe(messageTwo);
  });
});
