export * from './Button';
export * from './Card';
export * from './CardSection';
export * from './Header';
export * from './Input';
export * from './Spinner';
export * from './Confirm';

{ /* export * di atas hanya penulisan singkat untuk dapat mengimport sekaligus
  mengeksport dari file-file tersebut. dengan syarat export default
  yang ada pada masing-masing file tersebut di hilangkan. dan diganti
  dengan misalkan =>
  export default Button; menjadi . . . . =>
  export { Button: Button }; atau . . .
  karena key dan nilainya sama maka bisa ditulis
  export { Button };
*/ } 

