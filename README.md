# Ageless Engineering

MkDocs Material で構築するエンジニアリングドキュメントサイトです。

## セットアップと起動手順

依存パッケージは [uv](https://docs.astral.sh/uv/) で管理しています。`pyproject.toml` に直接の依存を記載し、`uv.lock` で固定（コミット対象）しています。

```bash
# 1. uv をインストール（初回のみ / 未導入の場合）
brew install uv

# 2. ロックファイルどおりに環境を同期（.venv を自動作成・再現）
uv sync

# 3. 開発サーバーを起動
uv run mkdocs serve
```

起動後、ブラウザで http://localhost:8000 を開くとサイトが表示されます。

## 依存パッケージの追加・更新

```bash
# パッケージを追加（pyproject.toml と uv.lock が更新される）
uv add <package>

# バージョンを上げ直してロックファイルを再生成
uv lock --upgrade

# pyproject.toml を手で編集した後にロックを反映
uv lock
```

`pyproject.toml` と `uv.lock` の変更は必ずセットでコミットしてください。
