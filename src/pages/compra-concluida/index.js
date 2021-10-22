export default function CompraEfetuada() {
  return (
    <div style={{ textAlign: "center", padding: 100 }}>
      <h1>
        Obrigado! <br /> Sua compra foi efetuada com sucesso!
      </h1>
      <a
        style={{
          backgroundColor: "#226699",
          padding: 10,
          color: "#ffffff",
          borderRadius: 5,
        }}
        href="http://localhost:3000/"
      >
        Comprar novamente
      </a>
    </div>
  );
}
