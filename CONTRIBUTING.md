# Contribuir a Bracotes Resources

Gracias por querer contribuir. Sigue estos pasos para que tu aportación sea aceptada rápidamente.

1. Lee las reglas básicas en `CODE_OF_CONDUCT.md`.
2. Localiza la categoría/archivo JSON adecuado donde añadir el recurso.
3. Añade un objeto JSON al array correspondiente en el archivo indicado (ver ejemplo más abajo).
4. Ejecuta una comprobación básica local (formato JSON).
5. Abre un Pull Request con un título descriptivo y la explicación del cambio.

Formato recomendado (ejemplo de objeto JSON)
```json
{
  "title": "Nombre del recurso",
  "description": "Una breve descripción (1-2 líneas).",
  "url": "https://example.com",
  "tags": ["tema1", "tema2"],
}
```

Dónde añadirlo
- Añade el objeto al array correspondiente en el archivo JSON de la categoría. Ejemplos típicos:
  - `seo/seo.json`
  - `ux/ux.json`
  - `autenticacion/autenticacion.json`
- Si no estás seguro de qué archivo usar, indica en el PR la ubicación propuesta y los mantenedores te ayudarán a ubicarlo.

Criterios mínimos de aceptación
- Link válido y accesible.
- Descripción clara.
- Categoría apropiada.
- No duplicados.

Plantillas de commits y PR
- Usa mensajes cortos y descriptivos.
- Describe en el PR qué añadiste y por qué es útil.

Automatizaciones
- El repo tiene Actions que validan links y otros checks. Si tu PR falla en checks, corrige los errores y vuelve a subir.

Si tienes dudas, abre un issue y te ayudamos.
