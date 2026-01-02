# Guía: Cómo Subir tu Proyecto a GitHub

Esta guía te mostrará paso a paso cómo subir tu proyecto B2B Contact Page a un repositorio de GitHub.

---

## Paso 1: Crear un Repositorio en GitHub

### 1.1 Accede a GitHub
- Ve a [github.com](https://github.com) e inicia sesión con tu cuenta
- Si no tienes cuenta, créala gratuitamente

### 1.2 Crear un nuevo repositorio
- Haz clic en el icono **+** en la esquina superior derecha
- Selecciona **New repository**
- Completa los campos:
  - **Repository name**: `b2b-contact-page` (o el nombre que prefieras)
  - **Description**: "Página de contacto B2B profesional con diseño Industrial Minimalist"
  - **Visibility**: Selecciona **Public** (para que sea visible) o **Private** (solo tú)
  - **Initialize this repository with**: Deja sin marcar (ya tenemos archivos locales)
- Haz clic en **Create repository**

### 1.3 Copia la URL del repositorio
- Después de crear el repo, verás una URL como:
  ```
  https://github.com/TU_USUARIO/b2b-contact-page.git
  ```
- Cópiala (la necesitarás en el siguiente paso)

---

## Paso 2: Configurar Git en tu Máquina Local

### 2.1 Abre la terminal en tu proyecto
```bash
cd /home/ubuntu/b2b-contact-page
```

### 2.2 Inicializar el repositorio Git (si no está ya inicializado)
```bash
git init
```

### 2.3 Agregar todos los archivos
```bash
git add .
```

### 2.4 Hacer el primer commit
```bash
git commit -m "Initial commit: B2B Contact Page with Industrial Minimalist design"
```

### 2.5 Conectar con el repositorio remoto de GitHub
Reemplaza `TU_USUARIO` con tu usuario de GitHub:
```bash
git remote add origin https://github.com/TU_USUARIO/b2b-contact-page.git
```

### 2.6 Cambiar el nombre de la rama a `main` (si es necesario)
```bash
git branch -M main
```

### 2.7 Hacer push del código a GitHub
```bash
git push -u origin main
```

---

## Paso 3: Verificar que Todo Está en GitHub

1. Ve a tu repositorio en GitHub: `https://github.com/TU_USUARIO/b2b-contact-page`
2. Deberías ver todos tus archivos del proyecto
3. ¡Listo! Tu proyecto está en GitHub

---

## Comandos Útiles para Futuras Actualizaciones

### Después de hacer cambios locales:

```bash
# Ver estado de cambios
git status

# Agregar cambios específicos
git add archivo.tsx

# O agregar todos los cambios
git add .

# Hacer commit con mensaje descriptivo
git commit -m "Descripción de los cambios realizados"

# Subir cambios a GitHub
git push
```

### Ejemplo de flujo completo:
```bash
# 1. Hacer cambios en tus archivos
# 2. Ver qué cambió
git status

# 3. Agregar cambios
git add .

# 4. Hacer commit
git commit -m "Agregar sección de servicios"

# 5. Subir a GitHub
git push
```

---

## Configuración Recomendada: .gitignore

El archivo `.gitignore` ya existe en tu proyecto y excluye:
- `node_modules/` (dependencias instaladas)
- `.env` (variables de entorno sensibles)
- `dist/` (archivos compilados)
- `.DS_Store` (archivos del sistema)

**Importante**: Nunca hagas push de archivos `.env` con credenciales reales.

---

## Paso 4: Configurar Variables de Entorno (Opcional pero Importante)

### 4.1 Crear archivo `.env.example`
Crea un archivo `/.env.example` con las variables que necesitas, SIN los valores reales:

```bash
# Database
DATABASE_URL=mysql://user:password@localhost:3306/dbname

# OAuth
VITE_OAUTH_PORTAL_URL=https://oauth.example.com
OAUTH_SERVER_URL=https://api.example.com

# Storage
AWS_ACCESS_KEY_ID=your_key_here
AWS_SECRET_ACCESS_KEY=your_secret_here
```

### 4.2 Agregar a Git
```bash
git add .env.example
git commit -m "Add environment variables template"
git push
```

Esto permite que otros desarrolladores sepan qué variables necesitan, sin exponer tus credenciales.

---

## Proteger Ramas (Recomendado)

Para evitar cambios accidentales en `main`:

1. Ve a tu repositorio en GitHub
2. Settings → Branches
3. Haz clic en "Add rule"
4. Branch name pattern: `main`
5. Marca "Require pull request reviews before merging"
6. Guarda cambios

---

## Colaboración con Otros (Opcional)

Si quieres que otros trabajen en tu proyecto:

1. Ve a Settings → Collaborators
2. Haz clic en "Add people"
3. Busca y agrega a los colaboradores
4. Ellos recibirán una invitación

---

## Solución de Problemas

### Error: "fatal: not a git repository"
```bash
git init
```

### Error: "Permission denied (publickey)"
Necesitas configurar SSH. Sigue esta guía: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### Error: "fatal: 'origin' does not appear to be a 'git' repository"
Asegúrate de haber ejecutado:
```bash
git remote add origin https://github.com/TU_USUARIO/b2b-contact-page.git
```

### Quiero cambiar la URL del repositorio remoto
```bash
git remote set-url origin https://github.com/TU_USUARIO/nuevo-repo.git
```

---

## Resumen Rápido

```bash
# 1. Inicializar Git
cd /home/ubuntu/b2b-contact-page
git init

# 2. Agregar archivos
git add .

# 3. Hacer commit
git commit -m "Initial commit: B2B Contact Page"

# 4. Conectar con GitHub (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/b2b-contact-page.git
git branch -M main

# 5. Hacer push
git push -u origin main
```

¡Listo! Tu proyecto está en GitHub.

---

## Recursos Adicionales

- [Documentación oficial de GitHub](https://docs.github.com)
- [Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
- [GitHub Desktop](https://desktop.github.com) - Interfaz gráfica si prefieres no usar terminal

---

## Preguntas Frecuentes

**P: ¿Puedo cambiar mi repositorio de privado a público después?**
R: Sí. Ve a Settings → Danger Zone → Change repository visibility

**P: ¿Cómo borro el historial de Git?**
R: No es recomendable, pero puedes usar `git reset --hard HEAD~1` para deshacer el último commit

**P: ¿Qué es un "fork"?**
R: Es una copia de un repositorio en tu cuenta. Úsalo si quieres contribuir a proyectos de otros

**P: ¿Cómo clono un repositorio?**
R: `git clone https://github.com/usuario/repo.git`

---

¡Éxito subiendo tu proyecto a GitHub! 🚀
