// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <NxWelcome title="app" />
      <div className={styles['image-bg']} />
      <div />
    </>
  );
}

export default App;
