import type { LexiconEntry } from './lexiconData';
import { advancedLexiconData } from './advancedLexiconData';

export interface LexiconEntry {
  id: number;
  term: string;
  definition: string;
  category: string;
  relatedTerms: string[];
  examples?: string[];
}

export const lexiconData: LexiconEntry[] = [
  { id: 1, term: "Artificial Intelligence (KI)", definition: "Die Simulation menschlicher Intelligenz in Maschinen, die programmiert sind, wie Menschen zu denken und zu lernen. KI umfasst verschiedene Technologien wie Machine Learning, Natural Language Processing und Computer Vision.", category: "Grundlagen", relatedTerms: ["Machine Learning", "Deep Learning", "Neural Network"], examples: ["ChatGPT", "Siri", "Autonome Fahrzeuge"] },
  { id: 2, term: "Machine Learning", definition: "Ein Teilbereich der KI, bei dem Algorithmen aus Daten lernen, ohne explizit für jede Aufgabe programmiert zu werden.", category: "Technologie", relatedTerms: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"], examples: ["Spam-Filter", "Empfehlungssysteme", "Bilderkennung"] },
  { id: 3, term: "Deep Learning", definition: "Eine Unterart des Machine Learning, die mehrschichtige neuronale Netzwerke verwendet, um komplexe Muster zu lernen.", category: "Technologie", relatedTerms: ["Neural Network", "CNN", "RNN"], examples: ["Gesichtserkennung", "Sprachsynthese", "Bildgenerierung"] },
  { id: 4, term: "Neural Network", definition: "Ein lernfähiges Rechenmodell aus miteinander verbundenen künstlichen Neuronen.", category: "Architektur", relatedTerms: ["Perceptron", "Hidden Layer", "Activation Function"], examples: ["Feedforward Network", "Convolutional Network", "Recurrent Network"] },
  { id: 5, term: "Natural Language Processing (NLP)", definition: "Ein Bereich der KI zur Verarbeitung, Interpretation und Generierung menschlicher Sprache.", category: "Anwendung", relatedTerms: ["Text Mining", "Sentiment Analysis", "Language Model"], examples: ["Übersetzung", "Chatbots", "Text-zu-Sprache"] },
  { id: 6, term: "Computer Vision", definition: "KI-Verfahren zur Interpretation visueller Informationen aus Bildern und Videos.", category: "Anwendung", relatedTerms: ["Image Recognition", "Object Detection", "OCR"], examples: ["Autonome Fahrzeuge", "Medical Imaging", "Objekterkennung"] },
  { id: 7, term: "Large Language Model (LLM)", definition: "Ein großes Sprachmodell, das auf umfangreichen Textdaten trainiert wurde und Sprache verarbeiten und generieren kann.", category: "Modelle", relatedTerms: ["GPT", "BERT", "Transformer"], examples: ["GPT", "Claude", "Gemini"] },
  { id: 8, term: "Prompt Engineering", definition: "Das strukturierte Formulieren von Eingaben, um von KI-Modellen zuverlässigere und passendere Ergebnisse zu erhalten.", category: "Technik", relatedTerms: ["Few-Shot Learning", "Prompt Tuning", "Context"], examples: ["Rollenbeschreibung", "Kontext setzen", "Beispiele geben"] },
  { id: 9, term: "Generative AI", definition: "KI-Systeme, die neue Inhalte wie Text, Bilder, Audio oder Video erzeugen können.", category: "Technologie", relatedTerms: ["GANs", "Diffusion Models", "VAE"], examples: ["Textgenerierung", "Bildgenerierung", "Musikgenerierung"] },
  { id: 10, term: "Transformer", definition: "Eine neuronale Architektur, die Attention verwendet und die Grundlage vieler moderner Sprachmodelle bildet.", category: "Architektur", relatedTerms: ["Attention Mechanism", "Self-Attention", "BERT"], examples: ["GPT", "BERT", "T5"] },
  { id: 11, term: "Fine-tuning", definition: "Die Anpassung eines bereits trainierten Modells an eine spezifische Aufgabe oder Domäne durch weiteres Training.", category: "Training", relatedTerms: ["Transfer Learning", "Pre-training", "LoRA"], examples: ["Domänenanpassung", "Klassifikation"] },
  { id: 12, term: "Halluzination", definition: "Wenn ein KI-Modell falsche oder erfundene Informationen überzeugend als Tatsachen ausgibt.", category: "Probleme", relatedTerms: ["Grounding", "Factual Accuracy", "Verification"], examples: ["Falsche Zitate", "Erfundene Ereignisse", "Nicht existierende Quellen"] },
  { id: 13, term: "Bias", definition: "Systematische Verzerrungen in Daten oder Modellen, die zu unfairen oder unzuverlässigen Ergebnissen führen können.", category: "Ethik", relatedTerms: ["Algorithmic Fairness", "Data Bias", "Demographic Parity"], examples: ["Datenverzerrung", "Ungleiche Fehlerraten"] },
  { id: 14, term: "Overfitting", definition: "Ein Modell passt sich zu stark an Trainingsdaten an und generalisiert deshalb schlecht auf unbekannte Daten.", category: "Training", relatedTerms: ["Underfitting", "Generalization", "Regularization"], examples: ["Schlechte Testleistung", "Auswendiglernen"] },
  { id: 15, term: "Reinforcement Learning", definition: "Ein Lernansatz, bei dem ein Agent durch Interaktion mit einer Umgebung und Belohnungen lernt.", category: "Technologie", relatedTerms: ["Q-Learning", "Policy Gradient", "Actor-Critic"], examples: ["Spiele", "Robotik", "Navigation"] },
  { id: 16, term: "Supervised Learning", definition: "Training mit gelabelten Input-Output-Beispielen, damit ein Modell Vorhersagen für neue Daten lernt.", category: "Training", relatedTerms: ["Classification", "Regression", "Labeled Data"], examples: ["Spam-Erkennung", "Handschrifterkennung"] },
  { id: 17, term: "Unsupervised Learning", definition: "Lernen von Mustern und Strukturen aus Daten ohne vorgegebene Ziel-Labels.", category: "Training", relatedTerms: ["Clustering", "Dimensionality Reduction", "Association Rules"], examples: ["Kundensegmentierung", "Anomalieerkennung"] },
  { id: 18, term: "API", definition: "Eine Programmierschnittstelle, über die Software kontrolliert miteinander kommunizieren kann.", category: "Technik", relatedTerms: ["REST API", "SDK", "Web Services"], examples: ["KI-API", "Datenbank-API"] },
  { id: 19, term: "Training Data", definition: "Daten, die zum Trainieren eines Machine-Learning-Modells verwendet werden.", category: "Daten", relatedTerms: ["Test Data", "Validation Data", "Data Quality"], examples: ["Bilddaten", "Textkorpus", "Sensordaten"] },
  { id: 20, term: "Algorithm", definition: "Eine endliche Folge von Regeln oder Rechenschritten zur Lösung einer Aufgabe.", category: "Grundlagen", relatedTerms: ["Decision Tree", "Neural Network", "Gradient Descent"], examples: ["K-Means", "Lineare Regression"] },
  { id: 21, term: "Zero-Shot Learning", definition: "Die Fähigkeit eines Modells, Aufgaben oder Klassen ohne direkte Trainingsbeispiele für diese Klasse zu bearbeiten.", category: "Technik", relatedTerms: ["Few-Shot Learning", "Transfer Learning", "Meta-Learning"], examples: ["Neue Kategorien", "Seltene Sprachen"] },
  { id: 22, term: "Attention Mechanism", definition: "Ein Mechanismus, der relevante Teile einer Eingabe stärker gewichtet.", category: "Architektur", relatedTerms: ["Self-Attention", "Multi-Head Attention", "Transformer"], examples: ["Übersetzung", "Zusammenfassung"] },
  { id: 23, term: "Gradient Descent", definition: "Ein Optimierungsverfahren, das Modellparameter schrittweise in Richtung eines geringeren Fehlers anpasst.", category: "Training", relatedTerms: ["Backpropagation", "Learning Rate", "Optimizer"], examples: ["Neuronales Training", "Regression"] },
  { id: 24, term: "Explainable AI (XAI)", definition: "Methoden, die Entscheidungen oder Vorhersagen von KI-Systemen nachvollziehbarer machen.", category: "Ethik", relatedTerms: ["Interpretability", "Black Box", "Model Transparency"], examples: ["Diagnose-KI", "Entscheidungsunterstützung"] },
  { id: 25, term: "Federated Learning", definition: "Dezentrales Training, bei dem Daten möglichst lokal bleiben und nur Modellinformationen ausgetauscht werden.", category: "Technologie", relatedTerms: ["Privacy-Preserving ML", "Distributed Learning", "Edge Computing"], examples: ["Tastaturvorhersage", "Medizinische Forschung"] },
  ...advancedLexiconData,
];

export const getLexiconByCategory = (category: string) => category === 'all' ? lexiconData : lexiconData.filter((entry) => entry.category === category);

export const searchLexicon = (query: string) => {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return lexiconData;
  return lexiconData.filter((entry) =>
    entry.term.toLowerCase().includes(normalized) ||
    entry.definition.toLowerCase().includes(normalized) ||
    entry.relatedTerms.some((term) => term.toLowerCase().includes(normalized))
  );
};
