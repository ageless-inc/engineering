# Ageless Engineering

[MkDocs Material](https://squidfunk.github.io/mkdocs-material/) で構築する、株式会社エイジレスのエンジニアリングドキュメントサイトです。

🌐 公開サイト: <https://ageless-inc.github.io/engineering/>

## 必要環境

- Python 3.12 以上
- [uv](https://docs.astral.sh/uv/)（依存・仮想環境の管理に使用）

依存パッケージは `pyproject.toml` に直接の依存を記載し、`uv.lock` でバージョンを固定（コミット対象）しています。

## セットアップと起動手順

```bash
# 1. uv をインストール（初回のみ / 未導入の場合）
brew install uv

# 2. ロックファイルどおりに環境を同期（.venv を自動作成・再現）
uv sync

# 3. 開発サーバーを起動
uv run mkdocs serve
```

起動後、ブラウザで <http://localhost:8000> を開くとサイトが表示されます。ファイルを保存すると自動でリロードされます。

## ページの追加・編集

1. `docs/` 配下に Markdown ファイルを追加（または既存ファイルを編集）します。
2. `mkdocs.yml` の `nav:` にエントリを追記して、ナビゲーションに表示します。

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

## デプロイ

`production` ブランチへの push を契機に、[GitHub Actions](.github/workflows/deploy.yml) が自動でビルドし、GitHub Pages（`gh-pages` ブランチ）へ公開します。GitHub Actions タブから手動実行（`workflow_dispatch`）も可能です。

通常の開発は `develop` ブランチで行い、公開する内容がまとまったら `production` へ反映してください。
