export default function wait(defer:number) {
  return new Promise<void>((res, rej) => {
    setTimeout(() => {
      res();
    }, defer);
  });
}
