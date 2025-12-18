```mermaid
flowchart TD

  subgraph User_Device[User Device (Cursor Client)]
    Q[User question in Cursor]
    L1[Local codebase on disk]
    C1[Cursor app\n(client)]
  end

  subgraph Server[Cursor Backend + Turbopuffer]
    E1[1. Compute embedding\nof question/context]
    VS[2. Vector search in Turbopuffer\nagainst code embeddings]
    R1[3. Return identifiers only:\n- Obfuscated file path\n- Line range]
    A1[6. Use question + code chunks\nto generate answer]
    
    subgraph Turbopuffer[Code Embeddings Store]
      IDX[Indexed code chunks\nstored as:\n- Embedding vectors\n- Obfuscated file paths\n- Line ranges\n(no plaintext code)]
    end
  end

  %% Inference-time flow
  Q -->|User asks question| C1
  C1 -->|Send question to server| E1
  E1 -->|Question embedding| VS
  VS -->|Nearest neighbors\n(embedding search)| IDX
  VS -->|Obfuscated path + line range\n(no code text)| R1
  R1 -->|Obfuscated path + line range| C1

  C1 -->|Open file locally\n(using path + lines)| L1
  L1 -->|Read relevant lines\n(plaintext code)| C1

  C1 -->|Send to server:\n- Original question\n- Selected plaintext code chunks| A1
  A1 -->|Answer| C1

  %% Summary notes
  note right of Turbopuffer
    At rest (server side):
    - Only embeddings
    - Obfuscated file paths
    - Line ranges
    - No full plaintext files stored
  end

  note left of User_Device
    At inference time:
    - Plaintext code is read locally
    - Sent just-in-time to server
    - Used to answer current question
  end
```
