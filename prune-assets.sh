#!/bin/sh

# private なサイトの場合は不要
# rm -f ./site/sitemap.xml
# rm -f ./site/sitemap.xml.gz

find ./site/ \
  -name *.map \
  -delete

find ./site/assets/javascripts/lunr/min/ \
  -name lunr.??.min.js \
  ! -name lunr.ja.min.js \
  ! -name lunr.jp.min.js \
  -delete

grep -rlw -e 'sourceMappingURL' ./site/ \
  | xargs sed -i -e '/^.*sourceMappingURL.*$/d'
