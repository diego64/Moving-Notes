export function loadLists() {
    return [
      { 
        title: 'Aguardando resolução', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Importação do banco de dados SQL',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/dg@adorable.io.png'
          },
          {
            id: 2,
            content: 'Analise de dados do arquivo de exportação do banco de dados SQL',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/dg@adorable.io.png'
          },
          {
            id: 3,
            content: 'Alteração no registro do banco Oracle',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/dg@adorable.io.png'
          },
          {
            id: 4,
            content: 'Atualização da licença do Windows Server 2012"',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/dg@adorable.io.png'
          },
          {
            id: 5,
            content: 'Verificar o estado da migração dos bancos de homologação',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/dg@adorable.io.png'
          },
        ]
      },
      { 
        title: 'Em andamento', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Instalação do S.O Debian 10.2 no servição de backup',
            labels: [],
            user: 'https://api.adorable.io/avatars/285/dg@adorable.io.png'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Atualização do Firewall',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/dg@adorable.io.png'
          },
          {
            id: 8,
            content: 'Deploy ReactJS da paginiga inicial do site',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/dg@adorable.io.png'
          },
          {
            id: 9,
            content: 'Ajuste dos arquivos de backup',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Upgrade do arquivo de registro no banco de dados produção',
            labels: [],
          },
          {
            id: 12,
            content: 'Verificação de falhas do ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Instalação do novo servidor de produção"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }