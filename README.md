# react-use-responsive

> React hook for responsive design

[![NPM](https://img.shields.io/npm/v/react-use-responsive.svg)](https://www.npmjs.com/package/react-use-responsive) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-responsive
```
```bash
yarn add react-use-responsive
```

## Usage

```jsx
import { useResponsive } from 'react-use-responsive'

const Example = () => {
    const { width, screenSize } = useResponsive

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
import { useResponsive } from 'react-use-responsive'

const Example = () => {
    const { defineBreakpoints } = useResponsive
    
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
