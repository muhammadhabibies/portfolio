# my portfolio using web components

```bash
npx serve .
```

## yang bisa nembus shadow dom:

- css property apapun yang default value-nya "inherit" (ex: color, font-family, line-height, dll) (ga bener2 nembus sih tapi ya nempel ke :host element web component itu sendiri jadi seolah2 ya nempel)
- css variable dari scope global (:root)
- buat dari component keluar bisa pake csspart
