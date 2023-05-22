export function Button() {
  const gentlemen = "0 gentlemen pointing at you";
  const select = "Select All";

  return (
    <>
      <section className="controls">
        <p className="info">{gentlemen}</p>
        <button className="button button--select">{select}</button>
      </section>
    </>
  );
}
