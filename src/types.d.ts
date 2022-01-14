declare module "*.png" {
    const value: string;
    export default value;
}
declare module '*.module.css' {
    const value: {[key: string]: string};
    export default value;
  }