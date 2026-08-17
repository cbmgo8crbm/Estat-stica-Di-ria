/* ============================================================
   ⚙️  CONFIGURAÇÃO GERAL — PAINEL DE COMANDO BOMBEIRO MILITAR
   ============================================================
   Edite este arquivo para personalizar o painel.
   O site se adapta automaticamente a qualquer mudança aqui.
   ============================================================ */

/* ------------------------------------------------------------
   🏷️  IDENTIDADE DO COMANDO
   ------------------------------------------------------------ */
const TITULO_COMANDO   = '8° COMANDO REGIONAL';   // Linha principal do cabeçalho
const SUBTITULO        = 'BOMBEIRO MILITAR';        // Linha secundária do cabeçalho
const NOME_CURTO       = '8º CRBM';                // Usado em botões e mensagens (ex: "Enviar ao 6º CRBM")

/* ------------------------------------------------------------
   🔗 GOOGLE APPS SCRIPT — API DA PLANILHA PRIVADA
   ------------------------------------------------------------ */
const SCRIPT_URL = 'https://script.google.com/a/*/macros/s/seu id/exec';
const API_TIMEOUT_MS = 20000;

/* ------------------------------------------------------------
   🏢  UNIDADES SUBORDINADAS
   Adicione, remova ou renomeie unidades aqui.
   Cada unidade precisa de:
     - nome  : nome completo exibido no painel
     - tipo  : tipo da unidade (aparece como subtítulo)
     - abrev : abreviação curta para gráficos
     - slug  : identificador único sem espaços/acentos (para URLs)

   Cores são atribuídas automaticamente na ordem abaixo.
   Para personalizar cores, adicione "cor: '#HEX'" em cada item.
   ------------------------------------------------------------ */
const CONFIG_UNIDADES = [
    {
        nome:  '11º BBM - Porangatu',
        tipo:  'Batalhão de Bombeiros Militar',
        abrev: '11º BBM',
        slug:  '11bbm'
    },
    {
        nome:  '18º BBM - Goianésia',
        tipo:  'Batalhão de Bombeiros Militar',
        abrev: '18º BBM',
        slug:  '18bbm'
    },
    {
        nome:  '1ª CIBM - Minaçu',
        tipo:  'Companhia Independente de Bombeiros Militar',
        abrev: '1ª CIBM',
        slug:  '1cibm'
    },
    {
        nome:  '6ª CIBM - Niquelândia',
        tipo:  'Companhia Independente de Bombeiros Militar',
        abrev: '6ª CIBM',
        slug:  '6cibm'
    },
    {
        nome:  '11ª CIBM - Uruaçu',
        tipo:  'Companhia Independente de Bombeiros Militar',
        abrev: '11ª CIBM',
        slug:  '11cibm'
    },
    {
        nome:  '22ª CIBM - São Miguel do Araguaia',
        tipo:  'Companhia Independente de Bombeiros Militar',
        abrev: '22ª CIBM',
        slug:  '22cibm'
    },
{
        nome:  'DBM - Barro Alto (18º BBM)',
        tipo:  'Destacamento de Bombeiros Militar — 18º BBM',
        abrev: 'DBM B.Alto',
        slug:  'B.Alto'
    }
];

/* ============================================================
   ⚠️  NÃO EDITE ABAIXO DESTA LINHA
   O código abaixo transforma CONFIG_UNIDADES no formato
   interno usado pelo painel. Qualquer alteração pode
   quebrar o funcionamento do site.
   ============================================================ */
const _CORES_PADRAO = [
    '#1e5fa5','#fb8c00','#28a745','#d85a30','#888780',
    '#6a1fb5','#e91e63','#00897b','#f4511e','#546e7a'
];

const unidades = CONFIG_UNIDADES.map((u, i) => ({
    id:   i + 1,
    nome: u.nome,
    tipo: u.tipo
}));

const coresUnidades  = CONFIG_UNIDADES.map((u, i) => u.cor || _CORES_PADRAO[i % _CORES_PADRAO.length]);
const nomesUnidades  = CONFIG_UNIDADES.map(u => u.abrev || u.nome);
const nomesAbrev     = CONFIG_UNIDADES.map(u => u.slug  || u.abrev || u.nome);
const slugsUnidades  = CONFIG_UNIDADES.map(u => u.slug);
