# MkDocs のテンプレート

導入しているプラグインやスクリプトの詳細は [こちら](docs/index.md) を参照してください。

## Docker の場合

コンテナを立ち上げることで、デバッグ用のサーバーが立ち上がります。
立ち上がると [http://localhost:18000](http://localhost:18000)
にアクセスできるようになります。

```
docker-compose up
```

ドキュメントをビルドする場合は以下のコマンドを使用します。
site フォルダにファイルが生成されます。

```
docker-compose run mkdocs build
```

## Python の場合

Python と MkDocs をインストールし、パスを通しておいてください。

* Python 3
* [MkDocs](https://www.mkdocs.org/)
* [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

以下のコマンドを打つことで、開発用サーバーが立ち上がります。

```
mkdocs serve
```

ドキュメントをビルドする場合は以下のコマンドを使用します。
site フォルダにファイルが生成されます。

```
mkdocs build
```

## index.html の扱い

直接ブラウザで開くなど、 デフォルトドキュメント（`/` へアクセスがあった場合、 `/index.html` を返してくれる）
を設定できない環境の場合は ` --no-directory-urls` オプションを使用してください。

```
mkdocs build --no-directory-urls
docker-compose run mkdocs build --no-directory-urls
```
