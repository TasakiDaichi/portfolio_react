import type { News } from "./types";

const newsData: News[] = [
    {
        id: 1,
        date: "2025-10-16",
        category: ["お知らせ"],
        description: "新機能「News」を実装しました。今後のお知らせはこちらに順次記載していきます。",
    },
    {
        id: 2,
        date: "2025-10-16",
        category: ["お知らせ"],
        description: "ポートフォリオページの開発環境をVueからReact+TSに変更しました。その為、今後のバージョンアップはこちらのページでのみ行います。",
    },
];

export default newsData;