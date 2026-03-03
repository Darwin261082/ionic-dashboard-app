# Ionic Dashboard App

Dashboard administrativo básico desarrollado con Ionic + Angular utilizando APIs públicas.

---

## Descripción

Esta aplicación consiste en un dashboard que muestra:

- 📈 Total de usuarios
- 📦 Total de productos
- 📋 Lista de últimos usuarios registrados
- ⏳ Indicador de carga mientras se consumen las APIs
- ❌ Manejo básico de errores en caso de fallo en la carga

El objetivo es simular un panel administrativo sencillo aplicando buenas prácticas de arquitectura y componentización.

---

## APIs Utilizadas

- https://jsonplaceholder.typicode.com/users
- https://fakestoreapi.com/products

---

## Arquitectura del Proyecto

El proyecto sigue una estructura organizada por responsabilidades:

src/app/
│
├── core/
│ └── services/
│ ├── user.service.ts
│ └── product.service.ts
│
├── shared/
│ └── components/
│ ├── stat-card/
│ └── recent-list/
│
├── pages/
│ └── dashboard/
│
└── models/
├── user.model.ts
└── product.model.ts


### Principios aplicados

- Uso de servicios para consumo de APIs
- Componentes reutilizables
- Separación clara de responsabilidades
- Arquitectura escalable
- Standalone Components (Angular 20)

---

## Componentes Reutilizables

### Stat Card Component
Muestra indicadores numéricos como:
- Total de usuarios
- Total de productos

Props:
- `title`
- `value`
- `icon`

---

### Recent List Component
Muestra lista dinámica de registros recientes.

Props:
- `items`
- `field`

---

## Interfaz de Usuario

Se utilizaron componentes de Ionic:

- `ion-card`
- `ion-list`
- `ion-grid`
- `ion-row`
- `ion-col`
- `ion-loading`
- `ion-icon`

Diseño limpio, responsive y adaptable a desktop y móvil.

---

## Manejo de Estados

- Loader visible mientras se cargan los datos.
- Manejo básico de error mostrando mensaje visual.
- Renderizado condicional según estado.

---

## Instalación y Ejecución

### 1 Clonar repositorio
git clone <https://github.com/Darwin261082/ionic-dashboard-app.git>

### 2 Instalar dependencias
npm install

### 3 Ejecutar aplicación
ionic serve

La aplicación se abrirá en:
http://localhost:8100


---

##  Build de Producción

Para generar versión compilada:
ionic build


Los archivos generados estarán en la carpeta:
www/


---

##  Evidencia de Funcionamiento

Se incluyen capturas de pantalla o video demostrativo mostrando:

- Carga de datos
- Visualización de estadísticas
- Lista de registros
- Manejo de error

---

##  Tecnologías Utilizadas

- Ionic 8
- Angular 20
- TypeScript
- RxJS
- APIs públicas REST

---

##  Autor

Desarrollado como prueba técnica demostrando:

- Arquitectura limpia
- Componentización
- Buenas prácticas en Angular
- Manejo de estado
- Organización profesional del proyecto