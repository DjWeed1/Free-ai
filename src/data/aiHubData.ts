export interface ModelProfile { name:string; family:string; strengths:string[]; bestFor:string[]; local:boolean; api:boolean; privacy:string; pricing:string; }
export const modelProfiles: ModelProfile[] = [
{name:"GPT",family:"General-purpose frontier",strengths:["reasoning","coding","multimodal"],bestFor:["Allzweck","Coding","Agenten"],local:false,api:true,privacy:"Cloud service",pricing:"Free / paid tiers"},
{name:"Claude",family:"General-purpose frontier",strengths:["long context","writing","analysis"],bestFor:["Dokumente","Analyse","Writing"],local:false,api:true,privacy:"Cloud service",pricing:"Free / paid tiers"},
{name:"Gemini",family:"Google multimodal",strengths:["multimodal","long context","ecosystem"],bestFor:["Recherche","Multimodal","Workspace"],local:false,api:true,privacy:"Cloud service",pricing:"Free / paid tiers"},
{name:"Llama",family:"Open-weight family",strengths:["local inference","customization","ecosystem"],bestFor:["Local AI","Experimente","Private deployments"],local:true,api:true,privacy:"Self-hostable",pricing:"Open weights; infrastructure cost"},
{name:"Qwen",family:"Open-weight family",strengths:["multilingual","coding","local inference"],bestFor:["Local AI","Coding","Mehrsprachigkeit"],local:true,api:true,privacy:"Self-hostable",pricing:"Open weights; infrastructure cost"},
{name:"Mistral",family:"Open-weight / commercial",strengths:["efficiency","multilingual","enterprise"],bestFor:["EU projects","Local AI","Enterprise"],local:true,api:true,privacy:"Cloud or self-hosted options",pricing:"Free / commercial options"}
];
export const learningPaths=[
{name:"AI Starter",steps:["AI Grundlagen","Machine Learning","Prompting","Evaluation"],level:"Anfänger"},
{name:"LLM Engineer",steps:["Transformer","Tokenisierung","Embeddings","RAG","Fine-Tuning","Inference"],level:"Fortgeschritten"},
{name:"Agent Engineer",steps:["Tool Calling","MCP","Planning","Memory","Guardrails","Evaluation"],level:"Fortgeschritten"},
{name:"Local AI",steps:["GGUF","Quantization","Ollama","llama.cpp","GPU/NPU","Model Serving"],level:"Fortgeschritten"},
{name:"Responsible AI",steps:["Bias","Privacy","AI Safety","Governance","Risk Assessment","Human Oversight"],level:"Alle"}
];
export const localStack=[
{name:"Ollama",role:"Lokale Model-Laufzeit",why:"Einfacher Einstieg in lokale LLMs"},
{name:"llama.cpp",role:"Effiziente Inferenz",why:"Sehr flexibel auf CPU/GPU und für GGUF"},
{name:"LM Studio",role:"Desktop UI",why:"Modelle herunterladen, testen und lokal chatten"},
{name:"vLLM",role:"Inference Server",why:"Hoher Durchsatz für produktive Model-Serving-Szenarien"},
{name:"GGUF",role:"Model Format",why:"Verbreitetes Format für quantisierte lokale LLMs"}
];
export const comparisonDimensions=["Reasoning","Coding","Long Context","Multimodal","Local","API","Privacy","Kosten"];
