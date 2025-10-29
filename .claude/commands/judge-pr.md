---
description: PRをレビューして、合格ならマージする
---
target_pr = $ARGUMENTS
target_prが指定されていない場合は、現在のブランチのPRを使用する。

まず、対象のPRのGithubステータスを確認する。ステータスが"success"でない場合は、エラーを出して終了する。
次に以下を並列で実行する:

- code-reviewer サブエージェントを呼び出し、$target_pr のコード変更をレビューする
- sercurity-reviewer サブエージェントを呼び出し、$target_pr のセキュリティ上の問題をレビューする

各サブエージェントからの実行結果を統合してレポートする。
そして、コード変更に問題がなければ、pr-mergerさぶえージェンをを呼び出してPRをマージする。