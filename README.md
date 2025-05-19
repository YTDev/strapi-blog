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
