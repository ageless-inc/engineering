# Ageless Engineering

MkDocs Material で構築するエンジニアリングドキュメントサイトです。

## ローカルでの起動手順

```bash
# 1. 仮想環境を作成（初回のみ）
python3 -m venv .venv

# 2. 仮想環境を有効化
source .venv/bin/activate

# 3. 依存パッケージをインストール（初回のみ）
pip install -r requirements.txt

# 4. 開発サーバーを起動
mkdocs serve
```

起動後、ブラウザで http://localhost:8000 を開くとサイトが表示されます。
