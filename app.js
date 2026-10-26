// =========================================================================
// PORTAFOLIO: CARRUSEL DE ANÁLISIS DE DATOS (ECBD)
// Autor: Ing. Miguel Ángel Peña
// =========================================================================

// Configurar Worker de PDF.js
if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

const DRIVE_MAIN_FOLDER = "https://drive.google.com/drive/u/1/folders/1ElJipHg3R0UzSswQyOKtylR0L4M0TQN0";

// Base de datos de actividades extraídas de los documentos originales
const documentsData = [
  {
  "id": "ref-workflow-steps",
  "type": "image",
  "category": "reference",
  "tag": "METODOLOGÍA • CICLO DE VIDA DEL DATO",
  "title": "Paso a Paso para el Análisis de Datos: Metodología en 6 Fases",
  "subtitle": "De la Definición del Problema a la Toma de Decisiones Estratégicas y Medición de Impacto",
  "description": "Estructura metódica estándar para transformar datos brutos en decisiones de negocio medibles. Divide el proyecto en 6 fases secuenciales con retroalimentación continua: objetivos, recolección, limpieza, análisis con preguntas clave, decisiones y medición de resultados.",
  "imageSrc": "assets/images/data_analysis_workflow_steps.png",
  "totalPages": 3,
  "tools": [
    "Metodología Analítica",
    "CRISP-DM",
    "KPIs de Negocio",
    "Preguntas Clave",
    "Toma de Decisiones"
  ],
  "keyPoints": [
    "Paso 1 - Definir Objetivos: Sin un objetivo de negocio claro, el análisis carece de dirección (establecer KPIs SMART).",
    "Paso 2 - Recopilación de Datos: Extracción multi-fuente (APIs, SQL, CSVs) garantizando trazabilidad y ética de datos.",
    "Paso 3 - Organizar y Limpiar: El 80% del esfuerzo. Manejo de nulos, corrección de tipos erróneos y descarte de ruido.",
    "Paso 4 - Analizar con Preguntas Clave: Segmentar, formular hipótesis falsables y descubrir patrones ocultos.",
    "Paso 5 - Decisiones Basadas en Datos: Traducir conclusiones estadísticas en acciones ejecutivas concretas.",
    "Paso 6 - Medir y Ajustar: Comparar resultados reales vs esperados y calibrar el pipeline iterativamente."
  ],
  "checklist": [
    "¿Está explícitamente definida la decisión de negocio que depende de este análisis?",
    "¿Se verificó que los datos no tengan sesgo de selección o captura temporal incompleta?",
    "¿Se redactó un diccionario de variables para homologar términos entre áreas técnicas y de negocio?",
    "¿Se documentaron todas las transformaciones aplicadas durante la fase de limpieza?"
  ],
  "codeBlock": "# Workflow del Analista en Python\n1. Planteamiento: ¿Qué cohorte de clientes tiene menor retención?\n2. Extracción: df = pd.read_sql(\"SELECT * FROM fact_ventas\", db_conn)\n3. Limpieza: df.drop_duplicates(subset=['cliente_id'], inplace=True)\n4. Exploración: df.groupby('segmento')['ltv'].describe()\n5. Decisión: Reasignar presupuesto hacia canales de mayor LTV\n6. Medición: Monitorear CAC y Churn Rate a 30, 60 y 90 días",
  "pageSummaries": {
    "1": {
      "title": "Infografía: Los 6 Pasos del Análisis",
      "text": "Diagrama de flujo: 1. Definir Objetivos ➔ 2. Recopilación ➔ 3. Organizar y Limpiar ➔ 4. Analizar con Preguntas Clave ➔ 5. Tomar Decisiones ➔ 6. Medir y Ajustar."
    },
    "2": {
      "title": "Fases 1 a 3: Del Problema a los Datos Limpios",
      "text": "Establecimiento de preguntas guía, verificación de fuentes y saneamiento de inconsistencias. La base indispensable antes de calcular métricas."
    },
    "3": {
      "title": "Fases 4 a 6: De los Insights al Impacto Empresarial",
      "text": "Contraste de hipótesis, visualización ejecutiva y monitoreo post-implementación para validar el ROI del análisis."
    }
  }
},
  {
  "id": "ref-quality-framework",
  "type": "image",
  "category": "reference",
  "tag": "GOBERNANZA & CALIDAD • DATA QUALITY ASSURANCE",
  "title": "Los 6 Requisitos Críticos que Exige el Análisis de Datos (Data Quality)",
  "subtitle": "Precisión, Completitud, Coherencia, Actualidad/Puntualidad, Unicidad y Validez",
  "description": "Marco de aseguramiento de calidad del dato. En analítica y Machine Learning rige el principio 'Garbage In, Garbage Out': un reporte o modelo entrenado con datos incompletos o inconsistentes inducirá a pérdidas financieras y decisiones erróneas.",
  "imageSrc": "assets/images/data_quality_framework.jpg",
  "totalPages": 3,
  "tools": [
    "Data Quality (DQ)",
    "Data Governance",
    "Auditoría de Datos",
    "Validación Estadística",
    "Integridad Referencial"
  ],
  "keyPoints": [
    "1. Precisión (Accuracy): Los datos reflejan con fidelidad matemática la realidad (sin errores de redondeo o tipográficos).",
    "2. Completitud (Completeness): No existen huecos críticos en atributos clave; el porcentaje de nulos está documentado y controlado.",
    "3. Coherencia (Consistency): La información coincide en todos los sistemas (ej. el total de inventario en almacén = registros en base de datos).",
    "4. Actualidad o Puntualidad (Timeliness): Los datos son vigentes y reflejan la ventana temporal pertinente para actuar.",
    "5. Unicidad (Uniqueness): Cada entidad de negocio (usuario, transacción, factura) está registrada una sola vez sin duplicados.",
    "6. Validez (Validity): Los registros se ajustan a tipos de datos, formatos esperados y rangos lógicos permitidos."
  ],
  "checklist": [
    "Auditar nulos: df.isnull().mean() < 0.05 en columnas predictivas.",
    "Comprobar unicidad: len(df) == df['id'].nunique().",
    "Validar coherencia temporal: Fecha_Fin >= Fecha_Inicio.",
    "Verificar tipos y rangos: df.describe() para detectar mínimos negativos o máximos anómalos."
  ],
  "codeBlock": "# Reglas de Validación de Calidad de Datos (Data Quality Checks)\nassert df['precio'].min() >= 0, \"Error: Existen precios negativos\"\nassert df['email'].str.match(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$').all(), \"Emails invalidos\"\nassert df['fecha_transaccion'].max() <= pd.Timestamp.now(), \"Fechas futuras detectadas\"\nprint(\"OK: 6 pilares de calidad verificados\")",
  "pageSummaries": {
    "1": {
      "title": "Infografía: Pilares de Calidad del Dato",
      "text": "Las 6 dimensiones universales de la gobernanza: Precisión, Completitud, Coherencia, Actualidad, Unicidad y Validez."
    },
    "2": {
      "title": "Criterios de Auditoría e Imputación",
      "text": "Reglas de descarte de registros corruptos, umbrales de imputación y normalización de esquemas relacionales."
    },
    "3": {
      "title": "Impacto en Modelos Predictivos y BI",
      "text": "Cómo la consistencia previene el data leakage y garantiza que los dashboards gerenciales sean 100% confiables."
    }
  }
},
  {
  "id": "ref-pandas-guide",
  "type": "image",
  "category": "reference",
  "tag": "GUÍA TÉCNICA • CHEATSHEET OFICIAL DE PANDAS",
  "title": "Pandas para Análisis de Datos: Guía Completa de Comandos & Pipeline",
  "subtitle": "Los 10 Bloques Cardinales: Ingesta, Profiling, Selección, Limpieza, Transformación, Merge y Fechas",
  "description": "Compendio de referencia rápida con los 10 bloques de sintaxis más utilizados en ciencia de datos con Pandas. Enfocado en código limpio, vectorización y eliminación de bucles ineficientes.",
  "imageSrc": "assets/images/pandas_cheat_sheet_guide.jpg",
  "totalPages": 3,
  "tools": [
    "Pandas",
    "Python",
    "NumPy",
    "Data Wrangling",
    "Vectorización",
    "DataFrames"
  ],
  "keyPoints": [
    "1. Creación: pd.read_csv(), read_excel(), read_sql() y DataFrames desde diccionarios.",
    "2. Exploración: df.head(), df.shape, df.info(), df.describe() y df.dtypes.",
    "3. Selección y Filtrado: Indexación explícita con .loc[] (etiquetas) e .iloc[] (enteros).",
    "4. Limpieza: isnull().sum(), dropna(), fillna(valor), drop_duplicates() y astype().",
    "5. Transformación: Vectorización directa, .apply(lambda), .assign() y .sort_values().",
    "6. Agrupación: df.groupby('col').agg({'a':'sum', 'b':'mean'}) y pivot_table().",
    "7. Combinación: pd.merge(df1, df2, on='key', how='left') y pd.concat().",
    "8. Cadenas: Métodos .str.lower(), .str.strip(), .str.contains() y expresiones regulares.",
    "9. Fechas: pd.to_datetime(), extracción .dt.month, .dt.day_name() y resample('M').",
    "10. Exportación: to_csv(index=False), to_excel(), y gráficos directos con .plot()."
  ],
  "checklist": [
    "Usar inplace=False o reasignar df = df.copy() para prevenir SettingWithCopyWarning.",
    "Convertir columnas de baja cardinalidad a tipo 'category' para ahorrar hasta 80% de memoria.",
    "Reemplazar bucles for por operaciones vectorizadas en NumPy / Pandas.",
    "Ejecutar reset_index() tras agregaciones de groupby para mantener columnas planas."
  ],
  "codeBlock": "# Pipeline Tipico de Limpieza y Agrupacion en Pandas\ndf = pd.read_csv(\"ventas_2026.csv\")\ndf['fecha'] = pd.to_datetime(df['fecha'])\ndf['ventas_netas'] = df['precio'] * df['cantidad']\nkpi_resumen = (df.query(\"estado == 'COMPLETADA'\")\n                 .groupby([df['fecha'].dt.to_period('M'), 'categoria'])\n                 .agg(total_ventas=('ventas_netas', 'sum'),\n                      clientes_unicos=('cliente_id', 'nunique'))\n                 .reset_index())",
  "pageSummaries": {
    "1": {
      "title": "Cheatsheet Visual de Pandas (10 Bloques)",
      "text": "Infografía completa con la sintaxis de DataFrames, exploración, limpieza, transformación, agrupaciones y series temporales."
    },
    "2": {
      "title": "Reglas de Oro: Vectorización y Memoria",
      "text": "Optimización de tipos de datos con astype(), prevención de copias accidentales y vectorización con .str y .dt."
    },
    "3": {
      "title": "Combinación y Exportación Segura",
      "text": "Buenas prácticas para merges relacionales (inner, left, outer), pivot tables y guardado en CSV/Parquet."
    }
  }
},
  {
  "id": "ref-analytics-concept",
  "type": "image",
  "category": "reference",
  "tag": "BUSINESS INTELLIGENCE • DATA VISUALIZATION",
  "title": "Visualización Analítica & Data Storytelling Ejecutivo",
  "subtitle": "Cómo Estructurar Dashboards, Gráficos de Tendencias y Métricas Clave de Decisión",
  "description": "Guía de buenas prácticas para la selección de gráficos e interfaces analíticas. El valor de los datos radica en su interpretabilidad: conectar métricas operativas con paneles visuales limpios, legibles y orientados a la acción ejecutiva.",
  "imageSrc": "assets/images/data_analytics_concept.jpg",
  "totalPages": 3,
  "tools": [
    "Data Storytelling",
    "Dashboards",
    "Business Intelligence",
    "Matplotlib",
    "Seaborn",
    "Data-Ink Ratio"
  ],
  "keyPoints": [
    "Regla de los 5 Segundos: El lector debe comprender el mensaje principal del gráfico en menos de 5 segundos.",
    "Elección de Visualización: Barras para ranking, líneas para tiempo, scatter para correlación y boxplot para variabilidad.",
    "Data-Ink Ratio (Edward Tufte): Eliminar fondos saturados, rejillas pesadas y efectos 3D que añaden ruido cognitivo.",
    "Contextualización de Métricas: Todo número debe compararse contra un objetivo, periodo anterior o benchmark.",
    "Uso Semántico del Color: Utilizar paletas accesibles (WCAG AA), reservando colores brillantes solo para anomalías o alertas."
  ],
  "checklist": [
    "¿El título del gráfico describe la conclusión principal en lugar de solo listar variables?",
    "¿Los ejes están etiquetados con unidades claras ($, %, días, usuarios)?",
    "¿Se ordenaron las barras por magnitud para facilitar la lectura comparativa?",
    "¿Se evitó el uso de gráficos de pastel (pie charts) con más de 3 segmentos?"
  ],
  "codeBlock": "# Buenas Practicas de Visualizacion con Seaborn y Matplotlib\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\nplt.figure(figsize=(10, 5))\nsns.barplot(data=df_top, x='ingresos', y='producto', palette='mako')\nplt.title(\"Top 5 Productos por Generacion de Ingresos (Q3 2026)\", fontsize=14, weight='bold')\nplt.xlabel(\"Ingresos Totales (MXN)\", fontsize=11)\nplt.ylabel(\"\")\nplt.grid(axis='x', linestyle='--', alpha=0.3)\nplt.tight_layout()",
  "pageSummaries": {
    "1": {
      "title": "Ilustración Conceptual: El Analista y sus Paneles",
      "text": "Representación del analista monitoreando tendencias en líneas, barras categóricas e indicadores ejecutivos."
    },
    "2": {
      "title": "Guía de Selección de Gráficos",
      "text": "Criterios para elegir entre gráficos de barras, dispersión, líneas temporales y mapas de calor sin saturar la vista."
    },
    "3": {
      "title": "Data Storytelling y Entrega de Valor",
      "text": "Estructuración de reportes ejecutivos: Contexto ➔ Conflicto/Hallazgo ➔ Solución y llamada a la acción basada en datos."
    }
  }
},

  {
    id: "ecbd-pg5",
    category: "ml",
    tag: "PRÁCTICA GUIADA 5 • MACHINE LEARNING",
    title: "Algoritmos de Clasificación Multiclase y Optimización con GridSearchCV",
    subtitle: "Clasificación con KNN, SVM, Regresión Logística, Árboles de Decisión y Naive Bayes",
    description: "Implementación integral de modelos supervisados en Python con Scikit-Learn sobre el dataset Iris. División balanceada Train/Test, ajuste fino de hiperparámetros con GridSearchCV, matrices de confusión y análisis comparativo de precisión.",
    fileName: "ECBD_PG5_MIPP.pdf",
    fileId: "1jkSJezHVPdAPsrT5iCVjZzWKXcl8oILJ",
    totalPages: 11,
    tools: ["Python", "Scikit-Learn", "GridSearchCV", "KNN", "SVM", "Decision Trees", "Pandas"],
    pageSummaries: {
      1: { title: "Portada y Presentación", text: "Datos del proyecto, autoría institucional y alcance de la práctica de clasificación." },
      2: { title: "Índice de Contenidos", text: "Estructura del pipeline de Machine Learning y flujo metodológico." },
      3: { title: "Introducción a Modelos Supervisados", text: "Fundamentos de algoritmos de clasificación, particionamiento y ajuste de parámetros." },
      4: { title: "Importación de Librerías y Dataset", text: "Carga del dataset con Pandas e inicialización de KNeighborsClassifier." },
      5: { title: "Exploración y Matriz de Características", text: "Separación de variables predictoras (X) y vector objetivo (y) para clasificación multiclase." },
      6: { title: "Entrenamiento de KNN y SVM", text: "Ajuste de hiperparámetros en Support Vector Machines con kernel RBF y lineal." },
      7: { title: "Regresión Logística y Árbol de Decisión", text: "Construcción de árboles con criterio Gini y entropía, y regularización L2." },
      8: { title: "Optimización con GridSearchCV", text: "Búsqueda exhaustiva de combinaciones óptimas de hiperparámetros con validación cruzada K-Fold." },
      9: { title: "Matriz de Confusión y Reporte de Clasificación", text: "Evaluación de Precision, Recall, F1-Score y exactitud global." },
      10: { title: "Curvas de Aprendizaje y Comparativa", text: "Comparación visual del rendimiento predictivo entre los 5 algoritmos evaluados." },
      11: { title: "Conclusiones Técnicas", text: "Interpretación de resultados, selección del modelo óptimo y consideraciones para producción." }
    }
  },
  {
    id: "ecbd-pg4",
    category: "ml",
    tag: "PRÁCTICA GUIADA 4 • MODELADO PREDICTIVO",
    title: "Algoritmos de Regresión Lineal y Múltiple en Python",
    subtitle: "Predicción de Precios con One-Hot Encoding y Métricas de Error",
    description: "Flujo de trabajo para modelado predictivo continuo. Limpieza de datos en Excel, transformación de atributos categóricos mediante One-Hot Encoding, división en conjuntos de entrenamiento/prueba y validación del ajuste mediante métricas estadísticas (R², MSE, MAE).",
    fileName: "ECBD_PG4_MIPP.pdf",
    fileId: "1ZVfnlhD2B-IjvNkRh47Y5JTljDrbclCo",
    totalPages: 11,
    tools: ["Python", "Linear Regression", "One-Hot Encoding", "Pandas", "Matplotlib", "Scikit-Learn"],
    pageSummaries: {
      1: { title: "Portada Técnica", text: "Práctica guiada de modelado predictivo continuo y regresión." },
      2: { title: "Índice de Actividades", text: "Etapas de preprocesamiento, codificación de variables y evaluación." },
      3: { title: "Introducción a la Regresión Lineal", text: "Objetivos de estimación continua, formulación matemática y supuestos del modelo." },
      4: { title: "Carga de Datos e Inspección Inicial", text: "Lectura del archivo fuente con Pandas e inspección de primeras observaciones." },
      5: { title: "Preprocesamiento y One-Hot Encoding", text: "Dummies de variables categóricas para habilitar el modelado matemático." },
      6: { title: "Partición Train/Test Split", text: "Separación del conjunto en 80% entrenamiento y 20% prueba con semilla reproducible." },
      7: { title: "Ajuste del Modelo de Regresión", text: "Cálculo de coeficientes de regresión e intercepto con mínimos cuadrados ordinarios." },
      8: { title: "Evaluación de Métricas (MSE & R²)", text: "Diagnóstico de varianza explicada y residuales de predicción." },
      9: { title: "Gráfica de Valores Reales vs Predichos", text: "Visualización de dispersión comparativa y recta de ajuste ideal." },
      10: { title: "Análisis de Residuos", text: "Comprobación de normalidad y homocedasticidad de los errores." },
      11: { title: "Conclusión y Validación", text: "Conclusiones del modelo y su viabilidad para estimaciones comerciales." }
    }
  },
  {
    id: "ecbd-pa4",
    category: "ml",
    tag: "PRÁCTICA AUTÓNOMA 4 • MACHINE LEARNING APLICADO",
    title: "Clasificación Predictiva de Ingresos con Support Vector Machines (SVM)",
    subtitle: "Predicción de Umbrales Socioeconómicos y Evaluación de Rendimiento",
    description: "Desarrollo de un modelo predictivo sobre variables demográficas para determinar ingresos individuales superiores a 50K anuales. Aplicación de SVM con normalización de atributos y análisis de frontera de decisión.",
    fileName: "ECBD_PA4_MIPP.pdf",
    fileId: "1IodvQAJznvpfmhrQPAc1pVFWfWpbdAXA",
    totalPages: 9,
    tools: ["Python", "SVM (Support Vector Machines)", "Normalización", "Matriz Confusión", "Pandas"],
    pageSummaries: {
      1: { title: "Carátula de Entrega", text: "Práctica Autónoma de clasificación binaria mediante Support Vector Machines." },
      2: { title: "Estructura del Proyecto", text: "Fases metodológicas desde ingesta de datos hasta evaluación predictiva." },
      3: { title: "Introducción y Planteamiento del Problema", text: "Importancia de la clasificación socioeconómica en políticas públicas y negocio." },
      4: { title: "Ingesta y Diagnóstico de Datos", text: "Exploración de variables predictoras: edad, educación, ocupación y horas laborales." },
      5: { title: "Escalado de Variables Numéricas", text: "Estandarización (StandardScaler) requerida por la sensibilidad geométrica de SVM." },
      6: { title: "Entrenamiento del Clasificador SVM", text: "Ajuste de hiperparámetros C y Gamma con diferentes funciones de núcleo (kernel)." },
      7: { title: "Matriz de Confusión y Métricas", text: "Evaluación de falsos positivos y falsos negativos en predicción de ingresos." },
      8: { title: "Discusión de Resultados", text: "Análisis del trade-off entre sesgo y varianza obtenido por el clasificador." },
      9: { title: "Conclusiones y Trabajo Futuro", text: "Resumen del impacto predictivo y recomendaciones para despliegue." }
    }
  },
  {
    id: "ecbd-af3",
    category: "ml",
    tag: "ACTIVIDAD FORMATIVA 3 • ESTUDIO DE ALGORITMOS",
    title: "Compendio de Algoritmos de Aprendizaje Supervisado",
    subtitle: "Investigación Comparativa: Decision Trees, SVM, Naive Bayes, KNN, SVR y Redes Convolucionales (CNN)",
    description: "Análisis exhaustivo de los fundamentos matemáticos, casos de uso industrial y ventajas operativas de las principales arquitecturas de aprendizaje supervisado, respaldado por literatura científica contemporánea.",
    fileName: "ECBD_AF3_MIPP.pdf",
    fileId: "1e2-5RIvPZwGl1G13hWS9QkAnWzRfFycc",
    totalPages: 12,
    tools: ["Machine Learning", "Deep Learning", "CNN", "SVM", "Random Forest", "Naive Bayes", "KNN"],
    pageSummaries: {
      1: { title: "Portada de Investigación", text: "Actividad formativa de algoritmos supervisados de Machine Learning." },
      2: { title: "Índice Temático", text: "Desglose por familia de algoritmos: lineales, basados en árboles, probabilísticos y neuronales." },
      3: { title: "Introducción al Aprendizaje Supervisado", text: "Conceptos de entrenamiento con etiquetas, generalización y función de coste." },
      4: { title: "Árboles de Decisión (Decision Tree)", text: "Mecanismo de partición, ganancia de información y control de sobreajuste." },
      5: { title: "Support Vector Machines (SVM & SVR)", text: "Maximización del margen, vectores de soporte y truco del kernel." },
      6: { title: "Clasificador Naive Bayes", text: "Teorema de Bayes, supuesto de independencia condicional y aplicación en NLP." },
      7: { title: "K-Nearest Neighbors (KNN)", text: "Algoritmo basado en instancias, métricas de distancia euclidiana y Manhattan." },
      8: { title: "Regresiones Lineal y Logística", text: "Modelos fundamentales para estimación continua y probabilidades sigmoideas." },
      9: { title: "Redes Neuronales Artificiales (ANN)", text: "Perceptrón multicapa, funciones de activación (ReLU) y backpropagation." },
      10: { title: "Redes Convolucionales (CNN)", text: "Filtros convolucionales, capas de pooling y visión por computadora." },
      11: { title: "Conclusiones del Estudio", text: "Criterios para la selección del algoritmo adecuado según la naturaleza del dataset." },
      12: { title: "Bibliografía Científica", text: "Referencias académicas y libros de referencia en Inteligencia Artificial." }
    }
  },
  {
    id: "ecbd-pa2",
    category: "eda",
    tag: "PRÁCTICA AUTÓNOMA 2 • DATA WRANGLING",
    title: "Limpieza y Depuración de Datos Multidimensionales en Python",
    subtitle: "Tratamiento de Inconsistencias, Duplicados, Outliers y Valores Faltantes con Pandas",
    description: "Pipeline exhaustivo de saneamiento de datos aplicado a registros de ventas globales, clientes y factores socioeconómicos. Filtrado estadístico con rango intercuartílico (IQR), resolución de tipos de datos erróneos y preparación para analítica.",
    fileName: "ECBD_PA2_MIPP.pdf",
    fileId: "1UHwUMQsWGdARt1U7DGG9yfeflNbr9ymq",
    totalPages: 10,
    tools: ["Python", "Pandas", "Data Cleaning", "Tratamiento Outliers", "Estadística Descriptiva"],
    pageSummaries: {
      1: { title: "Carátula", text: "Proyecto autónomo de saneamiento masivo de datos." },
      2: { title: "Índice de Operaciones", text: "Secuencia de depuración desde auditoría inicial hasta exportación limpia." },
      3: { title: "Introducción al Data Wrangling", text: "El rol crucial de la calidad del dato antes de cualquier fase de modelado." },
      4: { title: "Auditoría de Integridad y Detección de Nulos", text: "Uso de isna().sum() y profiling para identificar columnas comprometidas." },
      5: { title: "Tratamiento de Registros Duplicados", text: "Criterios de desduplicación con drop_duplicates() conservando primera ocurrencia." },
      6: { title: "Conversión de Tipos de Datos (Casting)", text: "Transformación de cadenas numéricas mal interpretadas a enteros y punto flotante." },
      7: { title: "Detección de Outliers con Método IQR", text: "Cálculo de cuartiles Q1 y Q3 y filtrado de valores atípicos severos." },
      8: { title: "Estandarización de Texto y Fechas", text: "Normalización de cadenas de texto y parseo de columnas datetime." },
      9: { title: "Generación del Dataset Depurado", text: "Validación de coherencia post-limpieza y comparación de distribuciones." },
      10: { title: "Conclusiones y Buenas Prácticas", text: "Buenas prácticas aprendidas para reproducibilidad de pipelines de limpieza." }
    }
  },
  {
    id: "ecbd-pa1",
    category: "eda",
    tag: "PRÁCTICA 1 • ENTORNO & VISUALIZACIÓN",
    title: "Entorno Analítico y Visualización de Datos con Python",
    subtitle: "Uso de Pandas, NumPy, Matplotlib y Gráficas Estadísticas Comparativas",
    description: "Primeros pasos estructurados en el entorno Anaconda-Jupyter para la ciencia de datos. Importación de datasets, operaciones matriciales con NumPy, tablas dinámicas con Pandas y visualizaciones analíticas con Matplotlib.",
    fileName: "ECBD_PA1_MiPP.pdf",
    fileId: "1Uy9BwsxZANUEyCnarqVlO_QSkw0JSyV0",
    totalPages: 11,
    tools: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook", "Scatter Plots"],
    pageSummaries: {
      1: { title: "Portada", text: "Entorno de desarrollo y primeras herramientas analíticas en Python." },
      2: { title: "Índice de Actividades", text: "Instalación de librerías, manipulación de tablas y visualizaciones." },
      3: { title: "Introducción a Python para Datos", text: "Ventajas del ecosistema científico de Python frente a otras herramientas tradicionales." },
      4: { title: "Instalación y Verificación de Librerías", text: "Gestión de paquetes con pip y conda (NumPy, Pandas, Matplotlib, Keras)." },
      5: { title: "Estructuras de Datos y Operaciones con NumPy", text: "Arreglos multidimensionales y cálculo numérico vectorizado." },
      6: { title: "Importación de Datos con Pandas", text: "Lectura de archivos estructurados y visualización de DataFrames con head()." },
      7: { title: "Ordenamiento y Filtrado de Datasets", text: "Uso de sort_values(), filtros condicionales y consultas booleanas." },
      8: { title: "Gráfica de Dispersión (Scatter Plot)", text: "Construcción de gráficos con plt.scatter() para detectar relaciones entre variables." },
      9: { title: "Personalización de Títulos y Ejes", text: "Configuración de etiquetas, leyenda, paletas de colores y cuadrículas de lectura." },
      10: { title: "Gráficas Comparativas Múltiples", text: "Subplots y comparación visual directa de tendencias temporales y grupos." },
      11: { title: "Conclusiones", text: "Dominio inicial adquirido sobre el flujo fundamental de análisis de datos." }
    }
  },
  {
    id: "ecbd-pg2",
    category: "sql",
    tag: "PRÁCTICA GUIADA 2 • ETL FINANCIERO & SQL",
    title: "Pipeline ETL Financiero y Conectividad SQL",
    subtitle: "Procesamiento de Índices Bursátiles (SP500) y Persistencia en MySQL con SQLAlchemy",
    description: "Extracción automatizada de cotizaciones históricas del Standard & Poor's 500, cálculo de variaciones porcentuales diarias y construcción de conectores seguros entre Python y motores relacionales MySQL mediante PyMySQL y SQLAlchemy.",
    fileName: "ECBD_PG2_MIPP.pdf",
    fileId: "1klU8QM8O3CyMGsg5jxhSdYFUUXZdv2iU",
    totalPages: 11,
    tools: ["SQL", "MySQL", "SQLAlchemy", "PyMySQL", "Python", "ETL", "Series Financieras"],
    pageSummaries: {
      1: { title: "Carátula", text: "Pipeline de datos financieros e integración con bases de datos relacionales." },
      2: { title: "Índice", text: "Etapas de ingesta, cálculo de indicadores financieros y carga en BD." },
      3: { title: "Introducción a Pipelines ETL", text: "Importancia de la automatización en el procesamiento de datos del mercado financiero." },
      4: { title: "Carga del Histórico SP500", text: "Ingesta de precios de apertura, cierre, máximos, mínimos y volúmenes." },
      5: { title: "Cálculo de Variación Porcentual Diaria", text: "Ingeniería de variables para determinar el rendimiento diario del mercado." },
      6: { title: "Configuración del Motor SQLAlchemy", text: "Creación del string de conexión segura y pool de conexiones con MySQL." },
      7: { title: "Definición del Esquema Relacional", text: "Tipado de columnas en la base de datos destino con índices primarios." },
      8: { title: "Carga Masiva de Datos (to_sql)", text: "Ejecución de inserción en lotes (batch insert) optimizada con Pandas." },
      9: { title: "Consultas de Verificación en SQL", text: "Consultas SELECT con agregaciones para comprobar la integridad de la carga." },
      10: { title: "Optimización de Conexiones", text: "Buenas prácticas de cierre de cursor y transacciones atómicas." },
      11: { title: "Conclusiones", text: "Logro de un pipeline ETL funcional y escalable entre Python y bases de datos SQL." }
    }
  },
  {
    id: "ecbd-lab1",
    category: "sql",
    tag: "LABORATORIO 1 • ENTORNOS & CONECTIVIDAD",
    title: "Fundamentos de Entornos de Datos y Conexión Multi-Fuente",
    subtitle: "Configuración Científica, Conexión ODBC/SQL y Sintaxis Básica de Procesamiento",
    description: "Configuración inicial de entornos Jupyter/Anaconda y establecimiento de canales de lectura multi-fuente: bases de datos relacionales (MySQL, ODBC), archivos planos estructurados y comandos fundamentales de manipulación de datos.",
    fileName: "ECBD_LAB1_MIPP.pdf",
    fileId: "15gcapPTJmpcP6FYHsG0Tc-qYLtrZNW0O",
    totalPages: 12,
    tools: ["ODBC", "SQLAlchemy", "pyodbc", "Jupyter", "Python", "Data Profiling"],
    pageSummaries: {
      1: { title: "Portada de Laboratorio", text: "Configuración inicial de entornos de trabajo y conectividad." },
      2: { title: "Índice de Prácticas", text: "Configuración de Anaconda, Jupyter y conexiones a múltiples orígenes." },
      3: { title: "Introducción", text: "Relevancia del correcto setup de herramientas para el ciclo de vida del dato." },
      4: { title: "Puesta a Punto de Jupyter Notebook", text: "Creación de kernels, atajos de teclado y administración de carpetas." },
      5: { title: "Conexión a Bases de Datos mediante ODBC", text: "Uso de controladores del sistema y pyodbc para extracción de tablas." },
      6: { title: "Manejo de Errores en Conexión", text: "Captura de excepciones en autenticación y timeout de servidores." },
      7: { title: "Profiling Rápido con df.info()", text: "Diagnóstico de memoria, tipos de datos y recuento de registros." },
      8: { title: "Manipulación de Entradas y Salidas", text: "Estructuras de control para procesamiento secuencial de datos." },
      9: { title: "Formateo y Limpieza de Variables", text: "Manipulación de cadenas y conversión de formatos numéricos." },
      10: { title: "Exportación a Archivos Intermedios", text: "Guardado en CSV y formatos binarios para consumo en etapas posteriores." },
      11: { title: "Evaluación de Resultados", text: "Validación de la conectividad y rendimiento del entorno." },
      12: { title: "Conclusiones", text: "Consolidación de las bases de infraestructura técnica para el resto del curso." }
    }
  },
  {
    id: "ecbd-af2",
    category: "methodology",
    tag: "ACTIVIDAD FORMATIVA 2 • METODOLOGÍA & BIG DATA",
    title: "Metodologías del Ciclo de Vida de la Ciencia de Datos",
    subtitle: "Comparativa Teórica: Cielen et al. (Introducing Data Science) vs Maldonado (Analytics y Big Data)",
    description: "Estudio metodológico profundo de las etapas estándar para la extracción de conocimiento: desde la adquisición y preparación, pasando por la exploración y modelado (clustering y algoritmos no supervisados), hasta la comunicación ejecutiva de resultados.",
    fileName: "ECBD_AF2_MIPP.pdf",
    fileId: "1CX_kYnrWI_pZfMXV68UrwCpNQ3QPxC5O",
    totalPages: 10,
    tools: ["Metodología CRISP-DM", "Clustering", "Big Data", "Data Lifecycle", "Data Storytelling"],
    pageSummaries: {
      1: { title: "Carátula", text: "Estudio de metodologías en ciencia de datos y minería de datos." },
      2: { title: "Índice", text: "Comparación entre marcos metodológicos de Cielen et al. y Maldonado." },
      3: { title: "Introducción a la Ciencia de Datos", text: "Intersección entre estadística, programación y visión estratégica de negocio." },
      4: { title: "El Proceso según Cielen et al. (2016)", text: "Las 6 etapas clave: Adquisición, Preparación, Exploración, Modelado, Interpretación y Despliegue." },
      5: { title: "Técnicas por Etapa del Proceso", text: "Herramientas recomendadas para cada fase del ciclo de vida del dato." },
      6: { title: "Modelos No Supervisados: Clustering", text: "Agrupamiento de observaciones similares para segmentación de clientes y detección de anomalías." },
      7: { title: "Marco Metodológico de Maldonado (2022)", text: "Enfoque centrado en Big Data, analítica predictiva y arquitecturas modernas." },
      8: { title: "Tabla Comparativa de Enfoques", text: "Diferencias clave entre enfoques tradicionales y analítica en streaming." },
      9: { title: "Data Storytelling y Comunicación", text: "Cómo traducir hallazgos técnicos en recomendaciones de valor para stakeholders." },
      10: { title: "Conclusiones y Bibliografía", text: "Síntesis del marco metodológico adoptado a lo largo del portafolio." }
    }
  }
];

// Estado de slots de los carruseles (3 por documento)
const carouselsState = {};

// Cache de documentos PDF cargados por PDF.js
const pdfDocCache = {};

// Control del motor de rotación automática
const ROTATION_INTERVAL_MS = 30000; // 30 segundos
let isPaused = false;
let rotationTimerStart = Date.now();
let activeFilter = 'all';

// Modal state
let currentModalDoc = null;
let currentModalPage = 1;
let currentZoomPercent = 125; // Zoom inicial cómodo para lectura legible con scroll

// Obtener página aleatoria sin repetir la actual
function getRandomPageNumber(totalPages, current = -1) {
  if (totalPages <= 1) return 1;
  let p;
  let attempts = 0;
  do {
    p = Math.floor(Math.random() * totalPages) + 1;
    attempts++;
  } while (p === current && attempts < 10);
  return p;
}

// Carga asíncrona de PDF mediante PDF.js
async function loadPdfDocument(fileName) {
  if (pdfDocCache[fileName]) return pdfDocCache[fileName];
  if (!window.pdfjsLib) return null;

  try {
    const loadingTask = pdfjsLib.getDocument(`docs/${fileName}`);
    const pdfDoc = await loadingTask.promise;
    pdfDocCache[fileName] = pdfDoc;
    return pdfDoc;
  } catch (err) {
    // Si corre bajo file:// sin servidor local o CORS estricto, usamos el renderizador fallback
    console.warn(`PDF.js info for ${fileName}:`, err.message);
    return null;
  }
}

// Renderizar página del PDF en un elemento canvas
async function renderPageToCanvas(pdfDoc, pageNum, canvasElement, targetWidth = 450) {
  if (!pdfDoc || !canvasElement) return false;

  try {
    const page = await pdfDoc.getPage(pageNum);
    const unscaledViewport = page.getViewport({ scale: 1 });
    const scale = targetWidth / unscaledViewport.width;
    const viewport = page.getViewport({ scale });

    const context = canvasElement.getContext('2d');
    canvasElement.width = viewport.width;
    canvasElement.height = viewport.height;

    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };

    await page.render(renderContext).promise;
    return true;
  } catch (err) {
    console.error('Error renderPageToCanvas:', err);
    return false;
  }
}

// Generar HTML de la tarjeta fallback si el canvas está cargando o en preview rápida
function generateSlideCardHtml(doc, pageNum) {
  const summary = (doc.pageSummaries && doc.pageSummaries[pageNum]) || {
    title: `Página Técnica #${pageNum}`,
    text: `Página ${pageNum} de ${doc.totalPages} del documento técnico original "${doc.title}".`
  };

  return `
    <div class="fallback-slide">
      <span class="fallback-badge">EVIDENCIA TÉCNICA • PÁG ${pageNum} / ${doc.totalPages}</span>
      <h4 class="fallback-title">${summary.title}</h4>
      <p class="fallback-desc">${summary.text}</p>
      <div class="fallback-hint">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
        Click para ampliar página
      </div>
    </div>
  `;
}

// Actualizar un slot específico de carrusel
async function updateCarouselSlot(docId, slotIdx, newPage) {
  const doc = documentsData.find(d => d.id === docId);
  if (!doc) return;

  carouselsState[docId][slotIdx] = newPage;

  const chip = document.getElementById(`chip-${docId}-${slotIdx}`);
  const viewport = document.getElementById(`viewport-${docId}-${slotIdx}`);

  if (chip) chip.innerText = `Pág. ${newPage} de ${doc.totalPages}`;
  if (!viewport) return;

  // Intentar renderizar con PDF.js si está disponible
  viewport.innerHTML = `<div class="loading-spinner"></div>`;

  const pdfDoc = await loadPdfDocument(doc.fileName);
  if (pdfDoc) {
    const canvas = document.createElement('canvas');
    const success = await renderPageToCanvas(pdfDoc, newPage, canvas, 420);
    if (success) {
      viewport.innerHTML = '';
      const container = document.createElement('div');
      container.className = 'pdf-canvas-container';
      container.appendChild(canvas);
      viewport.appendChild(container);
      return;
    }
  }

  // Fallback con tarjeta enriquecida
  viewport.innerHTML = generateSlideCardHtml(doc, newPage);
}

// Navegación manual por slot (Botones ◀ / ▶)
function stepSlotPage(docId, slotIdx, delta) {
  const doc = documentsData.find(d => d.id === docId);
  if (!doc) return;

  let current = carouselsState[docId][slotIdx];
  let next = current + delta;
  if (next < 1) next = doc.totalPages;
  if (next > doc.totalPages) next = 1;

  updateCarouselSlot(docId, slotIdx, next);
}

// Rotar todos los slots aleatoriamente
function triggerRandomRotation() {
  documentsData.forEach(doc => {
    // Si la sección no está visible por filtro, omitir
    const section = document.getElementById(`section-${doc.id}`);
    if (section && section.style.display === 'none') return;

    [0, 1, 2].forEach(slotIdx => {
      const current = carouselsState[doc.id][slotIdx];
      const newPage = getRandomPageNumber(doc.totalPages, current);
      updateCarouselSlot(doc.id, slotIdx, newPage);
    });
  });
}

// Renderizado inicial del DOM
function buildInterface() {
  const container = document.getElementById("documents-root");
  container.innerHTML = "";

  documentsData.forEach((doc, docIdx) => {
    // Inicializar los 3 carruseles con páginas distintas
    const p1 = 1;
    const p2 = Math.min(Math.floor(doc.totalPages / 2), doc.totalPages);
    const p3 = doc.totalPages;
    carouselsState[doc.id] = [p1, p2, p3];

    const directDriveUrl = `https://drive.google.com/file/d/${doc.fileId}/view`;

    const section = document.createElement("section");
    section.className = "doc-section";
    section.id = `section-${doc.id}`;
    section.dataset.category = doc.category;

    section.innerHTML = `
      <div class="doc-header-row">
        <div class="doc-info-block">
          <span class="doc-category-tag">${doc.tag}</span>
          <h2 class="doc-subtitle-text">${doc.title}</h2>
          <p class="doc-description-text">${doc.description}</p>
          <div class="doc-meta-tags">
            ${doc.tools.map(t => `<span class="meta-tag">${t}</span>`).join("")}
          </div>
        </div>

        <div class="doc-actions-block">
          <a href="${directDriveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-drive-action" title="Abrir documento en Google Drive">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
            Abrir Documento en Google Drive
          </a>
        </div>
      </div>

      <!-- 3 Carruseles en Paralelo -->
      <div class="carousels-3-grid">
        ${[0, 1, 2].map(slotIdx => `
          <div class="carousel-card" id="card-${doc.id}-${slotIdx}">
            <div class="carousel-card-top">
              <span class="slot-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
                Carrusel ${slotIdx + 1}
              </span>
              <span class="page-chip-indicator" id="chip-${doc.id}-${slotIdx}">Pág. ${carouselsState[doc.id][slotIdx]} de ${doc.totalPages}</span>
            </div>

            <div class="carousel-viewport" id="viewport-${doc.id}-${slotIdx}" onclick="openModal('${doc.id}', ${slotIdx})">
              ${generateSlideCardHtml(doc, carouselsState[doc.id][slotIdx])}
            </div>

            <div class="carousel-card-bottom">
              <button class="carousel-btn-arrow" onclick="stepSlotPage('${doc.id}', ${slotIdx}, -1)" title="Página anterior">◀ Ant.</button>
              <span class="rotation-tag-mini">⏱ 30s auto</span>
              <button class="carousel-btn-arrow" onclick="stepSlotPage('${doc.id}', ${slotIdx}, 1)" title="Página siguiente">Sig. ▶</button>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Separación elegante entre documentos como fue solicitado -->
      ${docIdx < documentsData.length - 1 ? `
        <div class="doc-separator">
          <div class="separator-line"></div>
          <div class="separator-diamond"></div>
          <div class="separator-line"></div>
        </div>
      ` : ''}
    `;

    container.appendChild(section);

    // Carga asíncrona de las páginas iniciales para renderizar canvas si es posible
    setTimeout(() => {
      [0, 1, 2].forEach(slotIdx => {
        updateCarouselSlot(doc.id, slotIdx, carouselsState[doc.id][slotIdx]);
      });
    }, docIdx * 250);
  });
}

// Motor de cuenta regresiva y sincronización cada 30 segundos
function startSyncLoop() {
  setInterval(() => {
    if (isPaused) return;

    const now = Date.now();
    const elapsed = (now - rotationTimerStart) % ROTATION_INTERVAL_MS;
    const remainingSecs = Math.max(0, Math.ceil((ROTATION_INTERVAL_MS - elapsed) / 1000));
    const percentage = (elapsed / ROTATION_INTERVAL_MS) * 100;

    const countdownEl = document.getElementById("timer-countdown");
    const progressFillEl = document.getElementById("global-progress-fill");

    if (countdownEl) countdownEl.innerText = `${remainingSecs}s`;
    if (progressFillEl) progressFillEl.style.width = `${percentage}%`;

    // Disparar rotación al cumplirse el ciclo de 30 segundos
    if (elapsed < 120 && now - rotationTimerStart >= ROTATION_INTERVAL_MS) {
      rotationTimerStart = now;
      triggerRandomRotation();
    }
  }, 100);
}

// Apertura y gestión del Modal de Lectura Ampliada
async function openModal(docId, slotIdx) {
  const doc = documentsData.find(d => d.id === docId);
  if (!doc) return;

  currentModalDoc = doc;
  currentModalPage = carouselsState[docId][slotIdx];

  const modal = document.getElementById("zoom-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalCategory = document.getElementById("modal-category");
  const modalDriveLink = document.getElementById("modal-drive-link");

  modalTitle.innerText = doc.title;
  modalCategory.innerText = doc.tag;
  if (doc.type === 'image') {
    modalDriveLink.href = doc.imageSrc;
    modalDriveLink.innerText = "Ver Imagen Original";
  } else {
    modalDriveLink.href = `https://drive.google.com/file/d/${doc.fileId}/view`;
    modalDriveLink.innerText = "Abrir PDF en Drive";
  }

  await updateModalView();
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function applyModalZoom() {
  const wrapper = document.getElementById("modal-canvas-wrapper");
  const label = document.getElementById("zoom-value-label");
  if (label) label.innerText = `${currentZoomPercent}%`;
  if (wrapper) {
    const calculatedWidth = Math.round(850 * (currentZoomPercent / 100));
    wrapper.style.maxWidth = `${calculatedWidth}px`;
  }
}

async function updateModalView() {
  if (!currentModalDoc) return;

  const pageInfo = document.getElementById("modal-page-info");
  const pageIndicator = document.getElementById("modal-page-indicator");
  const modalBody = document.getElementById("modal-body");

  // Regresar el scroll arriba para empezar a leer desde el inicio de la hoja
  if (modalBody) modalBody.scrollTop = 0;

  pageInfo.innerText = `Página ${currentModalPage} de ${currentModalDoc.totalPages} • Archivo: ${currentModalDoc.fileName}`;
  pageIndicator.innerText = `Pág. ${currentModalPage} / ${currentModalDoc.totalPages}`;

  modalBody.innerHTML = `<div class="loading-spinner"></div>`;

  const pdfDoc = await loadPdfDocument(currentModalDoc.fileName);
  if (pdfDoc) {
    const canvas = document.createElement('canvas');
    // Resolución HD (1450px) para máxima nitidez de texto, código y fórmulas
    const success = await renderPageToCanvas(pdfDoc, currentModalPage, canvas, 1450);
    if (success) {
      modalBody.innerHTML = '';
      const wrapper = document.createElement('div');
      wrapper.className = 'modal-canvas-wrapper';
      wrapper.id = 'modal-canvas-wrapper';
      wrapper.appendChild(canvas);
      modalBody.appendChild(wrapper);
      applyModalZoom();
      return;
    }
  }

  // Fallback Modal enriquecido si el archivo no está en local
  const summary = (currentModalDoc.pageSummaries && currentModalDoc.pageSummaries[currentModalPage]) || {
    title: `Página #${currentModalPage}`,
    text: `Página ${currentModalPage} de ${currentModalDoc.totalPages}.`
  };

  modalBody.innerHTML = `
    <div style="background: #0f172a; padding: 3rem 2.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.12); width: 100%; max-width: 750px; text-align: left; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
      <span class="badge" style="margin-bottom: 0.75rem;">ACTIVIDAD ORIGINAL ECBD</span>
      <h3 style="font-size: 1.5rem; color: #fff; margin-bottom: 0.75rem;">${summary.title}</h3>
      <p style="color: #cbd5e1; font-size: 1.05rem; line-height: 1.7; margin-bottom: 2rem;">${summary.text}</p>
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.25rem;">
        <span style="font-family: var(--font-mono); font-size: 0.85rem; color: #38bdf8;">Archivo: ${currentModalDoc.fileName}</span>
        <a href="https://drive.google.com/file/d/${currentModalDoc.fileId}/view" target="_blank" class="btn btn-primary" style="font-size: 0.85rem;">Abrir PDF en Drive</a>
      </div>
    </div>
  `;
}

function closeModal() {
  const modal = document.getElementById("zoom-modal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

// Configuración de eventos de UI
function setupEventListeners() {
  // Pausar / Reanudar
  const togglePauseBtn = document.getElementById("toggle-pause-btn");
  const pauseIcon = document.getElementById("pause-icon");

  togglePauseBtn?.addEventListener("click", () => {
    isPaused = !isPaused;
    if (pauseIcon) {
      pauseIcon.innerText = isPaused ? "▶ Reanudar" : "⏸ Pausar";
    }
    togglePauseBtn.style.borderColor = isPaused ? "var(--accent-amber)" : "var(--border-light)";
  });

  // Forzar rotación
  document.getElementById("force-rotate-btn")?.addEventListener("click", () => {
    rotationTimerStart = Date.now();
    triggerRandomRotation();
  });

  // Controles de Zoom en el Modal
  document.getElementById("zoom-in-btn")?.addEventListener("click", () => {
    if (currentZoomPercent < 220) {
      currentZoomPercent += 20;
      applyModalZoom();
    }
  });

  document.getElementById("zoom-out-btn")?.addEventListener("click", () => {
    if (currentZoomPercent > 70) {
      currentZoomPercent -= 20;
      applyModalZoom();
    }
  });

  document.getElementById("zoom-fit-btn")?.addEventListener("click", () => {
    currentZoomPercent = 135;
    applyModalZoom();
  });

  // Navegación dentro del modal
  document.getElementById("modal-prev-btn")?.addEventListener("click", () => {
    if (!currentModalDoc) return;
    currentModalPage = currentModalPage > 1 ? currentModalPage - 1 : currentModalDoc.totalPages;
    updateModalView();
  });

  document.getElementById("modal-next-btn")?.addEventListener("click", () => {
    if (!currentModalDoc) return;
    currentModalPage = currentModalPage < currentModalDoc.totalPages ? currentModalPage + 1 : 1;
    updateModalView();
  });

  // Cerrar modal con teclado Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Filtros por área
  document.querySelectorAll(".chip[data-filter]").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeFilter = chip.dataset.filter;

      document.querySelectorAll(".doc-section").forEach(sec => {
        if (activeFilter === "all" || sec.dataset.category === activeFilter) {
          sec.style.display = "block";
        } else {
          sec.style.display = "none";
        }
      });
    });
  });
}

// Inicialización de la aplicación
document.addEventListener("DOMContentLoaded", () => {
  buildInterface();
  setupEventListeners();
  startSyncLoop();
});
