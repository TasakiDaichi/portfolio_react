import type { Skill } from "./types";

const skillData: Skill[] = [
  {
    id: 1,
    name: 'Python',
    icon: 'mdi-language-python',
    color: 'yellow',
    description: '主に研究・バックエンド開発(AWS Lambda)で使用しています。',
    progress: 0,
    targetProgress: 75,
  },
  {
    id: 2,
    name: 'JavaScript',
    icon: 'mdi-language-javascript',
    color: 'orange',
    description: 'フロントエンド開発で使用しています。',
    progress: 0,
    targetProgress: 50,
  },
  {
    id: 3,
    name: 'Vue.js',
    icon: 'mdi-vuejs',
    color: 'green',
    description: 'コンポーネント指向でのフロント開発に取り組んでいます。',
    progress: 0,
    targetProgress: 50,
  },
  {
    id: 4,
    name: 'C#',
    icon: 'mdi-language-csharp',
    color: 'purple',
    description: 'Unityでの個人ゲーム開発を行っていました。作成したゲームはプロジェクトから確認できます。',
    progress: 0,
    targetProgress: 20,
  },
  {
    id: 5,
    name: 'AWS',
    icon: 'mdi-aws',
    color: 'blue',
    description: 'Cloudfront+S3を用いた静的サイト配信とAPIGateWay, Lambdaを用いたサーバレスバックエンドを持つ、モダンなウェブアプリケーションを構成しています。',
    progress: 0,
    targetProgress: 30
  },
  {
    id: 6,
    name: 'データベース関連',
    icon: 'mdi-database',
    color: 'red',
    description: 'リレーショナルDBの設計やMySQLでの操作を行っています。sqlの基本文法を習得したため、現在、複雑な操作ができるように勉強を進めています。',
    progress: 0,
    targetProgress: 35
  }
]

export default skillData;