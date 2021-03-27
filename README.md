# use-responsive-react

> React hook for responsive design

[![NPM](https://img.shields.io/npm/v/use-responsive-react.svg)](https://www.npmjs.com/package/use-responsive-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Try the demo](https://maximegouin.github.io/use-responsive-react/)

## Install

```bash
npm install --save use-responsive-react
```
```bash
yarn add use-responsive-react
```

## Usage

```jsx
import { useResponsive } from 'use-responsive-react'

const Example = () => {
    const { width, screenSize } = useResponsive();

    return (
        <div>
            <h1>Render responsive</h1>
            // Get screenSize
            {screenSize === 'md'
                ? <MdComponent />
                : <LgComponent />
            }
            // Get Width
            {width < 800
                ? <MdComponent />
                : <LgComponent />
            }
        </div>
    )
}
```

## Documentation
| Props             | Type   | Desription                     |
|-------------------|--------|--------------------------------|
| width             | Int    | Screen width                   |
| height            | Int    | Screen height                  |
| orientation       | String | Screen orientation             |
| screenSize        | String | Largest screen size            |
| screenSizes       | Array  | All screen sizes               |
| defineBreakpoints | Func   | Define your custom breakpoints |
| breakpoints       | Shape  | Defined breakpoints            |

## Define your own breakpoints
```jsx
import { useResponsive } from 'use-responsive-react'

const Example = () => {
    const { defineBreakpoints } = useResponsive();
    
    defineBreakpoints({
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
    })
}
```
## License

MIT © [maximegouin](https://github.com/maximegouin)
