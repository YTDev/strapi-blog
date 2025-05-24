# CSS Container Queries

## Key Features of @container (used in card.module.sass)

- Allows responsive styles based on container size, not viewport
- Great for component-based design and reusable layouts
- Requires setting a container context using container-type

# React Compound Component Pattern

## Implementation Example

````jsx
Button.Icon = ({IconType}) => {...}
 What This Pattern Achieves
This is a proper implementation of the Compound Component pattern in React, where:

1. You have a main component ( Button )
2. You attach related sub-components to it as properties ( Button.Icon )
This pattern allows for a clean, intuitive API when using the components:

```jsx
< Button href = "/about" >
    Click here < Button.Icon IconType = "ARROW_RIGHT" />
</ Button >
````

## Resources

- Tutorial Video: [Build a Blog with Next.js and Strapi](https://www.youtube.com/watch?v=NNWX2flw5mg&t=1332s)
- Related Strapi CMS Repository: [starpi-blog-cms-demo](https://github.com/YTDev/starpi-blog-cms-demo)

## generateStaticParams()

### Core Purpose:

- Used in Next.js for Static Site Generation (SSG)

### When to Use:

- When you have dynamic routes (`[slug].js`, `[id].js` etc.)

### Performance Benefits:

- Pages are pre-rendered as static HTML

### Implementation:

```javascript
// Must be async
// Must return array of objects matching route params
// Example for [slug].js:
export async function generateStaticParams() {
  return [{ slug: "post1" }, { slug: "post2" }];
}
```
