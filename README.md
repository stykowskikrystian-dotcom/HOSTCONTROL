# HostControl

Strona agencji HostControl przygotowana jako statyczny projekt gotowy do wdrożenia na Vercel.

## Wdrożenie z GitHub

1. W Vercel wybierz **Add New Project** i wskaż to repozytorium.
2. Nie zmieniaj ustawień komendy budowania ani katalogu wynikowego.
3. Uruchom wdrożenie.

Konfiguracja w `vercel.json` wskazuje katalog `dist` jako gotową stronę produkcyjną.

## Struktura

- `dist/index.html` — strona główna
- `dist/assets/` — grafiki, filmy, style i skrypty
- `dist/uslugi/` — podstrony usług
- `vercel.json` — konfiguracja wdrożenia Vercel
