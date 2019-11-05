Chatroom zbudowany przy użyciu html, css, javascript, regex, babel i webpack (użyłem mojego włąsnego boilerplate z webpack i babel).

Chatroom wykorzystuje również firestore jako bazę danych, firebase auth do autoryzacji, materialize do stylów i modali oraz dateFNS,
aby ładnie wystylować datę wysłania wiadomości i utworzenia konta.

Chatroom jest zabezpieczony przed zdublowanymi nazwami użytkowników, błędnym powtórzeniem hasła, złym adresem email, zastosowaniem
niedozwolonych znaków w celu wstrzyknięcia skryptu, próbą pobrania/wysłania danych bez zalogowania/zarejestrowania oraz próbą
podwójnego zalogowania się.

Po rejestracji następuje automatyczne zalogowanie do systemu.

Aplikacja jest kompatybilna z urządzeniami mobilnymi.