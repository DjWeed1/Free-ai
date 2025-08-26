export interface LexiconEntry {
  id: number;
  term: string;
  definition: string;
  category: string;
  relatedTerms: string[];
  examples?: string[];
}

export const lexiconData: LexiconEntry[] = [
  {
    id: 1,
    term: "Artificial Intelligence (KI)",
    definition: "Die Simulation menschlicher Intelligenz in Maschinen, die programmiert sind, wie Menschen zu denken und zu lernen. KI umfasst verschiedene Technologien wie Machine Learning, Natural Language Processing und Computer Vision.",
    category: "Grundlagen",
    relatedTerms: ["Machine Learning", "Deep Learning", "Neural Network"],
    examples: ["ChatGPT", "Siri", "Autonome Fahrzeuge"]
  },
  {
    id: 2,
    term: "Machine Learning",
    definition: "Ein Teilbereich der KI, bei dem Algorithmen aus Daten lernen, ohne explizit für jede Aufgabe programmiert zu werden. Das System verbessert seine Leistung automatisch durch Erfahrung.",
    category: "Technologie",
    relatedTerms: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"],
    examples: ["Spam-Filter", "Empfehlungssysteme", "Bilderkennung"]
  },
  {
    id: 3,
    term: "Deep Learning",
    definition: "Eine Unterart des Machine Learning, die neuronale Netzwerke mit vielen Schichten (mindestens drei) verwendet, um komplexe Muster in großen Datenmengen zu erkennen.",
    category: "Technologie",
    relatedTerms: ["Neural Network", "CNN", "RNN"],
    examples: ["Gesichtserkennung", "Sprachsynthese", "Bildgenerierung"]
  },
  {
    id: 4,
    term: "Neural Network",
    definition: "Ein Computermodell, das von der Struktur und Funktion des menschlichen Gehirns inspiriert ist. Es besteht aus miteinander verbundenen Knoten (Neuronen), die Informationen verarbeiten.",
    category: "Architektur",
    relatedTerms: ["Perceptron", "Hidden Layer", "Activation Function"],
    examples: ["Feedforward Network", "Convolutional Network", "Recurrent Network"]
  },
  {
    id: 5,
    term: "Natural Language Processing (NLP)",
    definition: "Ein Bereich der KI, der sich darauf konzentriert, Computern die Fähigkeit zu geben, menschliche Sprache zu verstehen, zu interpretieren und zu generieren.",
    category: "Anwendung",
    relatedTerms: ["Text Mining", "Sentiment Analysis", "Language Model"],
    examples: ["Google Translate", "Chatbots", "Text-zu-Sprache"]
  },
  {
    id: 6,
    term: "Computer Vision",
    definition: "Ein Bereich der KI, der Maschinen die Fähigkeit verleiht, visuelle Informationen aus der realen Welt zu interpretieren und zu verstehen.",
    category: "Anwendung",
    relatedTerms: ["Image Recognition", "Object Detection", "OCR"],
    examples: ["Autonomous Vehicles", "Medical Imaging", "Surveillance Systems"]
  },
  {
    id: 7,
    term: "Large Language Model (LLM)",
    definition: "Große Sprachmodelle sind KI-Systeme, die auf riesigen Textdatensätzen trainiert wurden und natürliche Sprache verstehen und generieren können.",
    category: "Modelle",
    relatedTerms: ["GPT", "BERT", "Transformer"],
    examples: ["GPT-4", "Claude", "PaLM"]
  },
  {
    id: 8,
    term: "Prompt Engineering",
    definition: "Die Kunst und Wissenschaft, effektive Eingabeaufforderungen (Prompts) für KI-Modelle zu erstellen, um gewünschte und präzise Ausgaben zu erhalten.",
    category: "Technik",
    relatedTerms: ["Few-shot Learning", "Chain-of-Thought", "Prompt Tuning"],
    examples: ["Spezifische Anweisungen", "Kontext setzen", "Beispiele geben"]
  },
  {
    id: 9,
    term: "Generative AI",
    definition: "KI-Systeme, die neue Inhalte erstellen können, wie Text, Bilder, Audio oder Video, basierend auf Trainingsdaten und Benutzereingaben.",
    category: "Technologie",
    relatedTerms: ["GANs", "Diffusion Models", "VAE"],
    examples: ["DALL-E", "Midjourney", "ChatGPT"]
  },
  {
    id: 10,
    term: "Transformer",
    definition: "Eine neuronale Netzwerkarchitektur, die besonders effektiv für die Verarbeitung sequenzieller Daten ist und die Grundlage für moderne Sprachmodelle bildet.",
    category: "Architektur",
    relatedTerms: ["Attention Mechanism", "Self-Attention", "BERT"],
    examples: ["GPT", "BERT", "T5"]
  },
  {
    id: 11,
    term: "Fine-tuning",
    definition: "Der Prozess der Anpassung eines bereits trainierten Modells an eine spezifische Aufgabe oder Domain durch weiteres Training mit spezialisierten Daten.",
    category: "Training",
    relatedTerms: ["Transfer Learning", "Pre-training", "Domain Adaptation"],
    examples: ["ChatGPT für Medizin", "BERT für Sentiment Analysis"]
  },
  {
    id: 12,
    term: "Halluzination",
    definition: "Wenn ein KI-Modell falsche oder erfundene Informationen als Fakten präsentiert, obwohl sie nicht in den Trainingsdaten vorhanden waren.",
    category: "Probleme",
    relatedTerms: ["Model Confidence", "Factual Accuracy", "Verification"],
    examples: ["Falsche Zitate", "Erfundene Ereignisse", "Nicht existierende Quellen"]
  },
  {
    id: 13,
    term: "Bias",
    definition: "Systematische Verzerrungen in KI-Modellen, die zu unfairen oder diskriminierenden Entscheidungen führen können, oft aufgrund von Verzerrungen in den Trainingsdaten.",
    category: "Ethik",
    relatedTerms: ["Algorithmic Fairness", "Data Bias", "Demographic Parity"],
    examples: ["Geschlechterdiskriminierung", "Rassenbias", "Sozioökonomische Vorurteile"]
  },
  {
    id: 14,
    term: "Overfitting",
    definition: "Ein Problem beim Machine Learning, bei dem ein Modell zu spezifisch auf die Trainingsdaten angepasst ist und bei neuen, unbekannten Daten schlecht performt.",
    category: "Training",
    relatedTerms: ["Underfitting", "Generalization", "Regularization"],
    examples: ["Auswendiglernen statt Verstehen", "Schlechte Testleistung", "Komplexe Modelle"]
  },
  {
    id: 15,
    term: "Reinforcement Learning",
    definition: "Ein Machine Learning-Ansatz, bei dem ein Agent durch Interaktion mit einer Umgebung lernt, wobei er Belohnungen für gute und Bestrafungen für schlechte Aktionen erhält.",
    category: "Technologie",
    relatedTerms: ["Q-Learning", "Policy Gradient", "Actor-Critic"],
    examples: ["Spiele (AlphaGo)", "Robotik", "Autonome Navigation"]
  },
  {
    id: 16,
    term: "Supervised Learning",
    definition: "Ein Machine Learning-Ansatz, bei dem das Modell auf gelabelten Daten trainiert wird, d.h. Input-Output-Paaren, um Vorhersagen für neue Daten zu machen.",
    category: "Training",
    relatedTerms: ["Classification", "Regression", "Labeled Data"],
    examples: ["E-Mail-Spam-Erkennung", "Handschrifterkennung", "Preisvorhersage"]
  },
  {
    id: 17,
    term: "Unsupervised Learning",
    definition: "Ein Machine Learning-Ansatz, bei dem das Modell Muster und Strukturen in Daten ohne vorgegebene Labels oder Zielwerte entdeckt.",
    category: "Training",
    relatedTerms: ["Clustering", "Dimensionality Reduction", "Association Rules"],
    examples: ["Kundensegmentierung", "Anomalieerkennung", "Datenvisualisierung"]
  },
  {
    id: 18,
    term: "API (Application Programming Interface)",
    definition: "Eine Schnittstelle, die es verschiedenen Softwareanwendungen ermöglicht, miteinander zu kommunizieren und Daten auszutauschen. Im KI-Kontext oft zur Integration von KI-Services.",
    category: "Technik",
    relatedTerms: ["REST API", "SDK", "Web Services"],
    examples: ["OpenAI API", "Google Cloud AI APIs", "Azure Cognitive Services"]
  },
  {
    id: 19,
    term: "Training Data",
    definition: "Die Sammlung von Daten, die verwendet wird, um ein Machine Learning-Modell zu trainieren. Die Qualität und Quantität dieser Daten beeinflusst die Modellleistung erheblich.",
    category: "Daten",
    relatedTerms: ["Test Data", "Validation Data", "Data Quality"],
    examples: ["Bilddatenbank", "Textkorpus", "Sensordaten"]
  },
  {
    id: 20,
    term: "Algorithm",
    definition: "Eine Reihe von Regeln oder Anweisungen, die ein Computer befolgt, um ein Problem zu lösen oder eine Aufgabe zu erfüllen. In der KI sind Algorithmen das Herzstück des Lernprozesses.",
    category: "Grundlagen",
    relatedTerms: ["Decision Tree", "Neural Network", "Genetic Algorithm"],
    examples: ["Linear Regression", "K-Means", "Gradient Descent"]
  },
  // Weitere Einträge...
  {
    id: 21,
    term: "Zero-Shot Learning",
    definition: "Die Fähigkeit eines KI-Modells, Aufgaben oder Klassen zu erkennen, die es während des Trainings nie gesehen hat, basierend auf semantischen Beschreibungen oder verwandten Beispielen.",
    category: "Technik",
    relatedTerms: ["Few-Shot Learning", "Transfer Learning", "Meta-Learning"],
    examples: ["Erkennung neuer Tierarten", "Übersetzung seltener Sprachen"]
  },
  {
    id: 22,
    term: "Attention Mechanism",
    definition: "Ein Mechanismus in neuronalen Netzwerken, der es dem Modell ermöglicht, sich auf die relevantesten Teile der Eingabe zu konzentrieren, besonders wichtig in Transformer-Modellen.",
    category: "Architektur",
    relatedTerms: ["Self-Attention", "Multi-Head Attention", "Transformer"],
    examples: ["Maschinelle Übersetzung", "Text-Zusammenfassung"]
  },
  {
    id: 23,
    term: "Gradient Descent",
    definition: "Ein Optimierungsalgorithmus, der verwendet wird, um die Parameter eines Machine Learning-Modells zu finden, die den Fehler minimieren.",
    category: "Training",
    relatedTerms: ["Backpropagation", "Learning Rate", "Optimizer"],
    examples: ["Neuronale Netzwerk-Training", "Lineare Regression"]
  },
  {
    id: 24,
    term: "Explainable AI (XAI)",
    definition: "KI-Systeme, die ihre Entscheidungsprozesse transparent und nachvollziehbar machen, sodass Menschen verstehen können, wie und warum bestimmte Entscheidungen getroffen wurden.",
    category: "Ethik",
    relatedTerms: ["Interpretability", "Black Box", "Model Transparency"],
    examples: ["Medizinische Diagnose-KI", "Kreditbewertungssysteme"]
  },
  {
    id: 25,
    term: "Federated Learning",
    definition: "Ein dezentraler Ansatz für Machine Learning, bei dem Modelle lokal auf verschiedenen Geräten trainiert werden, ohne dass Rohdaten geteilt werden müssen.",
    category: "Technologie",
    relatedTerms: ["Privacy-Preserving ML", "Distributed Learning", "Edge Computing"],
    examples: ["Smartphone-Tastaturvorhersage", "Medizinische Forschung"]
  }
];

export const getLexiconByCategory = (category: string) => {
  if (category === 'all') return lexiconData;
  return lexiconData.filter(entry => entry.category === category);
};

export const searchLexicon = (query: string) => {
  return lexiconData.filter(entry =>
    entry.term.toLowerCase().includes(query.toLowerCase()) ||
    entry.definition.toLowerCase().includes(query.toLowerCase()) ||
    entry.relatedTerms.some(term => term.toLowerCase().includes(query.toLowerCase()))
  );
};