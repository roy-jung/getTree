# get Tree

`app/**/*.*` app폴더 내의 모든 폴더를 트리구조로 나열하고,
각 폴더 내부의 모든 파일들에 대한 상대경로를 hyper-link로 연결한
html 파일을 반환해줍니다.

###설치
```cmd
> git clone
> npm install
```

###사용법
```
> gulp tree       => 모든 파일에 대한 트리구조
> gulp tree-js    => 확장자가 js인 파일들에 대한 트리구조
```

### 생성파일
생성된 파일은 프로젝트의 root 폴더에 `tree-all.html` 혹은 `tree-js.html`로 저장됩니다.

| file tree | html result |
|---|---|
|![file tree](readme_img/tree.png)|![html result](readme_img/html.png)|