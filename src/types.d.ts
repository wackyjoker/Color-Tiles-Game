declare module '*.png' {
    const value: string;
    export default value;
}
declare module '*.module.css' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }