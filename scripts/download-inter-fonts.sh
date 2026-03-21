#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# download-inter-fonts.sh
# Télécharge les fichiers woff2 Inter depuis jsDelivr (fontsource)
# et les place dans public/fonts/
#
# Usage (depuis la racine du projet) :
#   bash scripts/download-inter-fonts.sh
# ─────────────────────────────────────────────────────────────────────────────

set -e

FONTS_DIR="public/fonts"
BASE_URL="https://cdn.jsdelivr.net/npm/@fontsource/inter/files"

mkdir -p "$FONTS_DIR"
echo "📦 Téléchargement de Inter (woff2) depuis jsDelivr/fontsource..."

for weight in 400 500 600 700 800; do
  filename="inter-latin-${weight}-normal.woff2"
  dest="$FONTS_DIR/$filename"
  if [ -f "$dest" ]; then
    echo "  ✅ $filename déjà présent"
  else
    echo "  ⬇️  Téléchargement : $filename (weight $weight)"
    curl -fsSL "$BASE_URL/$filename" -o "$dest"
    echo "  ✅ $filename téléchargé"
  fi
done

echo ""
echo "✅ Polices Inter dans $FONTS_DIR/"
echo "   Le site n'envoie plus aucune requête vers Google — conforme RGPD."
