# Honest Angular

学习一下 Angular

### 生成子路由模块

我现在的模块目录是这样的

```bash
src/app/modules
├── post
│   ├── components
│   │   ├── post-details
│   │   │   ├── post-details.component.css
│   │   │   ├── post-details.component.html
│   │   │   ├── post-details.component.spec.ts
│   │   │   └── post-details.component.ts
│   │   └── post-item
│   │       ├── post-item.component.css
│   │       ├── post-item.component.html
│   │       ├── post-item.component.spec.ts
│   │       └── post-item.component.ts
│   ├── model
│   │   └── post.model.ts
│   ├── post-routing.module.ts
│   ├── post.component.css
│   ├── post.component.html
│   ├── post.component.spec.ts
│   ├── post.component.ts
│   ├── post.module.ts
│   ├── post.ts
│   └── services
│       ├── post.service.spec.ts
│       └── post.service.ts
└── user
    ├── components
    │   └── register
    │       ├── register.component.css
    │       ├── register.component.html
    │       ├── register.component.spec.ts
    │       └── register.component.ts
    └── user.module.ts
```

现在我想生成一个管理用户的路由，把它放在 user 这个目录下，可以像这样：

```bash
ng g module modules/user/user-routing --module user --flat
```
