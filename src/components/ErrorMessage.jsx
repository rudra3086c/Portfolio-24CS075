function ErrorMessage({ message, onRetry }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        color: "red",
      }}
    >
      <h2>⚠️ Error</h2>
      <p>{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;