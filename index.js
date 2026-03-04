        // ── TRANSLATIONS ──────────────────────────────────────────────────────────────
        const T = {
            pt: {
                flag: '🇧🇷',
                code: 'PT',
                dir: 'ltr',
                label: 'História da Psicoterapia · 1900–1997',
                title: 'Psicoterapia <em>Breve</em><br>Uma Linha do Tempo Histórica',
                subtitle: 'Da prática freudiana inicial ao modelo integrado mente–cérebro',
                metaSources: 'Fontes',
                metaSpan: 'Período',
                metaGen: 'Gerações',
                metaGenVal: 'Quatro + América Latina',
                genPre: 'Pré-institucional',
                gen1: '1ª Geração',
                gen2: '2ª Geração',
                gen3: '3ª Geração',
                gen4: '4ª Geração',
                genLatam: 'América Latina',
                themeLight: 'Claro',
                themeDark: 'Escuro',
                popupTitle: 'Selecionar idioma',
                arcTitle: 'O Arco Histórico',
                arc: ['A terapia breve emerge de dentro da própria psicanálise',
                    'Ferenczi é o precursor técnico fundamental', 'Alexander torna-se o catalisador institucional',
                    'Balint & Malan sistematizam operacionalmente o foco',
                    'Sifneos & Davanloo desenvolvem variantes confrontacionais',
                    'América Latina — Argentina e Brasil — é zona de grande expansão',
                    'Lemgruber aproxima psicoterapia e neurociência',
                    'A quarta geração alcança a terapia integrada mente–cérebro'
                ],
                eras: [{
                        year: '1900–10',
                        genKey: 'genPre',
                        title: 'Freud Inicial — Tratamentos Breves',
                        figures: 'Sigmund Freud',
                        desc: 'A psicanálise foi inicialmente praticada em formatos breves. Freud trata Bruno Walter em seis sessões (1906) e Gustav Mahler em quatro horas (1908). Define datas de término; supervisiona o caso "Pequeno Hans" por meio do pai.',
                        tags: ['Origem clínica', 'Análise breve'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1914–16',
                        genKey: 'genPre',
                        title: 'Análises de Ferenczi com Freud',
                        figures: 'Sándor Ferenczi',
                        desc: 'Duas análises pessoais com Freud, cada uma com apenas três semanas. Ferenczi posteriormente critica Freud por não analisar a transferência negativa — tensão precoce entre teoria e técnica clínica.',
                        tags: ['Transferência', 'Teoria vs Técnica'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1920',
                        genKey: 'genPre',
                        title: 'Pulsão de Morte e Compulsão à Repetição',
                        figures: 'Freud',
                        desc: 'Freud reformula o conflito psíquico em torno das pulsões de vida e de morte, explicando teoricamente o prolongamento dos tratamentos. A metapsicologia passa a ter precedência sobre a modificação técnica.',
                        tags: ['Metapsicologia', 'Teoria pulsional'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1921',
                        genKey: 'genPre',
                        title: '"Técnica Ativa" de Ferenczi',
                        figures: 'Ferenczi',
                        desc: 'Propõe maior atividade do terapeuta — confrontações e injunções — para superar resistências. Mal recebida, leva à marginalização histórica de Ferenczi. Ainda assim, constitui um princípio proto-breve.',
                        tags: ['Técnica ativa', 'Resistência'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1925',
                        genKey: 'genPre',
                        title: 'Ferenczi & Rank — Experiência em vez de Reconstrução',
                        figures: 'Ferenczi · Otto Rank',
                        desc: 'Ênfase no revivenciar emocional na transferência em detrimento da reconstrução exaustiva da infância. Um modelo experiencial precoce — fundamento de todas as abordagens breves futuras.',
                        tags: ['Modelo experiencial', 'Transferência'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1941',
                        genKey: 'gen1',
                        title: 'Primeiro Congresso sobre Psicoterapia Breve',
                        figures: 'Franz Alexander · Chicago',
                        desc: 'Reconhecimento institucional formal das abordagens psicoterápicas breves. Marca a transição das análises curtas informais para uma disciplina clínica reconhecida.',
                        tags: ['Institucionalização', 'Congresso'],
                        cls: 'gen-1'
                    },
                    {
                        year: '1946',
                        genKey: 'gen1',
                        title: 'Experiência Emocional Corretiva',
                        figures: 'Franz Alexander · Thomas French',
                        desc: 'Publicação de <em>Psychoanalytic Therapy</em> introduz enquadramento flexível, postura ativa do terapeuta, intervenções na vida real e o conceito central de Experiência Emocional Corretiva (EEC) — pedra angular da primeira geração.',
                        tags: ['EEC / CEE', 'Enquadre flexível', 'Postura ativa'],
                        cls: 'gen-1'
                    },
                    {
                        year: '1950s',
                        genKey: 'gen2',
                        title: 'Balint e o Grupo Tavistock',
                        figures: 'Michael Balint · David Malan',
                        desc: 'Balint organiza um grupo de psicoterapia breve na Clínica Tavistock (1954), estudando 21 casos ao longo de quatro anos. Malan publica os resultados em 1963. O conceito de <em>foco terapêutico</em> é consolidado — traço definidor da segunda geração.',
                        tags: ['Foco terapêutico', 'Tavistock', 'Pesquisa'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1947',
                        genKey: 'genLatam',
                        title: 'América Latina — Argentina',
                        figures: 'Buenos Aires · Kesselman · Fiorini · Braier',
                        desc: 'Buenos Aires sedia um colóquio sobre psicoterapia breve (1947). As décadas seguintes trazem contribuições argentinas marcantes: Kesselman (1970), Fiorini (1973) e Braier (1984). Forte influência britânica/Tavistock ao longo de todo o período.',
                        tags: ['Argentina', 'Buenos Aires', 'Influência Tavistock'],
                        cls: 'gen-latam'
                    },
                    {
                        year: '1958–72',
                        genKey: 'gen2',
                        title: 'Sifneos e a STAPP',
                        figures: 'Peter Sifneos',
                        desc: 'Primeiro artigo sobre psicoterapia breve (1958), seguido de <em>Short-Term Anxiety-Provoking Psychotherapy</em> (1972). Caracterizada por seleção rigorosa de pacientes, 12–18 sessões e técnica confrontacional ativa.',
                        tags: ['STAPP', 'Confrontação', 'Seleção de pacientes'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1970s',
                        genKey: 'gen2',
                        title: 'Expansão e Diversificação',
                        figures: 'Mann · Fiorini · Balint et al. · Davanloo',
                        desc: 'Uma década de publicações marcantes: <em>Time-Limited Psychotherapy</em> de Mann (1973), Fiorini (1973), <em>Focal Psychotherapy</em> de Balint (1975) e a Psicoterapia Dinâmica Intensiva Breve de Davanloo (1980). A terapia breve torna-se focal, limitada no tempo e estruturada.',
                        tags: ['Tempo limitado', 'Terapia focal', 'ISTDP'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1980s–90s',
                        genKey: 'genLatam',
                        title: 'América Latina — Brasil',
                        figures: 'Lemgruber · Knobel · Yoshida · Caracushansky · Lowenkron',
                        desc: 'O Brasil emerge como centro ativo: Lemgruber (1984), Knobel (1986), Yoshida e Caracushansky (1990), Lowenkron (1993). O país torna-se polo de produção clínica, conferências e pesquisa empírica em psicoterapia breve.',
                        tags: ['Brasil', 'Produção clínica', 'Pesquisa'],
                        cls: 'gen-latam'
                    },
                    {
                        year: '1980s',
                        genKey: 'gen3',
                        title: 'Manualização e Validação Empírica',
                        figures: 'Luborsky · Strupp & Binder · Sifneos',
                        desc: 'Manuais de tratamento desenvolvidos (Luborsky; Strupp & Binder). Sifneos introduz a videogravação para supervisão. Grupos de pesquisa (ex.: Hospital Beth-Israel) iniciam a validação empírica. A pressão científica sobre o campo se intensifica.',
                        tags: ['Manualização', 'Baseado em evidências', 'Videogravação'],
                        cls: 'gen-3'
                    },
                    {
                        year: '1994',
                        genKey: 'gen3',
                        title: 'Estudo Consumer Reports',
                        figures: 'Seligman · Consumer Reports',
                        desc: 'Estudo em larga escala não encontra diferenças significativas de resultado entre modalidades terapêuticas. O engajamento ativo do paciente prediz melhores desfechos; restrições de seguro pioram os resultados. Destaca a agência do paciente e as limitações estruturais do sistema de saúde.',
                        tags: ['Pesquisa de resultados', 'Agência do paciente', 'Políticas de saúde'],
                        cls: 'gen-3'
                    },
                    {
                        year: '1990s',
                        genKey: 'gen4',
                        title: 'O Modelo Integrado Mente–Cérebro',
                        figures: 'Vera Lemgruber',
                        desc: 'A quarta geração, proposta explicitamente por Lemgruber, integra tecnologia de PET scan e evidências neurocientíficas. A psicoterapia demonstra alterar a neuroquímica cerebral. A combinação de psicoterapia e farmacoterapia se mostra superior. O campo alcança a verdadeira integração mente–cérebro.',
                        tags: ['Neurociência', 'PET Scan', 'Mente–Cérebro', 'Farmacoterapia'],
                        cls: 'gen-4'
                    },
                ]
            },
            en: {
                flag: '🇺🇸',
                code: 'EN',
                dir: 'ltr',
                label: 'History of Psychotherapy · 1900–1997',
                title: 'Brief <em>Psychotherapy</em><br>A Historical Timeline',
                subtitle: 'From early Freudian practice to the integrated brain–mind model',
                metaSources: 'Sources',
                metaSpan: 'Span',
                metaGen: 'Generations',
                metaGenVal: 'Four + Latin America',
                genPre: 'Pre-institutional',
                gen1: '1st Generation',
                gen2: '2nd Generation',
                gen3: '3rd Generation',
                gen4: '4th Generation',
                genLatam: 'Latin America',
                themeLight: 'Light',
                themeDark: 'Dark',
                popupTitle: 'Select language',
                arcTitle: 'The Historical Arc',
                arc: ['Brief therapy emerges from within psychoanalysis itself',
                    'Ferenczi is the foundational technical precursor',
                    'Alexander becomes the institutional catalyst',
                    'Balint & Malan operationally systematise the focus',
                    'Sifneos & Davanloo develop active-confrontational variants',
                    'Latin America — Argentina & Brazil — is a major expansion zone',
                    'Lemgruber bridges psychotherapy and neuroscience',
                    'The fourth generation achieves integrated brain–mind therapy'
                ],
                eras: [{
                        year: '1900–10',
                        genKey: 'genPre',
                        title: 'Early Freud — Short Treatments',
                        figures: 'Sigmund Freud',
                        desc: 'Psychoanalysis initially practiced in brief formats. Freud treats Bruno Walter in six sessions (1906) and Gustav Mahler in four hours (1908). Sets termination dates; supervises the "Little Hans" case through the father.',
                        tags: ['Clinical origin', 'Short-term analysis'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1914–16',
                        genKey: 'genPre',
                        title: "Ferenczi's Analyses with Freud",
                        figures: 'Sándor Ferenczi',
                        desc: 'Two personal analyses with Freud, each lasting only three weeks. Ferenczi later criticises Freud for failing to analyse negative transference — an early tension between theory and clinical technique.',
                        tags: ['Transference', 'Theory vs Technique'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1920',
                        genKey: 'genPre',
                        title: 'Death Drive & Repetition Compulsion',
                        figures: 'Freud',
                        desc: 'Freud reformulates psychic conflict around life vs death drives, theoretically explaining treatment prolongation. Metapsychology takes precedence over technical modification.',
                        tags: ['Metapsychology', 'Drive theory'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1921',
                        genKey: 'genPre',
                        title: 'Ferenczi\'s "Active Technique"',
                        figures: 'Ferenczi',
                        desc: 'Proposes increased therapist activity — confrontations and injunctions — to overcome resistance. Poorly received; leads to Ferenczi\'s historical marginalisation. A proto-brief therapy principle nonetheless.',
                        tags: ['Active technique', 'Resistance'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1925',
                        genKey: 'genPre',
                        title: 'Ferenczi & Rank — Experience Over Reconstruction',
                        figures: 'Ferenczi · Otto Rank',
                        desc: 'Emphasis on emotional reliving in the transference rather than exhaustive childhood reconstruction. An early experiential model — foundational to all future brief approaches.',
                        tags: ['Experiential model', 'Transference'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1941',
                        genKey: 'gen1',
                        title: 'First Congress on Brief Psychotherapy',
                        figures: 'Franz Alexander · Chicago',
                        desc: 'Formal institutional recognition of brief psychotherapeutic approaches. Marks the transition from informal short analyses to a recognised clinical discipline.',
                        tags: ['Institutionalisation', 'Congress'],
                        cls: 'gen-1'
                    },
                    {
                        year: '1946',
                        genKey: 'gen1',
                        title: 'Corrective Emotional Experience',
                        figures: 'Franz Alexander · Thomas French',
                        desc: 'Publication of <em>Psychoanalytic Therapy</em> introduces flexible framing, active therapist stance, real-life interventions, and the landmark concept of the Corrective Emotional Experience (CEE) — the cornerstone of the first generation.',
                        tags: ['CEE', 'Flexible frame', 'Active stance'],
                        cls: 'gen-1'
                    },
                    {
                        year: '1950s',
                        genKey: 'gen2',
                        title: 'Balint & the Tavistock Group',
                        figures: 'Michael Balint · David Malan',
                        desc: 'Balint organises a brief psychotherapy group at the Tavistock Clinic (1954), studying 21 cases over four years. Malan publishes results in 1963. The concept of the <em>therapeutic focus</em> is consolidated.',
                        tags: ['Therapeutic focus', 'Tavistock', 'Research'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1947',
                        genKey: 'genLatam',
                        title: 'Latin America — Argentina',
                        figures: 'Buenos Aires · Kesselman · Fiorini · Braier',
                        desc: 'Buenos Aires hosts a colloquium on brief psychotherapy (1947). Major Argentine contributions follow: Kesselman (1970), Fiorini (1973), and Braier (1984). Strong British/Tavistock influence throughout.',
                        tags: ['Argentina', 'Buenos Aires', 'Tavistock influence'],
                        cls: 'gen-latam'
                    },
                    {
                        year: '1958–72',
                        genKey: 'gen2',
                        title: 'Sifneos & STAPP',
                        figures: 'Peter Sifneos',
                        desc: 'First article on brief psychotherapy (1958), followed by <em>Short-Term Anxiety-Provoking Psychotherapy</em> (1972). Characterised by strict patient selection, 12–18 sessions, and active confrontational technique.',
                        tags: ['STAPP', 'Confrontation', 'Patient selection'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1970s',
                        genKey: 'gen2',
                        title: 'Expansion & Diversification',
                        figures: 'Mann · Fiorini · Balint et al. · Davanloo',
                        desc: "A decade of landmark publications: Mann's <em>Time-Limited Psychotherapy</em> (1973), Fiorini (1973), Balint's <em>Focal Psychotherapy</em> (1975), and Davanloo's Intensive Short-Term Dynamic Psychotherapy (1980).",
                        tags: ['Time-limited', 'Focal therapy', 'ISTDP'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1980s–90s',
                        genKey: 'genLatam',
                        title: 'Latin America — Brazil',
                        figures: 'Lemgruber · Knobel · Yoshida · Caracushansky · Lowenkron',
                        desc: 'Brazil emerges as an active centre: Lemgruber (1984), Knobel (1986), Yoshida and Caracushansky (1990), Lowenkron (1993). The country becomes a hub for clinical production, conferences, and empirical research.',
                        tags: ['Brazil', 'Clinical production', 'Research'],
                        cls: 'gen-latam'
                    },
                    {
                        year: '1980s',
                        genKey: 'gen3',
                        title: 'Manualization & Empirical Validation',
                        figures: 'Luborsky · Strupp & Binder · Sifneos',
                        desc: 'Treatment manuals developed (Luborsky; Strupp & Binder). Sifneos introduces videotaping for supervision. Research groups (e.g., Beth-Israel Hospital) begin empirical validation. Scientific pressure intensifies.',
                        tags: ['Manualization', 'Evidence-based', 'Videotaping'],
                        cls: 'gen-3'
                    },
                    {
                        year: '1994',
                        genKey: 'gen3',
                        title: 'Consumer Reports Study',
                        figures: 'Seligman · Consumer Reports',
                        desc: 'Large-scale study finds no major outcome differences between therapeutic modalities. Active patient engagement predicts better outcomes; insurance restrictions worsen results. Highlights patient agency and structural healthcare limitations.',
                        tags: ['Outcomes research', 'Patient agency', 'Healthcare policy'],
                        cls: 'gen-3'
                    },
                    {
                        year: '1990s',
                        genKey: 'gen4',
                        title: 'The Integrated Brain–Mind Model',
                        figures: 'Vera Lemgruber',
                        desc: 'The fourth generation, proposed explicitly by Lemgruber, integrates PET scan technology and neuroscientific evidence. Psychotherapy is shown to alter neurochemistry. Combined psychotherapy and pharmacotherapy proves superior.',
                        tags: ['Neuroscience', 'PET Scan', 'Brain–Mind', 'Pharmacotherapy'],
                        cls: 'gen-4'
                    },
                ]
            },
            es: {
                flag: '🇪🇸',
                code: 'ES',
                dir: 'ltr',
                label: 'Historia de la Psicoterapia · 1900–1997',
                title: 'Psicoterapia <em>Breve</em><br>Una Línea del Tiempo Histórica',
                subtitle: 'De la práctica freudiana inicial al modelo integrado mente–cerebro',
                metaSources: 'Fuentes',
                metaSpan: 'Período',
                metaGen: 'Generaciones',
                metaGenVal: 'Cuatro + América Latina',
                genPre: 'Pre-institucional',
                gen1: '1ª Generación',
                gen2: '2ª Generación',
                gen3: '3ª Generación',
                gen4: '4ª Generación',
                genLatam: 'América Latina',
                themeLight: 'Claro',
                themeDark: 'Oscuro',
                popupTitle: 'Seleccionar idioma',
                arcTitle: 'El Arco Histórico',
                arc: ['La terapia breve surge desde dentro del propio psicoanálisis',
                    'Ferenczi es el precursor técnico fundamental',
                    'Alexander se convierte en el catalizador institucional',
                    'Balint & Malan sistematizan operacionalmente el foco',
                    'Sifneos & Davanloo desarrollan variantes confrontacionales',
                    'América Latina — Argentina y Brasil — es una gran zona de expansión',
                    'Lemgruber acerca la psicoterapia a la neurociencia',
                    'La cuarta generación logra la terapia integrada mente–cerebro'
                ],
                eras: [{
                        year: '1900–10',
                        genKey: 'genPre',
                        title: 'Freud Inicial — Tratamientos Breves',
                        figures: 'Sigmund Freud',
                        desc: 'El psicoanálisis fue practicado inicialmente en formatos breves. Freud trata a Bruno Walter en seis sesiones (1906) y a Gustav Mahler en cuatro horas (1908). Fija fechas de terminación; supervisa el caso "Juanito" a través del padre.',
                        tags: ['Origen clínico', 'Análisis breve'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1914–16',
                        genKey: 'genPre',
                        title: 'Análisis de Ferenczi con Freud',
                        figures: 'Sándor Ferenczi',
                        desc: 'Dos análisis personales con Freud, cada uno de solo tres semanas. Ferenczi luego critica a Freud por no analizar la transferencia negativa — tensión temprana entre teoría y técnica clínica.',
                        tags: ['Transferencia', 'Teoría vs Técnica'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1920',
                        genKey: 'genPre',
                        title: 'Pulsión de Muerte y Compulsión a la Repetición',
                        figures: 'Freud',
                        desc: 'Freud reformula el conflicto psíquico en torno a las pulsiones de vida y muerte, explicando teóricamente la prolongación de los tratamientos. La metapsicología toma precedencia sobre la modificación técnica.',
                        tags: ['Metapsicología', 'Teoría pulsional'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1921',
                        genKey: 'genPre',
                        title: '"Técnica Activa" de Ferenczi',
                        figures: 'Ferenczi',
                        desc: 'Propone mayor actividad del terapeuta — confrontaciones e injunciones — para superar resistencias. Mal recibida; conduce a la marginalización histórica de Ferenczi. No obstante, constituye un principio proto-breve.',
                        tags: ['Técnica activa', 'Resistencia'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1925',
                        genKey: 'genPre',
                        title: 'Ferenczi & Rank — Experiencia en lugar de Reconstrucción',
                        figures: 'Ferenczi · Otto Rank',
                        desc: 'Énfasis en el revivir emocional en la transferencia en lugar de la reconstrucción exhaustiva de la infancia. Un modelo experiencial temprano — fundamento de todos los enfoques breves futuros.',
                        tags: ['Modelo experiencial', 'Transferencia'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1941',
                        genKey: 'gen1',
                        title: 'Primer Congreso sobre Psicoterapia Breve',
                        figures: 'Franz Alexander · Chicago',
                        desc: 'Reconocimiento institucional formal de los enfoques psicoterapéuticos breves. Marca la transición de los análisis cortos informales a una disciplina clínica reconocida.',
                        tags: ['Institucionalización', 'Congreso'],
                        cls: 'gen-1'
                    },
                    {
                        year: '1946',
                        genKey: 'gen1',
                        title: 'Experiencia Emocional Correctiva',
                        figures: 'Franz Alexander · Thomas French',
                        desc: 'La publicación de <em>Psychoanalytic Therapy</em> introduce el encuadre flexible, la postura activa del terapeuta, las intervenciones en la vida real y el concepto de Experiencia Emocional Correctiva (EEC).',
                        tags: ['EEC / CEE', 'Encuadre flexible', 'Postura activa'],
                        cls: 'gen-1'
                    },
                    {
                        year: '1950s',
                        genKey: 'gen2',
                        title: 'Balint y el Grupo Tavistock',
                        figures: 'Michael Balint · David Malan',
                        desc: 'Balint organiza un grupo de psicoterapia breve en la Clínica Tavistock (1954), estudiando 21 casos en cuatro años. Malan publica los resultados en 1963. El concepto de <em>foco terapéutico</em> se consolida.',
                        tags: ['Foco terapéutico', 'Tavistock', 'Investigación'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1947',
                        genKey: 'genLatam',
                        title: 'América Latina — Argentina',
                        figures: 'Buenos Aires · Kesselman · Fiorini · Braier',
                        desc: 'Buenos Aires acoge un coloquio sobre psicoterapia breve (1947). Contribuciones argentinas destacadas: Kesselman (1970), Fiorini (1973) y Braier (1984). Fuerte influencia británica/Tavistock.',
                        tags: ['Argentina', 'Buenos Aires', 'Influencia Tavistock'],
                        cls: 'gen-latam'
                    },
                    {
                        year: '1958–72',
                        genKey: 'gen2',
                        title: 'Sifneos y la STAPP',
                        figures: 'Peter Sifneos',
                        desc: 'Primer artículo sobre psicoterapia breve (1958), seguido de <em>Short-Term Anxiety-Provoking Psychotherapy</em> (1972). Caracterizada por selección estricta de pacientes, 12–18 sesiones y técnica confrontacional activa.',
                        tags: ['STAPP', 'Confrontación', 'Selección de pacientes'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1970s',
                        genKey: 'gen2',
                        title: 'Expansión y Diversificación',
                        figures: 'Mann · Fiorini · Balint et al. · Davanloo',
                        desc: 'Una década de publicaciones clave: <em>Time-Limited Psychotherapy</em> de Mann (1973), Fiorini (1973), <em>Focal Psychotherapy</em> de Balint (1975) y la Psicoterapia Dinámica Intensiva Breve de Davanloo (1980).',
                        tags: ['Tiempo limitado', 'Terapia focal', 'ISTDP'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1980s–90s',
                        genKey: 'genLatam',
                        title: 'América Latina — Brasil',
                        figures: 'Lemgruber · Knobel · Yoshida · Caracushansky · Lowenkron',
                        desc: 'Brasil emerge como centro activo: Lemgruber (1984), Knobel (1986), Yoshida y Caracushansky (1990), Lowenkron (1993). El país se convierte en polo de producción clínica e investigación.',
                        tags: ['Brasil', 'Producción clínica', 'Investigación'],
                        cls: 'gen-latam'
                    },
                    {
                        year: '1980s',
                        genKey: 'gen3',
                        title: 'Manualización y Validación Empírica',
                        figures: 'Luborsky · Strupp & Binder · Sifneos',
                        desc: 'Manuales de tratamiento desarrollados (Luborsky; Strupp & Binder). Sifneos introduce la videograbación para supervisión. Grupos de investigación (e.g., Hospital Beth-Israel) inician la validación empírica.',
                        tags: ['Manualización', 'Basado en evidencias', 'Videograbación'],
                        cls: 'gen-3'
                    },
                    {
                        year: '1994',
                        genKey: 'gen3',
                        title: 'Estudio Consumer Reports',
                        figures: 'Seligman · Consumer Reports',
                        desc: 'Estudio a gran escala no encuentra diferencias significativas de resultado entre modalidades terapéuticas. El compromiso activo del paciente predice mejores resultados; las restricciones del seguro los empeoran.',
                        tags: ['Investigación de resultados', 'Agencia del paciente', 'Políticas de salud'],
                        cls: 'gen-3'
                    },
                    {
                        year: '1990s',
                        genKey: 'gen4',
                        title: 'El Modelo Integrado Mente–Cerebro',
                        figures: 'Vera Lemgruber',
                        desc: 'La cuarta generación, propuesta explícitamente por Lemgruber, integra tecnología de PET scan y evidencias neurocientíficas. La psicoterapia demuestra alterar la neuroquímica cerebral. La combinación con farmacoterapia se muestra superior.',
                        tags: ['Neurociencia', 'PET Scan', 'Mente–Cerebro', 'Farmacoterapia'],
                        cls: 'gen-4'
                    },
                ]
            },
            de: {
                flag: '🇩🇪',
                code: 'DE',
                dir: 'ltr',
                label: 'Geschichte der Psychotherapie · 1900–1997',
                title: 'Kurzzeit<em>therapie</em><br>Eine historische Zeitleiste',
                subtitle: 'Von der frühen Freudschen Praxis zum integrierten Geist–Gehirn-Modell',
                metaSources: 'Quellen',
                metaSpan: 'Zeitraum',
                metaGen: 'Generationen',
                metaGenVal: 'Vier + Lateinamerika',
                genPre: 'Vor-institutionell',
                gen1: '1. Generation',
                gen2: '2. Generation',
                gen3: '3. Generation',
                gen4: '4. Generation',
                genLatam: 'Lateinamerika',
                themeLight: 'Hell',
                themeDark: 'Dunkel',
                popupTitle: 'Sprache wählen',
                arcTitle: 'Der historische Bogen',
                arc: ['Kurzzeittherapie entsteht innerhalb der Psychoanalyse selbst',
                    'Ferenczi ist der grundlegende technische Vorläufer',
                    'Alexander wird zum institutionellen Katalysator',
                    'Balint & Malan systematisieren den therapeutischen Fokus',
                    'Sifneos & Davanloo entwickeln konfrontative Varianten',
                    'Lateinamerika — Argentinien und Brasilien — ist eine Hauptexpansionszone',
                    'Lemgruber verbindet Psychotherapie mit Neurowissenschaft',
                    'Die vierte Generation erreicht integrierte Geist–Gehirn-Therapie'
                ],
                eras: [{
                        year: '1900–10',
                        genKey: 'genPre',
                        title: 'Früher Freud — Kurzbehandlungen',
                        figures: 'Sigmund Freud',
                        desc: 'Die Psychoanalyse wurde zunächst in kurzen Formaten praktiziert. Freud behandelt Bruno Walter in sechs Sitzungen (1906) und Gustav Mahler in vier Stunden (1908). Er legt Beendigungsdaten fest und supervidiert den "Kleinen Hans"-Fall durch den Vater.',
                        tags: ['Klinischer Ursprung', 'Kurzanalyse'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1914–16',
                        genKey: 'genPre',
                        title: 'Ferenczis Analysen bei Freud',
                        figures: 'Sándor Ferenczi',
                        desc: 'Zwei persönliche Analysen bei Freud, jeweils nur drei Wochen lang. Ferenczi kritisiert Freud später dafür, die negative Übertragung nicht zu analysieren — eine frühe Spannung zwischen Theorie und klinischer Technik.',
                        tags: ['Übertragung', 'Theorie vs. Technik'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1920',
                        genKey: 'genPre',
                        title: 'Todestrieb und Wiederholungszwang',
                        figures: 'Freud',
                        desc: 'Freud reformuliert den psychischen Konflikt um Lebens- und Todestrieb und erklärt theoretisch die Behandlungsverlängerung. Die Metapsychologie hat Vorrang vor technischen Modifikationen.',
                        tags: ['Metapsychologie', 'Triebtheorie'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1921',
                        genKey: 'genPre',
                        title: 'Ferenczis "Aktive Technik"',
                        figures: 'Ferenczi',
                        desc: 'Er schlägt erhöhte Therapeutenaktivität vor — Konfrontationen und Injunktionen — um Widerstände zu überwinden. Schlecht aufgenommen; führt zur historischen Marginalisierung Ferenczis. Dennoch ein Proto-Kurztherapie-Prinzip.',
                        tags: ['Aktive Technik', 'Widerstand'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1925',
                        genKey: 'genPre',
                        title: 'Ferenczi & Rank — Erfahrung statt Rekonstruktion',
                        figures: 'Ferenczi · Otto Rank',
                        desc: 'Betonung des emotionalen Wiedererlebens in der Übertragung statt erschöpfender Kindheitsrekonstruktion. Ein frühes Erfahrungsmodell — Grundlage aller zukünftigen Kurzzeitansätze.',
                        tags: ['Erfahrungsmodell', 'Übertragung'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1941',
                        genKey: 'gen1',
                        title: 'Erster Kongress für Kurzpsychotherapie',
                        figures: 'Franz Alexander · Chicago',
                        desc: 'Formale institutionelle Anerkennung kurzer psychotherapeutischer Ansätze. Markiert den Übergang von informellen Kurzanalysen zu einer anerkannten klinischen Disziplin.',
                        tags: ['Institutionalisierung', 'Kongress'],
                        cls: 'gen-1'
                    },
                    {
                        year: '1946',
                        genKey: 'gen1',
                        title: 'Korrigierende Emotionale Erfahrung',
                        figures: 'Franz Alexander · Thomas French',
                        desc: 'Die Publikation von <em>Psychoanalytic Therapy</em> führt flexibles Setting, aktive Therapeutenhaltung, Interventionen im realen Leben und das Konzept der Korrigierenden Emotionalen Erfahrung (KEE) ein.',
                        tags: ['KEE / CEE', 'Flexibles Setting', 'Aktive Haltung'],
                        cls: 'gen-1'
                    },
                    {
                        year: '1950s',
                        genKey: 'gen2',
                        title: 'Balint und die Tavistock-Gruppe',
                        figures: 'Michael Balint · David Malan',
                        desc: 'Balint organisiert eine Kurztherapiegruppe an der Tavistock Clinic (1954), die 21 Fälle über vier Jahre untersucht. Malan veröffentlicht die Ergebnisse 1963. Das Konzept des <em>therapeutischen Fokus</em> wird konsolidiert.',
                        tags: ['Therapeutischer Fokus', 'Tavistock', 'Forschung'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1947',
                        genKey: 'genLatam',
                        title: 'Lateinamerika — Argentinien',
                        figures: 'Buenos Aires · Kesselman · Fiorini · Braier',
                        desc: 'Buenos Aires veranstaltet ein Kolloquium über Kurzpsychotherapie (1947). Bedeutende argentinische Beiträge folgen: Kesselman (1970), Fiorini (1973) und Braier (1984). Starker britischer/Tavistock-Einfluss.',
                        tags: ['Argentinien', 'Buenos Aires', 'Tavistock-Einfluss'],
                        cls: 'gen-latam'
                    },
                    {
                        year: '1958–72',
                        genKey: 'gen2',
                        title: 'Sifneos und STAPP',
                        figures: 'Peter Sifneos',
                        desc: 'Erster Artikel über Kurzpsychotherapie (1958), gefolgt von <em>Short-Term Anxiety-Provoking Psychotherapy</em> (1972). Gekennzeichnet durch strenge Patientenauswahl, 12–18 Sitzungen und aktive Konfrontationstechnik.',
                        tags: ['STAPP', 'Konfrontation', 'Patientenauswahl'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1970s',
                        genKey: 'gen2',
                        title: 'Expansion und Diversifizierung',
                        figures: 'Mann · Fiorini · Balint et al. · Davanloo',
                        desc: 'Ein Jahrzehnt bedeutender Publikationen: Manns <em>Time-Limited Psychotherapy</em> (1973), Fiorini (1973), Balints <em>Focal Psychotherapy</em> (1975) und Davanloos Intensive Kurztherapie (1980).',
                        tags: ['Zeitlimitiert', 'Fokale Therapie', 'ISTDP'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1980s–90s',
                        genKey: 'genLatam',
                        title: 'Lateinamerika — Brasilien',
                        figures: 'Lemgruber · Knobel · Yoshida · Caracushansky · Lowenkron',
                        desc: 'Brasilien tritt als aktives Zentrum hervor: Lemgruber (1984), Knobel (1986), Yoshida und Caracushansky (1990), Lowenkron (1993). Das Land wird ein Zentrum klinischer Produktion und empirischer Forschung.',
                        tags: ['Brasilien', 'Klinische Produktion', 'Forschung'],
                        cls: 'gen-latam'
                    },
                    {
                        year: '1980s',
                        genKey: 'gen3',
                        title: 'Manualisierung und Empirische Validierung',
                        figures: 'Luborsky · Strupp & Binder · Sifneos',
                        desc: 'Behandlungsmanuale entwickelt (Luborsky; Strupp & Binder). Sifneos führt Videoaufzeichnung für Supervision ein. Forschungsgruppen (z.B. Beth-Israel Hospital) beginnen empirische Validierung.',
                        tags: ['Manualisierung', 'Evidenzbasiert', 'Videoaufzeichnung'],
                        cls: 'gen-3'
                    },
                    {
                        year: '1994',
                        genKey: 'gen3',
                        title: 'Consumer Reports Studie',
                        figures: 'Seligman · Consumer Reports',
                        desc: 'Großangelegte Studie findet keine wesentlichen Ergebnisunterschiede zwischen therapeutischen Modalitäten. Aktives Patientenengagement sagt bessere Ergebnisse voraus; Versicherungsbeschränkungen verschlechtern sie.',
                        tags: ['Ergebnisforschung', 'Patientenhandeln', 'Gesundheitspolitik'],
                        cls: 'gen-3'
                    },
                    {
                        year: '1990s',
                        genKey: 'gen4',
                        title: 'Das Integrierte Geist–Gehirn-Modell',
                        figures: 'Vera Lemgruber',
                        desc: 'Die vierte Generation, explizit von Lemgruber vorgeschlagen, integriert PET-Scan-Technologie und neurowissenschaftliche Erkenntnisse. Psychotherapie verändert nachweislich die Neurochemie des Gehirns.',
                        tags: ['Neurowissenschaft', 'PET-Scan', 'Geist–Gehirn', 'Pharmakotherapie'],
                        cls: 'gen-4'
                    },
                ]
            },
            tr: {
                flag: '🇹🇷',
                code: 'TR',
                dir: 'ltr',
                label: 'Psikoterapi Tarihi · 1900–1997',
                title: 'Kısa Süreli <em>Psikoterapi</em><br>Tarihsel Bir Zaman Çizelgesi',
                subtitle: "Erken Freudyen pratikten bütünleşik beyin–zihin modeline",
                metaSources: 'Kaynaklar',
                metaSpan: 'Dönem',
                metaGen: 'Nesiller',
                metaGenVal: 'Dört + Latin Amerika',
                genPre: 'Kurumsal Öncesi',
                gen1: '1. Nesil',
                gen2: '2. Nesil',
                gen3: '3. Nesil',
                gen4: '4. Nesil',
                genLatam: 'Latin Amerika',
                themeLight: 'Açık',
                themeDark: 'Koyu',
                popupTitle: 'Dil seçin',
                arcTitle: 'Tarihsel Ark',
                arc: ['Kısa terapi, psikanalizin içinden doğar', 'Ferenczi temel teknik öncüdür',
                    'Alexander kurumsal katalizör olur', 'Balint & Malan terapötik odağı sistematize eder',
                    'Sifneos & Davanloo yüzleşme temelli varyantlar geliştirir',
                    'Latin Amerika — Arjantin ve Brezilya — önemli bir genişleme bölgesidir',
                    'Lemgruber psikoterapi ile nörobilimi köprüler',
                    'Dördüncü nesil entegre beyin–zihin terapisine ulaşır'
                ],
                eras: [{
                        year: '1900–10',
                        genKey: 'genPre',
                        title: 'Erken Freud — Kısa Tedaviler',
                        figures: 'Sigmund Freud',
                        desc: "Psikanaliz başlangıçta kısa formatlarda uygulandı. Freud, Bruno Walter'ı altı seansta (1906) ve Gustav Mahler'ı dört saatte (1908) tedavi etti. Sonlandırma tarihleri belirledi; 'Küçük Hans' vakasını baba aracılığıyla denetledi.",
                        tags: ['Klinik köken', 'Kısa analiz'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1914–16',
                        genKey: 'genPre',
                        title: "Ferenczi'nin Freud ile Analizleri",
                        figures: 'Sándor Ferenczi',
                        desc: "Freud ile her biri yalnızca üç haftalık iki kişisel analiz. Ferenczi daha sonra Freud'u negatif aktarımı analiz etmemesi nedeniyle eleştirir — teori ile klinik teknik arasındaki erken bir gerilim.",
                        tags: ['Aktarım', 'Teori ve Teknik'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1920',
                        genKey: 'genPre',
                        title: 'Ölüm Dürtüsü ve Tekrarlama Zorlaması',
                        figures: 'Freud',
                        desc: "Freud, psişik çatışmayı yaşam ve ölüm dürtüleri etrafında yeniden formüle ederek tedavilerin uzamasını teorik olarak açıklar. Metapsikoloji, teknik modifikasyona öncelik kazanır.",
                        tags: ['Metapsikoloji', 'Dürtü teorisi'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1921',
                        genKey: 'genPre',
                        title: "Ferenczi'nin 'Aktif Tekniği'",
                        figures: 'Ferenczi',
                        desc: "Dirençleri aşmak için terapist aktivitesinin artırılmasını — yüzleştirmeler ve buyruklarını önerir. Kötü karşılanır; Ferenczi'nin tarihsel marjinalleşmesine yol açar. Bununla birlikte proto-kısa terapi ilkesi oluşturur.",
                        tags: ['Aktif teknik', 'Direnç'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1925',
                        genKey: 'genPre',
                        title: "Ferenczi & Rank — Yeniden Yapılandırma Yerine Deneyim",
                        figures: 'Ferenczi · Otto Rank',
                        desc: "Aktarımda duygusal yeniden yaşamaya vurgu, çocukluğun kapsamlı yeniden yapılandırılması yerine. Erken bir deneyimsel model — tüm gelecek kısa yaklaşımların temeli.",
                        tags: ['Deneyimsel model', 'Aktarım'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1941',
                        genKey: 'gen1',
                        title: 'Kısa Psikoterapi Üzerine İlk Kongre',
                        figures: 'Franz Alexander · Chicago',
                        desc: "Kısa psikoterapötik yaklaşımların resmi kurumsal kabulü. Gayri resmi kısa analizlerden tanınan bir klinik disipline geçişi simgeler.",
                        tags: ['Kurumsallaşma', 'Kongre'],
                        cls: 'gen-1'
                    },
                    {
                        year: '1946',
                        genKey: 'gen1',
                        title: 'Düzeltici Duygusal Deneyim',
                        figures: 'Franz Alexander · Thomas French',
                        desc: "<em>Psychoanalytic Therapy</em>'nin yayımlanması esnek çerçeve, aktif terapist tutumu, gerçek yaşam müdahaleleri ve Düzeltici Duygusal Deneyim (DDD) kavramını tanıttı — birinci neslin köşe taşı.",
                        tags: ['DDD / CEE', 'Esnek çerçeve', 'Aktif tutum'],
                        cls: 'gen-1'
                    },
                    {
                        year: '1950s',
                        genKey: 'gen2',
                        title: 'Balint ve Tavistock Grubu',
                        figures: 'Michael Balint · David Malan',
                        desc: "Balint, Tavistock Kliniği'nde kısa psikoterapi grubu düzenler (1954), dört yıl boyunca 21 vakayı inceler. Malan sonuçları 1963'te yayımlar. <em>Terapötik odak</em> kavramı pekişir — ikinci neslin belirleyici özelliği.",
                        tags: ['Terapötik odak', 'Tavistock', 'Araştırma'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1947',
                        genKey: 'genLatam',
                        title: 'Latin Amerika — Arjantin',
                        figures: 'Buenos Aires · Kesselman · Fiorini · Braier',
                        desc: "Buenos Aires kısa psikoterapi üzerine bir kollokyum düzenler (1947). Arjantin katkıları: Kesselman (1970), Fiorini (1973) ve Braier (1984). Güçlü İngiliz/Tavistock etkisi.",
                        tags: ['Arjantin', 'Buenos Aires', 'Tavistock etkisi'],
                        cls: 'gen-latam'
                    },
                    {
                        year: '1958–72',
                        genKey: 'gen2',
                        title: "Sifneos ve STAPP",
                        figures: 'Peter Sifneos',
                        desc: "Kısa psikoterapiye ilişkin ilk makale (1958), ardından <em>Short-Term Anxiety-Provoking Psychotherapy</em> (1972). Sıkı hasta seçimi, 12–18 seans ve aktif yüzleşme tekniği ile karakterize edilir.",
                        tags: ['STAPP', 'Yüzleşme', 'Hasta seçimi'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1970s',
                        genKey: 'gen2',
                        title: 'Genişleme ve Çeşitlenme',
                        figures: 'Mann · Fiorini · Balint et al. · Davanloo',
                        desc: "Önemli yayınların on yılı: Mann'ın <em>Time-Limited Psychotherapy</em>'si (1973), Fiorini (1973), Balint'in <em>Focal Psychotherapy</em>'si (1975) ve Davanloo'nun Yoğun Kısa Süreli Dinamik Psikoterapisi (1980).",
                        tags: ['Zaman sınırlı', 'Odaklı terapi', 'ISTDP'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1980s–90s',
                        genKey: 'genLatam',
                        title: 'Latin Amerika — Brezilya',
                        figures: 'Lemgruber · Knobel · Yoshida · Caracushansky · Lowenkron',
                        desc: "Brezilya aktif bir merkez olarak ortaya çıkar: Lemgruber (1984), Knobel (1986), Yoshida ve Caracushansky (1990), Lowenkron (1993). Ülke klinik üretim ve araştırma merkezi haline gelir.",
                        tags: ['Brezilya', 'Klinik üretim', 'Araştırma'],
                        cls: 'gen-latam'
                    },
                    {
                        year: '1980s',
                        genKey: 'gen3',
                        title: 'Manualizasyon ve Ampirik Doğrulama',
                        figures: 'Luborsky · Strupp & Binder · Sifneos',
                        desc: "Tedavi kılavuzları geliştirildi (Luborsky; Strupp & Binder). Sifneos süpervizyon için video kaydı başlattı. Araştırma grupları (örn. Beth-Israel Hastanesi) ampirik doğrulamayı başlattı.",
                        tags: ['Manualizasyon', 'Kanıta dayalı', 'Video kaydı'],
                        cls: 'gen-3'
                    },
                    {
                        year: '1994',
                        genKey: 'gen3',
                        title: 'Consumer Reports Çalışması',
                        figures: 'Seligman · Consumer Reports',
                        desc: "Geniş çaplı çalışma, terapötik modaliteler arasında önemli bir sonuç farkı bulamadı. Aktif hasta katılımı daha iyi sonuçları öngörür; sigorta kısıtlamaları sonuçları kötüleştirir.",
                        tags: ['Sonuç araştırması', 'Hasta katılımı', 'Sağlık politikası'],
                        cls: 'gen-3'
                    },
                    {
                        year: '1990s',
                        genKey: 'gen4',
                        title: 'Bütünleşik Beyin–Zihin Modeli',
                        figures: 'Vera Lemgruber',
                        desc: "Lemgruber tarafından açıkça önerilen dördüncü nesil, PET tarama teknolojisini ve nörobilimsel kanıtları entegre eder. Psikoterapinin nörokimyayı değiştirdiği kanıtlanır. Psikoterapi ile farmakoterapinin kombinasyonu üstün çıkar.",
                        tags: ['Nörobilim', 'PET tarama', 'Beyin–Zihin', 'Farmakaterapi'],
                        cls: 'gen-4'
                    },
                ]
            },
            ar: {
                flag: '🇦🇪',
                code: 'AR',
                dir: 'rtl',
                label: 'تاريخ العلاج النفسي · 1900–1997',
                title: 'العلاج النفسي <em>القصير</em><br>خط زمني تاريخي',
                subtitle: 'من الممارسة الفرويدية المبكرة إلى نموذج الدماغ والعقل المتكامل',
                metaSources: 'المصادر',
                metaSpan: 'الحقبة',
                metaGen: 'الأجيال',
                metaGenVal: 'أربعة + أمريكا اللاتينية',
                genPre: 'ما قبل المؤسسية',
                gen1: 'الجيل الأول',
                gen2: 'الجيل الثاني',
                gen3: 'الجيل الثالث',
                gen4: 'الجيل الرابع',
                genLatam: 'أمريكا اللاتينية',
                themeLight: 'فاتح',
                themeDark: 'داكن',
                popupTitle: 'اختر اللغة',
                arcTitle: 'القوس التاريخي',
                arc: ['نشأ العلاج القصير من داخل التحليل النفسي ذاته', 'فيرينتشي هو الرائد التقني الأساسي',
                    'أصبح ألكساندر المحفّز المؤسسي', 'نظّم بالينت ومالان التركيز العلاجي',
                    'طوّر سيفنيوس وداڤانلو متغيرات المواجهة',
                    'أمريكا اللاتينية — الأرجنتين والبرازيل — منطقة توسع رئيسية',
                    'جسّرت ليمغروبر العلاج النفسي وعلم الأعصاب', 'حقق الجيل الرابع العلاج المتكامل للدماغ والعقل'
                ],
                eras: [{
                        year: '1900–10',
                        genKey: 'genPre',
                        title: 'فرويد المبكر — العلاجات القصيرة',
                        figures: 'سيغموند فرويد',
                        desc: 'مورس التحليل النفسي في البداية بصيغ قصيرة. عالج فرويد برونو فالتر في ست جلسات (1906) وغوستاف ماهلر في أربع ساعات (1908). حدّد تواريخ الإنهاء وأشرف على قضية "هانز الصغير" عبر والده.',
                        tags: ['الأصل السريري', 'التحليل القصير'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1914–16',
                        genKey: 'genPre',
                        title: 'تحليلات فيرينتشي مع فرويد',
                        figures: 'سندور فيرينتشي',
                        desc: 'تحليلان شخصيان مع فرويد، كل منهما ثلاثة أسابيع فحسب. انتقد فيرينتشي لاحقاً فرويد لعدم تحليله للنقل السلبي — توتر مبكر بين النظرية والتقنية السريرية.',
                        tags: ['النقل', 'النظرية مقابل التقنية'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1920',
                        genKey: 'genPre',
                        title: 'دافع الموت وإجبار التكرار',
                        figures: 'فرويد',
                        desc: 'أعاد فرويد صياغة الصراع النفسي حول دوافع الحياة والموت، مفسراً نظرياً إطالة العلاجات. أصبح ما وراء علم النفس له الأولوية على التعديل التقني.',
                        tags: ['ما وراء النفس', 'نظرية الدوافع'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1921',
                        genKey: 'genPre',
                        title: '"التقنية النشطة" لفيرينتشي',
                        figures: 'فيرينتشي',
                        desc: 'اقترح زيادة نشاط المعالج — المواجهات والتعليمات — للتغلب على المقاومة. قوبل بسوء؛ أفضى إلى تهميش فيرينتشي تاريخياً. بيد أنه يُشكّل مبدأً نموذجياً للعلاج القصير.',
                        tags: ['التقنية النشطة', 'المقاومة'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1925',
                        genKey: 'genPre',
                        title: 'فيرينتشي وراَنك — التجربة بدلاً من إعادة البناء',
                        figures: 'فيرينتشي · أوتو رانك',
                        desc: 'التأكيد على إعادة الاختبار العاطفي في النقل بدلاً من إعادة البناء الشاملة للطفولة. نموذج تجريبي مبكر — أساس جميع المناهج القصيرة المستقبلية.',
                        tags: ['النموذج التجريبي', 'النقل'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '1941',
                        genKey: 'gen1',
                        title: 'أول مؤتمر للعلاج النفسي القصير',
                        figures: 'فرانز ألكساندر · شيكاغو',
                        desc: 'اعتراف مؤسسي رسمي بالمناهج العلاجية النفسية القصيرة. يمثل الانتقال من التحليلات القصيرة غير الرسمية إلى تخصص سريري معترف به.',
                        tags: ['المأسسة', 'المؤتمر'],
                        cls: 'gen-1'
                    },
                    {
                        year: '1946',
                        genKey: 'gen1',
                        title: 'التجربة العاطفية التصحيحية',
                        figures: 'فرانز ألكساندر · توماس فرنش',
                        desc: 'قدّم نشر <em>Psychoanalytic Therapy</em> الإطار المرن والموقف النشط للمعالج والتدخلات في الحياة الواقعية ومفهوم التجربة العاطفية التصحيحية — حجر الزاوية في الجيل الأول.',
                        tags: ['ت.ع.ت / CEE', 'إطار مرن', 'موقف نشط'],
                        cls: 'gen-1'
                    },
                    {
                        year: '1950s',
                        genKey: 'gen2',
                        title: 'بالينت ومجموعة تافيستوك',
                        figures: 'مايكل بالينت · ديفيد مالان',
                        desc: 'نظّم بالينت مجموعة علاج نفسي قصير في عيادة تافيستوك (1954)، درست 21 حالة على مدى أربع سنوات. نشر مالان النتائج عام 1963. رُسّخ مفهوم <em>التركيز العلاجي</em>.',
                        tags: ['التركيز العلاجي', 'تافيستوك', 'البحث'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1947',
                        genKey: 'genLatam',
                        title: 'أمريكا اللاتينية — الأرجنتين',
                        figures: 'بوينس أيريس · كيسيلمان · فيوريني · برايير',
                        desc: 'استضافت بوينس أيريس ندوة حول العلاج النفسي القصير (1947). تبعتها مساهمات أرجنتينية بارزة: كيسيلمان (1970) وفيوريني (1973) وبرايير (1984). تأثير بريطاني/تافيستوكي قوي.',
                        tags: ['الأرجنتين', 'بوينس أيريس', 'تأثير تافيستوك'],
                        cls: 'gen-latam'
                    },
                    {
                        year: '1958–72',
                        genKey: 'gen2',
                        title: 'سيفنيوس و STAPP',
                        figures: 'بيتر سيفنيوس',
                        desc: 'أول مقال حول العلاج النفسي القصير (1958)، يليه <em>Short-Term Anxiety-Provoking Psychotherapy</em> (1972). يتميز بانتقاء صارم للمرضى و12–18 جلسة وتقنية مواجهة نشطة.',
                        tags: ['STAPP', 'المواجهة', 'انتقاء المرضى'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1970s',
                        genKey: 'gen2',
                        title: 'التوسع والتنويع',
                        figures: 'مان · فيوريني · بالينت وآخرون · داڤانلو',
                        desc: 'عقد من الإصدارات البارزة: <em>Time-Limited Psychotherapy</em> لمان (1973)، وفيوريني (1973)، و<em>Focal Psychotherapy</em> لبالينت (1975)، والعلاج الديناميكي القصير المكثف لداڤانلو (1980).',
                        tags: ['محدود زمنياً', 'العلاج البؤري', 'ISTDP'],
                        cls: 'gen-2'
                    },
                    {
                        year: '1980s–90s',
                        genKey: 'genLatam',
                        title: 'أمريكا اللاتينية — البرازيل',
                        figures: 'ليمغروبر · كنوبيل · يوشيدا · كاراكوشانسكي · لوينكرون',
                        desc: 'تبرز البرازيل كمركز نشط: ليمغروبر (1984)، كنوبيل (1986)، يوشيدا وكاراكوشانسكي (1990)، لوينكرون (1993). تصبح البلاد مركزاً للإنتاج السريري والبحث التجريبي.',
                        tags: ['البرازيل', 'الإنتاج السريري', 'البحث'],
                        cls: 'gen-latam'
                    },
                    {
                        year: '1980s',
                        genKey: 'gen3',
                        title: 'الدلائل والتحقق التجريبي',
                        figures: 'لوبورسكي · ستروب وبيندر · سيفنيوس',
                        desc: 'تطوير أدلة العلاج (لوبورسكي؛ ستروب وبيندر). أدخل سيفنيوس تسجيل الفيديو للإشراف. بدأت مجموعات البحث (مثل مستشفى بيث إسرائيل) التحقق التجريبي.',
                        tags: ['الدلائل العلاجية', 'مبني على أدلة', 'تسجيل الفيديو'],
                        cls: 'gen-3'
                    },
                    {
                        year: '1994',
                        genKey: 'gen3',
                        title: 'دراسة Consumer Reports',
                        figures: 'سيليغمان · Consumer Reports',
                        desc: 'لم تجد الدراسة الواسعة فروقاً جوهرية في النتائج بين الطرق العلاجية. يتنبأ التفاعل النشط للمريض بنتائج أفضل؛ قيود التأمين تسوئها. تبرز الدراسة استقلالية المريض والقيود الهيكلية.',
                        tags: ['بحث النتائج', 'استقلالية المريض', 'سياسات الصحة'],
                        cls: 'gen-3'
                    },
                    {
                        year: '1990s',
                        genKey: 'gen4',
                        title: 'النموذج المتكامل للدماغ والعقل',
                        figures: 'فيرا ليمغروبر',
                        desc: 'يدمج الجيل الرابع، المقترح صراحةً من ليمغروبر، تقنية PET scan والأدلة العصبية. يثبت أن العلاج النفسي يغيّر الكيمياء العصبية. يتفوق الجمع بين العلاج النفسي والدوائي.',
                        tags: ['علم الأعصاب', 'PET Scan', 'الدماغ والعقل', 'العلاج الدوائي'],
                        cls: 'gen-4'
                    },
                ]
            },
            fa: {
                flag: '🇮🇷',
                code: 'FA',
                dir: 'rtl',
                label: 'تاریخ روان‌درمانی · ۱۹۰۰–۱۹۹۷',
                title: 'روان‌درمانی <em>کوتاه‌مدت</em><br>یک جدول زمانی تاریخی',
                subtitle: 'از عملکرد اولیه فرویدی تا مدل یکپارچه مغز–ذهن',
                metaSources: 'منابع',
                metaSpan: 'دوره',
                metaGen: 'نسل‌ها',
                metaGenVal: 'چهار + آمریکای لاتین',
                genPre: 'پیش از نهادینه‌سازی',
                gen1: 'نسل اول',
                gen2: 'نسل دوم',
                gen3: 'نسل سوم',
                gen4: 'نسل چهارم',
                genLatam: 'آمریکای لاتین',
                themeLight: 'روشن',
                themeDark: 'تاریک',
                popupTitle: 'زبان را انتخاب کنید',
                arcTitle: 'قوس تاریخی',
                arc: ['درمان کوتاه‌مدت از درون روانکاوی ظهور می‌کند', 'فرنتسی پیشگام فنی بنیادین است',
                    'الکساندر به کاتالیزور نهادی تبدیل می‌شود', 'بالینت و مالان تمرکز درمانی را نظام‌مند می‌کنند',
                    'سیفنیوس و داوانلو رویکردهای رویارویانه را توسعه می‌دهند',
                    'آمریکای لاتین — آرژانتین و برزیل — منطقه توسعه اصلی است',
                    'لمگروبر روان‌درمانی و علوم اعصاب را پیوند می‌دهد',
                    'نسل چهارم به درمان یکپارچه مغز–ذهن دست می‌یابد'
                ],
                eras: [{
                        year: '۱۹۰۰–۱۰',
                        genKey: 'genPre',
                        title: 'فروید اولیه — درمان‌های کوتاه',
                        figures: 'زیگموند فروید',
                        desc: 'روانکاوی در ابتدا به شکل‌های کوتاه‌مدت اجرا می‌شد. فروید برونو والتر را در شش جلسه (۱۹۰۶) و گوستاو مالر را در چهار ساعت (۱۹۰۸) درمان کرد. تاریخ‌های پایان‌بندی تعیین کرد و نظارت بر پرونده «هانس کوچولو» را از طریق پدر انجام داد.',
                        tags: ['ریشه بالینی', 'تحلیل کوتاه'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '۱۹۱۴–۱۶',
                        genKey: 'genPre',
                        title: 'تحلیل‌های فرنتسی با فروید',
                        figures: 'سندور فرنتسی',
                        desc: 'دو تحلیل شخصی با فروید، هر کدام فقط سه هفته. فرنتسی بعداً فروید را به خاطر عدم تحلیل انتقال منفی انتقاد می‌کند — تنشی اولیه بین نظریه و تکنیک بالینی.',
                        tags: ['انتقال', 'نظریه در برابر تکنیک'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '۱۹۲۰',
                        genKey: 'genPre',
                        title: 'غریزه مرگ و اجبار تکرار',
                        figures: 'فروید',
                        desc: 'فروید تعارض روانی را حول غرایز زندگی و مرگ باز تعریف کرد و طولانی شدن درمان را به صورت نظری توضیح داد. متاروانشناسی بر تعدیل فنی اولویت یافت.',
                        tags: ['متاروانشناسی', 'نظریه غریزه'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '۱۹۲۱',
                        genKey: 'genPre',
                        title: '«تکنیک فعال» فرنتسی',
                        figures: 'فرنتسی',
                        desc: 'پیشنهاد افزایش فعالیت درمانگر — مواجهه‌ها و دستورالعمل‌ها — برای غلبه بر مقاومت. با استقبال بدی روبرو شد و به حاشیه‌رانی تاریخی فرنتسی انجامید. با این حال، یک اصل پیش‌نمونه درمان کوتاه است.',
                        tags: ['تکنیک فعال', 'مقاومت'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '۱۹۲۵',
                        genKey: 'genPre',
                        title: 'فرنتسی و رانک — تجربه به جای بازسازی',
                        figures: 'فرنتسی · اتو رانک',
                        desc: 'تأکید بر بازتجربه عاطفی در انتقال به جای بازسازی جامع دوران کودکی. یک مدل تجربی اولیه — پایه‌ی همه رویکردهای کوتاه آینده.',
                        tags: ['مدل تجربی', 'انتقال'],
                        cls: 'gen-pre'
                    },
                    {
                        year: '۱۹۴۱',
                        genKey: 'gen1',
                        title: 'اولین کنگره روان‌درمانی کوتاه',
                        figures: 'فرانز الکساندر · شیکاگو',
                        desc: 'شناخت رسمی نهادی از رویکردهای روان‌درمانی کوتاه‌مدت. نشانگر گذار از تحلیل‌های کوتاه غیررسمی به یک دیسیپلین بالینی شناخته‌شده است.',
                        tags: ['نهادینه‌سازی', 'کنگره'],
                        cls: 'gen-1'
                    },
                    {
                        year: '۱۹۴۶',
                        genKey: 'gen1',
                        title: 'تجربه عاطفی اصلاحی',
                        figures: 'فرانز الکساندر · توماس فرنچ',
                        desc: 'انتشار <em>Psychoanalytic Therapy</em> چارچوب انعطاف‌پذیر، موضع‌گیری فعال درمانگر، مداخلات در زندگی واقعی و مفهوم تجربه عاطفی اصلاحی (TEA) را معرفی کرد — سنگ بنای نسل اول.',
                        tags: ['TEA / CEE', 'چارچوب انعطاف‌پذیر', 'موضع فعال'],
                        cls: 'gen-1'
                    },
                    {
                        year: '۱۹۵۰s',
                        genKey: 'gen2',
                        title: 'بالینت و گروه تاویستاک',
                        figures: 'مایکل بالینت · دیوید مالان',
                        desc: 'بالینت یک گروه روان‌درمانی کوتاه در کلینیک تاویستاک (۱۹۵۴) سازماندهی کرد و ۲۱ مورد را در چهار سال مطالعه کرد. مالان نتایج را در ۱۹۶۳ منتشر کرد. مفهوم <em>تمرکز درمانی</em> تثبیت شد.',
                        tags: ['تمرکز درمانی', 'تاویستاک', 'پژوهش'],
                        cls: 'gen-2'
                    },
                    {
                        year: '۱۹۴۷',
                        genKey: 'genLatam',
                        title: 'آمریکای لاتین — آرژانتین',
                        figures: 'بوینوس‌آیرس · کسلمن · فیورینی · برایر',
                        desc: 'بوینوس‌آیرس میزبان یک سمینار درباره روان‌درمانی کوتاه (۱۹۴۷). مشارکت‌های برجسته آرژانتینی: کسلمن (۱۹۷۰)، فیورینی (۱۹۷۳) و برایر (۱۹۸۴). تأثیر قوی بریتانیایی/تاویستاکی.',
                        tags: ['آرژانتین', 'بوینوس‌آیرس', 'تأثیر تاویستاک'],
                        cls: 'gen-latam'
                    },
                    {
                        year: '۱۹۵۸–۷۲',
                        genKey: 'gen2',
                        title: 'سیفنیوس و STAPP',
                        figures: 'پیتر سیفنیوس',
                        desc: 'اولین مقاله درباره روان‌درمانی کوتاه (۱۹۵۸)، سپس <em>Short-Term Anxiety-Provoking Psychotherapy</em> (۱۹۷۲). با انتخاب دقیق بیمار، ۱۲–۱۸ جلسه و تکنیک مواجهه فعال مشخص می‌شود.',
                        tags: ['STAPP', 'مواجهه', 'انتخاب بیمار'],
                        cls: 'gen-2'
                    },
                    {
                        year: '۱۹۷۰s',
                        genKey: 'gen2',
                        title: 'گسترش و تنوع',
                        figures: 'مان · فیورینی · بالینت و همکاران · داوانلو',
                        desc: 'یک دهه انتشارات مهم: <em>Time-Limited Psychotherapy</em> مان (۱۹۷۳)، فیورینی (۱۹۷۳)، <em>Focal Psychotherapy</em> بالینت (۱۹۷۵) و روان‌درمانی پویای کوتاه فشرده داوانلو (۱۹۸۰).',
                        tags: ['محدود به زمان', 'درمان کانونی', 'ISTDP'],
                        cls: 'gen-2'
                    },
                    {
                        year: '۱۹۸۰s–۹۰s',
                        genKey: 'genLatam',
                        title: 'آمریکای لاتین — برزیل',
                        figures: 'لمگروبر · کنوبل · یوشیدا · کاراکوشانسکی · لوونکرون',
                        desc: 'برزیل به عنوان مرکز فعال ظهور می‌کند: لمگروبر (۱۹۸۴)، کنوبل (۱۹۸۶)، یوشیدا و کاراکوشانسکی (۱۹۹۰)، لوونکرون (۱۹۹۳). کشور به مرکز تولید بالینی و تحقیق تبدیل می‌شود.',
                        tags: ['برزیل', 'تولید بالینی', 'پژوهش'],
                        cls: 'gen-latam'
                    },
                    {
                        year: '۱۹۸۰s',
                        genKey: 'gen3',
                        title: 'راهنماسازی و اعتبارسنجی تجربی',
                        figures: 'لوبورسکی · استراپ و بایندر · سیفنیوس',
                        desc: 'راهنماهای درمانی توسعه یافتند (لوبورسکی؛ استراپ و بایندر). سیفنیوس ضبط ویدیویی را برای نظارت معرفی کرد. گروه‌های تحقیقاتی (مثلاً بیمارستان بث اسرائیل) اعتبارسنجی تجربی را آغاز کردند.',
                        tags: ['راهنماسازی', 'مبتنی بر شواهد', 'ضبط ویدیو'],
                        cls: 'gen-3'
                    },
                    {
                        year: '۱۹۹۴',
                        genKey: 'gen3',
                        title: 'مطالعه Consumer Reports',
                        figures: 'سلیگمن · Consumer Reports',
                        desc: 'مطالعه گسترده تفاوت‌های عمده‌ای در نتایج بین روش‌های درمانی پیدا نکرد. مشارکت فعال بیمار نتایج بهتری را پیش‌بینی می‌کند؛ محدودیت‌های بیمه نتایج را بدتر می‌کند.',
                        tags: ['پژوهش نتایج', 'استقلال بیمار', 'سیاست بهداشت'],
                        cls: 'gen-3'
                    },
                    {
                        year: '۱۹۹۰s',
                        genKey: 'gen4',
                        title: 'مدل یکپارچه مغز–ذهن',
                        figures: 'ورا لمگروبر',
                        desc: 'نسل چهارم، که صریحاً توسط لمگروبر پیشنهاد شد، فناوری PET scan و شواهد علوم اعصاب را یکپارچه می‌کند. ثابت شد که روان‌درمانی شیمی عصبی را تغییر می‌دهد. ترکیب روان‌درمانی و دارودرمانی برتری دارد.',
                        tags: ['علوم اعصاب', 'PET Scan', 'مغز–ذهن', 'دارودرمانی'],
                        cls: 'gen-4'
                    },
                ]
            }
        };

        // ── STATE ─────────────────────────────────────────────────────────────────────
        let currentLang = 'pt';
        let isLight = false;

        // ── RENDER ────────────────────────────────────────────────────────────────────
        function render() {
            const t = T[currentLang];
            const html = document.documentElement;

            // Direction
            html.setAttribute('dir', t.dir);
            html.setAttribute('lang', currentLang);

            // Controls
            document.getElementById('currentFlag').textContent = t.flag;
            document.getElementById('currentCode').textContent = t.code;
            document.getElementById('themeLabel').textContent = isLight ? t.themeDark : t.themeLight;
            document.getElementById('popupTitle').textContent = t.popupTitle;

            // i18n elements
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (t[key] !== undefined) el.innerHTML = t[key];
            });

            // Timeline
            const tl = document.getElementById('timeline');
            tl.innerHTML = t.eras.map((era, i) => `
    <div class="era ${era.cls}" style="transition-delay:${i*40}ms">
      <div class="era-header">
        <div class="era-year">${era.year}</div>
        <div class="era-node"><div class="node-dot"></div></div>
        <div class="era-body">
          <div class="era-title">${era.title}</div>
          <div class="era-gen">${t[era.genKey]}</div>
          <div class="era-figures">${era.figures}</div>
          <div class="era-desc">${era.desc}</div>
          <div class="era-tags">${era.tags.map(tag=>`<span class="tag">${tag}</span>`).join('')}</div>
        </div>
      </div>
    </div>
  `).join('');

            // Arc list
            document.getElementById('arcList').innerHTML = t.arc.map((item, i) =>
                `<li><span class="arc-num">0${i+1}</span>${item}</li>`
            ).join('');

            // RTL timeline line fix
            if (t.dir === 'rtl') {
                tl.style.setProperty('--tl-left', 'auto');
            }

            // Scroll observer
            const eras = tl.querySelectorAll('.era');
            const obs = new IntersectionObserver(entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) e.target.classList.add('visible');
                });
            }, {
                threshold: 0.08,
                rootMargin: '0px 0px -40px 0px'
            });
            eras.forEach(e => obs.observe(e));
        }

        // ── LANGUAGE POPUP ────────────────────────────────────────────────────────────
        function openLangPopup() {
            document.getElementById('langOverlay').classList.add('open');
            document.querySelectorAll('.lang-option').forEach(btn => {
                btn.classList.toggle('active', btn.id === `opt-${currentLang}`);
            });
        }

        function closeLangPopup() {
            document.getElementById('langOverlay').classList.remove('open');
        }

        function closeLangOnOverlay(e) {
            if (e.target === document.getElementById('langOverlay')) closeLangPopup();
        }

        function setLang(lang) {
            currentLang = lang;
            closeLangPopup();
            render();
        }

        // ── THEME ─────────────────────────────────────────────────────────────────────
        function toggleTheme() {
            isLight = !isLight;
            document.documentElement.classList.toggle('light', isLight);
            document.getElementById('themeLabel').textContent = isLight ? T[currentLang].themeDark : T[currentLang]
                .themeLight;
        }

        // ── INIT ──────────────────────────────────────────────────────────────────────
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeLangPopup();
        });
        render();