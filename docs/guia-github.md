# Guía básica de GitHub (modo simple)

Esta guía es para poder trabajar en grupo sin romper el repositorio.

---

## 🧠 Idea general

* Cada uno trabaja en su compu
* Hace cambios
* Los sube al repositorio

---

## ⚠️ Reglas importantes

* SIEMPRE hacer `pull` antes de trabajar
* NO borrar archivos de otros
* Escribir mensajes de commit claros

---

## 🔄 Flujo básico

1. Traer cambios:

```bash
git pull
```

2. Hacer cambios en tu código

3. Guardar cambios:

```bash
git add .
git commit -m "explico lo que hice"
```

4. Subir cambios:

```bash
git push
```

---

## 🧨 Problemas comunes

### ❌ "Me tira error al hacer push"

👉 Probablemente alguien subió cambios antes

Solución:

```bash
git pull
```

y después:

```bash
git push
```

---

## 💡 Tips

* Hacer commits chicos (no todo junto)
* Subir seguido
* No esperar al final del día

---
